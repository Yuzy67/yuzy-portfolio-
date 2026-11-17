"use client";

import { Info } from "lucide-react";
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
    </div>
  );
}