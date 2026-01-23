import { Reveal } from "@/components/reveal";

export function Comparison() {
  return (
    <section className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              A cleaner razor. Without the mess.
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              Stop tapping your razor on the sink. Clean debris faster with targeted jets
              designed to reach where water normally doesn’t.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">WITHOUT</div>
              <h3 className="mt-4 text-2xl font-medium">Tap. Rinse. Repeat.</h3>
              <ul className="mt-6 space-y-3 text-white/70">
                <li>• Hair and debris stay trapped in the blades</li>
                <li>• Wasted water from broad rinsing</li>
                <li>• Tapping on surfaces can wear blades faster</li>
                <li>• More time between passes</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="text-white/60 text-sm tracking-widest">WITH</div>
              <h3 className="mt-4 text-2xl font-medium">Insert. Clean. Continue.</h3>
              <ul className="mt-6 space-y-3 text-white/70">
                <li>• Precision jets clear debris quickly</li>
                <li>• Concentrated flow saves time and water</li>
                <li>• Less blade wear from tapping</li>
                <li>• Cleaner razor for the next pass</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
