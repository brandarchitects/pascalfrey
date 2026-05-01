import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Locale = "de" | "en";

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tag?: string;
  cover?: string;
  locale: Locale;
}

export interface WorkFrontmatter {
  title: string;
  client: string;
  year: number | string;
  role: string;
  tags?: string[];
  cover: string;
  summary: string;
  award?: string;
  external_url?: string;
  locale: Locale;
}

export interface Post extends PostFrontmatter {
  slug: string;
  body: string;
  readingTimeText: string;
  readingTimeMinutes: number;
}

export interface Work extends WorkFrontmatter {
  slug: string;
  body: string;
}

const CONTENT_ROOT = path.join(/* turbopackIgnore: true */ process.cwd(), "content");

function readDirSafe(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function parseFile<T extends { locale: Locale }>(
  filePath: string,
): { data: T; content: string; slug: string; locale: Locale } | null {
  const filename = path.basename(filePath);
  // expected filename: <slug>.<locale>.mdx
  const match = filename.match(/^(.+)\.(de|en)\.mdx?$/);
  if (!match) return null;
  const [, slug, localeRaw] = match;
  const locale = localeRaw as Locale;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw);
  const data = { ...(parsed.data as object), locale } as T;
  return { data, content: parsed.content, slug, locale };
}

export function getAllPosts(locale: Locale = "de"): Post[] {
  const dir = path.join(CONTENT_ROOT, "posts");
  const files = readDirSafe(dir).filter((f) => /\.(mdx|md)$/.test(f));
  const posts: Post[] = [];

  for (const file of files) {
    const parsed = parseFile<PostFrontmatter>(path.join(dir, file));
    if (!parsed || parsed.locale !== locale) continue;
    const stats = readingTime(parsed.content);
    posts.push({
      ...parsed.data,
      slug: parsed.slug,
      body: parsed.content,
      readingTimeText: stats.text,
      readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
    });
  }

  return posts.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );
}

export function getPostBySlug(slug: string, locale: Locale = "de"): Post | null {
  const dir = path.join(CONTENT_ROOT, "posts");
  const candidates = [
    path.join(dir, `${slug}.${locale}.mdx`),
    path.join(dir, `${slug}.${locale}.md`),
  ];
  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) continue;
    const parsed = parseFile<PostFrontmatter>(filePath);
    if (!parsed) return null;
    const stats = readingTime(parsed.content);
    return {
      ...parsed.data,
      slug: parsed.slug,
      body: parsed.content,
      readingTimeText: stats.text,
      readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
    };
  }
  return null;
}

export function getAllWork(locale: Locale = "de"): Work[] {
  const dir = path.join(CONTENT_ROOT, "work");
  const files = readDirSafe(dir).filter((f) => /\.(mdx|md)$/.test(f));
  const works: Work[] = [];

  for (const file of files) {
    const parsed = parseFile<WorkFrontmatter>(path.join(dir, file));
    if (!parsed || parsed.locale !== locale) continue;
    works.push({
      ...parsed.data,
      slug: parsed.slug,
      body: parsed.content,
    });
  }

  return works.sort((a, b) => {
    const ay = typeof a.year === "number" ? a.year : parseInt(String(a.year), 10);
    const by = typeof b.year === "number" ? b.year : parseInt(String(b.year), 10);
    return (Number.isFinite(by) ? by : 0) - (Number.isFinite(ay) ? ay : 0);
  });
}

export function getWorkBySlug(slug: string, locale: Locale = "de"): Work | null {
  const dir = path.join(CONTENT_ROOT, "work");
  const candidates = [
    path.join(dir, `${slug}.${locale}.mdx`),
    path.join(dir, `${slug}.${locale}.md`),
  ];
  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) continue;
    const parsed = parseFile<WorkFrontmatter>(filePath);
    if (!parsed) return null;
    return {
      ...parsed.data,
      slug: parsed.slug,
      body: parsed.content,
    };
  }
  return null;
}

export function formatPostDate(date: string, locale: Locale = "de"): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(locale === "en" ? "en-GB" : "de-CH", {
    year: "numeric",
    month: "long",
  });
}

export function readingTimeLabel(post: Post, locale: Locale = "de"): string {
  return locale === "en"
    ? `${post.readingTimeMinutes} min read`
    : `${post.readingTimeMinutes} min lesen`;
}
