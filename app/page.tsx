import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { funItems } from "@/content/fun";
import { RotatingWords } from "@/components/rotating-words";
import { FadeIn } from "@/components/fade-in";
import { ContentCard } from "@/components/content-card";
import { TerminalHeader } from "@/components/terminal-header";
import { getProjects, getExperience } from "@/lib/content";
import Image from "next/image";

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-accent transition-colors"
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function Home() {
  const featuredProjects = getProjects()
    .filter((p) => p.frontmatter.featured)
    .slice(0, 3);

  const featuredExperience = getExperience()
    .filter((e) => e.frontmatter.featured)
    .slice(0, 3);

  const allProjects = getProjects().slice(0, 3);
  const allExperience = getExperience().slice(0, 3);

  const projectsPreview = featuredProjects.length ? featuredProjects : allProjects;
  const experiencePreview = featuredExperience.length ? featuredExperience : allExperience;

  const funPreview = funItems.slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-24 md:space-y-32">
      {/* Hero */}
      <section>
        <p className="font-mono text-sm text-muted mb-6">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
          hi, i&rsquo;m {site.fullName.toLowerCase()}.
          <br />
          i&rsquo;m a <RotatingWords words={site.rotatingWords} />
        </h1>

        <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">{site.heroIntro}</p>

        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            see projects <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            get in touch
          </Link>
        </div>
      </section>

      {/* About preview */}
      <FadeIn>
        <section>
          <TerminalHeader>cat about.txt</TerminalHeader>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">about</h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
            {site.aboutShort}
          </p>
          <SectionLink href="/about">read the full about</SectionLink>
        </section>
      </FadeIn>

      {/* Projects preview */}
      <FadeIn>
        <section>
          <TerminalHeader>ls ./projects</TerminalHeader>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            selected projects
          </h2>
          {projectsPreview.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsPreview.map((p) => (
                <ContentCard
                  key={p.slug}
                  slug={p.slug}
                  collection="projects"
                  frontmatter={p.frontmatter}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-card p-6 font-mono text-sm">
              <p className="text-muted mb-2">
                <span className="text-accent">#</span> no projects yet
              </p>
              <p className="text-foreground">
                Copy <code className="bg-background px-1.5 py-0.5 rounded border border-border">content/projects/_template.mdx</code> to a new file (e.g. <code className="bg-background px-1.5 py-0.5 rounded border border-border">my-first-project.mdx</code>) and fill it in. It&rsquo;ll appear here automatically.
              </p>
            </div>
          )}
          <SectionLink href="/projects">see all projects</SectionLink>
        </section>
      </FadeIn>

      {/* Experience preview */}
      <FadeIn>
        <section>
          <TerminalHeader>ls ./experience</TerminalHeader>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            experience
          </h2>
          {experiencePreview.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiencePreview.map((e) => (
                <ContentCard
                  key={e.slug}
                  slug={e.slug}
                  collection="experience"
                  frontmatter={e.frontmatter}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-card p-6 font-mono text-sm">
              <p className="text-muted mb-2">
                <span className="text-accent">#</span> no experience entries yet
              </p>
              <p className="text-foreground">
                Copy <code className="bg-background px-1.5 py-0.5 rounded border border-border">content/experience/_template.mdx</code> to a new file (e.g. <code className="bg-background px-1.5 py-0.5 rounded border border-border">hackathon-2026.mdx</code>) for each activity, internship, or club.
              </p>
            </div>
          )}
          <SectionLink href="/experience">see everything</SectionLink>
        </section>
      </FadeIn>

      {/* Fun preview */}
      {funPreview.length > 0 && (
        <FadeIn>
          <section>
            <TerminalHeader>cat fun.txt</TerminalHeader>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              the non-resume stuff
            </h2>
            <p className="text-muted mb-6 max-w-xl">
              art, photos, trips, and other detours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {funPreview.map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="group rounded-md border border-border bg-card overflow-hidden"
                >
                  {item.cover ? (
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gradient-to-br from-background to-card flex items-center justify-center">
                      <span className="font-mono text-[10px] text-muted">[ img ]</span>
                    </div>
                  )}
                  <div className="p-3">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-accent">
                      {item.category}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-tight line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <SectionLink href="/fun">see more fun stuff</SectionLink>
          </section>
        </FadeIn>
      )}

      {/* Contact CTA */}
      <FadeIn>
        <section>
          <TerminalHeader>./contact.sh</TerminalHeader>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            say hi
          </h2>
          <p className="text-muted mb-6 max-w-xl">
            best way to reach me is email. i also check GitHub and LinkedIn, though less often.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-sm">
            {site.socials.slice(0, 4).map((s) => {
              const isExternal = !s.href.startsWith("/") && !s.href.startsWith("mailto:");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                >
                  {s.label.toLowerCase()}
                </a>
              );
            })}
          </div>
          <SectionLink href="/contact">full contact page</SectionLink>
        </section>
      </FadeIn>
    </div>
  );
}
