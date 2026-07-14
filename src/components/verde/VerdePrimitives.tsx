"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/lib/analytics";

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.47l-3.52 1.85.67-3.92L2.3 5.34l3.94-.57L8 1.2z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SlideLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative block h-[21px] overflow-hidden">
      <span className="vv-slide-label">
        <span className="block h-[21px] whitespace-nowrap text-[14px] font-semibold leading-[21px]">
          {children}
        </span>
        <span aria-hidden="true" className="block h-[21px] whitespace-nowrap text-[14px] font-semibold leading-[21px]">
          {children}
        </span>
      </span>
    </span>
  );
}

export function NavPill({
  href,
  children,
  accent = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex px-3 py-2 transition-colors duration-300 ${
        accent
          ? "text-gold hover:text-warmwhite"
          : "text-warmwhite/82 hover:text-gold"
      }`}
    >
      <SlideLabel>{children}</SlideLabel>
    </Link>
  );
}

export function PrimaryButton({
  href,
  children,
  location = "page",
  tone = "light",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  location?: string;
  tone?: "light" | "dark" | "outline-light";
  className?: string;
}) {
  const styles = {
    light:
      "border border-gold bg-gold text-plum shadow-sm hover:border-warmwhite hover:bg-warmwhite",
    dark: "border border-plum bg-plum text-warmwhite hover:border-royal hover:bg-royal",
    "outline-light":
      "border border-warmwhite bg-warmwhite text-plum shadow-sm hover:border-gold hover:bg-gold",
  }[tone];

  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group inline-flex min-h-12 items-center gap-2 px-[18px] py-[12px] text-[14px] font-semibold transition-all duration-300 ${styles} ${className}`}
    >
      <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="relative block h-[22px] overflow-hidden">
        <span className="vv-slide-label">
          <span className="block h-[22px] whitespace-nowrap leading-[22px]">{children}</span>
          <span aria-hidden="true" className="block h-[22px] whitespace-nowrap leading-[22px]">{children}</span>
        </span>
      </span>
    </Link>
  );
}

export function TextLink({
  href,
  children,
  tone = "dark",
  location = "page",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  location?: string;
}) {
  const color = tone === "light" ? "text-warmwhite" : "text-plum";
  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium ${color}`}
    >
      <ArrowIcon className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="relative block h-[22px] overflow-hidden">
        <span className="vv-slide-label">
          <span className="block h-[22px] whitespace-nowrap leading-[22px]">{children}</span>
          <span aria-hidden="true" className="block h-[22px] whitespace-nowrap leading-[22px]">{children}</span>
        </span>
      </span>
    </Link>
  );
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TrustBadge({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 border-l-2 px-4 py-2 sm:gap-4 sm:px-5 ${
        isLight ? "border-gold bg-charcoal/25 text-warmwhite backdrop-blur-sm" : "border-gold bg-plum/5 text-plum"
      }`}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className={`h-3.5 w-3.5 ${isLight ? "text-gold" : "text-gold"}`} />
        ))}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-2xl leading-none">20+</span>
        <span className={`text-xs sm:text-sm ${isLight ? "text-warmwhite/80" : "text-plum/70"}`}>
          years in professional kitchens
        </span>
      </div>
    </div>
  );
}
