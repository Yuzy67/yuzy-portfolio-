import { marqueePhrases } from "@/lib/data";

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="marquee border-y border-white/8 bg-white/[0.02] py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {marqueePhrases.map((phrase) => (
              <span key={phrase} className="flex items-center">
                <span className="mx-3 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
                  {phrase}
                </span>
                <span className="text-[10px] text-white/30" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
