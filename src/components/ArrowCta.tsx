"use client";

import Link from "next/link";
import { events } from "@/lib/analytics";

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H5.5M12 4v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClipLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative block h-[25px] overflow-hidden">
      <span className="clip-text-hover">
        <span className="block h-[25px] whitespace-nowrap text-[18px] font-medium leading-[25px]">
          {children}
        </span>
        <span className="block h-[25px] whitespace-nowrap text-[18px] font-medium leading-[25px]">
          {children}
        </span>
      </span>
    </span>
  );
}

type PrimaryCtaProps = {
  href: string;
  children: React.ReactNode;
  location?: string;
  className?: string;
  tone?: "header" | "section";
};

/** Edenly: 186px pill + 54px circle, touching, clip-text hover. */
export function PrimaryCta({
  href,
  children,
  location = "page",
  className = "",
  tone = "header",
}: PrimaryCtaProps) {
  const pill =
    tone === "header"
      ? "bg-warmwhite text-plum group-hover:bg-gold"
      : "bg-plum text-warmwhite group-hover:bg-royal";
  const circle =
    tone === "header"
      ? "bg-warmwhite text-plum group-hover:bg-gold"
      : "bg-plum text-warmwhite group-hover:bg-royal";

  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group inline-flex items-center ${className}`}
    >
      <span
        className={`inline-flex h-[54px] items-center overflow-hidden rounded-full px-[19px] transition-colors duration-300 ${pill}`}
      >
        <ClipLabel>{children}</ClipLabel>
      </span>
      <span
        className={`inline-flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full p-[19px] transition-all duration-300 group-hover:rotate-45 ${circle}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
  location = "page",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  location?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group relative flex w-full items-center justify-between gap-5 rounded-[3px] border border-plum/15 px-4 py-[17px] text-[18px] font-medium text-plum transition-colors duration-300 hover:border-plum/30 hover:bg-plum/[0.03] ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

type UnderlineCtaProps = {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  iconPosition?: "before" | "after";
  location?: string;
  className?: string;
};

/** Edenly underline link with separate 1px line element beneath. */
export function UnderlineCta({
  href,
  children,
  tone = "dark",
  iconPosition = "before",
  location = "page",
  className = "",
}: UnderlineCtaProps) {
  const color = tone === "light" ? "text-warmwhite" : "text-plum";
  const lineColor = tone === "light" ? "bg-warmwhite" : "bg-plum";

  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group relative inline-flex items-center gap-[10px] pb-1 text-[18px] font-medium ${color} ${className}`}
    >
      {iconPosition === "before" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight />
        </span>
      )}
      <span className="transition-opacity group-hover:opacity-70">{children}</span>
      {iconPosition === "after" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight />
        </span>
      )}
      <span
        aria-hidden
        className={`absolute bottom-0 left-0 h-px w-full ${lineColor} transition-transform duration-300 group-hover:scale-x-105`}
      />
    </Link>
  );
}

export function TextCta({
  href,
  children,
  location = "page",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  location?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => events.ctaClick(String(children), location)}
      className={`group inline-flex h-[54px] items-center overflow-hidden text-[18px] font-medium text-plum ${className}`}
    >
      <ClipLabel>{children}</ClipLabel>
    </Link>
  );
}

export const ArrowCta = PrimaryCta;
