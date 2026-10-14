"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, siteConfig, stats } from "@/lib/data";
import type { Stat } from "@/lib/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      className="h-full rounded-2xl border border-white/8 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] md:p-7"
    >
      {stat.value === null ? (
        <p className="text-gradient font-display text-5xl font-semibold leading-none md:text-6xl">
          ∞
        </p>
      ) : (
        <p className="font-display text-5xl font-semibold leading-none text-foreground md:text-6xl">
          {display}
          {stat.suffix ? <span className="text-zinc-500">{stat.suffix}</span> : null}
        </p>
      )}
      <p className="mt-4 text-sm leading-snug text-zinc-400">{stat.label}</p>
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
          title={about.title}
          titleAccent={about.titleAccent}
          headingId="about-heading"
        />

        <div className="mt-12 max-w-3xl space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.1 + index * 0.08}>
              <p className="text-lg leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal y={16} delay={0.05} className="mt-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {siteConfig.roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {role}
                </span>
                {index < siteConfig.roles.length - 1 ? (
                  <span className="text-white/25" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal y={12} delay={0.1} className="mt-6">
          <div className="glass-divider" />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <Reveal y={20} delay={0.08} className="mt-16">
          <div className="relative rounded-2xl border border-white/6 bg-white/[0.02] p-4 sm:p-6">
            <span
              className="absolute -left-px -top-px size-8 rounded-tl-2xl border-l border-t border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -right-px -top-px size-8 rounded-tr-2xl border-r border-t border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-px -left-px size-8 rounded-bl-2xl border-b border-l border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-px -right-px size-8 rounded-br-2xl border-b border-r border-white/40"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
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
        </Reveal>
      </div>
    </section>
  );
}
