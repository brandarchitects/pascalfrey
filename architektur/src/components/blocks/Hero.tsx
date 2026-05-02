import { Container } from "../layout/Container";
import { Heading } from "../ui/Heading";
import { Eyebrow } from "../ui/Eyebrow";

type HeroSplitProps = {
  variant: "split";
  eyebrow?: string;
  headline: string;
  bio: string;
};

type HeroSingleProps = {
  variant: "single";
  eyebrow?: string;
  headline: string;
  subhead?: string;
};

export type HeroProps = HeroSplitProps | HeroSingleProps;

export function Hero(props: HeroProps) {
  if (props.variant === "split") {
    const { eyebrow, headline, bio } = props;
    return (
      // ElevenLabs-spec: 120px top padding on hero, 60/40 asymmetric split,
      // body sits in the upper half of the right column to align with headline mass.
      <section className="pt-24 pb-24 sm:pt-32 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-3">
              {eyebrow && (
                <div className="mb-6">
                  <Eyebrow>{eyebrow}</Eyebrow>
                </div>
              )}
              <Heading as="h1" size="display" className="max-w-[12ch]">
                {headline}
              </Heading>
            </div>
            <div className="md:col-span-2 md:pt-3">
              <p className="max-w-[40ch] text-[16px] leading-[1.5] text-gravel">
                {bio}
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const { eyebrow, headline, subhead } = props;
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <Container>
        <div className="max-w-[65ch]">
          {eyebrow && (
            <div className="mb-6">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <Heading as="h1" size="display">
            {headline}
          </Heading>
          {subhead && (
            <p className="mt-6 max-w-[50ch] text-[18px] leading-[1.5] text-gravel">
              {subhead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
