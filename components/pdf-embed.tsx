import { FileText, Download } from "lucide-react";

type PdfEmbedProps = {
  /** Path to the PDF, relative to /public (e.g. "/figgy-poster.pdf"). */
  src: string;
  /** Caption shown above the viewer. */
  title?: string;
  /** Height of the inline viewer. */
  height?: number;
};

export function PdfEmbed({ src, title = "PDF", height = 720 }: PdfEmbedProps) {
  return (
    <figure className="my-8 not-prose">
      <div className="flex items-center justify-between gap-3 rounded-t-lg border border-border border-b-0 px-4 py-2 font-mono text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <FileText className="size-3.5" /> {title}
        </span>
        <a
          href={src}
          download
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          download <Download className="size-3" />
        </a>
      </div>

      <object
        data={src}
        type="application/pdf"
        className="w-full rounded-b-lg border border-border bg-black/20"
        style={{ height }}
      >
        {/* Fallback for browsers that won't render PDFs inline */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-b-lg border border-border p-8 text-center text-sm text-muted">
          <p>Your browser can&apos;t display the PDF inline.</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            open the poster in a new tab <Download className="size-3" />
          </a>
        </div>
      </object>
    </figure>
  );
}
