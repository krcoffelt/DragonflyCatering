import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { StarIcon } from "@/components/verde/VerdePrimitives";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { clientReviews } from "@/lib/reviews";

export const metadata: Metadata = buildMetadata({
  title: "Reviews & Testimonials | Dragonfly Catering",
  description:
    "Read what clients say about Dragonfly Catering's chef-led catering, private chef dinners, and events across Downingtown and Chester County.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />

      <PageHero
        eyebrow="Client reviews"
        title="Kind words, beautifully earned."
        lead="Real stories from private dinners, wedding weekends, family celebrations, and gatherings catered across Chester County."
        cta={{ label: "Request a Custom Proposal", href: "/contact" }}
        secondaryCta={{ label: "View the Gallery", href: "/gallery" }}
      />

      <section className="bg-warmwhite py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Reveal className="grid gap-8 border-y border-plum/15 py-9 sm:grid-cols-[0.65fr_1.35fr] sm:items-end lg:py-12">
            <div>
              <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-[12px] font-semibold uppercase text-plum">From our clients</p>
            </div>
            <p className="max-w-[760px] font-display text-[29px] leading-[1.08] text-plum sm:text-[38px] lg:text-[46px]">
              The food matters. So does every detail around it. These are the moments our clients remember.
            </p>
          </Reveal>

          <div className="mt-12 border-t border-plum/15 lg:mt-16">
            {clientReviews.map((review, index) => (
              <Reveal key={review.id} delay={Math.min(index * 0.025, 0.15)}>
                <article className="grid gap-7 border-b border-plum/15 py-9 sm:py-11 lg:grid-cols-[270px_1fr] lg:gap-16 lg:py-14">
                  <div>
                    <div className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <StarIcon key={starIndex} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                    <p className="mt-4 text-[13px] font-semibold uppercase text-plum">{review.name}</p>
                    <p className="mt-1 text-[13px] text-body">{review.event}</p>
                    <p className="mt-3 text-[11px] font-semibold uppercase text-plum/45">{review.source}</p>
                  </div>

                  <blockquote className="max-w-[850px]">
                    <p className="font-display text-[25px] leading-[1.18] text-plum sm:text-[30px] lg:text-[34px]">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
