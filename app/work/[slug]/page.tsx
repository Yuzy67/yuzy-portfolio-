import type { Metadata } from "next";
import AmbientBackground from "@/components/AmbientBackground";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import BulletList from "@/components/projects/BulletList";
import DetailSection from "@/components/projects/DetailSection";
import ExternalLinkButton from "@/components/projects/ExternalLinkButton";
import ProjectMedia from "@/components/projects/ProjectMedia";
import ProjectVisual from "@/components/projects/ProjectVisual";
import StackTags from "@/components/projects/StackTags";
import StageBadge from "@/components/projects/StageBadge";
import { projects, siteConfig } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((item) => item.id === params.slug);
  if (!project) return {};

  const title = `${project.name} — Case study`;
  const description = project.detail.positioning;
  const url = `${siteConfig.url}/work/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: {
      type: "article",
      url,
      title: `${title} | Yuzy`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Yuzy`,
      description,
    },
  };
}

export default function ProjectCaseStudy({ params }: Params) {
  const project = projects.find((item) => item.id === params.slug);
  if (!project) notFound();

  const { detail } = project;
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const primary = project.links[0];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Work",
        item: `${siteConfig.url}/#work`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.name,
        item: `${siteConfig.url}/work/${project.id}`,
      },
    ],
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: detail.positioning,
    url: `${siteConfig.url}/work/${project.id}`,
    creator: { "@id": `${siteConfig.url}/#person` },
    keywords: detail.stack.join(", "),
  };

  return (
    <>
      <AmbientBackground />
      <Cursor />
      <Navbar />

      <main id="main" className="relative z-10">
        <article className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:pt-40">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <li>
                <Link
                  href="/#work"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-zinc-300">
                {project.name}
              </li>
            </ol>
          </nav>

          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                {project.tag}
              </span>
              <StageBadge stage={detail.stage} />
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
              {detail.positioning}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-2.5">
              {primary ? (
                <ExternalLinkButton
                  href={primary.href}
                  icon={primary.icon}
                  variant="primary"
                >
                  {primary.label}
                </ExternalLinkButton>
              ) : null}
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                All work
              </Link>
            </div>
          </header>

          <div className="mt-10">
            {detail.media?.kind === "videos" ? (
              <ProjectMedia media={detail.media} />
            ) : (
              <>
                <div className="relative h-60 overflow-hidden rounded-2xl border border-white/8 bg-[#08080b] sm:h-64">
                  <ProjectVisual visual={project.visual} />
                </div>
                {detail.media ? (
                  <div className="mt-6">
                    <ProjectMedia media={detail.media} />
                  </div>
                ) : null}
              </>
            )}
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_250px] md:gap-14">
            <div className="space-y-8">
              <DetailSection label="The problem" as="h2">
                <p>{detail.problem}</p>
              </DetailSection>

              <DetailSection label="Why I built it" as="h2">
                <p>{detail.why}</p>
              </DetailSection>

              <DetailSection label="What it does" as="h2">
                <BulletList items={detail.what} />
              </DetailSection>

              {detail.how ? (
                <DetailSection label="How it works" as="h2">
                  <BulletList items={detail.how} />
                </DetailSection>
              ) : null}

              {detail.intended ? (
                <DetailSection label="Intended benefit" as="h2">
                  <p>{detail.intended}</p>
                </DetailSection>
              ) : null}

              {detail.limits ? (
                <DetailSection label="Scope and limitations" as="h2">
                  <BulletList items={detail.limits} />
                </DetailSection>
              ) : null}
            </div>

            <aside className="space-y-6 md:sticky md:top-32 md:self-start">
              <div>
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  Status
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {project.status}
                </p>
              </div>

              <div>
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  My role
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {detail.role}
                </p>
              </div>

              {detail.audience ? (
                <div>
                  <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                    Who it’s for
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {detail.audience}
                  </p>
                </div>
              ) : null}

              <div>
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  Stack
                </h2>
                <div className="mt-2.5">
                  <StackTags items={detail.stack} />
                </div>
              </div>

              <div>
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  Links
                </h2>
                <div className="mt-2.5 flex flex-col gap-2">
                  {project.links.map((link) => (
                    <ExternalLinkButton
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      icon={link.icon}
                      variant="secondary"
                      className="w-full justify-between"
                    >
                      {link.label}
                    </ExternalLinkButton>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <nav
            aria-label="More work"
            className="mt-16 flex flex-col gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              All work
            </Link>
            <Link
              href={`/work/${next.id}`}
              className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white sm:min-w-[220px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Next
              </span>
              <span className="inline-flex items-center gap-2 text-white">
                {next.name}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </nav>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </>
  );
}
