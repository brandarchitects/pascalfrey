import Image from "next/image";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";

export interface Award {
  name: string;
  logo: string;
  year?: string | number;
}

interface AwardsStripProps {
  eyebrow: string;
  bridgeText: string;
  awards: Award[];
}

export function AwardsStrip({ eyebrow, bridgeText, awards }: AwardsStripProps) {
  return (
    <section className="py-24" aria-labelledby="awards-heading">
      <Container>
        <div className="mb-10 max-w-[60ch]">
          <Eyebrow variant="fh">{eyebrow}</Eyebrow>
          <p
            id="awards-heading"
            className="mt-4 text-[16px] leading-[1.5] text-gravel"
          >
            {bridgeText}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {awards.map((a) => (
            <li
              key={a.name}
              className="flex h-20 items-center justify-center rounded-2xl border border-chalk bg-white px-6"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={a.logo}
                  alt={a.name}
                  fill
                  sizes="(max-width: 640px) 40vw, 200px"
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) saturate(100%)",
                    opacity: 0.45,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
