"use client";

import { useState } from "react";
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
            <article className="border border-plum/15 bg-warmwhite p-6 text-plum shadow-[0_18px_50px_rgba(18,10,22,0.16)] sm:p-7 lg:p-8">
              <div className="flex items-center justify-between gap-5">
                <div
                  className="flex gap-0.5 text-gold"
                  role="img"
                  aria-label={`${activeReview.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`h-4 w-4 ${index >= activeReview.rating ? "opacity-20" : ""}`}
                    />
                  ))}
                </div>
                <p className="text-right text-[11px] font-semibold uppercase tracking-[0.1em] text-charcoal/60">
                  Review {activeIndex + 1} of {reviews.length}
                </p>
              </div>

              <div
                className="relative mt-5 min-h-[165px] sm:min-h-[150px]"
                aria-live="polite"
                aria-atomic="true"
              >
                <blockquote key={activeReview.id} className="review-enter">
                  <p className="max-w-[850px] text-[16px] leading-[1.7] text-charcoal/80 sm:text-[17px] lg:text-[18px]">
                    &ldquo;{activeReview.featuredText ?? activeReview.text}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-plum/12 pt-5">
                    <cite className="not-italic">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-plum">
                        {activeReview.name}
                      </span>
                      <span className="mt-1 block text-[13px] text-charcoal/65">
                        {activeReview.event}
                      </span>
                      <a
                        href={activeReview.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-plum/55 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {activeReview.source} ↗
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>

              <div className="mt-6 border-t border-plum/12 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-charcoal/60">
                    Browse client reviews
                  </p>
                  <TextLink href={ctaHref} location="reviews-band-card">
                    {ctaLabel}
                  </TextLink>
                </div>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-plum/20 px-4 text-[13px] font-semibold text-plum transition-colors hover:border-gold hover:bg-gold focus-visible:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:flex-none"
                      aria-label="Show previous review"
                    >
                      <span aria-hidden>←</span> Previous
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-plum/20 px-4 text-[13px] font-semibold text-plum transition-colors hover:border-gold hover:bg-gold focus-visible:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:flex-none"
                      aria-label="Show next review"
                    >
                      Next <span aria-hidden>→</span>
                    </button>
                  </div>

                  <div
                    className="flex flex-1 gap-2"
                    role="group"
                    aria-label="Choose a review"
                  >
                    {reviews.map((review, index) => (
                      <button
                        key={review.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="group flex min-h-11 flex-1 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        aria-label={`Show review ${index + 1} from ${review.name}`}
                        aria-current={index === activeIndex ? "true" : undefined}
                      >
                        <span className="h-1 w-full overflow-hidden bg-plum/15">
                          <span
                            className={`block h-full bg-royal transition-transform duration-300 group-hover:scale-x-100 ${
                              index === activeIndex ? "scale-x-100" : "scale-x-0"
                            }`}
                            style={{ transformOrigin: "left" }}
                          />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
