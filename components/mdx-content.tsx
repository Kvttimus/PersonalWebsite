import { MDXRemote } from "next-mdx-remote/rsc";

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-body">
      <MDXRemote source={source} />
    </div>
  );
}
