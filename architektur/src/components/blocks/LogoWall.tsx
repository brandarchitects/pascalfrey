import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";

export interface ClientLogo {
  name: string;
  src: string;
}

interface LogoWallProps {
  eyebrow: string;
  logos: ClientLogo[];
}

export function LogoWall({ eyebrow, logos }: LogoWallProps) {
  return (
    <section className="py-24" aria-labelledby="logos-heading">
      <Container>
        <div id="logos-heading" className="mb-10">
          <Eyebrow variant="fh">{eyebrow}</Eyebrow>
        </div>
        <ul className="grid grid-cols-3 gap-x-10 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo.name} className="flex h-12 items-center justify-center">
              <span
                role="img"
                aria-label={logo.name}
                title={logo.name}
                className="block h-7 w-full"
                style={{
                  WebkitMaskImage: `url(${logo.src})`,
                  maskImage: `url(${logo.src})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  backgroundColor: "#b1b0b0",
                }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
