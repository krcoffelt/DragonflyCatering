"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ClientReview } from "@/lib/reviews";
import { SectionReveal, StarIcon, TextLink } from "./VerdePrimitives";

type ReviewsBandProps = {
  title: string;
  lead: string;
  reviews: ClientReview[];
  ctaLabel: string;
  ctaHref: string;
};

export function ReviewsBand({ title, lead, reviews, ctaLabel, ctaHref }: ReviewsBandProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeReview = reviews[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }

  return (
    <section id="reviews" className="scroll-mt-20 overflow-hidden bg-plum py-16 text-warmwhite sm:py-20 lg:py-24">
      <div className="vv-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          <SectionReveal>
            <p className="text-[12px] font-semibold uppercase text-gold">Client stories</p>
            <h2 className="mt-4 max-w-[560px] font-display text-[44px] leading-[0.96] sm:text-[62px] lg:text-[72px]">
              {title}
            </h2>
            <p className="mt-5 max-w-[430px] text-[15px] leading-[24px] text-warmwhite/72">{lead}</p>
            <div className="mt-6">
              <TextLink href={ctaHref} location="reviews-band" tone="light">
                {ctaLabel}
              </TextLink>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="border border-gold/25 bg-warmwhite p-6 text-plum shadow-[0_24px_70px_rgba(18,10,22,0.2)] sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-5">
                <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-right text-[10px] font-semibold uppercase text-charcoal/60 sm:text-[11px]">
                  Real words from our clients
                </p>
              </div>

              <div
                className="relative mt-7 min-h-[260px] sm:min-h-[250px] lg:min-h-[300px]"
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.blockquote
                    key={activeReview.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <p className="max-w-[900px] font-display text-[23px] leading-[1.28] text-plum sm:text-[32px] lg:text-[40px]">
                      &ldquo;{activeReview.featuredText ?? activeReview.text}&rdquo;
                    </p>
                    <footer className="mt-7 border-l-2 border-gold pl-4">
                      <cite className="not-italic">
                        <span className="block text-[12px] font-semibold uppercase text-plum sm:text-[13px]">
                          {activeReview.name}
                        </span>
                        <span className="mt-1 block text-[12px] text-charcoal/65 sm:text-[13px]">
                          {activeReview.event} · {activeReview.source}
                        </span>
                      </cite>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-plum/12 pt-5 sm:gap-5">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-12 w-12 items-center justify-center border border-plum/20 text-xl text-plum transition-colors hover:border-gold hover:bg-gold focus-visible:border-gold focus-visible:outline-none"
                    aria-label="Show previous review"
                    title="Previous review"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-12 w-12 items-center justify-center border border-plum/20 text-xl text-plum transition-colors hover:border-gold hover:bg-gold focus-visible:border-gold focus-visible:outline-none"
                    aria-label="Show next review"
                    title="Next review"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>

                <div className="flex flex-1 gap-2" aria-hidden>
                  {reviews.map((review, index) => (
                    <span key={review.id} className="h-px flex-1 bg-plum/18">
                      <motion.span
                        className="block h-px bg-royal"
                        animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                        style={{ transformOrigin: "left" }}
                        transition={{ duration: reduceMotion ? 0 : 0.3 }}
                      />
                    </span>
                  ))}
                </div>

                <p className="min-w-[42px] text-right font-display text-base text-charcoal/60 sm:text-lg">
                  {activeIndex + 1} / {reviews.length}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
