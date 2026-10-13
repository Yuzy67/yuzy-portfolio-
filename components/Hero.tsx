"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { hero, siteConfig } from "@/lib/data";
import type { HeroWord } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Headline() {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1
      aria-label={hero.heading}
      className="mt-8 font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-semibold leading-[1.04] tracking-tight text-foreground"
    >
      {hero.lines.map((line: HeroWord[], lineIndex: number) => (
        <span key={lineIndex} className="block" aria-hidden="true">
          {line.map((word) => {
            const delay = 0.15 + wordIndex++ * 0.07;
            return (
              <span key={word.text}>
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
                  <motion.span
                    className={`inline-block will-change-transform ${
                      word.accent ? "text-gradient" : ""
                    }`}
                    initial={
                      reduce
                        ? { opacity: 0 }
                        : { y: "110%", opacity: 0, filter: "blur(10px)" }
                    }
                    animate={
                      reduce
                        ? { opacity: 1 }
                        : { y: "0%", opacity: 1, filter: "blur(0px)" }
                    }
                    transition={{
                      duration: 0.9,
                      delay,
                      ease: reduce ? "linear" : EASE,
                    }}
                  >
                    {word.text}
                  </motion.span>
                </span>{" "}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-24 pt-32">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black_30%,transparent_75%)]" />
        <div className="glow-pulse absolute -top-48 left-1/2 h-[36rem] w-[62rem] max-w-none -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute -left-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-soft/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-secondary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {hero.badge}
          </span>
        </motion.div>

        <Headline />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-foreground-secondary"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton
            href={siteConfig.social.github}
            external
            variant="outline"
            ariaLabel="Yuzy on GitHub"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
        >
          <a
            href={hero.status.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/status mt-10 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 py-2 pl-3.5 pr-4 text-sm text-foreground-secondary transition-colors duration-300 hover:border-accent/40"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {hero.status.label}
            <span className="font-medium text-foreground">
              {hero.status.highlight}
            </span>
            <ArrowUpRight
              size={14}
              className="text-accent transition-transform duration-300 group-hover/status:-translate-y-0.5 group-hover/status:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-muted">
          Scroll
        </span>
        <span className="float-soft block h-8 w-px bg-gradient-to-b from-accent/70 to-transparent" />
      </motion.div>
    </section>
  );
}
