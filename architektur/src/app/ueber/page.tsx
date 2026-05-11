import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Über uns · Markenberatung mit Bestand",
  description:
    "Drei Profis, über 35 Jahre gebündelte Markenerfahrung. 9 von 10 Auftraggeber empfehlen uns weiter. Lernen Sie das Team hinter Brand Architects kennen.",
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Pascal Frey",
    role: "Gründer · Markenberater & Designer",
    image: "/team/pascal.jpg",
    bio: "Über 20 Jahre in der Schweizer Markenarbeit. Pascal verantwortet Strategie und Gestaltung — von der Positionierung bis zum fertigen Designsystem. Creative Director bei Swisscom, Gründer von Brand Architects.",
  },
  {
    name: "Simone Frey",
    role: "Designerin · Beratung Ethik & Werte",
    image: "/team/simone.jpg",
    bio: "Designerin mit Bachelor of Arts in Primary Education. Ihre Doppelqualifikation aus Gestaltung und Pädagogik macht sie zur Sparringspartnerin für ethische Fragen — dort, wo Marken Verantwortung tragen.",
  },
  {
    name: "Enrique",
    role: "Art Director · Marketing & Social Media",
    image: "/team/enrique.jpg",
    bio: "Art Direction, Marketing und Social-Media-Strategie aus einer Hand. Enrique verbindet zeitgemässe Bildsprache mit klarer Beratungslogik — für Marken, die digital sichtbar werden wollen.",
  },
];

interface TrustCard {
  metric: string;
  title: string;
  body: string;
  tone: "dark" | "light";
  icon: React.ReactNode;
}

const SproutIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 22h22" />
    <path d="M9 22c0-3 2-5 5-5h4c3 0 5 2 5 5" />
    <path d="M16 17v-5" />
    <path d="M16 12c-2-2-2-4 0-6 2 2 2 4 0 6Z" />
  </svg>
);

const StarsIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L16 18.4l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L16 5Z" />
  </svg>
);

const ShieldIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 5l9 3v8c0 6-4 9.5-9 11-5-1.5-9-5-9-11V8l9-3Z" />
    <path d="M12 16l3 3 5-6" />
  </svg>
);

const TRUST: TrustCard[] = [
  {
    metric: "20+",
    title: "Jahre Erfahrung",
    body: "Über zwei Jahrzehnte im Markengeschäft. Unser Team vereint mehr als 35 Jahre gebündelte Expertise — für Marken, die Bestand haben.",
    tone: "light",
    icon: SproutIcon,
  },
  {
    metric: "9 / 10",
    title: "empfehlen uns weiter",
    body: "Zufriedene Kunden sind unser bestes Argument. Über 90 % unserer Auftraggeber arbeiten erneut mit uns oder empfehlen uns aktiv weiter.",
    tone: "dark",
    icon: StarsIcon,
  },
  {
    metric: "100 %",
    title: "inhabergeführt",
    body: "Persönlich, verbindlich, ohne Account-Layer. Wir arbeiten als kleines Studio — mit der Senior-Expertise einer Agentur.",
    tone: "light",
    icon: ShieldIcon,
  },
];

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
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-3">
              <Eyebrow>Über uns</Eyebrow>
              <Heading as="h1" size="display" className="mt-6 max-w-[16ch]">
                Drei Profis. Eine Haltung.
              </Heading>
            </div>
            <div className="md:col-span-2 md:pt-3">
              <p className="max-w-[40ch] text-[16px] leading-[1.5] text-gravel">
                Über 35 Jahre gebündelte Markenerfahrung, inhabergeführt aus
                der Schweiz. Wir arbeiten persönlich, verbindlich und in
                Senior-Besetzung — von der Positionierung bis zum fertigen
                Designsystem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24" aria-labelledby="team-heading">
        <Container>
          <div className="mb-12">
            <Eyebrow id="team-heading">Team</Eyebrow>
          </div>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {TEAM.map((member) => (
              <li key={member.name} className="flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-powder">
                  <Image
                    src={member.image}
                    alt={`Portrait ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.43] text-gravel">
                    {member.role}
                  </p>
                  <p className="mt-4 max-w-[40ch] text-[16px] leading-[1.5] text-cinder">
                    {member.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-24" aria-labelledby="trust-heading">
        <Container>
          <div className="mb-12">
            <Eyebrow id="trust-heading">Warum Brand Architects</Eyebrow>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRUST.map((card) => {
              const isDark = card.tone === "dark";
              return (
                <li
                  key={card.title}
                  className={
                    "flex flex-col justify-between rounded-2xl p-8 md:p-10 " +
                    (isDark
                      ? "bg-obsidian text-eggshell"
                      : "bg-powder text-obsidian")
                  }
                >
                  <div className={isDark ? "text-eggshell" : "text-obsidian"}>
                    {card.icon}
                  </div>
                  <div className="mt-12">
                    <div
                      className={
                        "font-display text-[48px] font-light leading-[1.05] tracking-[-0.96px] " +
                        (isDark ? "text-eggshell" : "text-obsidian")
                      }
                    >
                      {card.metric}
                    </div>
                    <h3
                      className={
                        "mt-2 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] " +
                        (isDark ? "text-eggshell" : "text-obsidian")
                      }
                    >
                      {card.title}
                    </h3>
                    <p
                      className={
                        "mt-4 max-w-[34ch] text-[15px] leading-[1.5] " +
                        (isDark ? "text-chalk" : "text-cinder")
                      }
                    >
                      {card.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container size="prose">
          <Eyebrow>Gründer</Eyebrow>
          <Heading as="h2" size="lg" className="mt-6">
            Pascal Frey.
          </Heading>
          <div className="mt-8 space-y-6 text-cinder">
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
            <Eyebrow>Werdegang</Eyebrow>
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
            <Eyebrow id="skills-heading">
              Skills · Expertise
            </Eyebrow>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <Eyebrow>{s.category}</Eyebrow>
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
          <Eyebrow>Haltung</Eyebrow>
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
