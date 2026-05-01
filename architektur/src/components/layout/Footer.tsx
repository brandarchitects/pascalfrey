import Link from "next/link";
import { Container } from "./Container";

interface FooterProps {
  locale?: "de" | "en";
}

const COPY = {
  de: {
    tagline: "Markenberater · Creative Director · Zürich",
    legal: "Impressum",
    legalHref: "/impressum",
    privacy: "Datenschutz",
    privacyHref: "/datenschutz",
  },
  en: {
    tagline: "Brand Consultant · Creative Director · Zurich",
    legal: "Imprint",
    legalHref: "/en/imprint",
    privacy: "Privacy",
    privacyHref: "/en/privacy",
  },
} as const;

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pascalfrey/", external: true },
  { label: "X", href: "https://x.com/pascalfrey", external: true },
  { label: "Medium", href: "https://medium.com/@pascalfrey", external: true },
  { label: "pascal@pascalfrey.ch", href: "mailto:pascal@pascalfrey.ch", external: false },
] as const;

export function Footer({ locale = "de" }: FooterProps) {
  const copy = COPY[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-chalk bg-eggshell py-20">
      <Container>
        <div className="flex flex-col gap-12">
          <div>
            <div className="font-display text-[24px] font-light leading-tight text-obsidian">
              Pascal Frey
            </div>
            <div className="mt-1 text-[14px] text-gravel">{copy.tagline}</div>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                {s.external ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-obsidian underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                ) : (
                  <a
                    href={s.href}
                    className="font-medium text-obsidian underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="border-t border-chalk pt-8 text-[13px] text-gravel">
            <span>© {year} Pascal Frey</span>
            <span aria-hidden className="mx-2">
              ·
            </span>
            <Link
              href={copy.legalHref}
              className="underline-offset-4 hover:text-obsidian hover:underline"
            >
              {copy.legal}
            </Link>
            <span aria-hidden className="mx-2">
              ·
            </span>
            <Link
              href={copy.privacyHref}
              className="underline-offset-4 hover:text-obsidian hover:underline"
            >
              {copy.privacy}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
