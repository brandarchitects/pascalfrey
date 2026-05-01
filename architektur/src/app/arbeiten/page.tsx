import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Arbeiten · Pascal Frey · Markenberater & Creative Director",
  description:
    "Ausgewählte Markenarbeiten von Pascal Frey für Swisscom, Migros, Geberit, Raiffeisen, Helsana und weitere Schweizer Unternehmen.",
};

export default function ArbeitenPage() {
  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow variant="fh">Arbeiten</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            Eine Auswahl aus 20 Jahren.
          </Heading>
          <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
            Diese Projekte zeigen die Bandbreite — von Markenrefresh über
            Architektur bis Templating-Systeme.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <ProjectCard
                  href={`/arbeiten/${p.slug}`}
                  cover={p.cover}
                  client={p.client}
                  year={p.year}
                  title={p.title}
                  role={p.role}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container size="prose">
          <p className="text-[16px] leading-[1.5] text-gravel">
            Mehr Cases auf Anfrage. Schreib mir —{" "}
            <a
              href="mailto:pascal@pascalfrey.ch"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              pascal@pascalfrey.ch
            </a>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
