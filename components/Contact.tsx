"use client";

import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SymbolRain from "@/components/contact/SymbolRain";
import { contactPods, contactSection } from "@/lib/data";
import type { ContactPod } from "@/lib/data";

const POD_ICONS: Record<ContactPod["icon"], LucideIcon> = {
  mail: Mail,
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Contact() {
  // The email action leads; the rest stay available as secondary links.
  const emailPod = contactPods.find((pod) => pod.icon === "mail");
  const secondaryPods = contactPods.filter((pod) => pod.icon !== "mail");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden"
    >
      <SymbolRain />

      <div
        aria-hidden="true"
        className="glow-drift pointer-events-none absolute left-1/2 top-16 h-[26rem] w-[52rem] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_65%)] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={contactSection.title}
          titleAccent={contactSection.titleAccent}
          description={contactSection.description}
          align="center"
          headingId="contact-heading"
        />

        <Reveal y={16} delay={0.2} className="mt-10 flex justify-center">
          <span className="glass-pill inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
            <span className="relative flex size-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60"
                aria-hidden="true"
              />
              <span
                className="relative inline-flex size-1.5 rounded-full bg-success"
                aria-hidden="true"
              />
            </span>
            Available for collaborations
          </span>
        </Reveal>

        <Reveal y={32} delay={0.28} className="mt-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Direct line
                </p>
                <p className="mt-2.5 truncate font-mono text-sm text-zinc-300">
                  {emailPod?.handle}
                </p>
              </div>

              {emailPod ? (
                <a
                  href={emailPod.href}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_20px_45px_-18px_rgba(255,255,255,0.5)]"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email me
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              ) : null}
            </div>

            <div className="glass-divider my-7" />

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Elsewhere
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {secondaryPods.map((pod) => {
                  const Icon = POD_ICONS[pod.icon];
                  return (
                    <a
                      key={pod.id}
                      href={pod.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white transition-colors duration-300 group-hover:border-white/25">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">
                          {pod.label}
                        </span>
                        <span className="block truncate font-mono text-[10px] text-zinc-500">
                          {pod.handle}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
