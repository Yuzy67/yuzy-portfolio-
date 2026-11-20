import type { ProjectStage } from "@/lib/data";

export const STAGE_BADGE: Record<ProjectStage, { cls: string; dot: string }> = {
  Live: {
    cls: "border-success/25 bg-success/10 text-success",
    dot: "bg-success",
  },
  "In progress": {
    cls: "border-warning/25 bg-warning/10 text-warning",
    dot: "bg-warning",
  },
  Prototype: {
    cls: "border-white/20 bg-white/[0.08] text-white",
    dot: "bg-white",
  },
  Experiment: {
    cls: "border-white/12 bg-white/[0.04] text-zinc-400",
    dot: "bg-zinc-500",
  },
};

export default function StageBadge({ stage }: { stage: ProjectStage }) {
  const tone = STAGE_BADGE[stage];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${tone.cls}`}
    >
      <span aria-hidden="true" className={`size-1.5 rounded-full ${tone.dot}`} />
      {stage}
    </span>
  );
}
