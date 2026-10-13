import {
  ArrowUpRight,
  Check,
  Github,
  Lock,
  Plus,
  ShieldCheck,
  X,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, projectsSection } from "@/lib/data";
import type { Project, ProjectVisual } from "@/lib/data";

const STATUS_TONES: Record<Project["statusTone"], string> = {
  warning: "border-warning/25 bg-warning/10 text-warning",
  success: "border-success/25 bg-success/10 text-success",
  accent: "border-accent/25 bg-accent/10 text-accent-soft",
  neutral: "border-border bg-surface text-foreground-secondary",
};

const STATUS_DOTS: Record<Project["statusTone"], string> = {
  warning: "bg-warning",
  success: "bg-success",
  accent: "bg-accent",
  neutral: "bg-foreground-muted",
};

function LockedInVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative size-44 md:size-56" aria-hidden="true">
        <div className="absolute -inset-10 rounded-full border border-border/70" />
        <div className="absolute -inset-20 hidden rounded-full border border-border/40 md:block" />
        <div
          className="animate-rotate-slow absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgb(139 92 246 / 0.95) 0deg, rgb(139 92 246 / 0.15) 80deg, transparent 130deg)",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
            <Lock size={17} className="text-accent-soft" />
          </span>
        </div>
      </div>
    </div>
  );
}

function YuzyAiVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-black/60 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-foreground-muted">
            yuzy — zsh
          </span>
        </div>
        <div className="space-y-2.5 px-4 py-4 font-mono text-[11px] leading-relaxed md:text-xs">
          <p className="text-foreground-secondary">
            <span className="text-accent">➜</span> yuzy{" "}
            <span className="text-foreground">“open spotify, start focus”</span>
          </p>
          <p className="text-success">✓ spotify launched · focus 25:00</p>
          <p className="text-foreground-secondary">
            <span className="text-accent">➜</span> yuzy{" "}
            <span className="text-foreground">“summarize inbox”</span>
          </p>
          <p className="text-success">✓ 3 threads summarized</p>
          <p className="text-foreground-secondary">
            <span className="text-accent">➜</span> yuzy{" "}
            <span className="cursor-blink text-accent">▍</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FinanceGuardVisual() {
  const rows = [
    { intent: "summarize.overdue", verdict: "APPROVED", cls: "text-success", approved: true },
    { intent: "digest.compose", verdict: "QUEUED", cls: "text-foreground-muted", approved: false },
    { intent: "refund.simulate", verdict: "BLOCKED", cls: "text-danger", approved: false },
  ];

  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 md:p-10">
      <div className="flex items-center gap-2.5">
        <ShieldCheck size={16} className="text-accent" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground-muted">
          ArmorIQ · intent verification
        </span>
      </div>
      {rows.map((row) => (
        <div
          key={row.intent}
          className="flex items-center justify-between gap-4 rounded-lg border border-border bg-black/40 px-4 py-3 font-mono text-[11px] md:text-xs"
        >
          <span className="text-foreground-secondary">{row.intent}</span>
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
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
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
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-5">
        <span className="flex size-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
          <Plus size={26} className="text-accent-soft" aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground-muted">
          Team build
        </span>
      </div>
    </div>
  );
}

function ProjectVisual({ visual }: { visual: ProjectVisual }) {
  switch (visual) {
    case "lockedin":
      return <LockedInVisual />;
    case "yuzyai":
      return <YuzyAiVisual />;
    case "financeguard":
      return <FinanceGuardVisual />;
    case "doormed":
      return <DoormedVisual />;
    default:
      return null;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className="group relative grid overflow-hidden rounded-3xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_90px_-32px_rgba(124,58,237,0.35)] md:grid-cols-2">
      <div
        className={`relative h-64 border-b border-border bg-[#08080b] sm:h-72 md:h-auto md:min-h-[24rem] lg:min-h-[26rem] ${
          flipped
            ? "md:order-2 md:border-b-0 md:border-l"
            : "md:border-b-0 md:border-r"
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute left-6 top-5 z-10 font-mono text-xs tracking-widest text-foreground-muted/70"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectVisual visual={project.visual} />
        </div>
      </div>

      <div className="flex flex-col p-7 md:p-10 lg:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/90">
          {project.tag}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 leading-relaxed text-foreground-secondary">
          {project.description}
        </p>
        <div className="mt-6">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${STATUS_TONES[project.statusTone]}`}
          >
            <span
              className={`size-1.5 rounded-full ${STATUS_DOTS[project.statusTone]}`}
              aria-hidden="true"
            />
            {project.status}
          </span>
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-10">
          {project.links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground-secondary transition-colors duration-300 hover:border-accent/50 hover:bg-accent/5 hover:text-foreground"
            >
              {link.icon === "github" ? (
                <Github size={15} aria-hidden="true" />
              ) : (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="02"
          eyebrow="Work"
          title={projectsSection.heading}
          description={projectsSection.description}
          headingId="work-heading"
        />
        <div className="mt-14 flex flex-col gap-6 md:mt-20 md:gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 2) * 0.08}
              y={36}
              amount={0.1}
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
