import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PostListItem } from "@/components/blocks/PostListItem";
import {
  getAllPosts,
  formatPostDate,
  readingTimeLabel,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Denken · Pascal Frey · Notizen, Essays, Beobachtungen",
  description:
    "Pascal Frey über Markenstrategie, Design, KI und die Schweizer Wirtschaft. Notizen, Essays, Beobachtungen aus 20 Jahren Markenarbeit.",
  alternates: {
    canonical: "/denken",
    languages: { "de-CH": "/denken", en: "/en/thinking", "x-default": "/denken" },
    types: {
      "application/rss+xml": "/denken/feed.xml",
    },
  },
};

export default function DenkenPage() {
  const posts = getAllPosts("de");

  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow>Denken</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            Notizen, Essays, Beobachtungen.
          </Heading>
          <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
            Was mich beschäftigt — über Markenarbeit, Design und die Schweizer
            Wirtschaft. Manchmal kurz, manchmal lang. Immer ehrlich.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <ol className="divide-y divide-chalk border-t border-chalk">
            {posts.map((p) => (
              <li key={p.slug}>
                <PostListItem
                  href={`/denken/${p.slug}`}
                  date={formatPostDate(p.date, "de")}
                  readingTime={readingTimeLabel(p, "de")}
                  tag={p.tag}
                  title={p.title}
                  excerpt={p.excerpt}
                />
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container size="prose">
          <p className="text-[16px] leading-[1.5] text-gravel">
            Folgst du mir lieber auf{" "}
            <a
              href="https://www.linkedin.com/in/pascalfrey/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>{" "}
            oder{" "}
            <a
              href="https://medium.com/@pascalfrey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              Medium
            </a>
            ? Beides okay.
          </p>
        </Container>
      </section>
    </main>
  );
}
