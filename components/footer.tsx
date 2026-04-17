import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted font-mono">
        <span>
          <span className="text-accent">$</span> echo &quot;made with care by {site.name.toLowerCase()}&quot;
        </span>
        <div className="flex gap-4">
          {site.socials.slice(0, 3).map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {s.label.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
