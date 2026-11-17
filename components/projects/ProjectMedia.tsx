import { ImageIcon } from "lucide-react";
import type { ProjectMedia as ProjectMediaKind } from "@/lib/data";

export default function ProjectMedia({ media }: { media: ProjectMediaKind }) {
  if (media.kind === "videos") {
    return (
      <div>
        <div className="grid gap-5 sm:grid-cols-2">
          {media.videos.map((video) => (
            <figure key={video.src} className="mx-auto w-full max-w-[264px]">
              <div className="rounded-[28px] border border-white/12 bg-black p-1.5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    preload="none"
                    playsInline
                    loop
                    poster={video.poster}
                    width={video.width}
                    height={video.height}
                    aria-label={`${video.label} — demo video`}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
                <span className="text-xs leading-snug text-zinc-400">
                  {video.label}
                </span>
                <span className="shrink-0 font-mono text-[10px] text-zinc-500">
                  {video.duration}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        {media.note ? (
          <p className="mt-4 text-center text-xs text-zinc-500">{media.note}</p>
        ) : null}
      </div>
    );
  }

  if (media.kind === "screenshots") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {media.shots.map((shot) => (
          <li
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center">
      <span className="mx-auto flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-400">
        <ImageIcon size={18} aria-hidden="true" />
      </span>
      <p className="mt-4 text-sm font-medium text-zinc-300">{media.title}</p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-zinc-500">
        {media.note}
      </p>
    </div>
  );
}