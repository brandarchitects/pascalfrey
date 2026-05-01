import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Imprint · Pascal Frey",
  description: "Imprint and accountability for pascalfrey.ch.",
  alternates: {
    canonical: "/en/imprint",
    languages: {
      "de-CH": "/impressum",
      en: "/en/imprint",
      "x-default": "/impressum",
    },
  },
};

export default function EnImprintPage() {
  return (
    <main className="py-24">
      <Container size="prose">
        <Eyebrow>{t("imprint.eyebrow", "en")}</Eyebrow>
        <Heading as="h1" size="lg" className="mt-6">
          {t("imprint.heading", "en")}
        </Heading>
        <div className="mt-12 space-y-8 text-[16px] leading-[1.6] text-cinder">
          <section>
            <h2 className="font-medium text-obsidian">
              {t("imprint.responsible", "en")}
            </h2>
            <p className="mt-2 text-gravel">
              Pascal Frey
              <br />
              c/o Brand Architects
              <br />
              Würenlos, Switzerland
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">{t("imprint.contact", "en")}</h2>
            <p className="mt-2 text-gravel">
              <a
                href="mailto:pascal@pascalfrey.ch"
                className="underline-offset-4 hover:underline"
              >
                pascal@pascalfrey.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">{t("imprint.concept", "en")}</h2>
            <p className="mt-2 text-gravel">Pascal Frey</p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">{t("imprint.realization", "en")}</h2>
            <p className="mt-2 text-gravel">{t("imprint.realization.body", "en")}</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
