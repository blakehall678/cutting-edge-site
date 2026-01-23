export function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-black text-white py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          How it works
        </h2>

        <p className="mt-4 text-white/70 max-w-2xl">
          A seamless, touch-free cleaning cycle designed to keep your razor
          cleaner while you shave.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <div className="text-white/50 text-sm tracking-widest">01</div>
            <h3 className="mt-3 text-lg font-medium">Insert the razor head</h3>
            <p className="mt-2 text-white/70 text-sm">
              Slide the razor head into the opening for a secure, consistent
              position.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <div className="text-white/50 text-sm tracking-widest">02</div>
            <h3 className="mt-3 text-lg font-medium">Sensor detects instantly</h3>
            <p className="mt-2 text-white/70 text-sm">
              An IR sensor detects your razor and triggers the cleaning cycle automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <div className="text-white/50 text-sm tracking-widest">03</div>
            <h3 className="mt-3 text-lg font-medium">Jets clean debris fast</h3>
            <p className="mt-2 text-white/70 text-sm">
              Multiple water jets concentrate flow directly onto the blade to clear hair and residue.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <div className="text-white/50 text-sm tracking-widest">04</div>
            <h3 className="mt-3 text-lg font-medium">Continue shaving</h3>
            <p className="mt-2 text-white/70 text-sm">
              A cleaner razor is ready for the next pass—no countertop tapping, no wasted time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
