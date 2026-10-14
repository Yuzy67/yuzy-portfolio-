"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const BASE =
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300";

const VARIANTS = {
  primary:
    "bg-white text-black hover:bg-zinc-200 shadow-[0_10px_36px_-12px_rgba(255,255,255,0.35)]",
  outline:
    "border border-white/20 bg-white/[0.06] text-foreground backdrop-blur-md hover:border-white/40 hover:bg-white/[0.1]",
};

export default function MagneticButton({
  children,
  href,
  external,
  variant = "primary",
  className = "",
  ariaLabel,
  onClick,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.25 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-8, Math.min(8, relX * 0.16)));
    y.set(Math.max(-6, Math.min(6, relY * 0.2)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const shine =
    variant === "primary" ? (
      <span className="btn-shine" aria-hidden="true" />
    ) : null;

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        style={{ x: springX, y: springY }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {shine}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
      style={{ x: springX, y: springY }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
