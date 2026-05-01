"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

function detectLocale(pathname: string): LocaleCode {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

function localizedHref(target: LocaleCode, pathname: string): string {
  const current = detectLocale(pathname);
  if (current === target) return pathname;

  if (target === "en") {
    if (pathname === "/") return "/en";
    return `/en${pathname}`;
  }
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "");
  return pathname;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const active = detectLocale(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[14px]",
        className,
      )}
    >
      {LOCALES.map((loc, idx) => {
        const isActive = active === loc.code;
        return (
          <span key={loc.code} className="inline-flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden className="text-fog">
                ·
              </span>
            )}
            <Link
              href={localizedHref(loc.code, pathname)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors duration-150",
                isActive
                  ? "text-obsidian"
                  : "text-gravel hover:text-obsidian",
              )}
            >
              {loc.label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
