"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6"
    >
      <div
        className={`apple-glass-nav mx-auto flex h-14 w-full max-w-4xl items-center justify-between rounded-full px-5 sm:px-6 ${
          scrolled || open ? "is-elevated" : ""
        }`}
      >
        <a
          href="#main"
          aria-label="Yuzy — back to top"
          className="relative z-10 inline-flex items-center gap-2 font-display text-base font-bold tracking-tight text-foreground"
        >
          <span
            className="inline-block size-2 rotate-45 rounded-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            aria-hidden="true"
          />
          YUZY
        </a>

        <nav aria-label="Primary" className="relative z-10 hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[13px] font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yuzy on GitHub"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            <Github size={15} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yuzy on Instagram"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            <Instagram size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 inline-flex size-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-foreground transition-colors duration-300 hover:border-white/40 md:hidden"
        >
          {open ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-x-4 top-[4.5rem] z-40 overflow-hidden rounded-3xl border border-white/12 bg-black/85 backdrop-blur-2xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.07, duration: 0.5, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/8 py-4 font-display text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-zinc-300"
                  >
                    <span className="font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-zinc-500">
                      0{index + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="mt-6 flex items-center gap-3"
              >
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yuzy on GitHub"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-400 transition-colors duration-300 hover:border-white/40 hover:text-white"
                >
                  <Github size={19} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yuzy on Instagram"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-400 transition-colors duration-300 hover:border-white/40 hover:text-white"
                >
                  <Instagram size={19} aria-hidden="true" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
