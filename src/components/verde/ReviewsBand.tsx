"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ClientReview } from "@/lib/reviews";
import { PrimaryButton, SectionReveal, StarIcon } from "./VerdePrimitives";

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
    <section id="reviews" className="scroll-mt-20 overflow-hidden bg-plum py-20 text-warmwhite sm:py-24 lg:py-32">
      <div className="vv-container">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <SectionReveal>
            <p className="text-[12px] font-semibold uppercase text-gold">Client stories</p>
            <h2 className="mt-5 max-w-[560px] font-display text-[52px] leading-[0.92] sm:text-[72px] lg:text-[84px]">
              {title}
            </h2>
            <p className="mt-7 max-w-[430px] text-[15px] leading-[25px] text-warmwhite/68">{lead}</p>
            <div className="mt-9">
              <PrimaryButton href={ctaHref} location="reviews-band" tone="light">
                {ctaLabel}
              </PrimaryButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="border-t border-warmwhite/22 pt-7 sm:pt-9">
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-[11px] font-semibold uppercase text-warmwhite/54">Real words from our clients</p>
            </div>

            <div className="relative mt-10 min-h-[380px] sm:min-h-[330px] lg:min-h-[390px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={activeReview.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <p className="max-w-[900px] font-display text-[31px] leading-[1.08] text-warmwhite sm:text-[42px] lg:text-[50px]">
                    &ldquo;{activeReview.featuredText ?? activeReview.text}&rdquo;
                  </p>
                  <footer className="mt-9 border-l-2 border-gold pl-5">
                    <cite className="not-italic">
                      <span className="block text-[13px] font-semibold uppercase text-warmwhite">{activeReview.name}</span>
                      <span className="mt-1 block text-[13px] text-warmwhite/55">
                        {activeReview.event} · {activeReview.source}
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-5 border-t border-warmwhite/22 pt-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-11 w-11 items-center justify-center border border-warmwhite/30 text-xl text-warmwhite transition-colors hover:border-gold hover:bg-gold hover:text-plum"
                  aria-label="Show previous review"
                  title="Previous review"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-11 w-11 items-center justify-center border border-warmwhite/30 text-xl text-warmwhite transition-colors hover:border-gold hover:bg-gold hover:text-plum"
                  aria-label="Show next review"
                  title="Next review"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>

              <div className="flex flex-1 gap-2" aria-hidden>
                {reviews.map((review, index) => (
                  <span key={review.id} className="h-px flex-1 bg-warmwhite/22">
                    <motion.span
                      className="block h-px bg-gold"
                      animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: reduceMotion ? 0 : 0.3 }}
                    />
                  </span>
                ))}
              </div>

              <p className="min-w-[48px] text-right font-display text-lg text-warmwhite/60">
                {activeIndex + 1} / {reviews.length}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
