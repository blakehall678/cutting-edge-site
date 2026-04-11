"use client";

import { useState } from "react";

export function UpdatesSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

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
        setStatus("Thanks! You’re on the list.");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
  }

  return (
    <section
      id="updates"
      className="bg-black text-white px-6 py-20 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
          
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Get updates on our progress
        </h2>

        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
          Join the list to be
         the first to hear about development updates, launch timing, and when
          orders open.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/40"
          />

          <button
            type="submit"
            className="rounded-xl bg-white px-6 py-4 font-semibold text-black hover:opacity-90 transition"
          >
            Get Updates
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-white/65">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}