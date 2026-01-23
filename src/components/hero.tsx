"use client";
import { ParallaxY } from "@/components/parallax";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-widest text-sm text-white/60"
          >
            Premium Razor Cleaner
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-semibold leading-tight"
          >
            Keep your razor clean.
            <br />
            Keep your shave sharp.
          </motion.h1>

          <p className="mt-6 text-white/75 text-lg max-w-xl">
            The Cutting Edge cleans your razor automatically using precision water
            jets and smart sensor activation — no tapping, no wasted water.
          </p>

          <a
            href="#preorder"
            className="inline-block mt-8 rounded-full bg-white text-black px-6 py-3 font-medium"
          >
            Pre-order for $100
          </a>
        </div>

        {/* PARALLAX IMAGE */}
        <ParallaxY from={60} to={-60}>
          <div className="relative">
            <Image
              src="/images/product-hero.png"
              alt="The Cutting Edge razor cleaner"
              width={900}
              height={900}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </ParallaxY>
      </div>
    </section>
  );
}
