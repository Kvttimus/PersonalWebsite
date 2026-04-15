import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ContentFrontmatter } from "@/lib/content";
import { cn } from "@/lib/cn";

type Props = {
  slug: string;
  collection: "projects" | "experience";
  frontmatter: ContentFrontmatter;
};

export function ContentCard({ slug, collection, frontmatter }: Props) {
  const href = frontmatter.hasDetail ? `/${collection}/${slug}` : frontmatter.link ?? null;
  const isExternal = href && !href.startsWith("/");

  const inner = (
    <article
      className={cn(
        "group relative h-full rounded-lg border border-border bg-card p-5 transition-colors",
        href && "hover:border-accent",
      )}
    >
      {frontmatter.cover && (
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md border border-border">
          <Image
            src={frontmatter.cover}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {frontmatter.role && frontmatter.organization && (
            <p className="font-mono text-xs text-accent mb-1">
              {frontmatter.role} · {frontmatter.organization}
            </p>
          )}
          <h3 className="font-semibold tracking-tight text-lg leading-tight">{frontmatter.title}</h3>
          {frontmatter.dateRange && (
            <p className="font-mono text-xs text-muted mt-1">{frontmatter.dateRange}</p>
          )}
        </div>
        {href && (
          <ArrowUpRight className="size-4 shrink-0 text-muted group-hover:text-accent transition-colors" />
        )}
      </div>

      <p className="mt-3 text-sm text-muted leading-relaxed">{frontmatter.blurb}</p>

      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {frontmatter.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );

  if (!href) return inner;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  );
}
