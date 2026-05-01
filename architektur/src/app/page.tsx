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

export default function Home() {
  const works = getAllWork("de").slice(0, 3);
  const posts = getAllPosts("de").slice(0, 3);

  return (
    <main>
      <Hero
        variant="split"
        headline="Marken, die bleiben."
        bio="Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer Unternehmen. Aktuell als Creative Director bei Swisscom. Gründer von Brand Architects. Arbeitete für Migros, SBB, Geberit, Raiffeisen, Helsana und andere."
      />

      <AwardsStrip
        eyebrow="Ausgezeichnet"
        bridgeText="Awards sind kein Ziel. Aber sie sind ein Hinweis darauf, dass Strategie und Gestaltung wirken."
        awards={AWARDS}
      />

      <section className="py-24" aria-labelledby="work-teaser-heading">
        <Container>
          <div className="mb-12 max-w-[60ch]">
            <Eyebrow variant="fh">Arbeiten</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              id="work-teaser-heading"
              className="mt-4"
            >
              Eine Auswahl.
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => (
              <li key={w.slug}>
                <ProjectCard
                  href={`/arbeiten/${w.slug}`}
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
            <PillButton href="/arbeiten" variant="ghost">
              Alle Arbeiten
            </PillButton>
          </div>
        </Container>
      </section>

      <LogoWall eyebrow="Vertrauen seit 20 Jahren" logos={CLIENT_LOGOS} />

      <section className="py-24" aria-labelledby="thinking-teaser-heading">
        <Container>
          <div className="mb-8 max-w-[60ch]">
            <Eyebrow variant="fh">Denken</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              id="thinking-teaser-heading"
              className="mt-4"
            >
              Notizen, Essays, Beobachtungen.
            </Heading>
          </div>
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
          <div className="mt-12">
            <PillButton href="/denken" variant="ghost">
              Alle Beiträge
            </PillButton>
          </div>
        </Container>
      </section>

      <ClosingStatement
        statement="Good design, is good business."
        bridgeText="Wenn du an einem Projekt arbeitest, das Substanz haben soll, schreib mir."
        cta={{ label: "Kontakt", href: "/kontakt" }}
      />
    </main>
  );
}
