import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Showcase() {
  return (
    <section className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-32 grid lg:grid-cols-2 gap-16">
        
        {/* Sticky product visual */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Image
              src="/images/product-hero.png"
              alt="The Cutting Edge product"
              width={800}
              height={800}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Scrolling story */}
        <div className="space-y-32">
          <Reveal>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium">
                Designed for modern bathrooms
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Minimal, clean, and built to blend seamlessly into premium spaces.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium">
                Smart sensor detection
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Automatically activates when your razor enters the device.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium">
                Precision water control
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Direct jets focus water exactly where it’s needed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
