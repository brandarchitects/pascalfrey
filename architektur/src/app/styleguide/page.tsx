import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Styleguide · pascalfrey.ch",
  robots: { index: false, follow: false },
};

const tokenColors = [
  { name: "eggshell", hex: "#fdfcfc", role: "Page-Background" },
  { name: "powder", hex: "#f5f3f1", role: "Hover, Section-Highlight" },
  { name: "chalk", hex: "#e5e5e5", role: "Universal Border" },
  { name: "fog", hex: "#b1b0b0", role: "Logo-Grid Desaturation" },
  { name: "gravel", hex: "#777169", role: "Sekundärtext" },
  { name: "slate", hex: "#a59f97", role: "Tertiärtext, Placeholder" },
  { name: "cinder", hex: "#575347", role: "Mid-Tone-Text" },
  { name: "obsidian", hex: "#000000", role: "Primärtext, Filled CTA" },
];

const spacingScale = [4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 120, 160] as const;
const spacingClass: Record<(typeof spacingScale)[number], string> = {
  4: "w-1",
  8: "w-2",
  12: "w-3",
  16: "w-4",
  20: "w-5",
  24: "w-6",
  32: "w-8",
  48: "w-12",
  64: "w-16",
  96: "w-24",
  120: "w-30",
  160: "w-40",
};

function StyleguideBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-chalk pt-12">
      <div className="mb-8">
        <Eyebrow>{title}</Eyebrow>
        {description && (
          <p className="mt-2 max-w-[65ch] text-[16px] leading-[1.5] text-gravel">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main>
      <Section spacing="loose">
        <Container>
          <Stack gap={16}>
            <Eyebrow>Styleguide · v0.1 · Phase 1</Eyebrow>
            <Heading as="h1" size="display">
              Foundation.
            </Heading>
            <p className="max-w-[65ch] text-[18px] leading-[1.5] text-gravel">
              Visueller Sanity-Check der Phase-1-Komponenten gegen das
              Design-System. Tokens, Typografie und Primitives.
            </p>
          </Stack>
        </Container>
      </Section>

      <Section spacing="normal">
        <Container>
          <Stack gap={48}>
            {/* Color tokens */}
            <StyleguideBlock
              title="Color Tokens"
              description="Achromatic palette. Eggshell ist Page-Ground, niemals reines #ffffff. Cinder-Fix angewandt (vorher #57534, jetzt #575347)."
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {tokenColors.map((c) => (
                  <div
                    key={c.name}
                    className="border border-chalk bg-white p-4"
                  >
                    <div
                      className="mb-3 h-16 w-full border border-chalk"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden
                    />
                    <div className="text-[14px] font-medium text-obsidian">
                      {c.name}
                    </div>
                    <div className="font-mono text-[13px] text-gravel">
                      {c.hex}
                    </div>
                    <div className="mt-1 text-[13px] text-gravel">{c.role}</div>
                  </div>
                ))}
              </div>
            </StyleguideBlock>

            {/* Surfaces */}
            <StyleguideBlock
              title="Surfaces"
              description="Layer 0–3. Cards floaten 1px über Eggshell, sie elevaten nicht."
            >
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-4">
                <div className="bg-eggshell p-8 text-[14px] text-gravel">
                  0 — Eggshell #fdfcfc
                </div>
                <div className="bg-powder p-8 text-[14px] text-gravel">
                  1 — Powder #f5f3f1
                </div>
                <div className="bg-white p-8 text-[14px] text-gravel shadow-[rgba(0,0,0,0.075)_0_0_0_0.5px_inset]">
                  2 — Card #ffffff
                </div>
                <div className="bg-obsidian p-8 text-[14px] text-eggshell">
                  3 — Obsidian #000000
                </div>
              </div>
            </StyleguideBlock>

            {/* Typography */}
            <StyleguideBlock
              title="Typografie"
              description="Cormorant Garamond 300 für Display-Headlines mit -0.02em Tracking. Inter 400/500 für Body und UI. JetBrains Mono 400 für Code."
            >
              <Stack gap={32}>
                <div>
                  <Eyebrow variant="default">Display · 48px · Cormorant 300</Eyebrow>
                  <Heading as="div" size="display" className="mt-2">
                    Marken, die bleiben.
                  </Heading>
                </div>
                <div>
                  <Eyebrow variant="default">Heading-lg · 36px · Cormorant 300</Eyebrow>
                  <Heading as="div" size="lg" className="mt-2">
                    Eine Auswahl aus 20 Jahren.
                  </Heading>
                </div>
                <div>
                  <Eyebrow variant="default">Heading-md · 32px · Cormorant 300</Eyebrow>
                  <Heading as="div" size="md" className="mt-2">
                    Notizen, Essays, Beobachtungen.
                  </Heading>
                </div>
                <div>
                  <Eyebrow variant="default">Heading-sm · 24px · Cormorant 300</Eyebrow>
                  <Heading as="div" size="sm" className="mt-2">
                    Markenstrategie für Tech-Start-ups
                  </Heading>
                </div>
                <div>
                  <Eyebrow variant="default">Subheading · 18px · Inter 400</Eyebrow>
                  <p className="mt-2 max-w-[65ch] text-[18px] leading-[1.44] text-cinder">
                    Pascal Frey entwickelt seit über 20 Jahren Marken für
                    Schweizer Unternehmen. Diese Seite befindet sich im Aufbau.
                  </p>
                </div>
                <div>
                  <Eyebrow variant="default">Body-lg · 16px · Inter 400</Eyebrow>
                  <p className="mt-2 max-w-[65ch] text-[16px] leading-[1.5] text-gravel">
                    Aktuell als Creative Director bei Swisscom. Gründer von Brand
                    Architects. Arbeitete für Migros, SBB, Geberit, Raiffeisen,
                    Helsana und andere.
                  </p>
                </div>
                <div>
                  <Eyebrow variant="default">Body · 14px · Inter 400</Eyebrow>
                  <p className="mt-2 max-w-[65ch] text-[14px] leading-[1.43] text-gravel">
                    Awards sind kein Ziel. Aber sie sind ein Hinweis darauf, dass
                    Strategie und Gestaltung wirken.
                  </p>
                </div>
                <div>
                  <Eyebrow variant="default">Caption · 10px · Inter 400</Eyebrow>
                  <p className="mt-2 text-[10px] leading-[1.2] text-gravel">
                    Apr 2026 · 8 min lesen
                  </p>
                </div>
                <div>
                  <Eyebrow variant="default">Mono · 13px · JetBrains Mono</Eyebrow>
                  <p className="mt-2 font-mono text-[13px] text-cinder">
                    [whispers] some technical inline annotation
                  </p>
                </div>
              </Stack>
            </StyleguideBlock>

            {/* Eyebrows */}
            <StyleguideBlock
              title="Eyebrows"
              description="Section-Marker über Headlines. Default = Inter 400 14px Gravel. FH-Variant = Inter 700 14px Tracking 0.7px (WaldenburgFH-Substitut)."
            >
              <Stack gap={16}>
                <Eyebrow variant="default">Über · About</Eyebrow>
                <Eyebrow>Arbeiten · Work</Eyebrow>
                <Eyebrow>Vertrauen seit 20 Jahren</Eyebrow>
              </Stack>
            </StyleguideBlock>

            {/* Buttons */}
            <StyleguideBlock
              title="PillButtons"
              description="Maximum 2 Variants pro Cluster: Filled black + Ghost white. Radius immer 9999px. Hover lupft 1px."
            >
              <Stack gap={24}>
                <Stack direction="horizontal" gap={12} className="flex-wrap">
                  <PillButton variant="filled" size="md">
                    Mehr erfahren
                  </PillButton>
                  <PillButton variant="ghost" size="md">
                    Alle Beiträge
                  </PillButton>
                </Stack>
                <Stack direction="horizontal" gap={12} className="flex-wrap">
                  <PillButton variant="filled" size="sm">
                    Lesen
                  </PillButton>
                  <PillButton variant="ghost" size="sm">
                    Alle Cases
                  </PillButton>
                </Stack>
                <Stack direction="horizontal" gap={12} className="flex-wrap">
                  <PillButton href="/" variant="filled">
                    Zur Startseite
                  </PillButton>
                  <PillButton
                    href="mailto:pascal@pascalfrey.ch"
                    variant="ghost"
                    external
                  >
                    Email schreiben
                  </PillButton>
                </Stack>
                <Stack direction="horizontal" gap={12} className="flex-wrap">
                  <PillButton variant="filled" disabled>
                    Disabled (Filled)
                  </PillButton>
                  <PillButton variant="ghost" disabled>
                    Disabled (Ghost)
                  </PillButton>
                </Stack>
              </Stack>
            </StyleguideBlock>

            {/* Spacing */}
            <StyleguideBlock
              title="Spacing-Scale"
              description="4px Base-Unit. Tokens 4–160px. Section-Gaps 96–120px. Element-Gaps 8–12px."
            >
              <div className="space-y-2">
                {spacingScale.map((v) => (
                  <div key={v} className="flex items-center gap-4">
                    <div className="w-16 font-mono text-[13px] text-gravel">
                      {v}px
                    </div>
                    <div
                      className={`h-3 ${spacingClass[v]} bg-obsidian`}
                      aria-hidden
                    />
                  </div>
                ))}
              </div>
            </StyleguideBlock>

            {/* Containers */}
            <StyleguideBlock
              title="Container-Sizes"
              description="default = max-w 1200px (full layouts), prose = 65ch (Long-Form-Lese-Spalten)."
            >
              <Stack gap={16}>
                <div className="border border-chalk bg-white">
                  <Container size="default" className="py-6">
                    <span className="text-[13px] text-gravel">
                      Container size=&quot;default&quot; · max-width 1200px
                    </span>
                  </Container>
                </div>
                <div className="border border-chalk bg-white">
                  <Container size="prose" className="py-6">
                    <span className="text-[13px] text-gravel">
                      Container size=&quot;prose&quot; · max-width 65ch
                    </span>
                  </Container>
                </div>
              </Stack>
            </StyleguideBlock>

            {/* Sections */}
            <StyleguideBlock
              title="Section-Spacings"
              description="tight = 64px · normal = 96px · loose = 120px vertikales Padding."
            >
              <div className="border border-chalk">
                <div className="bg-powder px-6 py-4 text-[13px] text-gravel">
                  spacing=&quot;tight&quot; (py-16)
                </div>
                <div className="bg-eggshell px-6 py-4 text-[13px] text-gravel">
                  spacing=&quot;normal&quot; (py-24)
                </div>
                <div className="bg-white px-6 py-4 text-[13px] text-gravel">
                  spacing=&quot;loose&quot; (py-30)
                </div>
              </div>
            </StyleguideBlock>

            {/* Hairline shadows */}
            <StyleguideBlock
              title="Hairline Shadows"
              description="Cards schweben 1px über Eggshell, sie floaten nicht. Niemals Drop-Shadow > 4px Blur."
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-[rgba(0,0,0,0.075)_0_0_0_0.5px_inset]">
                  <div className="text-[13px] text-gravel">shadow-hairline</div>
                  <div className="text-[14px] text-obsidian">
                    Inset 0.5px @ 7.5%
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]">
                  <div className="text-[13px] text-gravel">shadow-card</div>
                  <div className="text-[14px] text-obsidian">
                    Card-Float (1.143px)
                  </div>
                </div>
                <div className="rounded-full bg-white px-6 py-3 shadow-[rgba(0,0,0,0.06)_0_0_0_1px,_rgba(0,0,0,0.04)_0_1px_2px,_rgba(0,0,0,0.04)_0_2px_4px] inline-flex items-center justify-center">
                  <div className="text-[14px] text-obsidian">shadow-button</div>
                </div>
              </div>
            </StyleguideBlock>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
