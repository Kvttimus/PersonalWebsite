import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getExperience, getExperienceEntry } from "@/lib/content";
import { MDXContent } from "@/components/mdx-content";
import { TerminalHeader } from "@/components/terminal-header";

export async function generateStaticParams() {
  return getExperience()
    .filter((e) => e.frontmatter.hasDetail)
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(props: PageProps<"/experience/[slug]">) {
  const { slug } = await props.params;
  const entry = getExperienceEntry(slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.blurb,
  };
}

export default async function ExperienceDetailPage(props: PageProps<"/experience/[slug]">) {
  const { slug } = await props.params;
  const entry = getExperienceEntry(slug);
  if (!entry || !entry.frontmatter.hasDetail) notFound();

  const { frontmatter, body } = entry;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Link
        href="/experience"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="size-3.5" /> all experience
      </Link>

      <TerminalHeader>cat {slug}.md</TerminalHeader>

      <header className="mb-10">
        {frontmatter.role && frontmatter.organization && (
          <p className="font-mono text-sm text-accent mb-2">
            {frontmatter.role} · {frontmatter.organization}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-3 text-muted leading-relaxed">{frontmatter.blurb}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          {frontmatter.dateRange && <span>{frontmatter.dateRange}</span>}
          {frontmatter.tags?.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded border border-border">
              {t}
            </span>
          ))}
          {frontmatter.link && (
            <a
              href={frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              visit <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </header>

      <MDXContent source={body} />
    </div>
  );
}
