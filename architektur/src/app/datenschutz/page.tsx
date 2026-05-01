import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Datenschutz · Pascal Frey",
  description:
    "Datenschutzerklärung für pascalfrey.ch. DSG-konform und DSGVO-konform.",
};

export default function DatenschutzPage() {
  return (
    <main className="py-24">
      <Container size="prose">
        <Eyebrow>Datenschutz</Eyebrow>
        <Heading as="h1" size="lg" className="mt-6">
          Datenschutz
        </Heading>
        <div className="mt-12 space-y-8 text-[16px] leading-[1.6] text-cinder">
          <p className="text-gravel">
            Diese Website verarbeitet so wenig Daten wie möglich. Es gibt kein
            Kontaktformular, keine Cookies für Tracking, keine
            Newsletter-Anmeldung. Die folgenden Hinweise erläutern, was
            trotzdem passiert.
          </p>

          <section>
            <h2 className="font-medium text-obsidian">Verantwortliche Stelle</h2>
            <p className="mt-2 text-gravel">
              Pascal Frey, Würenlos, Schweiz —{" "}
              <a
                href="mailto:pascal@pascalfrey.ch"
                className="underline-offset-4 hover:underline"
              >
                pascal@pascalfrey.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Erhobene Daten</h2>
            <p className="mt-2 text-gravel">
              Die Site speichert keine personenbezogenen Daten. Es werden keine
              Konten geführt, keine Formulare verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">
              Vercel Analytics &amp; Speed Insights
            </h2>
            <p className="mt-2 text-gravel">
              Aggregierte, anonymisierte Nutzungsdaten werden über Vercel
              Analytics erhoben. Es werden keine Cookies gesetzt, keine
              IP-Adressen gespeichert. Die Daten dienen ausschliesslich der
              Performance-Auswertung.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Hosting</h2>
            <p className="mt-2 text-gravel">
              Diese Site wird durch Vercel Inc. (USA) gehostet. Beim Aufruf
              werden technisch notwendige Verbindungsdaten (z. B. IP-Adresse,
              User-Agent) an Vercel-Server übertragen.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-obsidian">Rechte der Besucher</h2>
            <p className="mt-2 text-gravel">
              Anfragen zu Auskunft, Berichtigung oder Löschung können jederzeit
              an die oben genannte Email-Adresse gerichtet werden.
            </p>
          </section>

          <p className="text-[14px] text-gravel">
            Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}.
            Diese Erklärung wird laufend aktualisiert.
          </p>
        </div>
      </Container>
    </main>
  );
}
