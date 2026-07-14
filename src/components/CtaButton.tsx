"use client";

import Link from "next/link";
import { events } from "@/lib/analytics";

type Variant = "solid" | "outline" | "light" | "gold";

const styles: Record<Variant, string> = {
  solid:
    "bg-royal text-warmwhite hover:bg-plum shadow-sm hover:shadow-md",
  outline:
    "border border-plum/15 bg-warmwhite text-plum shadow-sm hover:border-gold hover:bg-gold hover:shadow-md",
  light:
    "border border-warmwhite bg-warmwhite text-plum shadow-sm hover:border-gold hover:bg-gold hover:shadow-md",
  gold: "bg-gold text-plum hover:bg-warmwhite shadow-sm hover:shadow-md",
};

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Where on the page this CTA lives, for analytics. */
  location?: string;
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "solid",
  location = "page",
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
