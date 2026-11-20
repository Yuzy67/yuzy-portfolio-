import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page doesn’t exist. Start from the homepage or browse the work.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col justify-center px-6 py-24"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        This page doesn’t exist.
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
        The link may be old or mistyped. Here’s where to go instead.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-zinc-200"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back home
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
        >
          See all work
        </Link>
      </div>

      <ul className="mt-12 flex flex-col divide-y divide-white/8 border-y border-white/8">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/work/${project.id}`}
              className="group flex items-center justify-between gap-4 py-4 transition-colors duration-300"
            >
              <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                {project.name}
              </span>
              <ArrowRight
                size={15}
                className="text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
