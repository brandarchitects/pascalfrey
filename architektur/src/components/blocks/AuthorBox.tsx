import { Eyebrow } from "../ui/Eyebrow";

interface AuthorBoxProps {
  locale?: "de" | "en";
}

const COPY = {
  de: {
    eyebrow: "Geschrieben von",
    name: "Pascal Frey",
    bio: "Markenberater und Creative Director. Schreibt über Marke, Design und Schweizer Wirtschaft.",
  },
  en: {
    eyebrow: "Written by",
    name: "Pascal Frey",
    bio: "Brand consultant and creative director. Writes about brand, design, and the Swiss economy.",
  },
} as const;

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pascalfrey/" },
  { label: "X", href: "https://x.com/pascalfrey" },
  { label: "Medium", href: "https://medium.com/@pascalfrey" },
] as const;

export function AuthorBox({ locale = "de" }: AuthorBoxProps) {
  const copy = COPY[locale];
  return (
    <aside className="rounded-2xl bg-powder p-8">
      <Eyebrow variant="fh">{copy.eyebrow}</Eyebrow>
      <div className="mt-4 font-display text-[24px] font-light leading-tight text-obsidian">
        {copy.name}
      </div>
      <p className="mt-3 max-w-[50ch] text-[14px] leading-[1.5] text-gravel">
        {copy.bio}
      </p>
      <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
        {SOCIAL.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian underline-offset-4 hover:underline"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
