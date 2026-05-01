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
        <div className="mb-12 max-w-[60ch]">
          <Eyebrow variant="fh">{eyebrow}</Eyebrow>
          <p
            id="awards-heading"
            className="mt-4 text-[16px] leading-[1.5] text-gravel"
          >
            {bridgeText}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {awards.map((a) => (
            <li
              key={a.name}
              className="flex flex-col items-start gap-3 rounded-2xl border border-chalk bg-white p-6"
            >
              <div className="relative h-12 w-full max-w-[180px]">
                <Image
                  src={a.logo}
                  alt=""
                  fill
                  sizes="200px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                    filter: "brightness(0)",
                    opacity: 0.31,
                  }}
                />
              </div>
              <div>
                <div className="text-[14px] font-medium text-obsidian">
                  {a.name}
                </div>
                {a.year && (
                  <div className="mt-1 text-[13px] text-gravel">{a.year}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
