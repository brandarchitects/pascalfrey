import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "prose";
}

export function Container({ size = "default", className, children, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "default" && "max-w-[1200px]",
        size === "prose" && "max-w-[65ch]",
        className,
      )}
    >
      {children}
    </div>
  );
}
