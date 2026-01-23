import { Reveal } from "@/components/reveal";

export function Technical() {
  return (
    <section className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-32 grid lg:grid-cols-2 gap-16">
        {/* Sticky spec panel */}
        <div className="lg:sticky lg:top-28 h-fit rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="text-white/60 text-sm tracking-widest">TECHNICAL</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Precision engineered cleaning.
          </h2>

          <div className="mt-8 space-y-4 text-sm text-white/70">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Activation</span>
              <span className="text-white/90">IR sensor</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Cleaning</span>
              <span className="text-white/90">Multi-jet rinse</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Use</span>
              <span className="text-white/90">During shaving</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Compatibility</span>
              <span className="text-white/90">Most razors</span>
            </div>
          </div>
        </div>

        {/* Scrolling technical callouts */}
        <div className="space-y-28">
          <Reveal>
            <div>
              <h3 className="text-2xl font-medium">IR sensor activation</h3>
              <p className="mt-3 text-white/70">
                Insert the razor head and the device detects it instantly—no buttons,
                no extra steps.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-2xl font-medium">Targeted jet geometry</h3>
              <p className="mt-3 text-white/70">
                Concentrated water flow hits the blade area directly to remove debris
                and hair efficiently.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-2xl font-medium">Cleaner blade between passes</h3>
              <p className="mt-3 text-white/70">
                A cleaner razor helps maintain a consistent shave experience—especially
                on repeated passes.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-2xl font-medium">Built for everyday use</h3>
              <p className="mt-3 text-white/70">
                Designed as a bathroom appliance that fits seamlessly into your daily routine.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
