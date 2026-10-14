import { ArrowUp } from "lucide-react";
import { footer, navLinks, siteConfig } from "@/lib/data";

const ELSEWHERE = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-6 pt-4 sm:px-6">
      <div className="liquid-glass mx-auto max-w-6xl">
        <div className="liquid-glass-inner relative overflow-hidden rounded-[34.5px] px-8 py-10 md:px-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a
                href="#main"
                aria-label="Yuzy — back to top"
                className="inline-flex items-center gap-3"
              >
                <span className="relative flex size-7 items-center justify-center">
                  <span
                    className="absolute inset-0 rotate-45 rounded-lg border border-white/40 bg-gradient-to-br from-white/25 to-white/5"
                    aria-hidden="true"
                  />
                  <span
                    className="relative size-2.5 rotate-45 rounded-[2px] bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)]"
                    aria-hidden="true"
                  />
                </span>
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  YUZY
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
                AI product builder, content creator, and founder — shipping
                real products in public.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Sitemap
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {ELSEWHERE.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-divider mt-10" />

          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-center text-sm text-zinc-500 sm:text-left">
              <p className="text-zinc-400">{footer.copyright}</p>
              <p className="mt-1">{footer.builtWith}</p>
            </div>
            <a
              href="#main"
              aria-label="Back to top"
              className="group inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:text-white"
            >
              <ArrowUp
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
