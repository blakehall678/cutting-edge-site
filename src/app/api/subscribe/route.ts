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

    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
        "X-API-Version": "2026-04-01",
      },
      body: JSON.stringify({
        email_address: cleanedEmail,
        tags: ["launch-popup"],
      }),
    });

    if (!response.ok) {
      let errorMessage = "Failed to subscribe.";

      try {
        const errorData = await response.json();
        errorMessage =
          errorData?.detail ||
          errorData?.error ||
          errorMessage;
      } catch {
        const errorText = await response.text();
        if (errorText) errorMessage = errorText;
      }

      if (
        response.status === 400 ||
        response.status === 409 ||
        errorMessage.toLowerCase().includes("already")
      ) {
        return NextResponse.json(
          { error: "This email is already subscribed or already exists." },
          { status: response.status }
        );
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks! Check your inbox to confirm your subscription.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}