import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reviews & Testimonials | Dragonfly Catering",
  description:
    "Read what clients say about Dragonfly Catering's chef-led catering, private chef dinners, and events across Downingtown and Chester County.",
  path: "/reviews",
});

/**
 * IMPORTANT — no verified testimonials exist in the asset library yet.
 * Per project rules, no reviews are invented. When the client approves
 * real testimonials, add them here with Review schema. Until then this
 * page sets honest expectations and routes visitors to proof that exists.
 */
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
        eyebrow="Reviews & testimonials"
        title="The best reviews happen at the table"
        lead="We only publish real words from real clients — approved reviews from recent events are on their way."
        cta={{ label: "Request a Custom Proposal", href: "/contact" }}
        secondaryCta={{ label: "View the Gallery", href: "/gallery" }}
      />

      <section className="bg-ivory pb-20 lg:pb-24">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-dashed border-gold/50 bg-warmwhite p-10 text-center sm:p-14">
              <p className="eyebrow mb-3">Coming soon</p>
              <h2 className="font-display text-2xl text-plum sm:text-3xl">
                Testimonials are being collected
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                In the meantime, the gallery shows the work — and we&rsquo;re
                happy to share references during your proposal conversation.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <CtaButton href="/gallery" variant="outline" location="reviews-gallery">
                  See the Work
                </CtaButton>
                <CtaButton href="/contact" location="reviews-contact">
                  Ask for References
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Hosted with us?"
            title="Tell us how it went"
            lead="A few honest sentences help the next host find us."
            align="center"
          />
          <Reveal className="mt-9">
            <CtaButton href="/contact" variant="outline" location="reviews-submit">
              Share Your Experience
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
