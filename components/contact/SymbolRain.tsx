/**
 * Decorative kinetic character field for the final CTA section.
 *
 * Purely presentational: it is hidden from assistive technology, ignores
 * pointer events, and stops completely under `prefers-reduced-motion`.
 *
 * Characters are produced from a fixed seed so the server and client render
 * identical markup (no hydration mismatch). Each column is rendered twice and
 * translated by exactly -50%, which makes the loop seamless; some columns run
 * in reverse so the field drifts both upward and downward.
 *
 * The glyph set is intentionally small — digits plus a few structural symbols.
 * Dollar signs are decorative texture only, not figures of any kind.
 */
const CHARSET = "0123456789$+/{}<>";

/** Tiny deterministic PRNG (mulberry32) — identical output on server + client. */
function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLUMN_LENGTH = 60;
const COLUMN_COUNT = 14;

const FONT_SIZES = ["11px", "12px", "13px", "14px"];
const LINE_HEIGHTS = ["1.15", "1.45", "1.05", "1.75", "1.3", "1.6"];
const DURATIONS = [58, 34, 47, 41, 63, 29, 52, 37, 44, 61, 31, 49, 55, 39];
const OPACITIES = [0.07, 0.11, 0.05, 0.14, 0.09, 0.12, 0.06, 0.1, 0.13, 0.08, 0.15, 0.06, 0.11, 0.09];
const BLURS = [
  null,
  "blur(1px)",
  null,
  null,
  "blur(1.5px)",
  null,
  "blur(1px)",
  null,
  null,
  "blur(1.5px)",
  null,
  null,
  "blur(1px)",
  null,
];

type ColumnSpec = {
  chars: string;
  duration: number;
  reverse: boolean;
  fontSize: string;
  lineHeight: string;
  opacity: number;
  blur: string | null;
  mobileHidden: boolean;
};

const COLUMNS: ColumnSpec[] = Array.from({ length: COLUMN_COUNT }, (_, i) => {
  const rand = seeded((i + 1) * 1013904223);
  const glyphs: string[] = [];
  for (let j = 0; j < COLUMN_LENGTH; j += 1) {
    glyphs.push(CHARSET[Math.floor(rand() * CHARSET.length)]);
  }

  return {
    chars: glyphs.join("\n"),
    duration: DURATIONS[i % DURATIONS.length],
    reverse: i % 2 === 0 || i % 5 === 0,
    fontSize: FONT_SIZES[i % FONT_SIZES.length],
    lineHeight: LINE_HEIGHTS[i % LINE_HEIGHTS.length],
    opacity: OPACITIES[i % OPACITIES.length],
    blur: BLURS[i % BLURS.length],
    // Keep phones uncluttered by showing every other column.
    mobileHidden: i % 2 === 1,
  };
});

export default function SymbolRain() {
  return (
    <div aria-hidden="true" className="symbol-rain">
      <div className="symbol-rain-columns">
        {COLUMNS.map((column, index) => (
          <div
            key={index}
            className={`symbol-rain-col ${column.mobileHidden ? "hidden md:block" : ""}`}
            style={{
              fontSize: column.fontSize,
              lineHeight: column.lineHeight,
              opacity: column.opacity,
              filter: column.blur ?? undefined,
            }}
          >
            <div
              className="symbol-rain-track"
              style={{
                animationDuration: `${column.duration}s`,
                animationDirection: column.reverse ? "reverse" : "normal",
              }}
            >
              <span>{column.chars}</span>
              <span>{column.chars}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="symbol-rain-edge" />
    </div>
  );
}
