import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

function ProseImage({
  src,
  alt,
  caption,
  width = 1600,
  height = 1000,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className="my-12">
      <div className="overflow-hidden rounded-2xl bg-powder shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 720px"
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[14px] text-gravel">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImagePair({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.slice(0, 2).map((img) => (
        <div
          key={img.src}
          className="overflow-hidden rounded-2xl bg-powder shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 360px"
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}

function ImageGrid({
  images,
  columns = 3,
}: {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 md:grid-cols-4"
        : "sm:grid-cols-3";
  return (
    <div className={cn("my-12 grid grid-cols-1 gap-4", colClass)}>
      {images.map((img) => (
        <div
          key={img.src}
          className="overflow-hidden rounded-2xl bg-powder shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={500}
            sizes="(max-width: 768px) 100vw, 320px"
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}

function FullBleedImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="relative my-16 -mx-6 sm:-mx-8 lg:-mx-12">
      <div className="overflow-hidden bg-powder">
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1400}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </figure>
  );
}

function Callout({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "quote";
}) {
  if (variant === "quote") {
    return (
      <blockquote className="my-10 border-l-2 border-chalk pl-6 font-display text-[24px] font-light italic leading-[1.4] text-cinder">
        {children}
      </blockquote>
    );
  }
  return (
    <aside className="my-10 rounded-2xl bg-powder p-6 text-[16px] leading-[1.6] text-cinder">
      {children}
    </aside>
  );
}

function ProseHeading2(props: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className="mt-20 font-display text-[36px] font-light leading-[1.13] tracking-[-0.72px] text-obsidian first:mt-0"
    />
  );
}

function ProseHeading3(props: ComponentProps<"h3">) {
  return (
    <h3
      {...props}
      className="mt-12 font-display text-[24px] font-light leading-[1.2] tracking-[-0.48px] text-obsidian"
    />
  );
}

function ProseParagraph(props: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className="my-6 text-[18px] leading-[1.6] text-cinder"
    />
  );
}

function ProseList(props: ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className="my-6 list-disc space-y-2 pl-6 text-[16px] leading-[1.6] text-cinder marker:text-fog"
    />
  );
}

function ProseOrderedList(props: ComponentProps<"ol">) {
  return (
    <ol
      {...props}
      className="my-6 list-decimal space-y-2 pl-6 text-[16px] leading-[1.6] text-cinder marker:text-fog"
    />
  );
}

function ProseBlockquote(props: ComponentProps<"blockquote">) {
  return (
    <blockquote
      {...props}
      className="my-10 border-l-2 border-chalk pl-6 font-display text-[24px] font-light italic leading-[1.4] text-cinder"
    />
  );
}

function ProseStrong(props: ComponentProps<"strong">) {
  return <strong {...props} className="font-medium text-obsidian" />;
}

function ProseInlineCode(props: ComponentProps<"code">) {
  return (
    <code
      {...props}
      className="rounded-md bg-powder px-1.5 py-0.5 font-mono text-[13px] text-cinder"
    />
  );
}

function ProsePre(props: ComponentProps<"pre">) {
  return (
    <pre
      {...props}
      className="my-8 overflow-x-auto rounded-2xl bg-powder p-6 font-mono text-[13px] leading-[1.6] text-cinder"
    />
  );
}

function ProseAnchor(props: ComponentProps<"a">) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      {...props}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-obsidian underline underline-offset-4 hover:no-underline"
    />
  );
}

export const mdxComponents = {
  Image: ProseImage,
  ImagePair,
  ImageGrid,
  FullBleedImage,
  Callout,
  h2: ProseHeading2,
  h3: ProseHeading3,
  p: ProseParagraph,
  ul: ProseList,
  ol: ProseOrderedList,
  blockquote: ProseBlockquote,
  strong: ProseStrong,
  code: ProseInlineCode,
  pre: ProsePre,
  a: ProseAnchor,
};
