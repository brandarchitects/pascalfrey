import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Über Pascal Frey · Markenberater & Creative Director",
  description:
    "20+ Jahre Markenarbeit für Schweizer Unternehmen. Werdegang, Skills, Haltung. Aktuell Creative Director bei Swisscom, Gründer Brand Architects.",
};

interface CareerStep {
  years: string;
  role: string;
  description: string;
}

const CAREER: CareerStep[] = [
  {
    years: "2022 — heute",
    role: "Creative Director · Swisscom Group Communications",
    description:
      "Markenführung NEO, Festival-Konzepte, Designsystem-Arbeit.",
  },
  {
    years: "2018 — heute",
    role: "Gründer · Brand Architects",
    description:
      "Markenberatungs-Netzwerk, das wie ein kleines Studio arbeitet, mit Senior-Expertise auftritt.",
  },
  {
    years: "2014 — 2022",
    role: "Creative Director · Agentur & Industrie",
    description:
      "Designteams aufgebaut, Marken refresht, Markensysteme dokumentiert.",
  },
  {
    years: "2003 — 2014",
    role: "Designer & Senior Designer",
    description:
      "Erste Stationen in der Schweizer Agenturlandschaft, Schwerpunkt Corporate Design und Editorial.",
  },
];

interface SkillGroup {
  category: string;
  tags: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: "Markenstrategie",
    tags: [
      "Positionierung",
      "Markenarchitektur",
      "Brand-Naming",
      "Brand-Voice",
    ],
  },
  {
    category: "Design",
    tags: [
      "Corporate Design",
      "Designsysteme",
      "Typografie",
      "Editorial Design",
    ],
  },
  {
    category: "Führung",
    tags: [
      "Creative Direction",
      "Designteam-Aufbau",
      "Agentur-Briefings",
      "Stakeholder-Management",
    ],
  },
];

export default function UeberPage() {
  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow variant="fh">Über</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            Pascal Frey.
          </Heading>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="prose">
          <div className="space-y-6 text-cinder">
            <p className="text-[20px] leading-[1.5]">
              Pascal Frey ist Markenberater, Designer und Creative Director. Er
              arbeitet seit 2003 an der Schnittstelle zwischen Strategie und
              Gestaltung — für Schweizer Unternehmen, die Marke nicht als
              Dekoration verstehen, sondern als Geschäftsentscheidung.
            </p>
            <p className="text-[18px] leading-[1.6]">
              Seit 2022 ist er Creative Director bei Swisscom in der Group
              Communications. Davor leitete er Designteams in Agentur und
              Industrie, baute Marken auf, refreshte sie, dokumentierte sie.
              2018 gründete er Brand Architects — ein Netzwerk für
              Markenberatung, das wie ein kleines Studio arbeitet, aber mit
              Senior-Expertise auftritt.
            </p>
            <p className="text-[18px] leading-[1.6]">
              Seine Arbeit ist getragen von der Überzeugung, dass gute Marken
              nicht aus Trends entstehen, sondern aus präziser Beobachtung,
              klaren Entscheidungen und der Geduld, lange genug an einer Idee
              zu bleiben.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container>
          <div className="mb-12 max-w-[60ch]">
            <Eyebrow variant="fh">Werdegang</Eyebrow>
          </div>
          <ol className="divide-y divide-chalk border-t border-chalk">
            {CAREER.map((step) => (
              <li key={step.years} className="grid gap-4 py-8 sm:grid-cols-[160px_1fr]">
                <div className="text-[14px] font-medium text-obsidian">
                  {step.years}
                </div>
                <div>
                  <h3 className="font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian">
                    {step.role}
                  </h3>
                  <p className="mt-2 max-w-[65ch] text-[16px] leading-[1.5] text-gravel">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24" aria-labelledby="skills-heading">
        <Container>
          <div className="mb-12">
            <Eyebrow variant="fh" id="skills-heading">
              Skills · Expertise
            </Eyebrow>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <Eyebrow variant="fh">{s.category}</Eyebrow>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-chalk px-3 py-1 text-[13px] font-medium text-obsidian"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-powder py-30">
        <Container size="prose">
          <Eyebrow variant="fh">Haltung</Eyebrow>
          <Heading as="h2" size="lg" className="mt-6 max-w-[30ch]">
            Marke ist eine Geschäfts­entscheidung, keine Geschmacks­frage.
          </Heading>
          <p className="mt-8 text-[16px] leading-[1.5] text-gravel">
            Ich arbeite mit Unternehmen, die ihre Marke als Werkzeug sehen,
            nicht als Bühne. Das macht die Arbeit fokussiert und wirtschaftlich.
            Und es macht den Erfolg messbar.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container size="prose">
          <Stack gap={12}>
            <p className="text-[16px] leading-[1.5] text-gravel">
              Mehr Fragen? Schreib mir —{" "}
              <a
                href="mailto:pascal@pascalfrey.ch"
                className="font-display text-[24px] font-light text-obsidian underline-offset-4 hover:underline"
              >
                pascal@pascalfrey.ch
              </a>
              .
            </p>
          </Stack>
        </Container>
      </section>
    </main>
  );
}
