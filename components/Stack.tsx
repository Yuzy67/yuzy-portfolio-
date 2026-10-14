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
          title={stackSection.title}
          titleAccent={stackSection.titleAccent}
          headingId="stack-heading"
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {stack.map((tool, index) => (
            <Reveal key={tool} delay={(index % 4) * 0.05} y={18}>
              <div className="group flex h-full items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-zinc-600 transition-colors duration-300 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                />
                <span className="text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
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
