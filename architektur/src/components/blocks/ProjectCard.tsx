import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  href: string;
  cover?: string;
  client: string;
  year: number | string;
  title: string;
  role?: string;
  tags?: string[];
  className?: string;
}

export function ProjectCard({
  href,
  cover,
  client,
  year,
  title,
  role,
  tags,
  className,
}: ProjectCardProps) {
  // Treat blog placeholder paths as "no real cover" — show typographic block.
  const hasRealCover = cover && !cover.includes("/blog/placeholder");

  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-2xl bg-white shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0] transition-shadow duration-200 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-obsidian",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-powder">
        {hasRealCover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.7px] text-gravel">
              {String(year)}
            </div>
            <div className="font-display text-[28px] font-light leading-[1.1] tracking-[-0.56px] text-cinder">
              {client}
            </div>
          </div>
        )}
      </div>
      <div className="px-6 py-6">
        <div className="text-[13px] text-gravel">
          {year}
          {client ? <> · {client}</> : null}
        </div>
        <h3 className="mt-2 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian">
          {title}
        </h3>
        {role && (
          <p className="mt-2 text-[14px] leading-[1.43] text-gravel">{role}</p>
        )}
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-chalk px-3 py-1 text-[13px] font-medium text-obsidian"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
