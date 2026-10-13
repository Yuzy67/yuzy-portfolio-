import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { stack, stackSection } from "@/lib/data";

export default function Stack() {
  return (
    <section aria-labelledby="stack-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title={stackSection.heading}
          headingId="stack-heading"
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {stack.map((tool, index) => (
            <Reveal key={tool} delay={(index % 4) * 0.05} y={18}>
              <div className="group flex h-full items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-hover">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-accent/60 transition-colors duration-300 group-hover:bg-accent"
                />
                <span className="text-sm font-medium text-foreground-secondary transition-colors duration-300 group-hover:text-foreground">
                  {tool}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
