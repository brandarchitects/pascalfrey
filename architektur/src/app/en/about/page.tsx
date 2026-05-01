import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Pascal Frey · Brand Consultant & Creative Director",
  description:
    "20+ years of brand work for Swiss companies. Career, skills, stance. Currently Creative Director at Swisscom, founder of Brand Architects.",
  alternates: {
    canonical: "/en/about",
    languages: { "de-CH": "/ueber", en: "/en/about", "x-default": "/ueber" },
  },
};

interface CareerStep {
  years: string;
  role: string;
  description: string;
}

const CAREER: CareerStep[] = [
  {
    years: "2022 — today",
    role: "Creative Director · Swisscom Group Communications",
    description: "Brand stewardship for NEO, festival concepts, design system work.",
  },
  {
    years: "2018 — today",
    role: "Founder · Brand Architects",
    description:
      "Brand consultancy network that works like a small studio with senior expertise.",
  },
  {
    years: "2014 — 2022",
    role: "Creative Director · Agency & industry",
    description:
      "Built design teams, refreshed brands, documented brand systems.",
  },
  {
    years: "2003 — 2014",
    role: "Designer & Senior Designer",
    description:
      "Early stations in the Swiss agency landscape, focus on corporate design and editorial.",
  },
];

const SKILLS = [
  {
    category: "Brand Strategy",
    tags: ["Positioning", "Brand Architecture", "Naming", "Brand Voice"],
  },
  {
    category: "Design",
    tags: ["Corporate Design", "Design Systems", "Typography", "Editorial Design"],
  },
  {
    category: "Leadership",
    tags: [
      "Creative Direction",
      "Design Team Building",
      "Agency Briefings",
      "Stakeholder Management",
    ],
  },
];

export default function EnAboutPage() {
  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow variant="fh">{t("about.eyebrow", "en")}</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            {t("about.heading", "en")}
          </Heading>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="prose">
          <div className="space-y-6 text-cinder">
            <p className="text-[20px] leading-[1.5]">{t("about.bio.lead", "en")}</p>
            <p className="text-[18px] leading-[1.6]">{t("about.bio.middle", "en")}</p>
            <p className="text-[18px] leading-[1.6]">{t("about.bio.end", "en")}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container>
          <div className="mb-12 max-w-[60ch]">
            <Eyebrow variant="fh">{t("about.career.eyebrow", "en")}</Eyebrow>
          </div>
          <ol className="divide-y divide-chalk border-t border-chalk">
            {CAREER.map((step) => (
              <li key={step.years} className="grid gap-4 py-8 sm:grid-cols-[160px_1fr]">
                <div className="text-[14px] font-medium text-obsidian">{step.years}</div>
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
              {t("about.skills.eyebrow", "en")}
            </Eyebrow>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <Eyebrow variant="fh">{s.category}</Eyebrow>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-chalk px-3 py-1 text-[13px] font-medium text-obsidian"
                    >
                      {tag}
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
          <Eyebrow variant="fh">{t("about.stance.eyebrow", "en")}</Eyebrow>
          <Heading as="h2" size="lg" className="mt-6 max-w-[30ch]">
            {t("about.stance.heading", "en")}
          </Heading>
          <p className="mt-8 text-[16px] leading-[1.5] text-gravel">
            {t("about.stance.body", "en")}
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container size="prose">
          <Stack gap={12}>
            <p className="text-[16px] leading-[1.5] text-gravel">
              {t("about.contactHint.lead", "en")}{" "}
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
