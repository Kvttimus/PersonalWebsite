import Link from "next/link";
import { Download } from "lucide-react";
import { TerminalHeader, PageTitle } from "@/components/terminal-header";
import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "resume" };

const RESUME_PATH = "/resume.pdf";

export default function ResumePage() {
  const pdfExists = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <TerminalHeader>open resume.pdf</TerminalHeader>
      <PageTitle subtitle="my resume — view below or download the PDF.">resume</PageTitle>

      {pdfExists ? (
        <>
          <div className="mb-6 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
            >
              <Download className="size-3.5" /> download pdf
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
            >
              open in new tab
            </a>
          </div>

          <div className="rounded-lg border border-border overflow-hidden bg-card">
            <object
              data={RESUME_PATH}
              type="application/pdf"
              className="w-full"
              style={{ height: "min(85vh, 900px)" }}
            >
              <div className="p-6 text-muted">
                Your browser can&rsquo;t display PDFs inline.{" "}
                <a href={RESUME_PATH} className="text-accent underline" download>
                  Download it instead.
                </a>
              </div>
            </object>
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-card p-8 font-mono text-sm">
          <p className="text-muted mb-3">
            <span className="text-accent">#</span> no resume uploaded yet
          </p>
          <p className="text-foreground">
            Drop your resume PDF at <code className="bg-background px-1.5 py-0.5 rounded border border-border">public/resume.pdf</code> and it&rsquo;ll appear here automatically.
          </p>
          <p className="mt-3 text-muted">
            In the meantime, see <Link href="/experience" className="text-accent underline">experience</Link> for what I&rsquo;ve been up to.
          </p>
        </div>
      )}
    </div>
  );
}
