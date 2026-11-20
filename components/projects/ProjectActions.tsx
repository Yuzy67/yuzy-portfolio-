"use client";

import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import ExternalLinkButton from "@/components/projects/ExternalLinkButton";
import type { Project } from "@/lib/data";

export default function ProjectActions({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const primary = project.links[0];

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2.5">
      {primary ? (
        <ExternalLinkButton
          href={primary.href}
          icon={primary.icon}
          variant="primary"
        >
          {primary.label}
        </ExternalLinkButton>
      ) : null}
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
      >
        <Info size={15} aria-hidden="true" />
        {project.detailCta}
      </button>
      <Link
        href={`/work/${project.id}`}
        className="group inline-flex items-center gap-1.5 rounded-full px-1 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
      >
        <span className="underline decoration-white/20 underline-offset-4 transition-colors duration-300 group-hover:decoration-white/60">
          Case study
        </span>
        <ArrowRight
          size={14}
          className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
