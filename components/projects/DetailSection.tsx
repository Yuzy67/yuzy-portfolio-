import type { ReactNode } from "react";

export default function DetailSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        {label}
      </h3>
      <div className="mt-2.5 text-[15px] leading-relaxed text-zinc-300">
        {children}
      </div>
    </section>
  );
}