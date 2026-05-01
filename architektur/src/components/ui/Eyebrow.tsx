import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "fh";
}

export function Eyebrow({
  variant = "default",
  className,
  children,
  ...rest
}: EyebrowProps) {
  // 'fh' = WaldenburgFH-Substitut: Inter 700 with 0.7px tracking (compressed stamp style)
  // 'default' = Inter 400 14px gravel (calmer eyebrow)
  return (
    <span
      {...rest}
      className={cn(
        "inline-block text-[14px] text-gravel",
        variant === "fh" && "font-bold uppercase tracking-[0.7px]",
        variant === "default" && "font-normal",
        className,
      )}
    >
      {children}
    </span>
  );
}
