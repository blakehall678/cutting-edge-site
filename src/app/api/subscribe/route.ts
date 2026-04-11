import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (!process.env.BUTTONDOWN_API_KEY) {
      return NextResponse.json(
        { error: "Missing Buttondown API key." },
        { status: 500 }
      );
    }

    const cleanedEmail = email.trim().toLowerCase();

    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ipAddress =
      forwardedFor?.split(",")[0]?.trim() ||
      realIp?.trim() ||
      undefined;

    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
        "X-API-Version": "2026-04-01",
        "X-Buttondown-Collision-Behavior": "overwrite",
        "X-Buttondown-Bypass-Firewall": "true",
      },
      body: JSON.stringify({
        email_address: cleanedEmail,
        tags: ["launch-popup"],
        type: "regular",
        ...(ipAddress ? { ip_address: ipAddress } : {}),
      }),
    });

    const responseText = await response.text();

    let errorMessage = "Failed to subscribe.";
    let errorCode = "";

    if (responseText) {
      try {
        const errorData = JSON.parse(responseText);
        errorMessage =
          errorData?.detail ||
          errorData?.error ||
          errorMessage;
        errorCode = errorData?.code || "";
      } catch {
        errorMessage = responseText;
      }
    }

    if (!response.ok) {
      const lowered = errorMessage.toLowerCase();
      const loweredCode = errorCode.toLowerCase();

      const isDuplicate =
        response.status === 409 ||
        lowered.includes("already exists") ||
        lowered.includes("already subscribed") ||
        lowered.includes("already on the list") ||
        loweredCode.includes("already") ||
        loweredCode.includes("exists") ||
        loweredCode.includes("collision");

      if (isDuplicate) {
        return NextResponse.json({
          success: true,
          alreadyOnList: true,
          message: "You're already on the list — welcome back!",
        });
      }

      return NextResponse.json(
        { error: errorMessage || "Failed to subscribe." },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      alreadyOnList: false,
      message: "Welcome to the Cutting Edge family!",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}