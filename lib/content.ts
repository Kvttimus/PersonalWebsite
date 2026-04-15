import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentFrontmatter = {
  title: string;
  blurb: string;
  date?: string;
  tags?: string[];
  cover?: string;
  hasDetail?: boolean;
  link?: string;
  role?: string;
  organization?: string;
  dateRange?: string;
  featured?: boolean;
};

export type ContentItem = {
  slug: string;
  frontmatter: ContentFrontmatter;
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readCollection(collection: string): ContentItem[] {
  const dir = path.join(CONTENT_ROOT, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => (f.endsWith(".mdx") || f.endsWith(".md")) && !f.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as ContentFrontmatter,
        body: content,
      };
    })
    .sort((a, b) => {
      const aDate = a.frontmatter.date ?? "";
      const bDate = b.frontmatter.date ?? "";
      return bDate.localeCompare(aDate);
    });
}

export function getProjects(): ContentItem[] {
  return readCollection("projects");
}

export function getProject(slug: string): ContentItem | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getExperience(): ContentItem[] {
  return readCollection("experience");
}

export function getExperienceEntry(slug: string): ContentItem | undefined {
  return getExperience().find((e) => e.slug === slug);
}
