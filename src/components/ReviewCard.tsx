"use client";

import { useId, useState, type CSSProperties } from "react";
import type { ClientReview } from "@/lib/reviews";
import { StarIcon } from "@/components/verde/VerdePrimitives";

const clampStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 6,
  overflow: "hidden",
};

export function ReviewCard({ review }: { review: ClientReview }) {
  const [expanded, setExpanded] = useState(false);
  const reviewId = useId();
  const isLong = review.text.length > 220;

  return (
    <article className="flex h-full flex-col border border-plum/15 bg-warmwhite p-6 shadow-[0_16px_40px_rgba(41,15,51,0.06)] sm:p-7">
      <div
        className="flex gap-0.5 text-gold"
        role="img"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className={`h-4 w-4 ${index >= review.rating ? "opacity-20" : ""}`}
          />
        ))}
      </div>

      <blockquote className="mt-5 flex-1">
        <p
          id={reviewId}
          className="text-[16px] leading-[1.7] text-charcoal/80 sm:text-[17px]"
          style={!expanded && isLong ? clampStyle : undefined}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      {isLong && (
        <button
          type="button"
          className="mt-4 w-fit text-[12px] font-semibold uppercase tracking-[0.12em] text-royal underline decoration-gold/60 underline-offset-4 transition-colors hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-controls={reviewId}
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "Read full review"}
        </button>
      )}

      <footer className="mt-6 border-t border-plum/12 pt-5">
        <cite className="not-italic">
          <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-plum">
            {review.name}
          </span>
          <span className="mt-1 block text-[13px] text-charcoal/65">{review.event}</span>
          <a
            href={review.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-plum/55 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {review.source} ↗
          </a>
        </cite>
      </footer>
    </article>
  );
}
