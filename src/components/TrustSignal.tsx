import { clientReviews } from "@/lib/reviews";
import { TextLink } from "./verde/VerdePrimitives";

const trustReview =
  clientReviews.find((review) => review.id === "linda-barsamian") ??
  clientReviews[0];
const trustQuote = (trustReview.featuredText ?? trustReview.text).replace(
  "...",
  "… ",
);

export function TrustSignal() {
  return (
    <section
      className="border-y border-plum/15 bg-warmwhite"
      aria-labelledby="trust-signal-title"
    >
      <div className="vv-container grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-center lg:gap-16 lg:py-12">
        <blockquote className="max-w-[940px]">
          <p
            id="trust-signal-title"
            className="text-[11px] font-semibold uppercase text-royal"
          >
            In their words
          </p>
          <p className="mt-5 font-display text-[27px] leading-[1.08] text-plum sm:text-[32px] lg:text-[36px]">
            &ldquo;{trustQuote}&rdquo;
          </p>
        </blockquote>

        <footer className="border-t border-plum/15 pt-6 lg:border-t-0 lg:border-l lg:py-2 lg:pl-8">
          <cite className="not-italic">
            <span className="block text-[12px] font-semibold uppercase text-plum">
              {trustReview.name}
            </span>
            <span className="mt-1.5 block text-[13px] text-body">
              {trustReview.event} · {trustReview.source}
            </span>
          </cite>
          <div className="mt-5">
            <TextLink href="/reviews" location="trust-signal">
              Read client stories
            </TextLink>
          </div>
        </footer>
      </div>
    </section>
  );
}
