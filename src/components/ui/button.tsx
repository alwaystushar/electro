"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonSwapLabel } from "@/components/ui/button-swap-label";
import { ButtonTextLink } from "@/components/ui/button-text-link";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md";

type CommonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: ButtonSize;
  trailingIcon?: boolean;
  variant?: ButtonVariant;
  hoverLabel?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

function getClasses({
  className,
  size = "md",
  variant = "primary",
  trailingIcon = false,
}: Omit<CommonProps, "children" | "href" | "hoverLabel">) {
  if (variant === "text") {
    return ["e-text-link", className ?? ""].filter(Boolean).join(" ");
  }

  return [
    "e-btn",
    size === "sm" ? "e-btn--sm" : "",
    trailingIcon ? "e-btn--split" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonContent({
  children,
  trailingIcon = false,
  variant = "primary",
  hoverLabel,
}: Pick<CommonProps, "children" | "trailingIcon" | "variant" | "hoverLabel">) {
  if (variant === "text" && typeof children === "string") {
    return (
      <ButtonTextLink
        text={children}
        hoverText={hoverLabel}
        showIcon={trailingIcon}
      />
    );
  }

  const label =
    typeof children === "string" ? (
      <ButtonSwapLabel text={children} hoverText={hoverLabel} />
    ) : (
      children
    );

  if (!trailingIcon) {
    return <span className="e-btn__label-wrap">{label}</span>;
  }

  return (
    <>
      <span className="e-btn__label-wrap">{label}</span>
      <span className="e-btn__icon-pane" aria-hidden>
        <ChevronsRight className="e-btn__icon" strokeWidth={1.75} />
      </span>
    </>
  );
}

export function Button({
  children,
  className,
  href,
  size = "md",
  trailingIcon = false,
  variant = "primary",
  hoverLabel,
  ...props
}: ButtonProps) {
  const classes = getClasses({ className, size, variant, trailingIcon });
  const rootAttr = variant === "text" ? {} : { "data-variant": variant };

  if (href) {
    return (
      <Link href={href} className={classes} {...rootAttr}>
        <ButtonContent
          trailingIcon={trailingIcon}
          variant={variant}
          hoverLabel={hoverLabel}
        >
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rootAttr} {...props}>
      <ButtonContent
        trailingIcon={trailingIcon}
        variant={variant}
        hoverLabel={hoverLabel}
      >
        {children}
      </ButtonContent>
    </button>
  );
}
