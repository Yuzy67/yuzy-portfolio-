import { ArrowUp } from "lucide-react";
import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center text-sm text-foreground-muted sm:text-left">
          <p className="text-foreground-secondary">{footer.copyright}</p>
          <p className="mt-1">{footer.builtWith}</p>
        </div>
        <a
          href="#main"
          aria-label="Back to top"
          className="group inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent-soft"
        >
          <ArrowUp
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}
