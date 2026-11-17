import { ArrowUpRight, Github } from "lucide-react";
import type { ReactNode } from "react";

const VARIANTS = {
  primary:
    "bg-white text-black shadow-[0_10px_36px_-12px_rgba(255,255,255,0.35)] hover:bg-zinc-200",
  secondary:
    "border border-white/15 bg-white/[0.05] text-white hover:border-white/40 hover:bg-white/[0.09]",
};

type ExternalLinkButtonProps = {
  href: string;
  children: ReactNode;
  icon?: "arrow" | "github";
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function ExternalLinkButton({
  href,
  children,
  icon = "arrow",
  variant = "secondary",
  external = true,
  className = "",
  ariaLabel,
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${VARIANTS[variant]} ${className}`}
    >
      {icon === "github" ? (
        <Github size={15} aria-hidden="true" />
      ) : null}
      {children}
      {external ? (
        <>
          <ArrowUpRight size={14} className="opacity-70" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : null}
    </a>
  );
}