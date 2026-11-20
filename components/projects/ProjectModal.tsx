"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BulletList from "@/components/projects/BulletList";
import DetailSection from "@/components/projects/DetailSection";
import ExternalLinkButton from "@/components/projects/ExternalLinkButton";
import ProjectMedia from "@/components/projects/ProjectMedia";
import ProjectVisual from "@/components/projects/ProjectVisual";
import StackTags from "@/components/projects/StackTags";
import StageBadge from "@/components/projects/StageBadge";
import type { Project } from "@/lib/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FOCUSABLE =
  'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Take the rest of the page out of the tab order / a11y tree while open.
  // Declared before the focus effect so it is un-inerted on cleanup first.
  useEffect(() => {
    if (!project) return;
    const root = rootRef.current;
    if (!root) return;

    const siblings = Array.from(document.body.children).filter(
      (el) => el !== root && !el.contains(root)
    ) as HTMLElement[];

    const previous = siblings.map((el) => ({
      el,
      hadInert: el.hasAttribute("inert"),
      ariaHidden: el.getAttribute("aria-hidden"),
    }));

    siblings.forEach((el) => {
      el.setAttribute("inert", "");
      el.setAttribute("aria-hidden", "true");
    });

    return () => {
      previous.forEach(({ el, hadInert, ariaHidden }) => {
        if (!hadInert) el.removeAttribute("inert");
        if (ariaHidden === null) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", ariaHidden);
      });
    };
  }, [project]);

  // Escape to close + keep Tab inside the dialog.
  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const nodes = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.getClientRects().length > 0);

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [project, onClose]);

  // Lock background scrolling (with scrollbar compensation to avoid a jump).
  useEffect(() => {
    if (!project) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [project]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project ? (
        <div ref={rootRef} key="project-modal" className="fixed inset-0 z-[150]">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <div className="pointer-events-none relative flex h-[100dvh] items-center justify-center p-3 sm:p-6">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-positioning"
              initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.99 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
              className="pointer-events-auto relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07070a] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
            >
              <header className="shrink-0 border-b border-white/8 bg-[#07070a]/95 px-5 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                        {project.tag}
                      </span>
                      <StageBadge stage={project.detail.stage} />
                    </div>
                    <h2
                      id="project-modal-title"
                      className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                    >
                      {project.name}
                    </h2>
                    <p
                      id="project-modal-positioning"
                      className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-400"
                    >
                      {project.detail.positioning}
                    </p>
                  </div>

                  <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-300 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>
              </header>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div className="px-5 pb-8 pt-6 sm:px-8 sm:pb-10">
                  <div className="mb-8">
                    {project.detail.media?.kind === "videos" ? (
                      <ProjectMedia media={project.detail.media} />
                    ) : (
                      <>
                        <div
                          aria-hidden="true"
                          className="relative h-60 overflow-hidden rounded-2xl border border-white/8 bg-[#08080b] sm:h-64"
                        >
                          <ProjectVisual visual={project.visual} />
                        </div>
                        {project.detail.media ? (
                          <div className="mt-6">
                            <ProjectMedia media={project.detail.media} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>

                  <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_250px] md:gap-12">
                    <div className="space-y-8">
                      <DetailSection label="The problem">
                        <p>{project.detail.problem}</p>
                      </DetailSection>

                      <DetailSection label="Why I built it">
                        <p>{project.detail.why}</p>
                      </DetailSection>

                      <DetailSection label="What it does">
                        <BulletList items={project.detail.what} />
                      </DetailSection>

                      {project.detail.how ? (
                        <DetailSection label="How it works">
                          <BulletList items={project.detail.how} />
                        </DetailSection>
                      ) : null}

                      {project.detail.intended ? (
                        <DetailSection label="Intended benefit">
                          <p>{project.detail.intended}</p>
                        </DetailSection>
                      ) : null}

                      {project.detail.limits ? (
                        <DetailSection label="Scope and limitations">
                          <BulletList items={project.detail.limits} />
                        </DetailSection>
                      ) : null}
                    </div>

                    <aside className="space-y-6">
                      <div>
                        <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                          Status
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                          {project.status}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                          My role
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                          {project.detail.role}
                        </p>
                      </div>

                      {project.detail.audience ? (
                        <div>
                          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                            Who it’s for
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {project.detail.audience}
                          </p>
                        </div>
                      ) : null}

                      <div>
                        <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                          Stack
                        </h3>
                        <div className="mt-2.5">
                          <StackTags items={project.detail.stack} />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                          Links
                        </h3>
                        <div className="mt-2.5 flex flex-col gap-2">
                          <Link
                            href={`/work/${project.id}`}
                            className="inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1]"
                          >
                            Read the full case study
                            <ArrowRight size={15} aria-hidden="true" />
                          </Link>
                          {project.links.map((link) => (
                            <ExternalLinkButton
                              key={`${link.label}-${link.href}`}
                              href={link.href}
                              icon={link.icon}
                              variant="secondary"
                              className="w-full justify-between"
                            >
                              {link.label}
                            </ExternalLinkButton>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>

              <footer className="shrink-0 border-t border-white/8 bg-[#07070a]/95 px-5 py-3.5 backdrop-blur-xl sm:px-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 sm:block">
                    Project details
                  </p>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    {project.links[0] ? (
                      <ExternalLinkButton
                        href={project.links[0].href}
                        icon={project.links[0].icon}
                        variant="primary"
                        className="flex-1 sm:flex-none"
                      >
                        {project.links[0].label}
                      </ExternalLinkButton>
                    ) : null}
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:border-white/40 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </footer>
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}