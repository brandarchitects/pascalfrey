import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { Hero } from "@/components/blocks/Hero";
import { AwardsStrip } from "@/components/blocks/AwardsStrip";
import { LogoWall } from "@/components/blocks/LogoWall";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { PostListItem } from "@/components/blocks/PostListItem";
import { ClosingStatement } from "@/components/blocks/ClosingStatement";
import { AWARDS, CLIENT_LOGOS } from "@/lib/data";
import {
  getAllPosts,
  getAllWork,
  formatPostDate,
  readingTimeLabel,
} from "@/lib/content";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pascal Frey · Brand Consultant & Creative Director · Switzerland",
  description:
    "Pascal Frey has been building brands for Swiss companies for over 20 years. Creative Director at Swisscom, founder of Brand Architects.",
  alternates: {
    canonical: "/en",
    languages: { "de-CH": "/", en: "/en", "x-default": "/" },
  },
};

export default function EnHome() {
  const works = getAllWork("en");
  const fallbackWorks = works.length ? works : getAllWork("de");
  const posts = getAllPosts("en");
  const fallbackPosts = posts.length ? posts : getAllPosts("de");

  return (
    <main>
      <Hero
        variant="split"
        headline={t("home.hero.headline", "en")}
        bio={t("home.hero.bio", "en")}
      />

      <AwardsStrip
        eyebrow={t("home.awards.eyebrow", "en")}
        bridgeText={t("home.awards.bridge", "en")}
        awards={AWARDS}
      />

      <section className="py-24" aria-labelledby="work-teaser-heading">
        <Container>
          <div className="mb-12 max-w-[60ch]">
            <Eyebrow>{t("home.work.eyebrow", "en")}</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              id="work-teaser-heading"
              className="mt-4"
            >
              {t("home.work.heading", "en")}
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackWorks.slice(0, 3).map((w) => (
              <li key={w.slug}>
                <ProjectCard
                  href={`/en/work/${w.slug}`}
                  cover={w.cover}
                  client={w.client}
                  year={w.year}
                  title={w.title}
                  role={w.role}
                />
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <PillButton href="/en/work" variant="ghost">
              {t("common.allWork", "en")}
            </PillButton>
          </div>
        </Container>
      </section>

      <LogoWall eyebrow={t("home.logos.eyebrow", "en")} logos={CLIENT_LOGOS} />

      <section className="py-24" aria-labelledby="thinking-teaser-heading">
        <Container>
          <div className="mb-8 max-w-[60ch]">
            <Eyebrow>{t("home.thinking.eyebrow", "en")}</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              id="thinking-teaser-heading"
              className="mt-4"
            >
              {t("home.thinking.heading", "en")}
            </Heading>
          </div>
          <ol className="divide-y divide-chalk border-t border-chalk">
            {fallbackPosts.slice(0, 3).map((p) => (
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
          <div className="mt-12">
            <PillButton href="/en/thinking" variant="ghost">
              {t("common.allPosts", "en")}
            </PillButton>
          </div>
        </Container>
      </section>

      <ClosingStatement
        statement={t("home.closing.statement", "en")}
        bridgeText={t("home.closing.bridge", "en")}
        cta={{ label: t("home.closing.cta", "en"), href: "/en/contact" }}
      />
    </main>
  );
}
