export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Insert the razor head",
      description:
        "Slide the razor head into the opening for a secure, consistent position.",
    },
    {
      number: "02",
      title: "Sensor detects instantly",
      description:
        "An IR sensor detects your razor and triggers the cleaning cycle automatically.",
    },
    {
      number: "03",
      title: "Jets clean debris fast",
      description:
        "Multiple water jets concentrate flow directly onto the blade to clear hair and residue.",
    },
    {
      number: "04",
      title: "Continue shaving",
      description:
        "A cleaner razor is ready for the next pass—no countertop tapping, no wasted time.",
    },
  ];

  return (
    <section
      id="how"
      className="bg-black text-white py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>

        <p className="mt-4 text-white/70 max-w-2xl">
          A seamless, touch-free cleaning cycle designed to keep your razor
          cleaner while you shave.
        </p>

        <div className="mt-16 grid items-start gap-10 md:grid-cols-[1fr_520px] lg:gap-16">
          <div className="space-y-15">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 p-8 bg-white/5 md:min-h-[220px]"
              >
                <div className="text-white/50 text-sm tracking-widest">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg md:text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm md:text-base leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="md:sticky md:top-40">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <video
                src="/videos/Demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="h-[320px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}