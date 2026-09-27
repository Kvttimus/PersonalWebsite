"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunCat, MoonCat } from "@/components/cat-icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {mounted ? (
        isDark ? <SunCat className="size-5" /> : <MoonCat className="size-5" />
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
}
