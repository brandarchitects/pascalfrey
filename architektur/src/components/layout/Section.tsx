import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "tight" | "normal" | "loose";
  surface?: "eggshell" | "powder" | "white";
}

const spacingMap = {
  tight: "py-16",      // 64px
  normal: "py-24",     // 96px
  loose: "py-30",      // 120px (uses spacing-120)
} as const;

const surfaceMap = {
  eggshell: "bg-eggshell",
  powder: "bg-powder",
  white: "bg-white",
} as const;

export function Section({
  spacing = "normal",
  surface = "eggshell",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      {...rest}
      className={cn(spacingMap[spacing], surfaceMap[surface], className)}
    >
      {children}
    </section>
  );
}
