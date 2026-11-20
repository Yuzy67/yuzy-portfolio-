import type { ReactNode } from "react";

export default function DetailSection({
  label,
  children,
  as: Heading = "h3",
}: {
  label: string;
  children: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <section>
      <Heading className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        {label}
      </Heading>
      <div className="mt-2.5 text-[15px] leading-relaxed text-zinc-300">
        {children}
      </div>
    </section>
  );
}
