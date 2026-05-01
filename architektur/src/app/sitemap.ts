import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts, getAllWork } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes — paired with their locale counterparts for hreflang.
  const staticPairs: { de: string; en: string }[] = [
    { de: "/", en: "/en" },
    { de: "/ueber", en: "/en/about" },
    { de: "/arbeiten", en: "/en/work" },
    { de: "/denken", en: "/en/thinking" },
    { de: "/kontakt", en: "/en/contact" },
    { de: "/impressum", en: "/en/imprint" },
    { de: "/datenschutz", en: "/en/privacy" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPairs.flatMap((pair) =>
    [
      { path: pair.de, locale: "de" as const },
      { path: pair.en, locale: "en" as const },
    ].map((entry) => ({
      url: `${SITE.url}${entry.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: entry.path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "de-CH": `${SITE.url}${pair.de}`,
          en: `${SITE.url}${pair.en}`,
          "x-default": `${SITE.url}${pair.de}`,
        },
      },
    })),
  );

  const dePosts = getAllPosts("de");
  const enPosts = getAllPosts("en");
  const postEntries: MetadataRoute.Sitemap = [];
  for (const post of dePosts) {
    const enExists = enPosts.find((p) => p.slug === post.slug);
    postEntries.push({
      url: `${SITE.url}/denken/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: enExists
        ? {
            languages: {
              "de-CH": `${SITE.url}/denken/${post.slug}`,
              en: `${SITE.url}/en/thinking/${post.slug}`,
              "x-default": `${SITE.url}/denken/${post.slug}`,
            },
          }
        : undefined,
    });
    if (enExists) {
      postEntries.push({
        url: `${SITE.url}/en/thinking/${post.slug}`,
        lastModified: new Date(enExists.date),
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: {
          languages: {
            "de-CH": `${SITE.url}/denken/${post.slug}`,
            en: `${SITE.url}/en/thinking/${post.slug}`,
            "x-default": `${SITE.url}/denken/${post.slug}`,
          },
        },
      });
    }
  }

  const deWork = getAllWork("de");
  const enWork = getAllWork("en");
  const workEntries: MetadataRoute.Sitemap = [];
  for (const w of deWork) {
    const enExists = enWork.find((x) => x.slug === w.slug);
    workEntries.push({
      url: `${SITE.url}/arbeiten/${w.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: enExists
        ? {
            languages: {
              "de-CH": `${SITE.url}/arbeiten/${w.slug}`,
              en: `${SITE.url}/en/work/${w.slug}`,
              "x-default": `${SITE.url}/arbeiten/${w.slug}`,
            },
          }
        : undefined,
    });
    if (enExists) {
      workEntries.push({
        url: `${SITE.url}/en/work/${w.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
        alternates: {
          languages: {
            "de-CH": `${SITE.url}/arbeiten/${w.slug}`,
            en: `${SITE.url}/en/work/${w.slug}`,
            "x-default": `${SITE.url}/arbeiten/${w.slug}`,
          },
        },
      });
    }
  }

  return [...staticEntries, ...postEntries, ...workEntries];
}
