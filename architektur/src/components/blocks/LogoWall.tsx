import Image from "next/image";
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
        <div id="logos-heading" className="mb-12">
          <Eyebrow variant="fh">{eyebrow}</Eyebrow>
        </div>
        <ul className="grid grid-cols-3 items-center gap-x-10 gap-y-10 sm:grid-cols-4 md:grid-cols-6">
          {logos.map((logo) => (
            <li
              key={logo.name}
              className="flex h-10 items-center justify-center"
            >
              <span className="relative block h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 200px"
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0)",
                    opacity: 0.31,
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
