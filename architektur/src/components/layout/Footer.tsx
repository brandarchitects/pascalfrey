"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { detectLocaleFromPath, t } from "@/lib/i18n";

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pascalfrey/", external: true },
  { label: "X", href: "https://x.com/pascalfrey", external: true },
  { label: "Medium", href: "https://medium.com/@pascalfrey", external: true },
  { label: "pascal@pascalfrey.ch", href: "mailto:pascal@pascalfrey.ch", external: false },
] as const;

export function Footer() {
  const pathname = usePathname() ?? "/";
  const locale = detectLocaleFromPath(pathname);
  const year = new Date().getFullYear();

  const legalHref = locale === "en" ? "/en/imprint" : "/impressum";
  const privacyHref = locale === "en" ? "/en/privacy" : "/datenschutz";

  return (
    <footer className="border-t border-chalk bg-eggshell py-20">
      <Container>
        <div className="flex flex-col gap-12">
          <div>
            <div className="font-display text-[24px] font-light leading-tight text-obsidian">
              Pascal Frey
            </div>
            <div className="mt-1 text-[14px] text-gravel">
              {t("footer.tagline", locale)}
            </div>
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
              href={legalHref}
              className="underline-offset-4 hover:text-obsidian hover:underline"
            >
              {t("footer.imprint", locale)}
            </Link>
            <span aria-hidden className="mx-2">
              ·
            </span>
            <Link
              href={privacyHref}
              className="underline-offset-4 hover:text-obsidian hover:underline"
            >
              {t("footer.privacy", locale)}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
