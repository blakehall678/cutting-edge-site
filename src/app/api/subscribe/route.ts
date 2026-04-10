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
      },
      body: JSON.stringify({
        email_address: cleanedEmail,
        tags: ["launch-popup"],
        type: "regular",
        ...(ipAddress ? { ip_address: ipAddress } : {}),
      }),
    });

    if (!response.ok) {
      let errorMessage = "Failed to subscribe.";

      try {
        const errorData = await response.json();
        errorMessage = errorData?.detail || errorData?.error || errorMessage;
      } catch {
        const errorText = await response.text();
        if (errorText) errorMessage = errorText;
      }

      const lowered = errorMessage.toLowerCase();

      if (
        response.status === 400 ||
        response.status === 409 ||
        lowered.includes("already") ||
        lowered.includes("exists")
      ) {
        return NextResponse.json({
          success: true,
          alreadyOnList: true,
          message: "You're already on the list — welcome back!",
        });
      }

      return NextResponse.json(
        { error: errorMessage },
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