# Software-Briefing: Pascal Frey – Personal Website (pascalfrey.ch)

> **Version:** 2.0 (Design-System integriert)
> **Erstellt:** 01.05.2026
> **Status:** Build-Ready
> **Stakeholder:** Pascal Frey (Owner, Creative Director, Markenberater)
> **Begleitende Dokumente:**
> - `DESIGN.md` (visuelles System – ElevenLabs-Style-Reference)
> - `variables.css` (CSS Custom Properties)
> - `theme.css` (Tailwind v4 `@theme`)
> - `tokens.json` (Design-Tokens)
> - **Folgt separat:** `pages-design-brief.md` (Layout pro Page)

---

## 1. Produkt-Vision & Ziele

### 1.1 Problem Statement

Pascal Frey hat über 20 Jahre prägnante Marken für die Schweizer Wirtschaft entwickelt — von Migros über SBB bis Swisscom. Diese Substanz ist heute online nicht angemessen sichtbar. Die bestehende Site (pascalfrey.ch) erfüllt ihren Zweck als Visitenkarte, ist aber technisch veraltet, SEO-schwach und nicht zweisprachig. Wer in der Schweiz oder DACH nach einem erfahrenen Markenberater / Creative Director sucht, sollte Pascal Frey finden — und zwar als erste Adresse.

### 1.2 Lösung & USP

Eine **state-of-the-art Personal-Brand-Plattform** mit drei Aufgaben:

1. **Visitenkarte mit Substanz** — sofortige Kredibilität durch Awards, Kundenlogos und ausgewählte Projekte
2. **Thought-Leadership-Hub** — Blog ("Denken") als laufende Beweisführung von Haltung, Expertise und strategischem Denken
3. **SEO-Maschine** — technisch exzellent, semantisch sauber, mehrsprachig, ranking-optimiert

**USP:** Schweizer Creative Director mit 20+ Jahren Trackrecord bei den größten Marken des Landes (Swisscom, SBB, Migros, Geberit, Raiffeisen, Helsana, Microsoft, Deloitte) — verbindet klassische Markenführung mit AI-getriebener Markenarbeit der Gegenwart.

### 1.3 Tonalität & Haltung

> **Verbindlich für alle Inhalte und Interaktionen:** Humble. Substanz statt Show.

- Kein Awards-Geprahle, sondern ruhige Einordnung
- Keine Selbstvermarktungs-Phrasen ("Visionär", "Game-Changer", "World-Class")
- Editorial, ruhig, präzise
- Inhalt führt, Design begleitet
- "Good design is good business" — die Bestandshaltung bleibt
- Whisper-Weight statt Statement-Weight (auch typografisch — Waldenburg/Cormorant 300 ist die signature move)

### 1.4 Erfolgskriterien

- [ ] **SEO #1:** Top-1-Ranking für "Pascal Frey" auf Google.ch innerhalb 4 Wochen nach Launch
- [ ] **SEO #2:** Top-10-Ranking für "Markenberater Schweiz", "Creative Director Schweiz" innerhalb 6 Monaten
- [ ] **SEO #3:** Top-20-Ranking für Long-Tail "Markenstratege Tech Schweiz", "Brand Strategy SaaS Schweiz"
- [ ] **Performance:** Lighthouse-Score ≥95 in allen vier Kategorien (Performance, Accessibility, Best Practices, SEO) auf jeder Seite
- [ ] **Core Web Vitals:** "Good"-Status (LCP <2.5s, CLS <0.1, INP <200ms) auf 90 % aller Page-Loads
- [ ] **Bilingualität:** 100 % der Inhalte verfügbar in DE und EN, ohne Design-Drift, ohne Layout-Shift
- [ ] **Editor-Autonomie:** Pascal kann eine Texteinheit (Headline, Paragraph, Blog-Post) in <2 Minuten ohne Entwickler-Hilfe ändern
- [ ] **Design-Treue:** Visuelle Identität laut `DESIGN.md` zu 100 % umgesetzt, getestet via Figma-/Screenshot-Vergleich

---

## 2. Zielgruppe

### 2.1 Primäre Persona — "Der Entscheider auf Suche"

- **Rollen:** Headhunter / CMO / Marketing-Director / CEO / Founder / Agentur-Geschäftsführer
- **Kontext:** Sucht einen erfahrenen Markenstrategen oder Creative Director — für ein konkretes Projekt, eine Festanstellung, ein Speaking-Engagement oder einen Beirat
- **Technisches Level:** Hoch (digitalaffin) bis mittel (klassisch)
- **Hauptziel:** In <60 Sekunden bewerten, ob Pascal die richtige Person ist
- **Frustration heute:** Findet zu wenig Substanz online, kann Trackrecord nicht greifen, weiß nicht, wie Pascal "denkt"

### 2.2 Sekundäre Personas

- **Der Recherchierende Journalist** — sucht O-Ton, Quote, Hintergrund zu Branding-Themen
- **Der Peer / Kollaborator** — andere CDs, Markenberater, Agenturen; sucht Inspiration oder Kooperation
- **Der Suchende Talent** — junge Designer, Strategen; folgt Pascal als Vorbild

### 2.3 Typischer Use Case

1. Persona googelt "Markenberater Schweiz", "Creative Director Schweiz" oder direkt "Pascal Frey"
2. Klickt auf das Top-Resultat → Landing auf `pascalfrey.ch` Home
3. Erfasst innerhalb 3 Sekunden: Wer ist das, was macht er, für wen hat er gearbeitet
4. Scrollt durch Awards und Kundenlogos → Vertrauensaufbau
5. Klickt entweder auf "Arbeiten" (Trackrecord) oder "Denken" (Haltung)
6. Endet im Kontakt-Bereich oder merkt sich die Person für später (Bookmark, LinkedIn-Connect)

### 2.4 Was die Site **nicht** ist

- Keine Lead-Generierungs-Maschine mit aggressiven CTAs
- Keine Selbstvermarktungs-Plattform mit Testimonial-Karussells
- Keine Brand Architects / Visari Sub-Site

---

## 3. Feature-Liste

### Must-Have (v1.0)

| # | Feature | Beschreibung | Prio |
|---|---------|--------------|------|
| 1 | **5 Kern-Seiten** | Home, Über, Arbeiten, Denken (Blog), Kontakt — bilingual DE/EN | Hoch |
| 2 | **Bilingualität DE/EN** | next-intl, eine Design-Wahrheit, Sprachumschalter im Header | Hoch |
| 3 | **TinaCMS Inline-Editing** | Auth-geschütztes In-Browser-Editing direkt auf der Live-Seite | Hoch |
| 4 | **MDX-Blog ("Denken")** | Index, Detail-Pages, Tags, Cover-Images, Reading-Time | Hoch |
| 5 | **Selected Work Section** | Kuratierte Projekt-Karten mit Detail-Pages | Hoch |
| 6 | **Awards-Section** | German Brand Award Gold, ADC, CP, AD — humble Einordnung | Hoch |
| 7 | **Kunden-Logo-Wall** | Logos in #b1b0b0 (Fog), keine Hover-Farb-Änderung | Hoch |
| 8 | **SEO-Foundation** | Meta-Tags, OG-Images dynamisch, JSON-LD (Person, Article, Breadcrumb), hreflang, sitemap.xml, robots.txt, Canonical | Hoch |
| 9 | **Kontakt-Sektion** | Email + Social Links (LinkedIn, Twitter/X, Medium); kein klassisches Formular | Hoch |
| 10 | **Performance-Optimierung** | next/image, Font-Optimization, Static Generation, Edge Rendering | Hoch |
| 11 | **Strukturierte Daten** | Schema.org Person mit `sameAs` für LinkedIn, Twitter, Medium | Hoch |
| 12 | **Privacy-First Analytics** | Vercel Analytics + Speed Insights (cookielos, DSGVO-konform) | Hoch |

### Nice-to-Have (v2.0+)

| # | Feature | Beschreibung |
|---|---------|--------------|
| 1 | **RSS-Feed** | Auto-generiert aus Blog-Inhalten |
| 2 | **Search im Blog** | Client-side via Pagefind oder FlexSearch |
| 3 | **Tag-Pages** | `/denken/tag/[tag]` für Filtering |
| 4 | **Reading-Progress-Indicator** | Im Blog-Detail beim Scrollen |
| 5 | **OG-Image-Generator** | `@vercel/og` für dynamische Post-spezifische OG-Images |
| 6 | **Press-/Mention-Sektion** | Wenn Medienpräsenz wächst |

### Out of Scope (definitiv nicht in v1.0)

- Visari-Inhalte oder -Verlinkung
- Brand Architects als Hauptgeschichte (nur dezent erwähnt)
- **Newsletter / Newsletter-Signup** (bestätigt: raus, kommt nicht)
- **Speaking-Page** (bestätigt: raus, Pascal positioniert humble, nicht als Speaker-Marke)
- E-Commerce, Booking, Bezahlsystem
- Multi-User-Redaktions-CMS
- Forum, Kommentare, Community
- Push-Notifications, PWA Offline
- Dark/Light-Mode-Toggle (Eggshell-Ground bleibt — kein Dark Mode, das System ist Light-Native)
- Automatische Translation (DeepL/GPT) — Pflege bleibt manuell
- Mehrsprachigkeit jenseits DE/EN
- Mobile App (nur responsive Web)
- Saturierte Akzent-Farben jeglicher Art

---

## 4. UI/UX Anforderungen

### 4.1 Plattform

- **Primär:** Web — Mobile-First-Design
- **Browser-Support:** Modern evergreen (Chrome, Safari, Firefox, Edge — letzte 2 Versionen)
- **Mindest-Breakpoints:** Mobile (375px), Tablet (768px), Desktop (1280px), Wide (1536px)

### 4.2 Design-System (verbindliche Kurzfassung)

> ⚠️ **Quelle der Wahrheit:** `DESIGN.md`. Dieser Abschnitt ist nur die operative Verdichtung für den Build.

#### 4.2.1 Tonalität visuell
**Editorial · achromatic · whisper-weight headlines · hairline shadows · pill-shaped CTAs · eggshell ground.** Maximale Restraint. Inhalt führt, Design begleitet. "Architect's blueprint on warm vellum."

#### 4.2.2 Farb-Tokens (verbindlich)

| Token | Wert | Rolle |
|-------|------|-------|
| `--color-eggshell` | `#fdfcfc` | Page-Background — niemals reines `#ffffff` für Page-Surfaces |
| `--color-powder` | `#f5f3f1` | Hover-States, Section-Highlights, aktive Row-Backgrounds |
| `--color-chalk` | `#e5e5e5` | Universal Border / Divider |
| `--color-fog` | `#b1b0b0` | Disabled, Logo-Grid (Kunden-Logos werden auf diese Farbe entsättigt) |
| `--color-gravel` | `#777169` | Sekundärtext, Captions, Eyebrow-Labels |
| `--color-slate` | `#a59f97` | Tertiärtext, Placeholder, Icon-Strokes |
| `--color-cinder` | `#575347` | Mid-Tone-Text *(Anmerkung: Original-CSS hat Tippfehler `#57534`, korrekt ist `#575347`)* |
| `--color-obsidian` | `#000000` | Primärtext, Filled CTAs, Logo-Mark |
| **Akzent** | — | **Pure achromatisch** `[Empfehlung – bestätigen]` — keine Akzent-Farbe in v1.0. Signal Blue / Ember bleiben unbenutzt. |

#### 4.2.3 Typografie

| Rolle | Font | Substitut | Sizes | Weight |
|-------|------|-----------|-------|--------|
| **Display & Headlines** | Waldenburg `[Empfehlung – bestätigen: → Cormorant Garamond 300]` | Cormorant Garamond 300 (Google Fonts, kostenlos) | 32 / 36 / 48 px | 300 |
| **Labels (Sektion-Eyebrows, Tag-Pills)** | WaldenburgFH 700 | Inter 700 mit `letter-spacing: 0.7px` | 14 px | 700 |
| **Body, UI, Navigation, Buttons** | Inter | Inter (Google Fonts) | 13 / 14 / 16 / 18 / 20 px | 400 / 500 |
| **Code & technische Markups** | Geist Mono | JetBrains Mono 400 | 13 px | 400 |

**Headline-Charakter:** Waldenburg/Cormorant 300 mit `-0.02em` Tracking bei 48px. Letters breathe. Kein Bold. Kein Caps-Lock-Geschrei. Whisper-Authority.

#### 4.2.4 Spacing-Scale (4px Base Unit)
`4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 48 / 56 / 64 / 72 / 96 / 160 px`

- **Section-Gap zwischen Major-Blöcken:** 80–120 px
- **Card-Padding:** 16–24 px
- **Element-Gap innerhalb Komponenten:** 8–12 px

#### 4.2.5 Radius-System

| Element | Radius |
|---------|--------|
| Buttons (Pills) | `9999px` |
| Tags / Pills | `9999px` |
| Cards | `16px` |
| Badges | `12px` |
| Modals | `24px` |
| Panels | `20px` |
| Inputs | `0px` *(editorial Underline-Stil, kein Round-Corner!)* |

#### 4.2.6 Elevation
**Hairline only.** Cards "schweben" um 1px ab Eggshell, sie "floaten" nicht.

```
box-shadow: rgba(0,0,0,0.4) 0px 0px 1.143px, rgba(0,0,0,0.04) 0px 2px 4px;
```

Niemals höhere Schatten. Niemals Drop-Shadows mit Blur >4px.

#### 4.2.7 Surfaces (Layer)

| Layer | Wert | Zweck |
|-------|------|-------|
| 0 — Page Ground | `#fdfcfc` | Base |
| 1 — Powder Surface | `#f5f3f1` | Hover, Section-Highlight |
| 2 — Card White | `#ffffff` | Cards, Form-Inputs (pop off ground) |
| 3 — Obsidian | `#000000` | Filled CTA, Full-Bleed Dark Sections |

### 4.3 Verbindliche Do's & Don'ts (aus `DESIGN.md`)

**Do:**
- Waldenburg/Cormorant immer 300 für Headlines ≥32px
- 9999px Radius auf allen Buttons & Pills
- Inset-Shadow `rgba(0,0,0,0.075) 0px 0px 0px 0.5px` ersetzt Border auf weißen Cards
- Kunden-Logos im Grid uniform auf `#b1b0b0` Fog desaturiert, kein Hover-Color-Change
- 80–120 px vertikale Section-Gaps; 8–12 px für Element-Gaps

**Don't:**
- **Niemals** Headline-Weight >300 (auch nicht Bold)
- **Niemals** saturierte Farbe in Text/Background/Buttons
- **Niemals** `#ffffff` für Page-Background (immer Eggshell)
- **Niemals** Inputs mit Border-Radius (Inputs sind 0px → editorial)
- **Niemals** mehr als 2 Button-Variants in einem Cluster (1 Filled Pill + 1 Ghost Pill = Maximum)

### 4.4 Komponenten-Inventar (für v1.0)

| Komponente | Pattern aus `DESIGN.md` | Notiz |
|-----------|------------------------|-------|
| **Primary Pill Button (Filled)** | `#000000` bg, `#fdfcfc` text, 9999px radius | "Lesen", "Mehr erfahren", externer Link CTA |
| **Ghost Pill Button** | `#ffffff` bg, `#000000` text, 1px chalk border | Sekundäre Aktionen, "Alle Beiträge" |
| **Section Eyebrow Label** | Inter 14px gravel, oder WaldenburgFH 14px 700 | Kategorie-Marker über Headlines |
| **Project Card** *(Pascal-Anpassung von Product Demo Card)* | `#ffffff` bg, 16px radius, hairline shadow | Selected Work / Blog-Post-Cards |
| **Tag Pill** | 9999px radius, chalk border, Inter 13px | Blog-Tags, Skill-Tags |
| **Logo Wall Item** | SVG entsättigt auf `#b1b0b0` | Kunden-Logos |
| **Navigation Bar** | 36px height, Eggshell bg, chalk border-bottom on scroll | Logo links, Nav mitte, Sprachumschalter rechts |
| **Footer** | Eggshell bg, gravel text Inter 14px | Social-Links, Copyright, Impressum |

> ⚠️ **Streichungen aus dem Original-System** (ElevenLabs-spezifisch, irrelevant für Pascal):
> - Voice Spectrum Conic-Gradient → ersetzt durch Pascals Wappen-Logo `[Empfehlung – bestätigen]`
> - Voice List Item → entfällt
> - Product Demo Card → ersetzt durch Project/Blog Card (gleiche Card-Vokabel)
> - ElevenCreative/ElevenAgents/ElevenAPI Sub-Tabs → entfallen

### 4.5 Key Screens

| # | Screen | Zweck | Hauptelemente |
|---|--------|-------|---------------|
| 1 | **Home (`/`)** | Sofortige Positionierung & Vertrauensaufbau | Hero (Waldenburg 300 48px Headline + Inter 16px Bio rechts) · Awards-Strip (4 Awards in chalk-bordered Pills) · Kunden-Logo-Wall (Fog-grayscale) · Selected-Work-Teaser (3 Cards) · Blog-Teaser (3 letzte Posts) · Kontakt-Footer |
| 2 | **Über (`/ueber`)** | Story, Haltung, Werdegang | Lange Bio (max-width 65ch), Skills-Grid, Werdegang als zeitliche Liste, Haltungs-Statement, dezenter Kontakt-CTA |
| 3 | **Arbeiten (`/arbeiten`)** | Trackrecord beweisen | 2-Spalten-Grid mit Project Cards (Cover, Client, Year, Role, Tag) — Klick auf `/arbeiten/[slug]` |
| 4 | **Arbeiten-Detail (`/arbeiten/[slug]`)** | Tiefe pro Case | Story-Format: Client / Year / Role / Outcome, MDX-Body, Bilder, ggf. Award-Badge |
| 5 | **Denken (`/denken`)** | Blog-Index | Post-Listing als zeitliche Liste (nicht Grid) — editorial wie ein Magazin-Inhaltsverzeichnis. Cover, Title, Date, Reading-Time, Tag |
| 6 | **Denken-Detail (`/denken/[slug]`)** | Einzelner Essay | Cover, Title (Waldenburg 48px), Date/Reading-Time/Tag, MDX-Body (max-width 65ch für Lesbarkeit), Author-Box am Ende, Related Posts |
| 7 | **Kontakt (`/kontakt`)** | Direkter Kontakt | Email als Mailto-Link (Waldenburg 36px), Social-Links (LinkedIn, Twitter/X, Medium), kurzer humbler Verfügbarkeits-Statement |
| 8 | **Admin (`/admin`)** | TinaCMS Editor | Auth-geschützt |

### 4.6 Sprache & Internationalisierung

- **Default:** Deutsch (Schweizer Konvention — kein "ß", durchgängig "ss")
- **Sekundär:** Englisch
- **URL-Strategie:** `/` für DE (Default ohne Prefix), `/en/...` für EN
- **Übersetzungs-Modell:** Kompletter String-Layer via `next-intl` JSON-Files für UI-Texte; lokalisierte MDX-Files für Long-Form-Content (`post.de.mdx` / `post.en.mdx`)
- **hreflang:** korrekt gesetzt für `de-CH`, `en` und `x-default`
- **Sprachumschalter:** Im Header rechts neben Nav, Inter 14px gravel — DE / EN getrennt durch hairline divider; persistiert via Cookie

### 4.7 Accessibility

- **WCAG 2.2 Level AA** Mindeststandard
- **Kontrast:** Obsidian/Eggshell = 20.5:1 (super) — alles über Gravel auf Eggshell (4.5:1+) prüfen via WebAIM
- **Keyboard-Navigation** komplett, Focus-States sichtbar (1px Obsidian-Outline auf 2px Offset)
- **Semantisches HTML5** (`<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- **`prefers-reduced-motion`** respektieren — keine animierten Hero-Effekte
- **Alt-Texts** auf allen Bildern verpflichtend, im CMS-Schema erforderliches Feld

### 4.8 Editor-Erfahrung (Pascal-Workflow)

1. Pascal navigiert zu `/admin`
2. Login via TinaCMS Cloud (GitHub-OAuth)
3. Klickt auf Live-Page-Vorschau → "Edit Mode"
4. Ändert Text inline (Headline, Paragraph, Blog-Post-Body)
5. Klick "Save" → automatischer Git-Commit auf `main`
6. Vercel deployed in <60s
7. Live-Site aktualisiert

---

## 5. Technischer Stack & Architektur

### 5.1 Frontend

| Layer | Technologie | Begründung |
|-------|-------------|------------|
| **Framework** | Next.js 15 (App Router) | Vercel-native, SSG/ISR, beste SEO-Story, RSC, Streaming |
| **Sprache** | TypeScript (strict) | Sicherheit, Autocompletion, Refactor-Robustheit |
| **Styling** | Tailwind CSS v4 (`@theme` aus `theme.css`) + Custom CSS | Tokens kommen 1:1 aus `theme.css`; Custom-CSS für Spezialitäten |
| **Komponenten** | React Server Components default; Client Components nur wo Interaktivität nötig (Sprachumschalter, TinaCMS Edit-Mode) | Performance, kleinste JS-Bundle |
| **Fonts** | `next/font` self-hosted: Cormorant Garamond 300 (Headlines) + Inter 400/500 (Body) + JetBrains Mono 400 (Code) | DSGVO, Performance, kein FOIT |
| **Bilder** | `next/image` mit AVIF/WebP, responsive sizes, `priority` für LCP-Image | LCP <2.5s |
| **i18n** | `next-intl` | Beste i18n-Lib für App Router, SSG-kompatibel, type-safe |
| **Icons** | Lucide React | Tree-shakable, monochrom, passt zur achromatischen Linie |
| **Animations** | CSS-only (subtile fade-ins via `prefers-reduced-motion`-aware CSS) | Kein Framer Motion in v1.0 — Restraint-Prinzip |

### 5.2 Content-Layer

| Layer | Technologie | Begründung |
|-------|-------------|------------|
| **CMS** | TinaCMS Cloud | Visual-Editing on-page, GitHub-Auth, Inhalt als Markdown im Repo |
| **Format** | MDX (Blog-Posts, Work-Cases), JSON/Markdown (Pages), JSON (Globals) | MDX erlaubt React-Komponenten in Long-Form |
| **Storage** | GitHub-Repo `/content/` | Single Source of Truth, Git-History, Versionierung |
| **Bild-Storage** | TinaCMS Media (oder `/public/images/`) | Gemanagter Editor-Workflow |

### 5.3 Backend / API

- **Kein dediziertes Backend** für v1.0
- **Next.js API Routes** nur für: dynamische OG-Image-Generation (`@vercel/og`), TinaCMS-Webhook-Endpoint
- **Auth:** Nur für `/admin` via TinaCMS GitHub-OAuth
- **Datenbank:** Keine — Inhalte leben als Markdown im Repo

### 5.4 Hosting & Deployment

| Layer | Technologie |
|-------|-------------|
| **Hosting** | Vercel (Pro empfohlen für Analytics + Team-Features) |
| **CI/CD** | Vercel Git-Integration (Auto-Deploy on Push) |
| **Domain** | pascalfrey.ch (bestehend) — DNS-Migration zu Vercel |
| **SSL** | Auto via Vercel (Let's Encrypt) |
| **Branches** | `main` = Production, `develop` = Preview-Deploys |
| **Repo** | GitHub (privat) |

### 5.5 SEO-Architektur

| Element | Umsetzung |
|---------|-----------|
| **Title-Pattern** | `[Page-Title] – Pascal Frey · Markenberater & Creative Director` |
| **Meta Description** | 150–160 Zeichen pro Page, Keyword-Fokus |
| **OG-Images** | `@vercel/og` dynamisch — Eggshell-Background, Cormorant 64px Headline, kleines Wappen unten links |
| **JSON-LD** | `Person` (Home + Über) mit `sameAs` (LinkedIn, X, Medium), `Article` (Blog-Posts), `BreadcrumbList` (Subpages), `Organization` (sekundär für Brand Architects) |
| **hreflang** | `de-CH`, `en`, `x-default` |
| **Sitemap** | `next-sitemap`, automatisch beim Build, beide Sprachen |
| **robots.txt** | Allow alle, Disallow `/admin`, `/api` |
| **Canonical URLs** | Pro Page gesetzt, kein Duplicate Content DE/EN |
| **Internal Linking** | Bewusste Verlinkung Home → Arbeiten → Detail · Blog-Index → Post → Related |
| **URL-Pattern** | Sprechend, kurz, lowercase: `/denken/markenstrategie-fuer-saas-startups` |

### 5.6 Performance-Targets

- Lighthouse-Score ≥95 in allen 4 Kategorien
- LCP <2.5s · CLS <0.1 · INP <200ms · TTFB <600ms
- JS-Bundle Initial <100kb gzipped

### 5.7 Integrationen & externe Dienste

| Service | Zweck | v1.0? |
|---------|-------|-------|
| Vercel | Hosting, Analytics, Speed Insights | Ja |
| TinaCMS Cloud | CMS-Backend, Auth, Media | Ja |
| GitHub | Repo, OAuth-Provider | Ja |
| Google Search Console | SEO-Monitoring | Ja (post-Launch) |
| Bing Webmaster Tools | SEO-Monitoring | Ja (post-Launch) |
| Brevo | Newsletter | **Nein** (out of scope) |

### 5.8 Architektur-Diagramm

```
┌─────────────────┐         ┌──────────────────┐
│   Visitor       │ ──HTTP─→│  Vercel Edge     │
│   Browser       │         │  (Global CDN)    │
└─────────────────┘         └────────┬─────────┘
                                     │
                              ┌──────▼──────┐
                              │  Next.js 15 │
                              │  App Router │ (SSG / ISR)
                              └──────┬──────┘
                                     │
                          ┌──────────▼──────────┐
                          │ /content (Markdown) │
                          │ in GitHub Repo      │
                          └──────────▲──────────┘
                                     │
            ┌────────────────────────┴────────────────────────┐
            │                                                 │
   ┌────────▼────────┐                              ┌─────────▼─────────┐
   │  TinaCMS Cloud  │ ←──── GitHub OAuth ─────────│  Pascal (Editor)  │
   │  (Visual Edit)  │                              │  /admin           │
   └─────────────────┘                              └───────────────────┘
```

---

## 6. Inhalts-Modell (TinaCMS Schema)

```
content/
├── pages/
│   ├── home.de.json
│   ├── home.en.json
│   ├── about.de.md
│   ├── about.en.md
│   ├── work.de.json
│   ├── work.en.json
│   └── contact.de.md / .en.md
├── work/
│   ├── swisscom-neo.de.mdx
│   ├── swisscom-neo.en.mdx
│   └── ...
├── posts/
│   ├── markenstrategie-fuer-saas.de.mdx
│   ├── markenstrategie-fuer-saas.en.mdx
│   └── ...
└── globals/
    ├── settings.json   (Site-Title, Default-OG, Social-Links)
    └── awards.json     (Awards-Liste)
```

### Schema-Felder

**Page (Home/Über/etc.):** `title`, `description`, `og_image`, `body` (rich-text), `sections` (Block-Array)

**Work-Item:** `title`, `client`, `year`, `role`, `tags`, `cover`, `summary`, `body` (MDX), `award` (optional), `external_url` (optional), `locale`

**Blog-Post:** `title`, `slug`, `date`, `excerpt`, `cover`, `tags`, `reading_time` (auto-computed), `body` (MDX), `locale`

**Globals:** `site_name`, `site_description`, `default_og_image`, `social_links` (LinkedIn, Twitter/X, Medium, Email)

---

## 7. Meilensteine & Zeitplan

| # | Meilenstein | Beschreibung | Aufwand | Zieldatum |
|---|------------|--------------|---------|-----------|
| M1 | **Setup** | Next.js 15 + TS + Tailwind v4 (`theme.css` integriert) + ESLint/Prettier + Vercel-Connect + DNS | 1 Tag | KW1 |
| M2 | **Design-System** | Token-Mapping aus `variables.css`, Typografie-Setup (Cormorant + Inter + JetBrains Mono via next/font), Komponenten-Library (Button, Card, Section, Heading, Eyebrow, Tag, LogoWall) — gegen `DESIGN.md` validiert | 3 Tage | KW1–2 |
| M3 | **CMS-Integration** | TinaCMS Cloud, Content-Schema, GitHub-Auth, Media-Setup | 2 Tage | KW2 |
| M4 | **Page-Templates** | Home, Über, Arbeiten (Index + Detail), Denken (Index + Detail), Kontakt — bilingual, mit i18n-Routing | 5 Tage | KW2–3 |
| M5 | **Inhalts-Befüllung** | Texte DE/EN, Bilder, Awards, Kunden-Logos (auf Fog desaturiert), 5–8 Work-Cases, 3–5 Blog-Posts | 5 Tage | KW3 |
| M6 | **SEO-Polish** | Schema.org, Sitemap, hreflang, OG-Images, robots.txt, Performance-Tuning auf Lighthouse 95+ | 2 Tage | KW4 |
| M7 | **QA & Launch** | Cross-Browser-Test, Accessibility-Audit (axe), Search-Console-Setup, Go-Live + DNS-Cutover | 1 Tag | KW4 |

**Total:** ~3–4 Wochen Vibe-Coding mit Claude/Cursor + Pascal als Inhalts-Owner.

---

## 8. Offene Fragen & Risiken

| # | Frage / Risiko | Typ | Status / Empfehlung |
|---|----------------|-----|---------------------|
| 1 | **Headline-Font:** Waldenburg lizenzieren oder Cormorant Garamond 300 als Substitut? | Design / Budget | **Empfehlung: Cormorant Garamond 300** (Google Fonts, kostenlos, sehr nah am Charakter). Upgrade auf Waldenburg jederzeit später möglich. `[bestätigen]` |
| 2 | **Akzent-Farbe:** Pure achromatisch oder einzelner Akzent (Signal Blue)? | Design | **Empfehlung: Pure achromatisch** für v1.0 — maximaler Restraint. Akzent kann später in v2 dazu. `[bestätigen]` |
| 3 | **Logo-Mark:** Wappen aus aktueller Site übernehmen? | Brand | **Empfehlung: Ja**, Wappen bleibt. Soll als SVG cleanly in `next/image` eingebunden werden. `[bestätigen]` |
| 4 | **Kunden-Logos:** Lizenzrechtliche Klärung — alle erlaubt? | Legal | Pascal prüft (insbesondere Microsoft, Deloitte, SBB). Ggf. einzelne entfernen. |
| 5 | **Bestehende Inhalte:** Welche Medium-/LinkedIn-Posts werden migriert? | Inhalt | Pascal kuratiert vor Launch. |
| 6 | **Aktuelle Position (Swisscom CD):** im Hero sichtbar oder nur in Über-Page? | Strategie | **Empfehlung:** Nur in Über-Page erwähnen, Home bleibt rollen-neutral und altert nicht mit Job-Wechseln. `[bestätigen]` |
| 7 | **TinaCMS Tier:** Free reicht für Personal Use? | Business | Free-Tier zum Start. Upgrade nur, wenn Limits erreicht. |
| 8 | **Cookie-Banner:** nötig? | Legal | **Empfehlung: Nein** — Vercel Analytics ist cookielos, keine Tracker. Kurzer Datenschutz-Hinweis im Footer reicht. |
| 9 | **Impressum / Datenschutz:** Pflicht in CH? | Legal | **Ja** (Privacy-Policy für Schweizer Kontaktformulare, Impressum analog). Eigene Markdown-Page `/impressum` und `/datenschutz`. |

---

## 9. Prompt-Kontext für Claude (Build-Ready)

> Dieser Block ist für Cursor/Claude-Code. Direkt verwendbar als System-Prompt für die Implementierung.

**System-Kontext:**
Du bist ein erfahrener Full-Stack-Entwickler mit Spezialisierung auf Next.js, Tailwind v4 und SEO. Du baust pascalfrey.ch — eine Personal-Brand-Website für Pascal Frey, Schweizer Markenberater & Creative Director. Editorial, achromatic, whisper-weight, humble. Substanz statt Show.

**Stack:** Next.js 15 (App Router) + TypeScript strict + Tailwind v4 + next-intl + TinaCMS + MDX + Vercel + next/font (Cormorant Garamond 300, Inter 400/500, JetBrains Mono 400)

**Design-System-Quelle:** `DESIGN.md` + `variables.css` + `theme.css` + `tokens.json` (alle vier Files sind verbindlich, `DESIGN.md` ist Source of Truth)

**Constraints:**
- Pure achromatic Palette — keine saturierten Akzente
- Eggshell `#fdfcfc` ist Page-Background (nie `#ffffff`)
- Headlines IMMER Cormorant Garamond 300 mit `-0.02em` Tracking
- Buttons IMMER 9999px Pill-Radius (Filled black + Ghost white = Maximum)
- Inputs IMMER 0px Radius (editorial!)
- Hairline Shadows only — kein Drop-Shadow >4px Blur
- WCAG 2.2 AA · Lighthouse 95+ · Core Web Vitals "Good"
- DE primär, EN sekundär — eine Design-Wahrheit, Strings über next-intl
- Kein Visari, Brand Architects nur dezent
- Tonalität humble — kein Awards-Geprahle, kein Buzzword-Bingo
- Kein Newsletter, keine Speaking-Page, kein Dark Mode, keine Cookies

**Implementierungs-Reihenfolge:**
1. Repo-Setup (Next.js 15 + TS strict + Tailwind v4 mit `theme.css` als `@theme`-Quelle + ESLint/Prettier)
2. Vercel-Connect, Domain via DNS, Preview-Branches
3. Fonts via `next/font` (Cormorant Garamond 300, Inter 400/500, JetBrains Mono 400)
4. i18n via `next-intl`, Locale-Routes (`/`, `/en/`)
5. Komponenten-Library: `Button` (Filled/Ghost Pill), `Heading` (Display/Lg/Sm), `Eyebrow`, `Section`, `Card`, `LogoWall`, `Tag`, `Footer`, `Header` mit Sprachumschalter
6. TinaCMS Cloud-Integration + Content-Schema (Pages, Work, Posts, Globals)
7. Layout: Root mit Header (Wappen + Nav + Sprachumschalter) + Footer (Social-Links, Copyright, Impressum-Links)
8. Home-Page (Hero + Awards-Strip + Logo-Wall + Work-Teaser + Blog-Teaser)
9. Über, Arbeiten-Index, Denken-Index, Kontakt — in dieser Reihenfolge
10. Detail-Pages `/arbeiten/[slug]` und `/denken/[slug]` mit MDX-Rendering
11. SEO-Foundation: Metadata-API, JSON-LD Person Schema, sitemap, robots, hreflang, dynamische OG-Images
12. Performance-Pass + Accessibility-Audit + Launch

---

## Anhang A: SEO-Keyword-Strategie

| Kategorie | Keywords | Ziel-Pages |
|-----------|----------|------------|
| **Brand** (Top-Prio) | "Pascal Frey", "Pascal Frey Markenberater", "Pascal Frey Creative Director" | Home, Über |
| **Kategorie Schweiz** | "Markenberater Schweiz", "Markenstratege Schweiz", "Creative Director Schweiz", "Brand Strategy Schweiz" | Home, Über |
| **Kategorie Zürich** | "Markenberater Zürich", "Creative Director Zürich" | Home, Kontakt |
| **Long-Tail Tech** | "Markenstratege SaaS Schweiz", "Brand Strategy Tech Startup Schweiz", "AI Brand Consultant DACH" | Denken (Blog-Posts) |
| **Long-Tail Mittelstand** | "Markenberater Mittelstand Schweiz", "Markenstrategie KMU Schweiz" | Denken (Blog-Posts) |
| **Englisch** | "Brand strategist Switzerland", "Creative director Switzerland", "Brand consultant DACH" | EN-Versionen |

---

## Anhang B: Initiale Content-Pipeline

### Selected Work (5–8 Cases für Launch — Pascal kuratiert)
1. Swisscom – NEO Brand Refresh (CD-Rolle)
2. Brand Architects – Gründung & Positionierung *(dezent, nicht Hauptgeschichte)*
3. Geberit – Template-Tool / Markenarchitektur
4. *(weitere 4–5 aus Pascals Trackrecord)*

### Initiale Blog-Posts ("Denken") (3–5 für Launch)
1. *Pascals Haltung zu Markenstrategie 2026* (Manifest-Charakter, humble Ton)
2. *AI in der Markenarbeit — Werkzeug, nicht Ersatz*
3. *Was Schweizer Marken von Tech-Startups lernen können*
4. *Good design is good business — was Dieter Rams heute bedeutet*

### Awards-Block
- German Brand Award Gold
- ADC
- CP (Communication Platform)
- AD (Art Director)

### Kunden-Logo-Wall (auf `#b1b0b0` Fog desaturiert)
Migros · Geberit · Raiffeisen · SOCAR · Swisscom · Helsana · Sanitas · Deloitte · Microsoft · Pro Senectute · Expert Suisse · Jung von Matt · Swiss Life · Manor · Oerlikon · Lungenliga · SBB · Dolder Waldhaus

---

## Anhang C: Tailwind v4 Token-Mapping (verkürzt)

Quelle: `theme.css` (vollständig). Im Build wird `theme.css` als `@theme`-Block in `globals.css` eingebunden, und alle Tokens werden direkt als Tailwind-Utility-Klassen verfügbar:

```html
<!-- Beispiele -->
<div class="bg-eggshell text-obsidian font-inter">…</div>
<h1 class="font-waldenburg text-display tracking-display leading-display font-light">…</h1>
<button class="bg-obsidian text-eggshell rounded-full px-4 py-2 text-body font-medium">…</button>
<span class="bg-powder text-gravel rounded-full px-3 py-1 text-caption">…</span>
```

---

## Anhang D: Folge-Dokument (offen)

**`pages-design-brief.md`** — pro Page detaillierter Layout-Brief: Section-Reihenfolge, Headlines, Copy-Direction, Bild-Hinweise. Folgt als nächster Schritt nach Bestätigung dieses Briefings.

---

**Ende des Briefings v2.0.**
