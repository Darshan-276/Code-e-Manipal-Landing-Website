import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "href" | "className">;

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href} {...props}>
      <span>{children}</span>
      {variant !== "quiet" && <span aria-hidden="true" className="button__arrow">↗</span>}
    </Link>
  );
}
