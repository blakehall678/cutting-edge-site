"use client";

import { useState } from "react";

export function Preorder() {
  const [loading, setLoading] = useState(false);

  async function goToCheckout() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity: 1 }),
    });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <section id="preorder" className="bg-black text-white py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Pre-order</h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Test checkout is enabled. This will not charge real money.
        </p>

        <button
          onClick={goToCheckout}
          disabled={loading}
          className="mt-10 rounded-full bg-white text-black px-6 py-3 font-medium disabled:opacity-60"
        >
          {loading ? "Redirecting…" : "Pre-order for $100 (TEST)"}
        </button>
      </div>
    </section>
  );
}
