import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact · Pascal Frey",
  description:
    "Pascal Frey is reachable via email and LinkedIn. Inquiries for brand work and creative direction in Switzerland.",
  alternates: {
    canonical: "/en/contact",
    languages: { "de-CH": "/kontakt", en: "/en/contact", "x-default": "/kontakt" },
  },
};

export default function EnContactPage() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container size="prose">
        <Stack gap={32}>
          <Stack gap={16}>
            <Eyebrow variant="fh">{t("contact.eyebrow", "en")}</Eyebrow>
            <Heading as="h1" size="display">
              {t("contact.heading", "en")}
            </Heading>
            <p className="max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
              {t("contact.bridge", "en")}
            </p>
          </Stack>

          <a
            href="mailto:pascal@pascalfrey.ch"
            className="inline-block font-display text-[32px] font-light leading-tight tracking-[-0.64px] text-obsidian underline-offset-4 hover:underline"
          >
            pascal@pascalfrey.ch
          </a>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
            <li>
              <a
                href="https://www.linkedin.com/in/pascalfrey/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-obsidian underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/pascalfrey"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-obsidian underline-offset-4 hover:underline"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@pascalfrey"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-obsidian underline-offset-4 hover:underline"
              >
                Medium
              </a>
            </li>
          </ul>

          <p className="max-w-[50ch] text-[14px] leading-[1.5] text-gravel">
            {t("contact.availability", "en")}
          </p>
        </Stack>
      </Container>
    </main>
  );
}
