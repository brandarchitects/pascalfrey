import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container size="prose">
        <Stack gap={24}>
          <Eyebrow variant="fh">404</Eyebrow>
          <Heading as="h1" size="display">
            Diese Seite existiert nicht.
          </Heading>
          <p className="max-w-[50ch] text-[16px] leading-[1.5] text-gravel">
            Vielleicht ist sie umgezogen. Vielleicht hat sie nie existiert.
            Beides ist okay.
          </p>
          <div>
            <PillButton href="/" variant="filled">
              Zur Startseite
            </PillButton>
          </div>
        </Stack>
      </Container>
    </main>
  );
}
