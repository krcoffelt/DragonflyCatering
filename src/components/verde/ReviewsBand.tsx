"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PrimaryButton, SectionReveal, StarIcon, TrustBadge } from "./VerdePrimitives";

export type Review = {
  text: string;
  attribution: string;
  role: string;
};

type ReviewsBandProps = {
  title: string;
  lead: string;
  reviews: Review[];
  image: { src: string; alt: string };
  ctaLabel: string;
  ctaHref: string;
};

/** Verde testimonials — atmospheric bg + rating badge + sliding review cards. */
export function ReviewsBand({
  title,
  lead,
  reviews,
  image,
  ctaLabel,
  ctaHref,
}: ReviewsBandProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const review = reviews[index];

  return (
    <section className="relative overflow-hidden bg-ivory py-[120px] lg:py-[150px]">
      <div className="absolute inset-0">
        <Image src={image.src} alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden />
      </div>

      <div className="vv-container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_405px] lg:gap-20">
          <SectionReveal>
            <h2 className="vv-h2 text-plum">{title}</h2>
            <p className="mt-4 max-w-[400px] text-[15px] leading-[24px] text-body">{lead}</p>
            <div className="mt-8">
              <TrustBadge tone="dark" />
            </div>
            <div className="mt-10">
              <PrimaryButton href={ctaHref} location="reviews-band" tone="dark">
                {ctaLabel}
              </PrimaryButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="relative min-h-[421px] overflow-hidden bg-warmwhite p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-gold" />
                    ))}
                  </div>
                  <p className="mt-6 text-[15px] leading-[24px] text-plum">{review.text}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-plum/10 font-display text-sm text-plum">
                      {review.attribution.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-plum">{review.attribution}</p>
                      <p className="text-xs text-body">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-plum/15 text-plum transition-colors hover:bg-plum/5"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-plum/15 text-plum transition-colors hover:bg-plum/5"
                >
                  →
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
