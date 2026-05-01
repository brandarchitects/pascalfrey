# Pages-Design-Brief: pascalfrey.ch

> **Version:** 1.0
> **Erstellt:** 01.05.2026
> **Status:** Build-Ready
> **Bezugsdokumente:** `pascal-frey-website-briefing-v2.md`, `DESIGN.md`, `theme.css`, `variables.css`, `tokens.json`

Dieser Brief definiert pro Page: Zweck, URL & SEO, Section-Reihenfolge, Copy-Direction (mit konkreten Vorschlägen DE/EN), Komponenten-Mapping und Layout-Specifics. Tonalität durchgängig **humble · editorial · substanzgetrieben**.

---

## Globale Konventionen

### Layout-Container
- `max-width: 1200px` zentriert auf Eggshell
- Horizontales Padding: 24px Mobile, 32px Tablet, 48px+ Desktop
- Section-Gap zwischen Major-Blöcken: 96–120px (`var(--spacing-96)` bis `var(--spacing-120)`)
- Lese-Spalten (Long-Form): max-width 65ch (~720px)

### Header (auf jeder Page identisch)

**Layout:** 36px Höhe, Eggshell `#fdfcfc` Background, Border-Bottom `#e5e5e5` 1px erst beim Scroll sichtbar (sticky on scroll).

| Position | Element | Style |
|----------|---------|-------|
| Links | Wappen-Logomark | 24px Höhe, SVG, monochrom Obsidian |
| Mitte | Nav-Links: `Über · Arbeiten · Denken · Kontakt` | Inter 400 14px Obsidian, 24px Gap, Hover → Underline (1px Obsidian, 4px Offset) |
| Rechts | Sprachumschalter `DE / EN` | Inter 400 14px, aktive Sprache Obsidian, inaktive Gravel (`#777169`), getrennt durch hairline `·` |

**Mobile (≤768px):** Hamburger-Icon rechts, Nav als Full-Screen-Overlay auf Eggshell mit großen Inter-500-18px-Links zentriert.

### Footer (auf jeder Page identisch)

**Layout:** Eggshell Background, 80px vertikales Padding, `1px solid #e5e5e5` Border-Top.

```
┌─────────────────────────────────────────────────────────┐
│  Pascal Frey                                             │
│  Markenberater · Creative Director · Zürich              │
│                                                          │
│  LinkedIn · X · Medium · pascal@pascalfrey.ch            │
│                                                          │
│  ─────────────────────────────────                       │
│                                                          │
│  © 2026 Pascal Frey · Impressum · Datenschutz            │
└─────────────────────────────────────────────────────────┘
```

- Name: Cormorant Garamond 300 24px Obsidian
- Tagline: Inter 400 14px Gravel
- Social-Links: Inter 500 14px Obsidian, Hover → Underline
- Legal-Zeile: Inter 400 13px Gravel
- Keine Icons — Wortmarken reichen (humble, editorial)

### 404-Page

**Layout:** Vollflächig zentriert, kein Header-Padding nötig.

- Eyebrow: `404` (WaldenburgFH 700 14px Gravel, 0.7px tracking)
- Headline (Cormorant 300 48px Obsidian, -0.96px tracking): "Diese Seite existiert nicht." / "This page doesn't exist."
- Body (Inter 400 16px Gravel, max-width 50ch): "Vielleicht ist sie umgezogen. Vielleicht hat sie nie existiert. Beides ist okay." / "Maybe it moved. Maybe it never existed. Either is fine."
- Filled Pill Button: "Zur Startseite" / "Back home" → `/`

### Loading / Skeleton States

Subtil. `#f5f3f1` Powder-Surface als Skeleton-Background mit minimaler Pulse-Animation (CSS-only, respektiert `prefers-reduced-motion`).

---

## Page 1: Home (`/`)

### Zweck
In <60 Sekunden klar machen: Wer ist Pascal Frey, was kann er, für wen hat er gearbeitet, wie denkt er. Der Visitor soll nach diesem einen Page-View ein verlässliches Bild haben.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/` (DE), `/en` (EN) |
| Title | `Pascal Frey · Markenberater & Creative Director · Schweiz` |
| Meta Description (DE) | "Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer Unternehmen. Creative Director bei Swisscom, Gründer von Brand Architects. Designarbeit für Migros, SBB, Geberit, Raiffeisen u.a." |
| Meta Description (EN) | "Pascal Frey has been building brands for Swiss companies for over 20 years. Creative Director at Swisscom, founder of Brand Architects. Design work for Migros, SBB, Geberit, Raiffeisen and others." |
| OG-Image | Eggshell-Background, Cormorant 64px Headline "Pascal Frey", kleines Wappen unten links, dezente Einordnung als Subhead |
| JSON-LD | `Person` mit `sameAs` (LinkedIn, X, Medium) |

### Section-Reihenfolge

1. **Hero** (Above the Fold)
2. **Awards-Strip**
3. **Selected Work Teaser** (3 Cards)
4. **Logo-Wall** (Kunden)
5. **Denken Teaser** (3 letzte Posts)
6. **Closing Statement / Kontakt-CTA** (dezent)

### 1.1 Hero

**Layout:** 2-Spalten asymmetrisch 60/40, vertikal zentriert in einer min-height von ~70vh. 120px top-padding nach Header. Eggshell-Ground.

| Spalte | Inhalt |
|--------|--------|
| Links 60% | **Headline** — Cormorant Garamond 300, 48px Desktop / 36px Tablet / 32px Mobile, `-0.96px` tracking, line-height 1.08, Obsidian |
| Rechts 40% | **Bio-Text** — Inter 400 16px Gravel, max-width 40ch, line-height 1.5 |

**Headline-Optionen** (eine wählen):

- **Option A (statement, kürzest):**
  DE: *"Marken, die bleiben."*
  EN: *"Brands that last."*

- **Option B (Vorstellungs-Headline, im Stil deiner Bestands-Site):**
  DE: *"Pascal Frey entwickelt prägnante Marken für Schweizer Unternehmen."*
  EN: *"Pascal Frey builds distinctive brands for Swiss companies."*

- **Option C (positionierend, balanciert):**
  DE: *"Markenarbeit, die Substanz hinterlässt."*
  EN: *"Brand work that leaves substance behind."*

→ **Empfehlung:** **Option A** für maximalen Restraint — eine Aussage, kein Selbstporträt. Die Erklärung rechts liefert den Rest. `[bestätigen]`

**Bio-Text (rechts):**

DE:
> "Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer Unternehmen. Aktuell als Creative Director bei Swisscom. Gründer von Brand Architects. Arbeitete für Migros, SBB, Geberit, Raiffeisen, Helsana und andere."

EN:
> "Pascal Frey has been building brands for Swiss companies for over 20 years. Currently Creative Director at Swisscom. Founder of Brand Architects. Past clients include Migros, SBB, Geberit, Raiffeisen, Helsana and others."

**Hinweis:** Kein Foto im Hero v1.0. Die Typografie trägt. Foto kann optional in Über-Page rein.

### 1.2 Awards-Strip

**Layout:** Volle Breite innerhalb Container, 96px vertikales Section-Padding, Powder-Surface (`#f5f3f1`) leicht hervorgehoben — *oder* auf Eggshell mit dezenten chalk-Borders.

| Element | Style |
|---------|-------|
| Eyebrow | "Ausgezeichnet" / "Recognized" — WaldenburgFH 700 14px Gravel, 0.7px tracking, 8px gap |
| Bridge-Text | Inter 400 14px Gravel, max-width 50ch, dezent eingeordnet |
| Award-Logos | 4 SVGs in einer Reihe, je auf chalk-bordered Card 16px radius, 80px Höhe |

**Bridge-Copy (statt Award-Bragging):**

DE: *"Awards sind kein Ziel. Aber sie sind ein Hinweis darauf, dass Strategie und Gestaltung wirken."*

EN: *"Awards aren't the goal. But they're a sign that strategy and design are doing their work."*

(Diese Formulierung übernimmt die Tonalität deiner Bestands-Site, leicht straffer.)

**Awards (in dieser Reihenfolge):**
German Brand Award Gold · ADC · CP · AD

### 1.3 Selected Work Teaser

**Layout:** Volle Container-Breite, Eggshell-Ground, 96px vertikales Padding.

| Element | Style |
|---------|-------|
| Eyebrow | "Arbeiten" / "Work" — WaldenburgFH 700 14px Gravel |
| Headline (Cormorant 300 36px) | DE: *"Eine Auswahl."* · EN: *"A selection."* |
| Cards | 3-Spalten-Grid, 32px gap, jede Card: Cover 4:3, 16px radius, hairline shadow, Body 24px padding |

**Card-Aufbau (pro Card):**

```
┌─────────────────────────┐
│                         │
│   [Cover-Image 4:3]     │
│                         │
├─────────────────────────┤
│ 2024 · NEO              │  ← Inter 400 13px Gravel
│                         │
│ Swisscom                │  ← Inter 500 16px Obsidian
│                         │
│ Brand Refresh           │  ← Inter 400 14px Gravel
│ als Creative Director   │
└─────────────────────────┘
```

**Empfohlene Initial-Auswahl** (Pascal kuratiert final):
1. Swisscom NEO Brand Refresh (2024–25)
2. Brand Architects Foundation (dezente Eigenarbeit)
3. Geberit Markenarchitektur

**Footer der Section:** Ghost-Pill-Button "Alle Arbeiten" / "All work" → `/arbeiten`

### 1.4 Logo-Wall

**Layout:** Volle Container-Breite, Eggshell, 96px vertikales Padding.

| Element | Style |
|---------|-------|
| Eyebrow | "Vertrauen seit 20 Jahren" / "Trusted for 20 years" — WaldenburgFH 700 14px Gravel |
| Logo-Grid | 6 Spalten × 3 Reihen Mobile-responsive (3×6 Mobile, 4×5 Tablet) |
| Logo-Style | SVG entsättigt auf `#b1b0b0` Fog, max-height 28px, 40px column-gap, 24px row-gap |
| Hover | Keine Farb-Änderung — Disziplin halten |

**Logos (alphabetisch, oder nach Bekanntheit gestaffelt):**
Deloitte · Dolder Waldhaus · Expert Suisse · Geberit · Helsana · Jung von Matt · Lungenliga · Manor · Microsoft · Migros · Oerlikon · Pro Senectute · Raiffeisen · Sanitas · SBB · SOCAR · Swiss Life · Swisscom

(18 Logos — passt in 6×3-Grid)

> ⚠️ Vor Launch: Lizenz-Check. Microsoft, Deloitte, SBB können kritisch sein.

### 1.5 Denken Teaser

**Layout:** Eggshell, 96px vertikales Padding.

| Element | Style |
|---------|-------|
| Eyebrow | "Denken" / "Thinking" — WaldenburgFH 700 14px Gravel |
| Headline (Cormorant 300 36px) | DE: *"Notizen, Essays, Beobachtungen."* · EN: *"Notes, essays, observations."* |
| Liste | 3 letzte Posts in editorial Inhaltsverzeichnis-Stil — keine Cards |

**Listen-Item-Aufbau (eine Zeile pro Post):**

```
Apr 2026 · 8 min lesen
Markenstrategie für Tech-Start-ups
Was sich ändert, wenn KI zum Co-Autor wird.    →
─────────────────────────────────────────────
```

- Datum + Reading-Time: Inter 400 13px Gravel
- Title: Cormorant Garamond 300 24px Obsidian, hover → underline
- Excerpt: Inter 400 16px Gravel, max-width 65ch
- Pfeil rechts (Lucide `arrow-right`): erscheint nur on hover, Obsidian
- Divider: `1px solid #e5e5e5` zwischen Items, 24px gap oben/unten

**Footer der Section:** Ghost-Pill-Button "Alle Beiträge" / "All posts" → `/denken`

### 1.6 Closing Statement / Kontakt-CTA

**Layout:** Volle Container-Breite, Eggshell, 120px vertikales Padding (großzügig).

**Aufbau, vertikal zentriert:**

| Element | Style |
|---------|-------|
| Statement (Cormorant 300 48px, max-width 30ch) | DE: *"Good design, is good business."* (übernommen aus Bestands-Site, ist quasi Pascals Signatur) |
| Bridge-Text (Inter 400 16px Gravel, max-width 50ch) | DE: *"Wenn du an einem Projekt arbeitest, das Substanz haben soll, schreib mir."* / EN: *"If you're working on something that should have substance, get in touch."* |
| Filled Pill Button | "Kontakt" / "Get in touch" → `/kontakt` |

---

## Page 2: Über (`/ueber` · `/en/about`)

### Zweck
Tiefe Einordnung der Person — Bio, Werdegang, Skills, Haltung. Wer hier landet, will wissen: Wie tickt dieser Mensch? Kann ich ihm vertrauen?

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/ueber` (DE), `/en/about` (EN) |
| Title | `Über Pascal Frey · Markenberater & Creative Director` |
| Meta Description | "20+ Jahre Markenarbeit für Schweizer Unternehmen. Werdegang, Skills, Haltung. Aktuell Creative Director bei Swisscom, Gründer Brand Architects." |

### Section-Reihenfolge

1. Hero (kurzes Intro mit optional Foto)
2. Bio (Long-Form, max 65ch)
3. Werdegang (zeitliche Liste, kein klassisches CV)
4. Skills / Expertise
5. Haltung (Statement-Block)
6. Kontakt-Hinweis

### 2.1 Hero

**Layout:** Single-Column, max-width 65ch, links-bündig.

| Element | Style |
|--------|-------|
| Eyebrow | "Über" / "About" — WaldenburgFH 700 14px Gravel |
| Headline (Cormorant 300 48px) | DE: *"Pascal Frey."* (mit Punkt — Restraint) · EN: *"Pascal Frey."* |
| Optional Foto | 4:5 Hochformat, max-height 480px, 16px radius, hairline shadow |

→ **Empfehlung:** Foto kommt — aber editorial, nicht Corporate. Schwarzweiss oder leicht entsättigt, ruhige Pose, nicht-lächelnd. `[bestätigen ob Foto rein]`

### 2.2 Bio (Long-Form)

**Layout:** Single-Column, max-width 65ch, Inter 400 18px Subheading-Size für Lead-Absatz, dann Inter 400 16px Body.

**Aufbau (Beispiel-Copy DE, drei Absätze):**

> Pascal Frey ist Markenberater, Designer und Creative Director. Er arbeitet seit 2003 an der Schnittstelle zwischen Strategie und Gestaltung — für Schweizer Unternehmen, die Marke nicht als Dekoration verstehen, sondern als Geschäftsentscheidung.
>
> Seit 2022 ist er Creative Director bei Swisscom in der Group Communications. Davor leitete er Designteams in Agentur und Industrie, baute Marken auf, refreshte sie, dokumentierte sie. 2018 gründete er Brand Architects — ein Netzwerk für Markenberatung, das wie ein kleines Studio arbeitet, aber mit Senior-Expertise auftritt.
>
> Seine Arbeit ist getragen von der Überzeugung, dass gute Marken nicht aus Trends entstehen, sondern aus präziser Beobachtung, klaren Entscheidungen und der Geduld, lange genug an einer Idee zu bleiben.

**EN-Variante** (analog, idiomatisch übersetzt — keine wörtliche Übersetzung).

**Tonalitäts-Check:** Keine Adjektive wie "leidenschaftlich", "innovativ", "preisgekrönt". Statt zu beschreiben, dass er gut ist → zeigen, was er tut.

### 2.3 Werdegang

**Layout:** Zeitliche Liste, nicht klassisches CV. Editorial.

**Format pro Eintrag:**
```
2022 — heute
Creative Director · Swisscom Group Communications
Markenführung NEO, Festival-Konzepte, Designsystem-Arbeit.
```

- Jahre: Inter 500 14px Obsidian
- Rolle/Firma: Cormorant Garamond 300 24px Obsidian
- Kurzbeschreibung: Inter 400 16px Gravel, max-width 65ch
- 1px hairline Divider zwischen Einträgen, 24px gap

**Tiefe:** 5–7 Stationen. Keine vollständige Job-History — nur die strategisch relevanten.

### 2.4 Skills / Expertise

**Layout:** 3-Spalten-Grid auf Desktop, Single-Column Mobile. Eggshell-Ground, kein Card-Background.

**Pro Spalte:**
- Eyebrow (WaldenburgFH 700 14px): Kategorie
- 3–5 Tag-Pills darunter (chalk border, 9999px radius, Inter 500 13px)

**Empfohlene Kategorien & Tags:**

| Kategorie | Tags |
|-----------|------|
| Markenstrategie | Positionierung · Markenarchitektur · Brand-Naming · Brand-Voice |
| Design | Corporate Design · Designsysteme · Typografie · Editorial Design |
| Führung | Creative Direction · Designteam-Aufbau · Agentur-Briefings · Stakeholder-Management |

### 2.5 Haltung (Statement-Block)

**Layout:** Volle Container-Breite, ggf. Powder-Surface-Hintergrund für Pause-Effekt, 120px vertikales Padding.

**Aufbau, vertikal zentriert:**

| Element | Style |
|---------|-------|
| Eyebrow | "Haltung" / "Stance" — WaldenburgFH 700 14px Gravel |
| Statement (Cormorant 300 36px, max-width 30ch) | DE: *"Marke ist eine Geschäfts­entscheidung, keine Geschmacks­frage."* · EN: *"Brand is a business decision, not a matter of taste."* |
| Bridge (Inter 400 16px Gravel, max-width 65ch) | Längeres Manifest in 2–3 Sätzen — Pascal schreibt, was ihn antreibt. |

**Beispiel-Bridge (DE):**
> "Ich arbeite mit Unternehmen, die ihre Marke als Werkzeug sehen, nicht als Bühne. Das macht die Arbeit fokussiert und wirtschaftlich. Und es macht den Erfolg messbar."

### 2.6 Kontakt-Hinweis

Subtil am Ende der Page — keine eigene Sektion, sondern Closing-Absatz mit Mailto-Link.

**Beispiel:**
> "Mehr Fragen? Schreib mir — pascal@pascalfrey.ch."

Mailto als Cormorant 300 24px, hover → 1px underline.

---

## Page 3: Arbeiten — Index (`/arbeiten` · `/en/work`)

### Zweck
Vollständiger Werkschau-Index. Wer hier landet, will Trackrecord prüfen. Conversion = Klick auf Detail-Page.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/arbeiten`, `/en/work` |
| Title | `Arbeiten · Pascal Frey · Markenberater & Creative Director` |
| Meta Description | "Ausgewählte Markenarbeiten von Pascal Frey für Swisscom, Migros, Geberit, Raiffeisen, Helsana und weitere Schweizer Unternehmen." |

### Section-Reihenfolge

1. Hero (kurz)
2. Project-Grid (2 Spalten)
3. Footer-CTA (dezent)

### 3.1 Hero

**Layout:** Single-Column, links-bündig, max-width 65ch.

| Element | Style |
|--------|-------|
| Eyebrow | "Arbeiten" / "Work" — WaldenburgFH 700 14px Gravel |
| Headline (Cormorant 300 48px) | DE: *"Eine Auswahl aus 20 Jahren."* · EN: *"A selection from 20 years."* |
| Bridge (Inter 400 18px Gravel, max-width 50ch) | DE: *"Diese Projekte zeigen die Bandbreite — von Markenrefresh über Architektur bis Templating-Systeme."* |

### 3.2 Project-Grid

**Layout:** 2-Spalten-Grid Desktop (1-Spalte Mobile, 1-Spalte Tablet sinnvoll bei großem Cover), 48px vertikales gap, 32px horizontales gap.

**Pro Card:**
```
┌─────────────────────────────┐
│                             │
│   [Cover-Image 4:3]         │
│                             │
├─────────────────────────────┤
│ 2024                        │  ← Inter 400 13px Gravel
│                             │
│ Swisscom NEO Brand Refresh  │  ← Cormorant 300 24px Obsidian
│                             │
│ Creative Director           │  ← Inter 400 14px Gravel
│ Visual System & Brand Guide │
└─────────────────────────────┘
```

- Card-Background: White `#ffffff`, 16px radius, hairline shadow
- Card-Padding: 0 oben (Cover full-bleed), 24px unten/seiten für Text
- Hover: Kein Farb-Wechsel; Cover-Image leicht (1.02) gescaled, 200ms ease-out, respektiert reduced-motion
- Klick: Linkt auf `/arbeiten/[slug]`

**Anzahl initial:** 6–10 Cases (Pascal kuratiert).

### 3.3 Footer-CTA (dezent)

Closing-Absatz unter dem Grid, vor dem Page-Footer:

> DE: "Mehr Cases auf Anfrage. Schreib mir — pascal@pascalfrey.ch."
> EN: "More cases on request. Get in touch — pascal@pascalfrey.ch."

---

## Page 4: Arbeiten — Detail (`/arbeiten/[slug]`)

### Zweck
Tiefe pro Case. Story, Rolle, Outcome. Kein Marketing — eine ehrliche Einordnung.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/arbeiten/[slug]`, `/en/work/[slug]` |
| Title | `[Project-Title] · [Client] · Pascal Frey` |
| Meta Description | Excerpt aus Case (160 Zeichen, kuratiert per Frontmatter) |
| OG-Image | Cover des Case |
| JSON-LD | `Article` mit `author: Person(Pascal Frey)` |

### Section-Reihenfolge

1. Hero-Cover (full-bleed innerhalb Container)
2. Meta-Block (Client / Year / Role / Tags)
3. Body (MDX, max-width 65ch)
4. Galerie (optional, MDX-Components)
5. Award-Badge (optional, falls preisgekrönt)
6. Prev/Next-Navigation
7. Related-Block (3 weitere Cases)

### 4.1 Hero-Cover

Full-width 16:9 Cover-Image, 16px radius, hairline shadow. Über dem Cover schwebt Cormorant-300-48px-Title in Obsidian-Text auf Eggshell, links-bündig in der Container-max-width.

### 4.2 Meta-Block

**Layout:** Direkt unter Cover, 4-spaltige Grid (1-spaltig Mobile), 24px gap.

| Spalte | Inhalt |
|--------|--------|
| Client | Eyebrow "Kunde" + Inter 500 16px Obsidian |
| Year | Eyebrow "Jahr" + Inter 500 16px Obsidian |
| Role | Eyebrow "Rolle" + Inter 500 16px Obsidian |
| Tags | Eyebrow "Disziplinen" + Tag-Pills |

### 4.3 Body (MDX)

**Layout:** Single-Column, max-width 65ch, links-bündig.

**Typografie für MDX-Content:**

| Element | Style |
|---------|-------|
| H2 (Section) | Cormorant 300 36px Obsidian, 80px top, 16px bottom |
| H3 (Subsection) | Cormorant 300 24px Obsidian, 48px top, 12px bottom |
| Paragraph | Inter 400 18px Cinder/Obsidian, line-height 1.6 |
| Lead-Paragraph (erster Absatz) | Inter 400 20px Cinder, line-height 1.5 |
| Bold | Inter 500 (medium) |
| Italic | Inter 400 italic |
| Blockquote | Cormorant Garamond 300 24px Cinder, italic, 4px chalk border-left, 24px padding-left |
| Inline Code | Geist Mono 400 13px, Powder-Background, 4px radius, 2px/6px padding |
| Bullet List | Inter 400 16px, custom marker (1ch indent) |
| Image (full-width MDX) | 16px radius, hairline shadow, optional Caption Inter 400 14px Gravel zentriert darunter |
| Footnote | Inter 400 13px Gravel, hochgestellte Nummer |

**Body-Struktur-Empfehlung:**
1. Lead-Absatz: Was war die Aufgabe, was war der Kontext?
2. H2: Ausgangslage
3. H2: Ansatz / Ansatz
4. H2: Ergebnis
5. Optional H2: Was ich daraus mitnehme

### 4.4 Galerie (optional, MDX-Component)

Verfügbare MDX-Components (im TinaCMS auswählbar):
- `<Image>` — einzelnes Bild
- `<ImagePair>` — 2 Bilder nebeneinander, gleicher gap
- `<ImageGrid>` — 3 oder 4 Bilder im Grid
- `<FullBleedImage>` — bricht aus Container aus

### 4.5 Award-Badge

Falls Case preisgekrönt, dezenter Block am Ende des Body:

```
Ausgezeichnet mit
[Award-Logo] German Brand Award Gold 2024
```

### 4.6 Prev/Next-Navigation

**Layout:** 2-Spalten am Ende der Page, 96px Section-Gap, 1px chalk Border-Top.

```
← Vorheriger Case                Nächster Case →
Geberit Markenarchitektur        Brand Architects Foundation
```

- Eyebrow + Title in Cormorant 300 24px

### 4.7 Related-Block

3 zufällige weitere Cases als Card-Grid (gleiche Card-Komponente wie Index).

---

## Page 5: Denken — Index (`/denken` · `/en/thinking`)

### Zweck
Editorial-Magazin-Index aller Blog-Posts. Hier zeigt Pascal seine Haltung, sein Denken, seinen Stil. Wer hier landet, sucht Substanz.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/denken`, `/en/thinking` |
| Title | `Denken · Pascal Frey · Notizen, Essays, Beobachtungen` |
| Meta Description | "Pascal Frey über Markenstrategie, Design, KI und die Schweizer Wirtschaft. Notizen, Essays, Beobachtungen aus 20 Jahren Markenarbeit." |
| RSS | Feed verfügbar v2.0 |

### Section-Reihenfolge

1. Hero
2. Post-Liste (editorial, nicht Grid)
3. Footer-Note

### 5.1 Hero

**Layout:** Single-Column, links-bündig, max-width 65ch.

| Element | Style |
|--------|-------|
| Eyebrow | "Denken" / "Thinking" |
| Headline (Cormorant 300 48px) | DE: *"Notizen, Essays, Beobachtungen."* · EN: *"Notes, essays, observations."* |
| Bridge (Inter 400 18px Gravel, max-width 50ch) | DE: *"Was mich beschäftigt — über Markenarbeit, Design und die Schweizer Wirtschaft. Manchmal kurz, manchmal lang. Immer ehrlich."* |

### 5.2 Post-Liste

**Layout:** Editorial Inhaltsverzeichnis-Stil, vertikale Liste, keine Cards. 1px chalk Divider zwischen Items, 32px gap oben/unten pro Item.

**Pro Listen-Item:**

```
─────────────────────────────────────────────
April 2026 · 8 min lesen · Markenstrategie

Markenstrategie für Tech-Start-ups
Was sich ändert, wenn KI zum Co-Autor der Marke wird,
und warum das nicht so neu ist, wie es scheint.

→
─────────────────────────────────────────────
```

| Element | Style |
|---------|-------|
| Meta-Zeile | Inter 400 13px Gravel — Datum · Reading-Time · Tag |
| Title | Cormorant Garamond 300 32px Obsidian, hover → 1px underline 4px offset |
| Excerpt | Inter 400 16px Gravel, max-width 65ch, line-height 1.5 |
| Pfeil rechts | Lucide `arrow-right`, erscheint nur on hover, 16px Obsidian |

**Reihenfolge:** Reverse chronological (neueste oben).

**Optional:** Falls >20 Posts, einfache Year-Grouping Headlines („2026" / „2025"), Cormorant 300 48px, 96px top-gap.

**Pagination:** Erst ab >30 Posts. Bis dahin alle anzeigen.

### 5.3 Footer-Note (dezent)

Closing-Absatz vor Page-Footer:

> DE: "Folgst du mir lieber auf [LinkedIn] oder [Medium]? Beides okay."
> EN: "Prefer to follow on [LinkedIn] or [Medium]? Either works."

---

## Page 6: Denken — Detail (`/denken/[slug]`)

### Zweck
Lesen. Maximale Lesefreundlichkeit. Substanz darstellen.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/denken/[slug]`, `/en/thinking/[slug]` |
| Title | `[Post-Title] · Pascal Frey` |
| Meta Description | Excerpt (160 Zeichen, aus Frontmatter) |
| OG-Image | Dynamisch via `@vercel/og` mit Post-Title in Cormorant 64px auf Eggshell + Wappen |
| JSON-LD | `Article` mit `author`, `datePublished`, `dateModified`, `image` |

### Section-Reihenfolge

1. Hero-Cover (optional)
2. Title-Block
3. Body (MDX, max-width 65ch)
4. Author-Box am Ende
5. Related Posts (3)

### 6.1 Hero-Cover (optional)

Falls Post ein Cover hat: Full-width 16:9, 16px radius, hairline shadow. Falls nicht: Skip — nur Title-Block.

### 6.2 Title-Block

**Layout:** Single-Column, max-width 65ch, links-bündig, 96px top-padding.

| Element | Style |
|--------|-------|
| Meta-Zeile | Inter 400 14px Gravel — Datum · Reading-Time · Tag |
| Title | Cormorant 300 48px Obsidian, `-0.96px` tracking |
| Untertitel (optional) | Cormorant 300 24px Cinder, Italic |

### 6.3 Body (MDX)

Identisch zur Arbeiten-Detail-Body-Spec (siehe 4.3) — gleiche Typografie, gleiche MDX-Components.

### 6.4 Author-Box

**Layout:** Volle Container-Breite, Powder-Surface-Background, 16px radius, 32px padding, 96px top-margin.

| Element | Style |
|--------|-------|
| Avatar (optional) | 64px circular, leicht entsättigt |
| Name | Cormorant 300 24px Obsidian: "Pascal Frey" |
| Bio-Mini (Inter 400 14px Gravel, max-width 50ch) | "Markenberater und Creative Director. Schreibt über Marke, Design und Schweizer Wirtschaft." |
| Social-Links | LinkedIn · X · Medium |

### 6.5 Related Posts

3 verwandte Posts (per Tag oder per next-3-by-date), gleiche Listen-Ästhetik wie Index — keine Cards.

---

## Page 7: Kontakt (`/kontakt` · `/en/contact`)

### Zweck
Direkter Kontakt — minimal, ehrlich, kein Lead-Funnel.

### URL & SEO

| Feld | Wert |
|------|------|
| URL | `/kontakt`, `/en/contact` |
| Title | `Kontakt · Pascal Frey` |
| Meta Description | "Pascal Frey ist via Email und LinkedIn erreichbar. Anfragen für Markenarbeit und Creative Direction in der Schweiz." |

### Layout

**Single-Column zentriert, max-width 50ch, vertikal mittig auf der Page (min-height ~70vh).**

### Aufbau

| Element | Style |
|---------|-------|
| Eyebrow | "Kontakt" / "Get in touch" |
| Headline (Cormorant 300 48px) | DE: *"Schreib mir."* · EN: *"Get in touch."* |
| Bridge (Inter 400 18px Gravel) | DE: *"Email funktioniert am besten. Antwortzeit normalerweise unter 48 Stunden."* · EN: *"Email works best. Reply usually within 48 hours."* |
| Email-Mailto (Cormorant 300 32px) | `pascal@pascalfrey.ch` |
| Social-Block (Inter 500 14px) | LinkedIn · X · Medium (jeweils als Underlined Link) |
| Verfügbarkeits-Hinweis (Inter 400 14px Gravel) | DE: *"Aktuell offen für ausgewählte Projekte. Vollzeit ausgelastet bei Swisscom."* · EN: *"Currently open to selected projects. Full-time engaged at Swisscom."* |

**Kein Formular.** Mailto reicht.

→ **Empfehlung:** Verfügbarkeits-Hinweis ist optional aber humble — zeigt Realität ohne Pose. `[bestätigen]`

---

## Page 8: Impressum (`/impressum` · `/en/imprint`)

### Zweck
Schweizer Pflicht-Page (Art. 322 OR Vertretungsangaben, Art. 3 UWG Geschäftsbezeichnungen — bei Personal-Brand reicht Privatperson).

### Layout

Single-Column, max-width 65ch, links-bündig. Eyebrow + Cormorant 300 36px Title + Inter 400 16px Body.

**Pflichtinhalt:**

```
Verantwortlich für den Inhalt
Pascal Frey
[Adresse — Pascal entscheidet, ob Privatadresse oder Brand-Architects-Geschäftsadresse Würenlos]

Kontakt
pascal@pascalfrey.ch

Konzept & Gestaltung
Pascal Frey

Realisation
Vibe-coded mit Claude / Cursor
Hosted bei Vercel Inc.
```

→ **Empfehlung:** Brand Architects Geschäftsadresse Würenlos verwenden — diskreter als Privatadresse. `[bestätigen]`

---

## Page 9: Datenschutz (`/datenschutz` · `/en/privacy`)

### Zweck
DSG-Konformität (revidiert September 2023) + DSGVO für EU-Visitor.

### Layout
Identisch zu Impressum.

### Inhalts-Direction

Klare, kurze Sätze. Kein Legal-Jargon-Wall. Folgendes wird abgedeckt:

1. Verantwortliche Stelle
2. Erhobene Daten (im Wesentlichen: keine — kein Formular, kein Cookie-Tracking)
3. Vercel Analytics (cookielos, anonymisiert)
4. Hosting durch Vercel Inc. (USA — Datenübermittlung-Hinweis)
5. Rechte der Besucher (Auskunft, Löschung)
6. Kontakt für Datenschutz-Anfragen

**Ton:** Selbe humble, klare Stimme wie Rest der Site. Kein Boilerplate-Generator-Output 1:1 — anpassen.

> ⚠️ Vor Launch: Anwalt drüberschauen lassen, oder professionellen Datenschutz-Generator nutzen (z.B. datenschutzgenerator.de). Hier bin ich kein Anwalt.

---

## Anhang: Page-Mapping zu Komponenten-Library

| Komponente | Pages, in denen sie vorkommt |
|-----------|------------------------------|
| `<Header>` | Alle |
| `<Footer>` | Alle |
| `<Hero>` (variant: split / single) | Home, Über, Arbeiten, Denken, Kontakt |
| `<Eyebrow>` | Alle Sektions-Heads |
| `<Heading>` (variant: display / lg / md / sm) | Alle |
| `<ProseBody>` (max-width 65ch) | Über, Arbeiten-Detail, Denken-Detail, Impressum, Datenschutz |
| `<ProjectCard>` | Home (Teaser), Arbeiten-Index, Arbeiten-Detail (Related) |
| `<PostListItem>` | Home (Teaser), Denken-Index, Denken-Detail (Related) |
| `<LogoWall>` | Home |
| `<AwardsStrip>` | Home |
| `<MetaBlock>` | Arbeiten-Detail |
| `<AuthorBox>` | Denken-Detail |
| `<PrevNext>` | Arbeiten-Detail, Denken-Detail |
| `<PillButton>` (Filled / Ghost) | Alle |
| `<TagPill>` | Über (Skills), Denken-Index, Denken-Detail |
| `<MailtoLink>` | Kontakt, Footer |
| `<ClosingStatement>` | Home, Über |

---

## Anhang: Copy-Tonalitäts-Checkliste

Bevor Pascal eine Page-Copy freigibt, gegen diese Liste prüfen:

- [ ] Kein Wort "leidenschaftlich", "innovativ", "preisgekrönt", "world-class", "einzigartig"
- [ ] Keine Buzzwords (Synergie, holistisch, ganzheitlich, transformativ)
- [ ] Maximal 1 Adjektiv pro Substantiv
- [ ] Aktive Verben statt nominalisierter Substantive ("er entwickelt" statt "die Entwicklung")
- [ ] Schweizer Konvention: kein "ß", "ss"
- [ ] Wenn Englisch: keine wörtliche Übersetzung, sondern idiomatische Anpassung
- [ ] Im Zweifel: kürzen
- [ ] Pascal kann den Satz selbst aussprechen, ohne sich peinlich zu fühlen

---

**Ende des Page-Briefs.**

Mit diesem Dokument + Briefing v2.0 + Design-System-Files (`DESIGN.md`, `theme.css`, `variables.css`, `tokens.json`) kann Cursor/Claude-Code direkt mit M1 (Setup) starten.
