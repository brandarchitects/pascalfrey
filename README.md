# pascalfrey.ch

Personal-Brand-Website von Pascal Frey — Creative Director & Markenstratege, Zürich.

## Konzept: «Studio Ultramarin»

- **Galerie** `#F1F1EE` — leicht kühles Off-White als Grundton, wie die Wände Schweizer Kunsthallen
- **Ultramarin** `#2B2BE0` — der Akzent, sparsam eingesetzt, mit Gewicht
- **Tinte** `#141415` — leicht bläulich gebrochenes Fast-Schwarz für Text und dunkle Flächen

Typografie: **Inter Variable** (`wght` 100–900, `opsz` 14–32, offizieller Release von rsms/inter) als einzige Textschrift — von der Plakat-Headline bis zum Fliesstext — plus **JetBrains Mono** für Meta-Labels und Register. Beide lokal gehostet (kein Google-Fonts-CDN, DSGVO/DSG-konform).

Das Einhorn aus dem Familienwappen Frey erscheint bewusst nur klein: als Stempel-Marke neben dem Wortzeichen im Header und Footer.

Projekt-Visuals sind **konstruktivistische Stand-ins** — handgeschriebene SVG-Abstraktionen aus Kreis, Quadrat, Dreieck und Linie (Tradition: Bauhaus / Zürcher Konkrete). Markenkonform, rechtefrei, NDA-sicher. Im Code auffindbar über `data-preview="p1"` … `p6`.

## Stack

Bewusst ohne Framework: statisches HTML + CSS + Vanilla JS.

- **Animationen:** GSAP 3 + ScrollTrigger (lokal vendored unter `assets/js/vendor/`) plus Vanilla-JS-Micro-Interactions: Cursor-Proximity-Morph der Variable-Font-Headline, schwebende Work-Previews, Zürich-Uhr in der Navigation. Respektiert `prefers-reduced-motion`, degradiert ohne JS zu einer voll sichtbaren Seite
- **SEO:** JSON-LD (`Person`, `BreadcrumbList`), Open Graph, Sitemap, robots.txt, Canonicals
- **Hosting:** Vercel (statisch, `cleanUrls` via `vercel.json`)


## Illustrations-System (V2 «Farbig»)

Die Case-Kacheln (Startseiten-Previews + Arbeiten-Seite) laufen im
farbigen System: Modifier-Klassen `t-ultra` / `t-navy` / `t-black` /
`t-slate` auf `.standin` bzw. `.pv` setzen Grund, Zeichenfarbe und
Akzent (`--tile-accent`); analoges Korn liegt als `::after` darüber.
Hover-Animationen sind inhaltlich: Equalizer spielt (`.eq`), System
fächert auf (`.sq`), Netzwerk kreist (`.orbit`), Template füllt sich
(`.build`), Architektur wächst (`.rise`), Elemente setzen sich (`.set`).

**Fallback V1 «Hell»:** Modifier-Klasse entfernen — die Kachel rendert
hell (Papier, Tinte, Ultramarin-Akzent). Kompletter V1-Stand gesichert
im Branch `illustrations-v1-hell`; Vergleichsseite unter `/labs`.

## Struktur

```
index.html          Landing Page (Hero, Profil, Expertise, Arbeiten, Wirkung, Kontakt)
arbeiten.html       Case-Übersicht mit sechs Projekten
impressum.html      Impressum
datenschutz.html    Datenschutz (CH DSG)
404.html            Fehlerseite
assets/
  css/style.css     Design-System & Layout
  js/main.js        Motion-Layer (GSAP)
  js/vendor/        gsap.min.js, ScrollTrigger.min.js
  fonts/            Inter Variable + JetBrains Mono (woff2, self-hosted)
public/
  brand/            Wappen, Einhorn-Stempel, Favicons
  logos/clients/    Kundenlogos (weiss, für dunkle Flächen)
  portraits/        Porträts
  og.png            Open-Graph-Bild (1200×630)
```

## Lokal entwickeln

Kein Build-Schritt nötig:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
