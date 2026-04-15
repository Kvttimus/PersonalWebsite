"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm text-accent hover:opacity-80">
          ~/{site.name.toLowerCase()}
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-5 font-mono text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-accent",
                isActive(item.href) ? "text-accent" : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted hover:text-accent hover:border-accent"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <nav className="mx-auto max-w-3xl px-6 py-3 flex flex-col gap-2 font-mono text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-1 transition-colors hover:text-accent",
                  isActive(item.href) ? "text-accent" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
