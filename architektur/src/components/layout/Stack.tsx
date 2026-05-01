import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type StackGap = 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 96;

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
  direction?: "vertical" | "horizontal";
}

const gapMap: Record<StackGap, string> = {
  4: "gap-1",
  8: "gap-2",
  12: "gap-3",
  16: "gap-4",
  24: "gap-6",
  32: "gap-8",
  48: "gap-12",
  64: "gap-16",
  96: "gap-24",
};

export function Stack({
  gap = 16,
  direction = "vertical",
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <div
      {...rest}
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        gapMap[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}
