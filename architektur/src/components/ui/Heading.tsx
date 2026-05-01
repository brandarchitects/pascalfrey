import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "div" | "span" | "p";
type HeadingSize = "display" | "lg" | "md" | "sm";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
  size?: HeadingSize;
}

const sizeMap: Record<HeadingSize, string> = {
  display: "text-[48px] leading-[1.08] tracking-[-0.96px]",
  lg: "text-[36px] leading-[1.13] tracking-[-0.72px]",
  md: "text-[32px] leading-[1.17] tracking-[-0.64px]",
  sm: "text-[24px] leading-[1.2] tracking-[-0.48px]",
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
  ...rest
}: HeadingProps) {
  return (
    <Tag
      {...rest}
      className={cn(
        "font-display font-light text-obsidian",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
