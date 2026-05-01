import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PostListItem } from "@/components/blocks/PostListItem";
import { getAllPosts, formatPostDate, readingTimeLabel } from "@/lib/content";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Thinking · Pascal Frey · Notes, essays, observations",
  description:
    "Pascal Frey on brand strategy, design, AI, and the Swiss economy. Notes, essays, observations from 20 years of brand work.",
  alternates: {
    canonical: "/en/thinking",
    languages: { "de-CH": "/denken", en: "/en/thinking", "x-default": "/denken" },
    types: {
      "application/rss+xml": "/en/thinking/feed.xml",
    },
  },
};

export default function EnThinkingPage() {
  const posts = getAllPosts("en");

  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow>{t("thinking.eyebrow", "en")}</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            {t("thinking.heading", "en")}
          </Heading>
          <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
            {t("thinking.bridge", "en")}
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <ol className="divide-y divide-chalk border-t border-chalk">
            {posts.map((p) => (
              <li key={p.slug}>
                <PostListItem
                  href={`/en/thinking/${p.slug}`}
                  date={formatPostDate(p.date, "en")}
                  readingTime={readingTimeLabel(p, "en")}
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
            {t("thinking.footer", "en")}{" "}
            <a
              href="https://www.linkedin.com/in/pascalfrey/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>{" "}
            {t("thinking.footer.or", "en")}{" "}
            <a
              href="https://medium.com/@pascalfrey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              Medium
            </a>
            {t("thinking.footer.either", "en")}
          </p>
        </Container>
      </section>
    </main>
  );
}
