export type Locale = "de" | "en";

export const LOCALES: readonly Locale[] = ["de", "en"];
export const DEFAULT_LOCALE: Locale = "de";

const dict = {
  // Navigation
  "nav.about": { de: "Über", en: "About" },
  "nav.work": { de: "Arbeiten", en: "Work" },
  "nav.thinking": { de: "Denken", en: "Thinking" },
  "nav.contact": { de: "Kontakt", en: "Contact" },

  // Common labels
  "common.allWork": { de: "Alle Arbeiten", en: "All work" },
  "common.allPosts": { de: "Alle Beiträge", en: "All posts" },
  "common.continueReading": { de: "Weiterlesen", en: "Keep reading" },
  "common.related": { de: "Weitere Arbeiten", en: "More work" },
  "common.close": { de: "Schliessen", en: "Close" },
  "common.menu": { de: "Menü", en: "Menu" },

  // Home
  "home.hero.headline": {
    de: "Marken, die bleiben.",
    en: "Brands that last.",
  },
  "home.hero.bio": {
    de: "Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer Unternehmen. Aktuell als Creative Director bei Swisscom. Gründer von Brand Architects. Arbeitete für Migros, SBB, Geberit, Raiffeisen, Helsana und andere.",
    en: "Pascal Frey has been building brands for Swiss companies for over 20 years. Currently Creative Director at Swisscom. Founder of Brand Architects. Past clients include Migros, SBB, Geberit, Raiffeisen, Helsana and others.",
  },
  "home.awards.eyebrow": { de: "Ausgezeichnet", en: "Recognized" },
  "home.awards.bridge": {
    de: "Awards sind kein Ziel. Aber sie sind ein Hinweis darauf, dass Strategie und Gestaltung wirken.",
    en: "Awards aren't the goal. But they're a sign that strategy and design are doing their work.",
  },
  "home.work.eyebrow": { de: "Arbeiten", en: "Work" },
  "home.work.heading": { de: "Eine Auswahl.", en: "A selection." },
  "home.logos.eyebrow": {
    de: "Vertrauen seit 20 Jahren",
    en: "Trusted for 20 years",
  },
  "home.thinking.eyebrow": { de: "Denken", en: "Thinking" },
  "home.thinking.heading": {
    de: "Notizen, Essays, Beobachtungen.",
    en: "Notes, essays, observations.",
  },
  "home.closing.statement": {
    de: "Good design, is good business.",
    en: "Good design is good business.",
  },
  "home.closing.bridge": {
    de: "Wenn du an einem Projekt arbeitest, das Substanz haben soll, schreib mir.",
    en: "If you're working on something that should have substance, get in touch.",
  },
  "home.closing.cta": { de: "Kontakt", en: "Get in touch" },

  // About
  "about.eyebrow": { de: "Über", en: "About" },
  "about.heading": { de: "Pascal Frey.", en: "Pascal Frey." },
  "about.bio.lead": {
    de: "Pascal Frey ist Markenberater, Designer und Creative Director. Er arbeitet seit 2003 an der Schnittstelle zwischen Strategie und Gestaltung — für Schweizer Unternehmen, die Marke nicht als Dekoration verstehen, sondern als Geschäftsentscheidung.",
    en: "Pascal Frey is a brand consultant, designer and creative director. Since 2003 he has been working at the intersection of strategy and design — for Swiss companies that treat brand as a business decision, not as decoration.",
  },
  "about.bio.middle": {
    de: "Seit 2022 ist er Creative Director bei Swisscom in der Group Communications. Davor leitete er Designteams in Agentur und Industrie, baute Marken auf, refreshte sie, dokumentierte sie. 2018 gründete er Brand Architects — ein Netzwerk für Markenberatung, das wie ein kleines Studio arbeitet, aber mit Senior-Expertise auftritt.",
    en: "Since 2022 he has been Creative Director at Swisscom in Group Communications. Before that he led design teams in agencies and industry, built brands, refreshed them, documented them. In 2018 he founded Brand Architects — a brand consultancy network that works like a small studio but with senior expertise.",
  },
  "about.bio.end": {
    de: "Seine Arbeit ist getragen von der Überzeugung, dass gute Marken nicht aus Trends entstehen, sondern aus präziser Beobachtung, klaren Entscheidungen und der Geduld, lange genug an einer Idee zu bleiben.",
    en: "His work is rooted in the conviction that strong brands don't come from trends, but from precise observation, clear decisions, and the patience to stay with an idea long enough.",
  },
  "about.career.eyebrow": { de: "Werdegang", en: "Career" },
  "about.skills.eyebrow": {
    de: "Skills · Expertise",
    en: "Skills · Expertise",
  },
  "about.stance.eyebrow": { de: "Haltung", en: "Stance" },
  "about.stance.heading": {
    de: "Marke ist eine Geschäfts­entscheidung, keine Geschmacks­frage.",
    en: "Brand is a business decision, not a matter of taste.",
  },
  "about.stance.body": {
    de: "Ich arbeite mit Unternehmen, die ihre Marke als Werkzeug sehen, nicht als Bühne. Das macht die Arbeit fokussiert und wirtschaftlich. Und es macht den Erfolg messbar.",
    en: "I work with companies that see their brand as a tool, not a stage. That keeps the work focused and economical. And it makes success measurable.",
  },
  "about.contactHint.lead": {
    de: "Mehr Fragen? Schreib mir —",
    en: "More questions? Email me —",
  },

  // Work index
  "work.eyebrow": { de: "Arbeiten", en: "Work" },
  "work.heading": {
    de: "Eine Auswahl aus 20 Jahren.",
    en: "A selection from 20 years.",
  },
  "work.bridge": {
    de: "Diese Projekte zeigen die Bandbreite — von Markenrefresh über Architektur bis Templating-Systeme.",
    en: "These projects show the range — from brand refresh to architecture to templating systems.",
  },
  "work.footer": {
    de: "Mehr Cases auf Anfrage. Schreib mir —",
    en: "More cases on request. Email me —",
  },

  // Work detail
  "work.detail.eyebrow": { de: "Arbeit", en: "Work" },
  "work.detail.client": { de: "Kunde", en: "Client" },
  "work.detail.year": { de: "Jahr", en: "Year" },
  "work.detail.role": { de: "Rolle", en: "Role" },
  "work.detail.tags": { de: "Disziplinen", en: "Disciplines" },
  "work.detail.award": { de: "Ausgezeichnet", en: "Recognized" },

  // Thinking index
  "thinking.eyebrow": { de: "Denken", en: "Thinking" },
  "thinking.heading": {
    de: "Notizen, Essays, Beobachtungen.",
    en: "Notes, essays, observations.",
  },
  "thinking.bridge": {
    de: "Was mich beschäftigt — über Markenarbeit, Design und die Schweizer Wirtschaft. Manchmal kurz, manchmal lang. Immer ehrlich.",
    en: "What's on my mind — brand work, design, and the Swiss economy. Sometimes short, sometimes long. Always honest.",
  },
  "thinking.footer": {
    de: "Folgst du mir lieber auf",
    en: "Prefer to follow on",
  },
  "thinking.footer.or": { de: "oder", en: "or" },
  "thinking.footer.either": { de: "? Beides okay.", en: "? Either works." },

  // Contact
  "contact.eyebrow": { de: "Kontakt", en: "Get in touch" },
  "contact.heading": { de: "Schreib mir.", en: "Get in touch." },
  "contact.bridge": {
    de: "Email funktioniert am besten. Antwortzeit normalerweise unter 48 Stunden.",
    en: "Email works best. Reply usually within 48 hours.",
  },
  "contact.availability": {
    de: "Aktuell offen für ausgewählte Projekte. Vollzeit ausgelastet bei Swisscom.",
    en: "Currently open to selected projects. Full-time engaged at Swisscom.",
  },

  // Footer
  "footer.tagline": {
    de: "Markenberater · Creative Director · Zürich",
    en: "Brand Consultant · Creative Director · Zurich",
  },
  "footer.imprint": { de: "Impressum", en: "Imprint" },
  "footer.privacy": { de: "Datenschutz", en: "Privacy" },

  // 404
  "404.eyebrow": { de: "404", en: "404" },
  "404.heading": {
    de: "Diese Seite existiert nicht.",
    en: "This page doesn't exist.",
  },
  "404.body": {
    de: "Vielleicht ist sie umgezogen. Vielleicht hat sie nie existiert. Beides ist okay.",
    en: "Maybe it moved. Maybe it never existed. Either is fine.",
  },
  "404.cta": { de: "Zur Startseite", en: "Back home" },

  // Imprint
  "imprint.eyebrow": { de: "Impressum", en: "Imprint" },
  "imprint.heading": { de: "Impressum", en: "Imprint" },
  "imprint.responsible": {
    de: "Verantwortlich für den Inhalt",
    en: "Responsible for content",
  },
  "imprint.contact": { de: "Kontakt", en: "Contact" },
  "imprint.concept": { de: "Konzept & Gestaltung", en: "Concept & Design" },
  "imprint.realization": { de: "Realisation", en: "Realisation" },
  "imprint.realization.body": {
    de: "Vibe-coded mit Claude · Hosted bei Vercel Inc.",
    en: "Vibe-coded with Claude · Hosted by Vercel Inc.",
  },

  // Privacy
  "privacy.eyebrow": { de: "Datenschutz", en: "Privacy" },
  "privacy.heading": { de: "Datenschutz", en: "Privacy" },
  "privacy.intro": {
    de: "Diese Website verarbeitet so wenig Daten wie möglich. Es gibt kein Kontaktformular, keine Cookies für Tracking, keine Newsletter-Anmeldung. Die folgenden Hinweise erläutern, was trotzdem passiert.",
    en: "This site processes as little data as possible. There is no contact form, no tracking cookies, no newsletter sign-up. The following notes explain what happens anyway.",
  },
} as const;

type Dict = typeof dict;
export type TranslationKey = keyof Dict;

export function t(key: TranslationKey, locale: Locale = DEFAULT_LOCALE): string {
  return dict[key][locale];
}

/**
 * Map a path between locales. Used by LanguageSwitcher.
 */
const PATH_MAP: Record<string, { de: string; en: string }> = {
  home: { de: "/", en: "/en" },
  about: { de: "/ueber", en: "/en/about" },
  work: { de: "/arbeiten", en: "/en/work" },
  thinking: { de: "/denken", en: "/en/thinking" },
  contact: { de: "/kontakt", en: "/en/contact" },
  imprint: { de: "/impressum", en: "/en/imprint" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
};

export function pathFor(
  key: keyof typeof PATH_MAP,
  locale: Locale = DEFAULT_LOCALE,
): string {
  return PATH_MAP[key][locale];
}

export function detectLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function alternatePath(pathname: string, target: Locale): string {
  const current = detectLocaleFromPath(pathname);
  if (current === target) return pathname;

  // Walk known mappings
  for (const entry of Object.values(PATH_MAP)) {
    if (entry[current] === pathname) return entry[target];
    // Detail routes
    if (current === "de" && pathname.startsWith("/arbeiten/")) {
      return pathname.replace(/^\/arbeiten/, "/en/work");
    }
    if (current === "de" && pathname.startsWith("/denken/")) {
      return pathname.replace(/^\/denken/, "/en/thinking");
    }
    if (current === "en" && pathname.startsWith("/en/work/")) {
      return pathname.replace(/^\/en\/work/, "/arbeiten");
    }
    if (current === "en" && pathname.startsWith("/en/thinking/")) {
      return pathname.replace(/^\/en\/thinking/, "/denken");
    }
  }

  // Fallback: switch /en prefix on/off
  if (target === "en") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  if (pathname === "/en") return "/";
  return pathname.replace(/^\/en/, "");
}
