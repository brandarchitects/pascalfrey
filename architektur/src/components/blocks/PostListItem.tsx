import Link from "next/link";

export interface PostListItemProps {
  href: string;
  date: string;
  readingTime: string;
  tag?: string;
  title: string;
  excerpt: string;
}

export function PostListItem({
  href,
  date,
  readingTime,
  tag,
  title,
  excerpt,
}: PostListItemProps) {
  return (
    <Link
      href={href}
      className="group block py-8 transition-colors first:pt-0 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-obsidian"
    >
      <article className="grid grid-cols-[1fr_auto] items-end gap-6">
        <div>
          <div className="text-[13px] text-gravel">
            {date} · {readingTime}
            {tag ? <> · {tag}</> : null}
          </div>
          <h3 className="mt-3 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian underline-offset-4 group-hover:underline sm:text-[32px] sm:tracking-[-0.64px]">
            {title}
          </h3>
          <p className="mt-3 max-w-[65ch] text-[16px] leading-[1.5] text-gravel">
            {excerpt}
          </p>
        </div>
        <span
          aria-hidden
          className="hidden translate-y-[-4px] text-obsidian opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none sm:block"
        >
          →
        </span>
      </article>
    </Link>
  );
}
