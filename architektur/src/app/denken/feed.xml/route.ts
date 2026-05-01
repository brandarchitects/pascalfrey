import { getAllPosts } from "@/lib/content";
import { buildRssFeed } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts("de");
  const xml = buildRssFeed(posts, "de");
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
