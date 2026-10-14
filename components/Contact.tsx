"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactPods, contactSection } from "@/lib/data";
import type { ContactPod } from "@/lib/data";

const POD_ICONS = {
  mail: Mail,
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
};

function PodIcon({ icon }: { icon: ContactPod["icon"] }) {
  const Icon = POD_ICONS[icon];
  return <Icon size={22} aria-hidden="true" />;
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="glow-drift absolute left-1/2 top-16 h-[26rem] w-[52rem] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_65%)] blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
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

        <Reveal y={32} delay={0.28} className="mt-14">
          <div className="relative mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {contactPods.map((pod, index) => (
              <a
                key={pod.id}
                href={pod.href}
                target={pod.icon === "mail" ? undefined : "_blank"}
                rel={pod.icon === "mail" ? undefined : "noopener noreferrer"}
                className={`pod pod-${index} group flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] text-center backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_24px_60px_-20px_rgba(255,255,255,0.12)]`}
              >
                <span className="pod-icon flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-white">
                  <PodIcon icon={pod.icon} />
                </span>
                <span className="px-2">
                  <span className="block font-display text-sm font-semibold text-foreground">
                    {pod.label}
                  </span>
                  <span className="mt-1 block truncate font-mono text-[10px] tracking-wide text-zinc-500">
                    {pod.handle}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
