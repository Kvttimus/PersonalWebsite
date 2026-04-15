import { getExperience } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import { FadeIn } from "@/components/fade-in";

export const metadata = { title: "experience" };

export default function ExperiencePage() {
  const items = getExperience();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <TerminalHeader>ls ./experience</TerminalHeader>
      <PageTitle subtitle="clubs, hackathons, nonprofits, internships — places i've shown up.">
        experience
      </PageTitle>

      {items.length === 0 ? (
        <p className="text-muted font-mono text-sm">
          # no entries yet. add an .mdx file to content/experience/ to get started.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((e, i) => (
            <FadeIn key={e.slug} delay={i * 0.05}>
              <ContentCard slug={e.slug} collection="experience" frontmatter={e.frontmatter} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
