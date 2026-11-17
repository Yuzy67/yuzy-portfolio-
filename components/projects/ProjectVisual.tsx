import { Check, Lock, Plus, ShieldCheck, X } from "lucide-react";
import type { ProjectVisual as ProjectVisualKind } from "@/lib/data";

function LockedInVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
      />
      <div className="relative size-44 md:size-52" aria-hidden="true">
        <div className="absolute -inset-10 rounded-full border border-white/10" />
        <div className="absolute -inset-20 hidden rounded-full border border-white/6 md:block" />
        <div
          className="animate-rotate-slow absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,255,255,0.9) 0deg, rgba(255,255,255,0.15) 80deg, transparent 130deg)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
            <Lock size={17} className="text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

function YuzyAiVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/12 bg-black/70 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            yuzy — zsh
          </span>
        </div>
        <div className="space-y-2.5 px-4 py-4 font-mono text-[11px] leading-relaxed md:text-xs">
          <p className="text-zinc-400">
            <span className="text-white">➜</span> yuzy{" "}
            <span className="text-white">“open spotify, start focus”</span>
          </p>
          <p className="text-success">✓ spotify launched · focus 25:00</p>
          <p className="text-zinc-400">
            <span className="text-white">➜</span> yuzy{" "}
            <span className="text-white">“summarize inbox”</span>
          </p>
          <p className="text-success">✓ 3 threads summarized</p>
          <p className="text-zinc-400">
            <span className="text-white">➜</span> yuzy{" "}
            <span className="cursor-blink text-white">▍</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FinanceGuardVisual() {
  const rows = [
    { intent: "summarize.overdue", verdict: "APPROVED", cls: "text-success", approved: true },
    { intent: "digest.compose", verdict: "QUEUED", cls: "text-zinc-500", approved: false },
    { intent: "refund.simulate", verdict: "BLOCKED", cls: "text-danger", approved: false },
  ];

  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-4 md:gap-3 md:p-8">
      <div className="flex items-center gap-2.5">
        <ShieldCheck size={16} className="text-white" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          ArmorIQ · intent verification
        </span>
      </div>
      {rows.map((row) => (
        <div
          key={row.intent}
          className="flex items-center justify-between gap-4 rounded-lg border border-white/8 bg-black/40 px-4 py-2 font-mono text-[11px] md:py-2.5 md:text-xs"
        >
          <span className="text-zinc-400">{row.intent}</span>
          <span className={`flex items-center gap-1.5 font-medium ${row.cls}`}>
            {row.approved ? (
              <Check size={13} aria-hidden="true" />
            ) : row.verdict === "BLOCKED" ? (
              <X size={13} aria-hidden="true" />
            ) : null}
            {row.verdict}
          </span>
        </div>
      ))}
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        Only approved actions execute
      </p>
    </div>
  );
}

function DoormedVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-5">
        <span className="float-soft flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-md">
          <Plus size={26} className="text-white" aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Team build
        </span>
      </div>
    </div>
  );
}

function HandfulVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-5">
        <div
          className="float-soft relative flex h-24 w-44 items-center justify-center gap-3 rounded-[44px] border border-white/25 bg-white/[0.06] backdrop-blur-md"
          aria-hidden="true"
        >
          <span className="size-16 rounded-full border border-white/30 bg-black/40 shadow-[inset_0_0_18px_rgba(255,255,255,0.12)]" />
          <span className="size-16 rounded-full border border-white/30 bg-black/40 shadow-[inset_0_0_18px_rgba(255,255,255,0.12)]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          handful — vr
        </span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ visual }: { visual: ProjectVisualKind }) {
  switch (visual) {
    case "lockedin":
      return <LockedInVisual />;
    case "yuzyai":
      return <YuzyAiVisual />;
    case "financeguard":
      return <FinanceGuardVisual />;
    case "doormed":
      return <DoormedVisual />;
    case "handful":
      return <HandfulVisual />;
    default:
      return null;
  }
}