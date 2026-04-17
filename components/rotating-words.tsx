"use client";

import { useEffect, useState } from "react";

type Phase = "typing" | "holding" | "deleting";

export function RotatingWords({
  words,
  holdMs = 1600,
  typeMs = 70,
  deleteMs = 40,
}: {
  words: readonly string[];
  holdMs?: number;
  typeMs?: number;
  deleteMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [phase, setPhase] = useState<Phase>("holding");

  useEffect(() => {
    if (words.length <= 1) return;

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), holdMs);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length === 0) {
        setIndex((n) => (n + 1) % words.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(() => setText((s) => s.slice(0, -1)), deleteMs);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      const target = words[index];
      if (text === target) {
        setPhase("holding");
        return;
      }
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), typeMs);
      return () => clearTimeout(t);
    }
  }, [phase, text, index, words, holdMs, typeMs, deleteMs]);

  const cursorClass = phase === "holding" ? "cursor-blink" : "";

  return (
    <span className="inline-flex items-baseline">
      <span className="text-accent">{text}</span>
      <span
        className={`${cursorClass} ml-0.5 inline-block w-[2px] h-[1em] translate-y-[2px] bg-accent`}
        aria-hidden
      />
    </span>
  );
}
