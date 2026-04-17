import { site } from "@/content/site";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export const metadata = { title: "about" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <TerminalHeader>cat about.txt</TerminalHeader>
      <PageTitle subtitle={`a little more about ${site.name.toLowerCase()}.`}>about</PageTitle>

      <FadeIn>
        <div className="prose-body text-base leading-relaxed">
          <p>{site.aboutShort}</p>

          <h2>what i&rsquo;m into</h2>
          <ul>
            <li>Replace this list with your real interests — what you read, make, think about.</li>
            <li>Another thing you spend time on.</li>
            <li>A running obsession or quiet side project.</li>
          </ul>

          <h2>where to find me</h2>
          <p>
            The best way to reach me is via the{" "}
            <Link href="/contact">contact page</Link>. If you want to see what I&rsquo;ve
            been building, check out <Link href="/projects">projects</Link> and{" "}
            <Link href="/experience">experience</Link>.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
