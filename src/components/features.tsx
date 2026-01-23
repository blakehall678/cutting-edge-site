import { Reveal } from "@/components/reveal";
import { Droplets, Zap, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section
      id="features"
      className="bg-black text-white py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Designed to clean better.
        </h2>

        <p className="mt-4 text-white/70 max-w-2xl">
          The Cutting Edge is engineered to keep your razor cleaner during every
          shave using precision hardware and smart automation.
        </p>

<div className="mt-16 grid md:grid-cols-3 gap-8">
  <Reveal delay={0.05}>
    <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
      <Droplets className="h-8 w-8 text-white/80" />
      <h3 className="mt-6 text-lg font-medium">Precision water jets</h3>
      <p className="mt-2 text-white/70 text-sm">
        Concentrated jets blast away hair and debris without wasting water.
      </p>
    </div>
  </Reveal>

  <Reveal delay={0.12}>
    <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
      <Zap className="h-8 w-8 text-white/80" />
      <h3 className="mt-6 text-lg font-medium">Automatic sensor activation</h3>
      <p className="mt-2 text-white/70 text-sm">
        Insert your razor and the device activates instantly — no buttons.
      </p>
    </div>
  </Reveal>

  <Reveal delay={0.30}>
    <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
      <Sparkles className="h-8 w-8 text-white/80" />
      <h3 className="mt-6 text-lg font-medium">Cleaner razor, longer life</h3>
      <p className="mt-2 text-white/70 text-sm">
        Reduce blade wear caused by tapping and extend the life of your razor.
      </p>
    </div>
  </Reveal>
        </div>
      </div>
    </section>
  );
}
