import { Reveal } from "@/components/reveal";

const features = [
  {
    title: "Precision water jets",
    description:
      "Concentrated jets blast away hair and debris without wasting water.",
    image: "/images/Nozzle_close_up.jpeg",
    alt: "Water flowing in a close-up product style image",
  },
  {
    title: "Automatic sensor activation",
    description:
      "Insert your razor and the device activates instantly — no buttons.",
    image: "/images/Sensor_close_up.png",
    alt: "Modern tech-inspired close-up image representing smart activation",
  },
  {
    title: "Integrated Brush System",
    description:
      "Wipes away hair and debris to restore razor performance and prolong blade life.",
    image: "/images/Brush_close_up.jpeg",
    alt: "Premium bathroom or grooming style image",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-white/10 bg-black py-28 text-white md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-5xl">
          <Reveal direction="up" duration={1.1}>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Designed to clean better.
            </h2>
          </Reveal>

          <Reveal delay={0.08} direction="up" duration={1.1}>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-white/70 md:text-2xl md:leading-10">
              The Cutting Edge uses a combination of targeted water jets and a
              rotating brush assembly to remove hair, shaving cream, and debris
              from between the blades. In seconds, your razor is thoroughly
              clean and restored to pristine condition — ready for the next
              shave.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-28 md:mt-32 md:space-y-36">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={`${feature.title}-${index}`}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
              >
                <div className="order-1 md:order-1">
                  <Reveal
                    delay={0.08 + index * 0.08}
                    duration={1.5}
                    direction={isReversed ? "right" : "left"}
                  >
                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="h-[320px] w-full object-cover md:h-[420px] lg:h-[520px]"
                      />
                    </div>
                  </Reveal>
                </div>

                <div className="order-2 md:order-2">
                  <Reveal
                    delay={0.18 + index * 0.08}
                    duration={1.5}
                    direction={isReversed ? "left" : "right"}
                  >
                    <div className="max-w-xl">
                      <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                        {feature.title}
                      </h3>

                      <p className="mt-6 text-base leading-7 text-white/70 md:text-xl md:leading-9">
                        {feature.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}