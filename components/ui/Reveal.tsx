"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  amount = 0.25,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        x: reduce ? 0 : x,
        filter: reduce ? undefined : "blur(6px)",
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount, margin: "0px 0px -72px 0px" }}
      transition={{ duration: 0.8, delay, ease: reduce ? "linear" : EASE }}
    >
      {children}
    </motion.div>
  );
}
