"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavItem {
  href: string;
  label: string;
}

const NAV_DE: NavItem[] = [
  { href: "/ueber", label: "Über" },
  { href: "/arbeiten", label: "Arbeiten" },
  { href: "/denken", label: "Denken" },
  { href: "/kontakt", label: "Kontakt" },
];

const NAV_EN: NavItem[] = [
  { href: "/en/about", label: "About" },
  { href: "/en/work", label: "Work" },
  { href: "/en/thinking", label: "Thinking" },
  { href: "/en/contact", label: "Contact" },
];

function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  const isEN = isEnglishPath(pathname);
  const nav = isEN ? NAV_EN : NAV_DE;
  const homeHref = isEN ? "/en" : "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-eggshell transition-[border-color] duration-200",
        scrolled ? "border-b border-chalk" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href={homeHref}
          aria-label="Pascal Frey — Startseite"
          className="inline-flex items-center"
        >
          <Image
            src="/brand/wappen.png"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav
          aria-label={isEN ? "Primary" : "Hauptnavigation"}
          className="hidden md:block"
        >
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== homeHref && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-[14px] underline-offset-4 transition-colors",
                      active
                        ? "text-obsidian underline"
                        : "text-obsidian hover:underline",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chalk bg-white text-obsidian md:hidden"
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-obsidian transition-transform",
                mobileOpen ? "translate-y-1.5 rotate-45" : "",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-obsidian transition-opacity",
                mobileOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-px w-full bg-obsidian transition-transform",
                mobileOpen ? "-translate-y-1.5 -rotate-45" : "",
              )}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-30 bg-eggshell md:hidden"
        >
          <nav
            aria-label={isEN ? "Mobile primary" : "Mobile Hauptnavigation"}
            className="flex h-full flex-col px-6 pb-12 pt-8"
          >
            <ul className="flex flex-col gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-[36px] font-light tracking-[-0.72px] text-obsidian"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
