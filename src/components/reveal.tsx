"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({
  children,
  delay = 0,
  duration = 1.4,
  direction = "up",
}: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -120 : direction === "right" ? 120 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}