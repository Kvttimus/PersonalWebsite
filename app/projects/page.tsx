import { getProjects } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import { FadeIn } from "@/components/fade-in";

export const metadata = { title: "projects" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <TerminalHeader>ls ./projects</TerminalHeader>
      <PageTitle subtitle="things i've built — from weekend experiments to more serious work.">
        projects
      </PageTitle>

      {projects.length === 0 ? (
        <p className="text-muted font-mono text-sm">
          # no projects yet. add an .mdx file to content/projects/ to get started.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <ContentCard slug={p.slug} collection="projects" frontmatter={p.frontmatter} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
