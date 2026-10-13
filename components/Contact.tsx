import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { contactSection, siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-16 h-[26rem] w-[52rem] max-w-none -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={18}>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-foreground-muted">
              <span className="text-accent">06</span>
              <span className="mx-2" aria-hidden="true">
                —
              </span>
              Contact
            </p>
          </Reveal>
          <Reveal y={24} delay={0.08}>
            <h2
              id="contact-heading"
              className="mt-5 font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              {contactSection.heading}{" "}
              <span className="text-gradient">{contactSection.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal y={20} delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary">
              {contactSection.description}
            </p>
          </Reveal>
          <Reveal y={20} delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href={`mailto:${siteConfig.email}`}
                ariaLabel="Email Yuzy"
              >
                <Mail size={16} aria-hidden="true" />
                Email
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
              <MagneticButton
                href={siteConfig.social.instagram}
                external
                variant="outline"
                ariaLabel="Yuzy on Instagram"
              >
                <Instagram size={16} aria-hidden="true" />
                Instagram
              </MagneticButton>
              <MagneticButton
                href={siteConfig.social.linkedin}
                external
                variant="outline"
                ariaLabel="Yuzy on LinkedIn"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
