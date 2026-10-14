"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = [
  "Hola",
  "Hello",
  "Bonjour",
  "Welkom",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Salve",
  "Hallo",
  "Bem-vindo",
];

const EXIT_EASE = [0.76, 0, 0.24, 1] as const;
const WORD_EASE = [0.33, 1, 0.68, 1] as const;

function useLoaderProgress(instant: boolean) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (instant) {
      setProgress(100);
      setIsComplete(true);
      return;
    }
    const start = performance.now();
    let ready = false;
    let raf = 0;
    let smooth = 0;
    let lastEmitted = -1;
    let prereqs = 2;
    const mark = () => {
      if (--prereqs <= 0) ready = true;
    };
    if (document.readyState === "complete") mark();
    else window.addEventListener("load", mark, { once: true });
    if ("fonts" in document) document.fonts.ready.then(mark).catch(mark);
    else mark();

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = 90 * (1 - Math.exp(-elapsed / 650));
      const finished = (ready && elapsed >= 300) || elapsed >= 3500;
      const target = finished ? 100 : Math.min(raw, ready ? 96 : 90);
      smooth += (target - smooth) * 0.22;
      if (finished && target - smooth < 0.4) smooth = 100;
      const rounded = Math.round(smooth);
      if (rounded !== lastEmitted) {
        lastEmitted = rounded;
        setProgress(rounded);
      }
      if (smooth >= 100) {
        setIsComplete(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  return { progress, isComplete };
}

const overlayVariants = {
  initial: { y: 0 },
  exit: {
    y: "-100vh",
    transition: { duration: 1.1, ease: EXIT_EASE, delay: 0.15 },
  },
};

export default function Intro() {
  const reduceMotion = useReducedMotion() ?? false;
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const { progress, isComplete } = useLoaderProgress(reduceMotion);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    setDims({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (isComplete) setOpen(false);
  }, [isComplete]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const x = Math.min(100, Math.max(0, progress));
  const wordIndex = Math.min(
    WORDS.length - 1,
    Math.floor((x / 100) * WORDS.length),
  );
  const longestWord = WORDS.reduce((a, b) => (b.length > a.length ? b : a), "");
  const { width, height } = dims;

  const lineInitial = `M0 ${height} Q${width / 2} ${height + 300} ${width} ${height}`;
  const lineExit = `M0 ${height} Q${width / 2} ${height} ${width} ${height}`;
  const fillInitial = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;
  const fillExit = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          variants={overlayVariants}
          initial="initial"
          exit="exit"
          className="fixed left-0 top-0 z-[200] h-screen w-screen bg-black"
          style={{ willChange: "transform" }}
        >
          {width > 0 && (
            <>
              {!isMobile && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
                  style={{ backgroundColor: "#ffffff", willChange: "transform, opacity" }}
                  animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0.2, 0.08] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <div className="absolute inset-0 z-[2] flex items-center justify-center">
                <div className="flex items-center overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="mr-3 block h-2.5 w-2.5 rounded-full bg-white"
                  />
                  <div className="relative overflow-hidden">
                    <span className="invisible block text-5xl font-light leading-[1.6] md:text-6xl">
                      {longestWord}
                    </span>
                    <motion.span
                      key={wordIndex}
                      initial={{ y: "35%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.4, ease: WORD_EASE }}
                      className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-5xl font-light leading-[1.6] text-white md:text-6xl"
                    >
                      {WORDS[wordIndex]}
                    </motion.span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 z-[2] flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-white"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-white opacity-60">
                  Loading experience
                </span>
              </div>

              <div className="absolute bottom-4 right-6 z-[2] flex items-end tabular-nums md:right-10">
                <span className="text-[18vw] leading-none tracking-tighter text-white md:text-[12vw]">
                  {String(Math.round(x)).padStart(2, "0")}
                </span>
                <span className="mb-[2vw] ml-1 text-[4vw] font-light text-white md:mb-[1.5vw] md:text-[2.5vw]">
                  %
                </span>
              </div>

              {isMobile ? (
                <div className="absolute bottom-0 left-0 z-[3] h-[3px] w-full">
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  />
                  <motion.div
                    className="absolute inset-0 origin-left bg-white"
                    animate={{ scaleX: x / 100 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  />
                </div>
              ) : (
                <>
                  <svg
                    className="absolute left-0 top-0 z-[3] w-full"
                    style={{ height: "calc(100% + 300px)" }}
                  >
                    <motion.path
                      variants={{
                        initial: { d: lineInitial, transition: { duration: 1.7, ease: EXIT_EASE } },
                        exit: { d: lineExit, transition: { duration: 1.7, ease: EXIT_EASE, delay: 0.3 } },
                      }}
                      initial="initial"
                      exit="exit"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth={4}
                      vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                      variants={{
                        initial: { d: lineInitial, transition: { duration: 1.7, ease: EXIT_EASE } },
                        exit: { d: lineExit, transition: { duration: 1.7, ease: EXIT_EASE, delay: 0.3 } },
                      }}
                      initial="initial"
                      exit="exit"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth={4}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      pathLength={1}
                      strokeDasharray="1 1"
                      animate={{ strokeDashoffset: 1 - x / 100 }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                    />
                  </svg>
                  <svg
                    className="absolute left-0 top-0 z-[0] w-full"
                    style={{ height: "calc(100% + 300px)" }}
                  >
                    <motion.path
                      variants={{
                        initial: { d: fillInitial, transition: { duration: 1.7, ease: EXIT_EASE } },
                        exit: { d: fillExit, transition: { duration: 1.7, ease: EXIT_EASE, delay: 0.3 } },
                      }}
                      initial="initial"
                      exit="exit"
                      style={{ fill: "#000000" }}
                    />
                  </svg>
                </>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
