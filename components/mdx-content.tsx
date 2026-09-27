import { MDXRemote } from "next-mdx-remote/rsc";
import { PdfEmbed } from "@/components/pdf-embed";

const components = {
  PdfEmbed,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-body">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
