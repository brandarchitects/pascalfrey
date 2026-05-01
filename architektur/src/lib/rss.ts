import type { Locale } from "./i18n";
import type { Post } from "./content";
import { SITE } from "./site";

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pubDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return new Date().toUTCString();
  return d.toUTCString();
}

export function buildRssFeed(posts: Post[], locale: Locale): string {
  const isEn = locale === "en";
  const title = isEn ? "Pascal Frey · Thinking" : "Pascal Frey · Denken";
  const description = isEn
    ? "Notes, essays, observations on brand work, design, and the Swiss economy."
    : "Notizen, Essays, Beobachtungen über Markenarbeit, Design und die Schweizer Wirtschaft.";
  const indexPath = isEn ? "/en/thinking" : "/denken";
  const detailPathPrefix = isEn ? "/en/thinking" : "/denken";
  const lang = isEn ? "en" : "de-CH";

  const items = posts
    .map((p) => {
      const link = `${SITE.url}${detailPathPrefix}/${p.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(p.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid>${link}</guid>`,
        `      <pubDate>${pubDate(p.date)}</pubDate>`,
        `      <description>${escapeXml(p.excerpt)}</description>`,
        p.tag ? `      <category>${escapeXml(p.tag)}</category>` : "",
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${SITE.url}${indexPath}</link>
    <description>${escapeXml(description)}</description>
    <language>${lang}</language>
    <atom:link href="${SITE.url}${indexPath}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}
