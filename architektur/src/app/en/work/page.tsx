import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { getAllWork } from "@/lib/content";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Work · Pascal Frey · Brand Consultant & Creative Director",
  description:
    "Selected brand work by Pascal Frey for Swisscom, Migros, Geberit, Raiffeisen, Helsana and other Swiss companies.",
  alternates: {
    canonical: "/en/work",
    languages: { "de-CH": "/arbeiten", en: "/en/work", "x-default": "/arbeiten" },
  },
};

export default function EnWorkPage() {
  const works = getAllWork("en");
  const fallback = works.length ? works : getAllWork("de");

  return (
    <main>
      <section className="pt-24 pb-16 sm:pt-30 sm:pb-24">
        <Container size="prose">
          <Eyebrow variant="fh">{t("work.eyebrow", "en")}</Eyebrow>
          <Heading as="h1" size="display" className="mt-6">
            {t("work.heading", "en")}
          </Heading>
          <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
            {t("work.bridge", "en")}
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {fallback.map((w) => (
              <li key={w.slug}>
                <ProjectCard
                  href={`/en/work/${w.slug}`}
                  cover={w.cover}
                  client={w.client}
                  year={w.year}
                  title={w.title}
                  role={w.role}
                  tags={w.tags}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-chalk py-24">
        <Container size="prose">
          <p className="text-[16px] leading-[1.5] text-gravel">
            {t("work.footer", "en")}{" "}
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
