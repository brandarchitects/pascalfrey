import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts, getAllWork } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/ueber",
    "/arbeiten",
    "/denken",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const posts = getAllPosts("de").map((p) => ({
    url: `${SITE.url}/denken/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const works = getAllWork("de").map((w) => ({
    url: `${SITE.url}/arbeiten/${w.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...posts,
    ...works,
  ];
}
