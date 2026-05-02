import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillVariant = "filled" | "ghost";
type PillSize = "sm" | "md";

interface BaseProps {
  variant?: PillVariant;
  size?: PillSize;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
    external?: never;
  };

type PillButtonProps = AnchorProps | ButtonProps;

// ElevenLabs-spec: Inter 500 14px, hairline shadow stack, subtle hover
const baseClasses =
  "inline-flex items-center justify-center rounded-full font-sans font-medium border transition-all duration-200 ease-out focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-obsidian disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variantClasses: Record<PillVariant, string> = {
  // Filled: Obsidian on Eggshell with shadow stack from DESIGN.md spec
  filled:
    "bg-obsidian text-eggshell border-obsidian shadow-[rgba(0,0,0,0.06)_0_0_0_1px,rgba(0,0,0,0.04)_0_1px_2px,rgba(0,0,0,0.04)_0_2px_4px] hover:bg-cinder hover:border-cinder hover:shadow-[rgba(0,0,0,0.08)_0_0_0_1px,rgba(0,0,0,0.06)_0_1px_2px,rgba(0,0,0,0.06)_0_2px_4px]",
  // Ghost: white card on eggshell with chalk border
  ghost:
    "bg-white text-obsidian border-chalk shadow-[rgba(0,0,0,0.06)_0_0_0_1px,rgba(0,0,0,0.04)_0_1px_2px] hover:bg-powder",
};

const sizeClasses: Record<PillSize, string> = {
  // ElevenLabs-spec: padding 0px 12px ghost, 0px 16px filled — height driven by line-height
  sm: "h-9 px-4 text-[13px]",
  md: "h-10 px-5 text-[14px]",
};

export function PillButton(props: PillButtonProps) {
  const { variant = "filled", size = "md", className, children } = props;
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    ...buttonRest
  } = props as ButtonProps;
  void _href;
  void _v;
  void _s;
  void _c;
  void _ch;

  return (
    <button {...buttonRest} className={classes}>
      {children}
    </button>
  );
}
