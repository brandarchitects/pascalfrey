import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Impressum · Pascal Frey",
  description: "Impressum und Verantwortlichkeit für pascalfrey.ch.",
};

export default function ImpressumPage() {
  return (
    <main className="py-24">
      <Container size="prose">
        <Eyebrow>Impressum</Eyebrow>
        <Heading as="h1" size="lg" className="mt-6">
          Impressum
        </Heading>
        <div className="mt-12 space-y-8 text-[16px] leading-[1.6] text-cinder">
          <section>
            <h2 className="font-medium text-obsidian">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2 text-gravel">
              Pascal Frey
              <br />
              c/o Brand Architects
              <br />
              Würenlos, Schweiz
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Kontakt</h2>
            <p className="mt-2 text-gravel">
              <a
                href="mailto:pascal@pascalfrey.ch"
                className="underline-offset-4 hover:underline"
              >
                pascal@pascalfrey.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Konzept &amp; Gestaltung</h2>
            <p className="mt-2 text-gravel">Pascal Frey</p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Realisation</h2>
            <p className="mt-2 text-gravel">
              Vibe-coded mit Claude · Hosted bei Vercel Inc.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
