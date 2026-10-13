"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SOCIAL_ICON_CLASSES =
  "inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors duration-300 hover:border-accent/50 hover:text-accent-soft";

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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-border/70 bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <a
          href="#main"
          aria-label="Yuzy — back to top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          YUZY<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-foreground-secondary transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yuzy on GitHub"
            className={SOCIAL_ICON_CLASSES}
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yuzy on Instagram"
            className={SOCIAL_ICON_CLASSES}
          >
            <Instagram size={17} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent/50 md:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
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
            className="fixed inset-0 top-16 z-40 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 pt-10">
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
                    className="flex items-baseline gap-4 border-b border-border/60 py-5 font-display text-4xl font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-accent-soft"
                  >
                    <span className="font-mono text-xs font-normal text-foreground-muted">
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
                className="mt-10 flex items-center gap-3"
              >
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yuzy on GitHub"
                  className="inline-flex size-12 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors duration-300 hover:border-accent/50 hover:text-accent-soft"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yuzy on Instagram"
                  className="inline-flex size-12 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors duration-300 hover:border-accent/50 hover:text-accent-soft"
                >
                  <Instagram size={20} aria-hidden="true" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
