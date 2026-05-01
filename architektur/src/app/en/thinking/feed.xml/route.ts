import { getAllPosts } from "@/lib/content";
import { buildRssFeed } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts("en");
  const xml = buildRssFeed(posts, "en");
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
