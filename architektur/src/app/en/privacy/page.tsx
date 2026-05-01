import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy · Pascal Frey",
  description: "Privacy notice for pascalfrey.ch. Compliant with Swiss FADP and EU GDPR.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      "de-CH": "/datenschutz",
      en: "/en/privacy",
      "x-default": "/datenschutz",
    },
  },
};

export default function EnPrivacyPage() {
  return (
    <main className="py-24">
      <Container size="prose">
        <Eyebrow variant="fh">{t("privacy.eyebrow", "en")}</Eyebrow>
        <Heading as="h1" size="lg" className="mt-6">
          {t("privacy.heading", "en")}
        </Heading>
        <div className="mt-12 space-y-8 text-[16px] leading-[1.6] text-cinder">
          <p className="text-gravel">{t("privacy.intro", "en")}</p>

          <section>
            <h2 className="font-medium text-obsidian">Responsible party</h2>
            <p className="mt-2 text-gravel">
              Pascal Frey, Würenlos, Switzerland —{" "}
              <a
                href="mailto:pascal@pascalfrey.ch"
                className="underline-offset-4 hover:underline"
              >
                pascal@pascalfrey.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Collected data</h2>
            <p className="mt-2 text-gravel">
              The site stores no personal data. There are no accounts, no forms processed.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Vercel Analytics &amp; Speed Insights</h2>
            <p className="mt-2 text-gravel">
              Aggregated, anonymised usage data is collected via Vercel Analytics. No
              cookies are set, no IP addresses are stored. Data is used solely for
              performance evaluation.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Hosting</h2>
            <p className="mt-2 text-gravel">
              This site is hosted by Vercel Inc. (USA). Technical connection data
              (e.g. IP address, user agent) is transferred to Vercel servers when
              the site is requested.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Visitor rights</h2>
            <p className="mt-2 text-gravel">
              Inquiries regarding access, correction, or deletion can be sent to the
              email address above at any time.
            </p>
          </section>

          <p className="text-[14px] text-gravel">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
            })}
            . This statement is updated continuously.
          </p>
        </div>
      </Container>
    </main>
  );
}
