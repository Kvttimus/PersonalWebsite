"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingWords({ words, interval = 2200 }: { words: readonly string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className="inline-flex items-baseline">
      <span className="relative inline-block min-w-[9ch] text-accent">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[i]}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block"
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="cursor-blink ml-0.5 inline-block w-[2px] h-[1em] translate-y-[2px] bg-accent" aria-hidden />
    </span>
  );
}
