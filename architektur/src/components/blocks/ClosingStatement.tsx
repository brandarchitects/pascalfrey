import { Container } from "../layout/Container";
import { Heading } from "../ui/Heading";
import { PillButton } from "../ui/PillButton";

interface ClosingStatementProps {
  statement: string;
  bridgeText?: string;
  cta?: { label: string; href: string };
}

export function ClosingStatement({
  statement,
  bridgeText,
  cta,
}: ClosingStatementProps) {
  return (
    <section className="py-30">
      <Container>
        <div className="max-w-[60ch]">
          <Heading as="h2" size="display" className="max-w-[30ch]">
            {statement}
          </Heading>
          {bridgeText && (
            <p className="mt-8 max-w-[50ch] text-[16px] leading-[1.5] text-gravel">
              {bridgeText}
            </p>
          )}
          {cta && (
            <div className="mt-8">
              <PillButton variant="filled" href={cta.href}>
                {cta.label}
              </PillButton>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
