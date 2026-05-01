import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";

export default function Home() {
  return (
    <main>
      <Section spacing="loose">
        <Container>
          <Stack gap={24} className="max-w-[65ch]">
            <Eyebrow variant="fh">Sprint 1 · Foundation</Eyebrow>
            <Heading as="h1" size="display">
              Marken, die bleiben.
            </Heading>
            <p className="text-[18px] leading-[1.5] text-gravel">
              Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer
              Unternehmen. Diese Seite befindet sich im Aufbau.
            </p>
            <Stack direction="horizontal" gap={12} className="pt-2">
              <PillButton href="/styleguide" variant="filled">
                Styleguide ansehen
              </PillButton>
              <PillButton href="https://pascalfrey.ch" variant="ghost" external>
                Aktuelle Site
              </PillButton>
            </Stack>
          </Stack>
        </Container>
      </Section>
      <Section spacing="normal" surface="powder">
        <Container>
          <Stack gap={16} className="max-w-[65ch]">
            <Eyebrow variant="default">Hinweis</Eyebrow>
            <p className="text-[16px] leading-[1.5] text-cinder">
              Foundation-Komponenten gebaut. Layout, Header/Footer, Page-Templates
              und CMS folgen in den nächsten Sprints. Siehe{" "}
              <Link
                href="/styleguide"
                className="underline underline-offset-4 hover:text-obsidian"
              >
                /styleguide
              </Link>{" "}
              für den aktuellen Komponenten-Stand.
            </p>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
