import { Bot, Hammer, Instagram, Rocket } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contentSection, contentThemes } from "@/lib/data";

const THEME_ICONS = [Hammer, Bot, Rocket];

export default function Content() {
  return (
    <section id="content" aria-labelledby="content-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Content"
          title={contentSection.title}
          titleAccent={contentSection.titleAccent}
          description={contentSection.description}
          headingId="content-heading"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contentThemes.map((theme, index) => {
            const Icon = THEME_ICONS[index % THEME_ICONS.length];
            return (
              <Reveal key={theme.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-white/8 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                    {theme.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {theme.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={32} delay={0.1} className="mt-6 md:mt-8">
          <div className="liquid-glass">
            <div className="liquid-glass-inner relative overflow-hidden p-8 md:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.07] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl"
              />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                    Instagram
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    Follow the journey.
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                    Real builds, real bugs, real lessons — shared as they happen
                    at @yuzy.creates.
                  </p>
                </div>
                <MagneticButton
                  href="https://www.instagram.com/yuzy.creates"
                  external
                  ariaLabel="Follow @yuzy.creates on Instagram"
                  className="px-7 py-3.5"
                >
                  <Instagram size={16} aria-hidden="true" />
                  Follow @yuzy.creates
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
