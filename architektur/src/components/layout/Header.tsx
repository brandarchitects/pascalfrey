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
  const tagline = isEN
    ? "Brand · Creative Direction · Zürich"
    : "Markenberater · Creative Director · Zürich";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-chalk bg-eggshell/85 backdrop-blur-md"
          : "border-b border-transparent bg-eggshell",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-6 px-6 sm:h-24 sm:px-10 lg:px-16">
        {/* Brand cluster: Wappen + Wordmark + Tagline */}
        <Link
          href={homeHref}
          aria-label={`Pascal Frey — ${isEN ? "Home" : "Startseite"}`}
          className="group flex flex-shrink-0 items-center gap-4"
        >
          <span
            aria-hidden
            className="relative block h-11 w-11 flex-shrink-0 sm:h-12 sm:w-12"
          >
            <Image
              src="/brand/unicorn-stamp.png"
              alt=""
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[20px] font-light tracking-[-0.4px] text-obsidian">
              Pascal Frey
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase leading-[1.3] tracking-[0.7px] text-gravel">
              {tagline}
            </span>
          </span>
        </Link>

        {/* Navigation — desktop only */}
        <nav
          aria-label={isEN ? "Primary" : "Hauptnavigation"}
          className="hidden md:block"
        >
          <ul className="flex items-center gap-8 lg:gap-10">
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
                      "group relative inline-block py-1 text-[14px] tracking-[0.01em] transition-colors duration-150",
                      active
                        ? "text-obsidian"
                        : "text-cinder hover:text-obsidian",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-obsidian transition-[width] duration-200",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side: Language switcher + Mobile toggle */}
        <div className="flex flex-shrink-0 items-center gap-4 lg:gap-6">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            aria-label={
              mobileOpen
                ? isEN
                  ? "Close menu"
                  : "Menü schliessen"
                : isEN
                  ? "Open menu"
                  : "Menü öffnen"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-chalk bg-white text-obsidian shadow-[rgba(0,0,0,0.06)_0_0_0_1px,_rgba(0,0,0,0.04)_0_1px_2px] md:hidden"
          >
            <span aria-hidden className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-obsidian transition-transform duration-200",
                  mobileOpen ? "translate-y-1.5 rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-full bg-obsidian transition-opacity duration-200",
                  mobileOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-px w-full bg-obsidian transition-transform duration-200",
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : "",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-20 z-30 bg-eggshell sm:top-24 md:hidden"
        >
          <nav
            aria-label={isEN ? "Mobile primary" : "Mobile Hauptnavigation"}
            className="flex h-full flex-col px-6 pb-12 pt-12"
          >
            <ul className="flex flex-col gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-[36px] font-light leading-[1.1] tracking-[-0.72px] text-obsidian"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-12">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
