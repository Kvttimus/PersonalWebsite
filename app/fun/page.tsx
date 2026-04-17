import Image from "next/image";
import { funItems } from "@/content/fun";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import { FadeIn } from "@/components/fade-in";

export const metadata = { title: "fun" };

const categoryLabel: Record<string, string> = {
  art: "art",
  photo: "photo",
  travel: "travel",
  misc: "misc",
};

export default function FunPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <TerminalHeader>cat fun.txt</TerminalHeader>
      <PageTitle subtitle="the non-resume part of me: art, trips, photos, and other detours.">
        fun
      </PageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {funItems.map((item, i) => {
          const inner = (
            <article className="group rounded-lg border border-border bg-card overflow-hidden h-full flex flex-col">
              {item.cover ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-background to-card flex items-center justify-center">
                  <span className="font-mono text-xs text-muted">[ no image yet ]</span>
                </div>
              )}
              <div className="p-5 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent mb-2">
                  {categoryLabel[item.category]}
                </p>
                <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.caption}</p>
              </div>
            </article>
          );

          return (
            <FadeIn key={`${item.title}-${i}`} delay={i * 0.04}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
