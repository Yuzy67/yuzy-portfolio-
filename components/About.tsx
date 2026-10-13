"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, stats } from "@/lib/data";
import type { Stat } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (stat.value === null || !inView) return;
    if (reduce) {
      setDisplay(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, stat.value, reduce]);

  return (
    <div
      ref={ref}
      className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-surface-hover md:p-7"
    >
      {stat.value === null ? (
        <p className="text-gradient font-display text-5xl font-semibold leading-none md:text-6xl">
          ∞
        </p>
      ) : (
        <p className="font-display text-5xl font-semibold leading-none text-foreground md:text-6xl">
          {display}
          {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
        </p>
      )}
      <p className="mt-4 text-sm leading-snug text-foreground-secondary">
        {stat.label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={about.heading}
          headingId="about-heading"
        />

        <div className="mt-12 max-w-3xl space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.1 + index * 0.08}>
              <p className="text-lg leading-relaxed text-foreground-secondary">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={0.08 + index * 0.07}
              className="h-full"
            >
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
