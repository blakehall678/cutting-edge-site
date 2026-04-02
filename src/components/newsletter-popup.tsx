"use client";

import { useEffect, useState } from "react";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter-dismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  function closePopup() {
    setIsOpen(false);
    localStorage.setItem("newsletter-dismissed", "true");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Thanks! We’ll keep you updated.");
        setEmail("");
        localStorage.setItem("newsletter-dismissed", "true");
        setTimeout(() => setIsOpen(false), 1200);
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "720px",
          background: "#f3f3f3",
          color: "#000000",
          borderRadius: "24px",
          padding: "40px 36px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          textAlign: "left",
        }}
      >
        <button
          onClick={closePopup}
          aria-label="Close popup"
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "transparent",
            border: "none",
            fontSize: "48px",
            lineHeight: 1,
            color: "#000000",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#000000",
            maxWidth: "560px",
          }}
        >
          Sign up to hear when we launch!
        </h2>

        <p
          style={{
            marginTop: "24px",
            marginBottom: "0",
            fontSize: "1.4rem",
            lineHeight: 1.5,
            color: "#111",
          }}
        >
          Get updates on development, launch timing, and product news.
        </p>

        <p
          style={{
            marginTop: "18px",
            marginBottom: "0",
            fontSize: "1.4rem",
            lineHeight: 1.5,
            fontWeight: 500,
            color: "#111",
          }}
        >
          Stay up to date on all things The Cutting Edge.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: "18px",
              border: "2px solid #000000",
              background: "transparent",
              color: "#000000",
              fontSize: "1.5rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: "18px",
              border: "none",
              background: "#000000",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>

        <p
          style={{
            marginTop: "28px",
            marginBottom: 0,
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#000000",
            maxWidth: "620px",
          }}
        >
          By subscribing you agree to receive marketing communications from us.
          To opt out, click unsubscribe at the bottom of our emails.
        </p>

        {status && (
          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "1rem",
              color: "#5c6270",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}