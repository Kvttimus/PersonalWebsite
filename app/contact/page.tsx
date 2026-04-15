import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import { FadeIn } from "@/components/fade-in";

export const metadata = { title: "contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <TerminalHeader>./contact.sh</TerminalHeader>
      <PageTitle subtitle="the best ways to reach me. emails are read; cold DMs too.">
        contact
      </PageTitle>

      <FadeIn>
        <div className="rounded-lg border border-border bg-card divide-y divide-border">
          {site.socials.map((s) => {
            const isInternal = s.href.startsWith("/");
            const isMailto = s.href.startsWith("mailto:");
            const linkProps = isInternal
              ? {}
              : { target: "_blank" as const, rel: "noopener noreferrer" };

            const content = (
              <div className="flex items-center justify-between px-5 py-4 group hover:bg-background transition-colors">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                  <p className="mt-1 text-foreground group-hover:text-accent transition-colors">
                    {s.handle}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted group-hover:text-accent transition-colors" />
              </div>
            );

            if (isInternal) {
              return (
                <Link key={s.label} href={s.href}>
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={s.label}
                href={s.href}
                {...linkProps}
                {...(isMailto ? {} : {})}
              >
                {content}
              </a>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}
