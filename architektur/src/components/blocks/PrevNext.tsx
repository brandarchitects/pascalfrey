import Link from "next/link";
import { Eyebrow } from "../ui/Eyebrow";

export interface PrevNextLink {
  href: string;
  title: string;
}

interface PrevNextProps {
  prev?: PrevNextLink | null;
  next?: PrevNextLink | null;
  locale?: "de" | "en";
}

const COPY = {
  de: { prev: "Vorheriger Beitrag", next: "Nächster Beitrag" },
  en: { prev: "Previous", next: "Next" },
} as const;

export function PrevNext({ prev, next, locale = "de" }: PrevNextProps) {
  if (!prev && !next) return null;
  const copy = COPY[locale];

  return (
    <nav
      aria-label={locale === "en" ? "Pagination" : "Beitragsnavigation"}
      className="grid grid-cols-1 gap-8 border-t border-chalk pt-12 sm:grid-cols-2"
    >
      <div>
        {prev && (
          <Link href={prev.href} className="group block">
            <Eyebrow variant="fh">{`← ${copy.prev}`}</Eyebrow>
            <div className="mt-3 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian underline-offset-4 group-hover:underline">
              {prev.title}
            </div>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link href={next.href} className="group block">
            <Eyebrow variant="fh">{`${copy.next} →`}</Eyebrow>
            <div className="mt-3 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian underline-offset-4 group-hover:underline">
              {next.title}
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
