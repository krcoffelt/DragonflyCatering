"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  copy: string;
  href: string;
  ctaLabel?: string;
  image?: { src: string; alt: string };
  /** Shown when no approved image exists yet for this service. */
  placeholderLabel?: string;
  index?: number;
};

export function ServiceCard({
  title,
  copy,
  href,
  ctaLabel = "Explore",
  image,
  placeholderLabel,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.08 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link
        href={href}
        aria-label={ctaLabel}
        className="group relative block aspect-[3/4] overflow-hidden rounded-[4px]"
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          /* Placeholder — replace with an approved photo before launch. */
          <div className="absolute inset-0 flex items-center justify-center bg-plum">
            <div className="absolute inset-5 border border-warmwhite/12" />
            <DragonflyMark className="h-14 w-14 text-gold/65" />
            <span className="sr-only">{placeholderLabel}</span>
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/25 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <h3 className="font-display text-2xl leading-tight text-warmwhite">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-snug text-warmwhite/75">{copy}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-gold">
            Explore
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function DragonflyMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 3.5v17M3.5 12h17M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  );
}
