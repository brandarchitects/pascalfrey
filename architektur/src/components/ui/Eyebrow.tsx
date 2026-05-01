import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * - "default": Inter 400 14px gravel — editorial section label per DESIGN.md.
   *   Use this for all section eyebrows (Über, Arbeiten, Denken, Awards, etc.).
   * - "fh": stamp-style, 700 weight + wide tracking. Reserved for tight
   *   product-label contexts (e.g. tabs). Do not use for section divider labels.
   */
  variant?: "default" | "fh";
}

export function Eyebrow({
  variant = "default",
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <span
      {...rest}
      className={cn(
        "inline-block text-[14px] leading-[1.43] text-gravel",
        variant === "fh"
          ? "font-bold uppercase tracking-[0.7px]"
          : "font-normal tracking-[0.01em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
