# pascalfrey.ch — Website-Architektur

Personal-Brand-Website für Pascal Frey (Markenberater & Creative Director, CH).
Editorial · achromatic · whisper-weight · humble.

**Stack:** Next.js 16 · TypeScript strict · Tailwind v4 · MDX · Vercel
**Briefing:** siehe `briefing/references/` im Repo-Root.

## Lokal starten

```bash
cd architektur
npm install
npm run dev
```

Dev-Server läuft auf [http://localhost:3000](http://localhost:3000).

## Wichtige Befehle

| Befehl | Wirkung |
|--------|---------|
| `npm run dev` | Dev-Server (Turbopack) auf Port 3000 |
| `npm run build` | Production-Build, statisch pre-rendered |
| `npm run start` | Production-Server (nach `build`) |
| `npm run lint` | ESLint (Flat-Config) |
| `npx tsc --noEmit` | Reiner Typecheck |

## Verzeichnisstruktur

```
architektur/
├── src/
│   ├── app/                       Next.js App Router
│   │   ├── (DE-Routen ohne prefix)
│   │   │   ├── page.tsx           Home
│   │   │   ├── ueber/             Über
│   │   │   ├── arbeiten/          Arbeiten Index + [slug]
│   │   │   ├── denken/            Denken Index + [slug] + feed.xml
│   │   │   ├── kontakt/           Kontakt
│   │   │   ├── impressum/         Impressum
│   │   │   └── datenschutz/       Datenschutz
│   │   ├── en/                    EN-Mirror unter /en/
│   │   │   ├── page.tsx           Home
│   │   │   ├── about/             Über
│   │   │   ├── work/              Work Index + [slug]
│   │   │   ├── thinking/          Thinking Index + [slug] + feed.xml
│   │   │   ├── contact/           Contact
│   │   │   ├── imprint/           Imprint
│   │   │   └── privacy/           Privacy
│   │   ├── api/og/                Dynamische OG-Image-Generation (@vercel/og)
│   │   ├── styleguide/            Interner Sanity-Check (noindex)
│   │   ├── sitemap.ts             /sitemap.xml mit hreflang
│   │   ├── robots.ts              /robots.txt
│   │   ├── layout.tsx             Root-Layout (Fonts, Header, Footer, JSON-LD)
│   │   ├── globals.css            @import tailwindcss + theme.css
│   │   └── not-found.tsx          404
│   ├── components/
│   │   ├── ui/                    Heading, Eyebrow, PillButton (Phase 1)
│   │   ├── layout/                Container, Section, Stack, Header,
│   │   │                          Footer, LanguageSwitcher (Phase 1+2)
│   │   ├── blocks/                Hero, AwardsStrip, LogoWall, ProjectCard,
│   │   │                          PostListItem, ClosingStatement,
│   │   │                          MetaBlock, AuthorBox, PrevNext (Phase 3+4)
│   │   └── mdx/                   Image, ImagePair, ImageGrid, FullBleed,
│   │                              Callout + Prose-Overrides
│   ├── lib/
│   │   ├── content.ts             MDX-Loader (gray-matter + reading-time)
│   │   ├── data.ts                Statische Refs (AWARDS, CLIENT_LOGOS)
│   │   ├── i18n.ts                Translation-Helper + Pfad-Mapping
│   │   ├── seo.tsx                JSON-LD-Schemas + ogImageUrl()
│   │   ├── rss.ts                 RSS-Feed-Builder
│   │   ├── site.ts                SITE-Konstanten
│   │   └── utils.ts               cn() helper
│   └── styles/theme.css           Tailwind v4 @theme + Base-Resets
├── content/                       MDX-Inhalte (1:1 Frontmatter-Schema)
│   ├── posts/<slug>.<locale>.mdx
│   └── work/<slug>.<locale>.mdx
└── public/
    ├── brand/                     Wappen, Unicorn (Logo-Marken)
    ├── portraits/                 Pascal-Portraits
    ├── images/blog/               Cover-Platzhalter
    └── logos/{clients,awards}/    Kunden- & Award-Logos
```

## Inhalte pflegen

### Neuen Blog-Post anlegen

1. Datei: `content/posts/<slug>.<locale>.mdx`, z. B.
   `content/posts/markenarbeit-im-mittelstand.de.mdx`
2. Frontmatter:

   ```yaml
   ---
   title: Markenarbeit im Mittelstand
   date: 2026-05-12
   excerpt: Eine Notiz dazu, was sich ändert, wenn das Unternehmen wächst.
   tag: Markenstrategie
   cover: /images/blog/placeholder-1.jpg   # optional
   ---
   ```
3. Body in MDX. Verfügbare React-Components: `<Image>`, `<ImagePair>`,
   `<ImageGrid>`, `<FullBleedImage>`, `<Callout>`.
4. Für die EN-Version: identischer slug, locale `en` —
   `markenarbeit-im-mittelstand.en.mdx`. Hreflang wird automatisch gesetzt,
   wenn beide Versionen existieren.

### Neues Work-Case anlegen

1. Datei: `content/work/<slug>.<locale>.mdx`
2. Frontmatter:

   ```yaml
   ---
   title: Swisscom NEO Brand Refresh
   client: Swisscom
   year: 2024
   role: Creative Director · Visual System & Brand Guide
   tags:
     - Markenarchitektur
     - Designsystem
   cover: /images/blog/placeholder-1.jpg
   summary: Refresh des Markenauftritts für die NEO-Initiative.
   award: German Brand Award Gold 2024   # optional
   ---
   ```

### UI-Strings übersetzen

Alle UI-Texte stehen in `src/lib/i18n.ts` als Dictionary mit `{de, en}`.
Neue Keys einfügen, in beide Sprachen liefern, mit `t("key", locale)` nutzen.

## Design-System (Kurzfassung)

Volltext: `briefing/references/DESIGN.md` und `briefing/references/pascal-frey-website-briefing-v2.md`.

| Token | Wert | Rolle |
|-------|------|-------|
| `eggshell` | `#fdfcfc` | Page-Ground (nie `#ffffff`) |
| `powder` | `#f5f3f1` | Hover, Section-Highlight |
| `chalk` | `#e5e5e5` | Universal Border |
| `fog` | `#b1b0b0` | Logo-Desaturation |
| `gravel` | `#777169` | Sekundärtext |
| `slate` | `#a59f97` | Tertiärtext |
| `cinder` | `#575347` | Mid-Tone-Text |
| `obsidian` | `#000000` | Primärtext, Filled CTA |

**Hard rules:**

- Headlines: Cormorant Garamond 300 mit `-0.02em` Tracking
- Buttons: 9999px Pill-Radius, max 2 Variants (Filled black + Ghost white)
- Inputs: 0px Radius (editorial Underline-Stil)
- Shadows: hairline only — nie Drop-Shadow > 4px Blur
- Achromatic Palette — keine saturierten Farben in v1.0

## SEO

- Sitemap mit hreflang: `/sitemap.xml`
- Robots: `/robots.txt`
- JSON-LD: Person + Website (global), Article (Posts)
- Dynamische OG-Bilder: `/api/og?title=...&eyebrow=...&subtitle=...`
- RSS-Feeds: `/denken/feed.xml`, `/en/thinking/feed.xml`

## Analytics

Vercel Analytics + Speed Insights sind integriert (cookielos, DSGVO-konform).
Greifen automatisch im Production-Build, sobald das Projekt bei Vercel
deployed ist.

## Deploy

Branch-Strategy nach Briefing:

- `main` → Production via Vercel (Auto-Deploy)
- Feature-Branches → Preview-Deploys

Domain `pascalfrey.ch` wird via Vercel Settings konfiguriert.

## Bekannte Inkonsistenzen aus Briefing-Files (in `theme.css` behoben)

- `cinder` Hex `#57534` → `#575347` (5-char Hex war invalid)
- `radius-inputs` `4px` → `0px` (Briefing erfordert editorial 0px)
- `signal-blue`, `ember`, `voice-spectrum` entfernt (achromatisch v1.0)
- `--section-gap: 80-120px` (kein valides CSS) → diskrete Tokens
- `--spacing-120` ergänzt (vom Pages-Brief referenziert)

## Open Decisions (aus Handoff Section 4 angewandt)

- Hero-Headline: **"Marken, die bleiben."** / **"Brands that last."**
- Awards-Bridge: "Awards sind kein Ziel. Aber sie sind ein Hinweis darauf…"
- Closing-Statement Home: **"Good design, is good business."**
- Verfügbarkeits-Hinweis Kontakt: aktiv
- Impressum: Brand Architects Würenlos
- Foto im Hero: nicht in v1.0
