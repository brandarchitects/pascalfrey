"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LOCALES,
  detectLocaleFromPath,
  alternatePath,
  type Locale,
} from "@/lib/i18n";

const LABELS: Record<Locale, string> = {
  de: "DE",
  en: "EN",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const active = detectLocaleFromPath(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[14px]",
        className,
      )}
    >
      {LOCALES.map((loc, idx) => {
        const isActive = active === loc;
        return (
          <span key={loc} className="inline-flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden className="text-fog">
                ·
              </span>
            )}
            <Link
              href={alternatePath(pathname, loc)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors duration-150",
                isActive
                  ? "text-obsidian"
                  : "text-gravel hover:text-obsidian",
              )}
            >
              {LABELS[loc]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
