import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getProjects, getExperience } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/experience", "/resume", "/fun", "/contact"];

  const projectRoutes = getProjects()
    .filter((p) => p.frontmatter.hasDetail)
    .map((p) => `/projects/${p.slug}`);

  const experienceRoutes = getExperience()
    .filter((e) => e.frontmatter.hasDetail)
    .map((e) => `/experience/${e.slug}`);

  const now = new Date();

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
}
