"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import ProjectActions from "@/components/projects/ProjectActions";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectVisual from "@/components/projects/ProjectVisual";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, projectsSection } from "@/lib/data";
import type { Project } from "@/lib/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATUS_TONES: Record<Project["statusTone"], string> = {
  warning: "border-warning/25 bg-warning/10 text-warning",
  success: "border-success/25 bg-success/10 text-success",
  accent: "border-white/20 bg-white/[0.08] text-white",
  neutral: "border-white/12 bg-white/[0.04] text-zinc-400",
};

const STATUS_DOTS: Record<Project["statusTone"], string> = {
  warning: "bg-warning",
  success: "bg-success",
  accent: "bg-white",
  neutral: "bg-zinc-500",
};

function ProjectEntry({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      className="relative grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] md:gap-14 lg:grid-cols-[340px_1fr]"
      initial={{ opacity: 0, x: reduce ? 0 : -24, filter: reduce ? undefined : "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
    >
      <div className="md:sticky md:top-36 md:self-start">
        <div className="group relative flex items-start gap-4">
          <span className="relative mt-1 hidden shrink-0 md:block">
            <span
              className="absolute -inset-2 rounded-full bg-white/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="relative flex size-10 items-center justify-center rounded-full border border-white/15 bg-black">
              <span
                className="size-2 rounded-full bg-zinc-600 transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                aria-hidden="true"
              />
            </span>
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
              {project.tag}
            </p>
            <h3 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-zinc-500 transition-colors duration-500 group-hover:text-white md:text-[1.75rem]">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] transition-[border-color,box-shadow] duration-500 hover:border-white/20">
        <div className="relative h-52 overflow-hidden border-b border-white/8 bg-[#08080b] md:h-64">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectVisual visual={project.visual} />
          </div>
          <span
            aria-hidden="true"
            className="absolute left-6 top-5 font-mono text-xs tracking-widest text-zinc-600"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3">
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
          <p className="mt-4 leading-relaxed text-zinc-400">
            {project.description}
          </p>
          <ProjectActions project={project} onOpen={onOpen} />
        </div>
      </article>
    </motion.li>
  );
}

export default function Projects() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
  });
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="02"
          eyebrow="Work"
          title={projectsSection.title}
          titleAccent={projectsSection.titleAccent}
          description={projectsSection.description}
          headingId="work-heading"
        />

        <div className="relative mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 hidden w-[2px] bg-white/10 md:block"
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-white via-white/60 to-neutral-400 shadow-[0_0_16px_3px_rgba(255,255,255,0.45)]"
              style={{ scaleY: reduce ? 1 : railProgress }}
            />
          </div>

          <ol ref={listRef} className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => (
              <ProjectEntry
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </ol>
        </div>

        <Reveal y={36} delay={0.1} className="mt-16 md:mt-24">
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
                    More coming
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    Always building the next thing.
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                    New products, agents, and experiments land here first —
                    follow along to see them ship.
                  </p>
                </div>
                <a
                  href="https://github.com/Yuzy67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1]"
                >
                  <Github size={16} aria-hidden="true" />
                  View GitHub
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={activeProject} onClose={closeProject} />
    </section>
  );
}
