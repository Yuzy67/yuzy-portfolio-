import { marqueePhrases } from "@/lib/data";

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="marquee border-y border-border bg-surface/40 py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {marqueePhrases.map((phrase) => (
              <span key={phrase} className="flex items-center">
                <span className="whitespace-nowrap px-7 font-mono text-sm uppercase tracking-[0.28em] text-foreground-muted">
                  {phrase}
                </span>
                <span className="text-[10px] text-accent/80">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
