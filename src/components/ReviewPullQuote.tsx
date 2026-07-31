import type { ClientReview } from "@/lib/reviews";
import { StarIcon, TextLink } from "./verde/VerdePrimitives";

type ReviewPullQuoteProps = {
  review: ClientReview;
  quote: string;
  placement: string;
  variant?: "band" | "inline";
};

function ReviewStars({ review }: { review: ClientReview }) {
  return (
    <div
      className="flex gap-0.5 text-gold"
      role="img"
      aria-label={`${review.rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={`h-3.5 w-3.5 ${index >= review.rating ? "opacity-20" : ""}`}
        />
      ))}
    </div>
  );
}

/** A single, editorial review excerpt for a conversion-focused page. */
export function ReviewPullQuote({
  review,
  quote,
  placement,
  variant = "band",
}: ReviewPullQuoteProps) {
  const citation = (
    <cite className="not-italic">
      <span className="block text-[12px] font-semibold uppercase tracking-[0.08em]">
        {review.name}
      </span>
      <a
        href={review.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-1.5 inline-block text-[12px] underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        {review.event} · {review.source} ↗
      </a>
    </cite>
  );

  if (variant === "inline") {
    return (
      <blockquote className="mt-8 border-y border-plum/15 py-7">
        <ReviewStars review={review} />
        <p className="mt-5 font-display text-[23px] leading-[1.16] text-plum sm:text-[25px]">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-5 text-plum">
          {citation}
          <div className="mt-5">
            <TextLink href="/reviews" location={placement}>
              Read more client stories
            </TextLink>
          </div>
        </footer>
      </blockquote>
    );
  }

  return (
    <section className="bg-plum py-16 text-warmwhite sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="grid gap-8 border-y border-warmwhite/15 py-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14 lg:py-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
              In their words
            </p>
            <div className="mt-4">
              <ReviewStars review={review} />
            </div>
          </div>

          <blockquote>
            <p className="max-w-[850px] font-display text-[28px] leading-[1.12] sm:text-[34px] lg:text-[40px]">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="mt-7 border-l-2 border-gold pl-4 text-warmwhite/80">
              {citation}
              <div className="mt-5">
                <TextLink href="/reviews" location={placement} tone="light">
                  Read more client stories
                </TextLink>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
