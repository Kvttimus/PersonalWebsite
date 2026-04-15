import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, getProjects } from "@/lib/content";
import { MDXContent } from "@/components/mdx-content";
import { TerminalHeader } from "@/components/terminal-header";

export async function generateStaticParams() {
  return getProjects()
    .filter((p) => p.frontmatter.hasDetail)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.blurb,
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project || !project.frontmatter.hasDetail) notFound();

  const { frontmatter, body } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="size-3.5" /> all projects
      </Link>

      <TerminalHeader>cat {slug}.md</TerminalHeader>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-3 text-muted leading-relaxed">{frontmatter.blurb}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          {frontmatter.date && <span>{frontmatter.date}</span>}
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
