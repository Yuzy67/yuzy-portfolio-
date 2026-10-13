import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  headingId,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal y={18}>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-foreground-muted">
          <span className="text-accent">{index}</span>
          <span className="mx-2" aria-hidden="true">
            —
          </span>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal y={22} delay={0.08}>
        <h2
          id={headingId}
          className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal y={20} delay={0.16}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed text-foreground-secondary ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
