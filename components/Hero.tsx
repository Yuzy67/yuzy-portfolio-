"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { hero, siteConfig } from "@/lib/data";
import type { HeroWord } from "@/lib/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Headline() {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1
      aria-label={hero.heading}
      className="mt-8 font-display text-[clamp(2.6rem,6.4vw,5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground"
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

function HeroPortrait() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    const word = wordRef.current;
    const glint = glintRef.current;
    if (!stage || !tilt) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let time = 0;
    let rafId = 0;

    const onMove = (event: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      isHovered = true;
      targetX = (x / rect.width - 0.5) * 2;
      targetY = (y / rect.height - 0.5) * 2;
    };

    const onTouch = (event: TouchEvent) => {
      if (event.touches.length === 0) {
        isHovered = false;
        return;
      }
      const rect = stage.getBoundingClientRect();
      const x = event.touches[0].clientX - rect.left;
      const y = event.touches[0].clientY - rect.top;
      isHovered = true;
      targetX = (x / rect.width - 0.5) * 2;
      targetY = (y / rect.height - 0.5) * 2;
    };

    const onLeave = () => {
      isHovered = false;
    };

    const animate = () => {
      time += 0.02;

      if (!isHovered) {
        targetX = Math.sin(time * 0.8) * 0.22;
        targetY = Math.cos(time * 0.6) * 0.18;
      }

      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const rotX = currentY * -12;
      const rotY = currentX * 12;

      tilt.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(35px) scale3d(1.03, 1.03, 1.03)`;
      tilt.style.filter = `drop-shadow(${currentX * -22}px ${
        currentY * -22
      }px 32px rgba(0, 0, 0, 0.75))`;

      if (word) {
        word.style.transform = `translate3d(${currentX * -14}px, ${
          currentY * -14
        }px, 0)`;
      }

      if (glint) {
        const gx = (currentX + 1) * 50;
        const gy = (currentY + 1) * 50;
        glint.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 75%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [reduce]);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto h-[58vh] min-h-[380px] w-full max-w-[26rem] sm:max-w-[30rem] lg:h-[76vh] lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[100px] transition-all duration-700 lg:h-[34rem] lg:w-[34rem]"
      />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.span
          ref={wordRef}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          className="select-none whitespace-nowrap font-display text-[clamp(5rem,15vw,11rem)] font-black leading-none tracking-[-0.04em] text-[#26262b] will-change-transform lg:text-[clamp(7rem,13vw,13rem)]"
        >
          YUZY
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        className="pointer-events-none absolute inset-0 flex items-end justify-center"
        style={{ perspective: 1000 }}
      >
        <div
          ref={tiltRef}
          className="relative flex max-h-full items-end will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/yuzy-hero.png"
            alt="Yuzy — AI product builder, wearing headphones"
            height={1448}
            width={1086}
            priority
            quality={90}
            sizes="(max-width: 1024px) 70vw, 480px"
            className="h-auto max-h-full w-auto max-w-full select-none object-contain"
          />
          <div
            ref={glintRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const frameRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduce || !frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      frameRef.current.style.setProperty("--gx", `${x}%`);
      frameRef.current.style.setProperty("--gy", `${y}%`);
    },
    [reduce]
  );

  return (
    <section
      ref={frameRef}
      onPointerMove={onPointerMove}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-24 pt-32 md:pb-40"
      style={{ "--gx": "50%", "--gy": "30%" } as React.CSSProperties}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black_30%,transparent_75%)]" />
        <div
          className="glow-drift absolute -top-40 left-1/2 h-[34rem] w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09)_0%,transparent_65%)] blur-[130px]"
          style={{
            left: "var(--gx)",
            top: "var(--gy)",
            transition:
              "left 0.6s cubic-bezier(0.16,1,0.3,1), top 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div className="absolute -left-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_65%)] blur-[120px]" />
        <div className="glow-drift absolute -right-32 top-1/3 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_65%)] blur-[110px] [animation-duration:28s]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          >
            <span className="glass-pill inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-secondary">
              <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
              {hero.badge}
            </span>
          </motion.div>

          <Headline />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
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
              className="group/status mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-2 pl-3.5 pr-4 text-sm text-zinc-400 backdrop-blur-md transition-colors duration-300 hover:border-white/30"
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
                className="text-zinc-500 transition-transform duration-300 group-hover/status:-translate-y-0.5 group-hover/status:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        <HeroPortrait />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="absolute bottom-10 left-0 right-0 hidden items-center justify-between px-6 md:flex"
      >
        <a
          href="#work"
          className="group/scroll inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
        >
          Featured Work
          <span
            className="inline-block h-px w-10 bg-gradient-to-r from-white/50 to-transparent transition-all duration-300 group-hover/scroll:w-14"
            aria-hidden="true"
          />
          <span className="text-zinc-300">Selected Work</span>
        </a>
        <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Social
          <span className="text-white/30" aria-hidden="true">
            →
          </span>
          <span className="flex items-center gap-2 text-zinc-300">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              GitHub
            </a>
            <span className="text-white/25" aria-hidden="true">
              ·
            </span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>
          </span>
        </span>
      </motion.div>
    </section>
  );
}
