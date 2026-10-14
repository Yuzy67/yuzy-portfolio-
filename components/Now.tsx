import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { now, nowSection } from "@/lib/data";

export default function Now() {
  return (
    <section id="now" aria-labelledby="now-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="05"
          eyebrow="Now"
          title={nowSection.title}
          headingId="now-heading"
        />

        <Reveal y={32} delay={0.08} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04]">
            <span
              className="absolute -left-px -top-px size-8 rounded-tl-3xl border-l border-t border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -right-px -top-px size-8 rounded-tr-3xl border-r border-t border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-px -left-px size-8 rounded-bl-3xl border-b border-l border-white/40"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-px -right-px size-8 rounded-br-3xl border-b border-r border-white/40"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/8 px-7 py-5 md:px-10">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                Right now
              </span>
              <span className="ml-auto font-mono text-[11px] text-zinc-500">
                Updated · {now.updatedAt}
              </span>
            </div>
            <div className="p-7 md:p-10">
              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {now.items.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <ArrowRight
                      size={16}
                      className="mt-0.5 shrink-0 text-white/60"
                      aria-hidden="true"
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-zinc-400">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-10 border-l-2 border-white/40 pl-5 font-display text-xl font-medium tracking-tight text-foreground md:pl-6 md:text-2xl">
                {now.pull}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
