"use client";

import { useEffect, useState } from "react";

type Status = "success" | "canceled" | null;

export function CheckoutStatus() {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "1") setStatus("success");
    if (params.get("canceled") === "1") setStatus("canceled");
  }, []);

  if (!status) return null;

  const title = status === "success" ? "Pre-order confirmed" : "Checkout canceled";
  const message =
    status === "success"
      ? "You’re all set. You’ll receive updates by email."
      : "No worries — you can try again anytime.";

  const close = () => {
    setStatus(null);
    window.history.replaceState({}, "", window.location.pathname);
  };

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center px-6">
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/80 text-white shadow-2xl backdrop-blur-xl">
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm tracking-widest text-white/60">
                {status === "success" ? "SUCCESS" : "CANCELED"}
              </div>
              <h3 className="mt-2 text-xl font-medium">{title}</h3>
            </div>

            <button
              onClick={close}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 hover:text-white hover:border-white/30 transition"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-white/70">{message}</p>

          <div className="mt-6 flex items-center justify-end">
            <button
              onClick={close}
              className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
