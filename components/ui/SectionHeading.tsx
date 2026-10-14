"use client";

import Reveal from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function SectionHeading({
  index,
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  headingId,
}: SectionHeadingProps) {
  const centered = align === "center";
  const reduce = useReducedMotion();

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal y={16}>
        <span
          className={`glass-pill inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-foreground-secondary ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="relative flex size-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"
              aria-hidden="true"
            />
            <span
              className="relative inline-flex size-1.5 rounded-full bg-white"
              aria-hidden="true"
            />
          </span>
          <span className="text-foreground">{index}</span>
          <span className="text-white/30" aria-hidden="true">
            ·
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal y={22} delay={0.08}>
        <h2
          id={headingId}
          className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className="text-gradient">{titleAccent}</span>
            </>
          ) : null}
        </h2>
      </Reveal>
      <Reveal y={12} delay={0.14}>
        <motion.div
          className={`mt-6 h-px w-32 origin-left bg-gradient-to-r from-white via-white/40 to-transparent ${
            centered ? "mx-auto" : ""
          }`}
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
        />
      </Reveal>
      {description ? (
        <Reveal y={20} delay={0.16}>
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
