import { Reveal } from "@/components/reveal";

export function Shipping() {
  return (
    <section className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Shipping & preorder details
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              We’re starting with a limited first run. Here’s what to expect from
              pre-order through delivery.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">PRICE</div>
              <div className="mt-4 text-2xl font-medium">$100</div>
              <p className="mt-3 text-white/70">
                Launch pre-order pricing for the first production run.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">SHIPPING</div>
              <div className="mt-4 text-2xl font-medium">United States only</div>
              <p className="mt-3 text-white/70">
                We currently ship within the US. International shipping will be
                added later.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">FIRST RUN</div>
              <div className="mt-4 text-2xl font-medium">Limited quantity</div>
              <p className="mt-3 text-white/70">
                We’re beginning with a small first batch (target: 500 units). Once
                it’s filled, pre-orders will close until the next run.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">SUPPORT</div>
              <div className="mt-4 text-2xl font-medium">We’re here to help</div>
              <p className="mt-3 text-white/70">
                Questions about fit, compatibility, or pre-orders? Email{" "}
                <a
                  className="text-white underline underline-offset-4"
                  href="mailto:hello@findthecuttingedge.com"
                >
                  hello@findthecuttingedge.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="text-white/60 text-sm tracking-widest">WHAT HAPPENS NEXT</div>
            <ol className="mt-6 space-y-3 text-white/70">
              <li>1. Place your pre-order in Stripe checkout (test mode for now).</li>
              <li>2. We’ll send production updates as we ramp the first run.</li>
              <li>3. Once ready, your order ships to your US address.</li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
