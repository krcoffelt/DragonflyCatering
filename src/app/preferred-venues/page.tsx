import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { DragonflyMark } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { venues } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Preferred Catering Venues in Chester County, Main Line & Nearby PA",
  description:
    "Dragonfly Catering partners with venues across Chester County, the Main Line, and nearby Pennsylvania — from farm estates to intimate event spaces. Browse preferred venues or bring us to yours.",
  path: "/preferred-venues",
});

export default function PreferredVenuesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Preferred Venues", path: "/preferred-venues" },
        ])}
      />

      <PageHero
        eyebrow="Preferred venues"
        title="Beautiful venues. One trusted caterer."
        lead="These venues are just the beginning — if yours isn't listed, we'd love to meet it."
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />

      {/* NEEDS CONFIRMATION — all venue partnerships below must be verified
          with the client before launch. */}
      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue, i) => (
              <Reveal key={venue.name} delay={0.04 * (i % 3)}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-warmwhite shadow-[0_1px_3px_rgba(44,22,53,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(44,22,53,0.12)]">
                  {/* Venue image placeholder — add approved venue photography. */}
                  <div className="flex aspect-[16/7] items-center justify-center bg-gradient-to-br from-mist to-ivory">
                    <DragonflyMark className="h-8 w-8 text-sage/70" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl text-plum">
                      {venue.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-sage uppercase">
                      {venue.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {venue.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      {venue.url ? (
                        <a
                          href={venue.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-semibold text-royal hover:underline"
                        >
                          Visit venue site →
                        </a>
                      ) : (
                        <span className="text-[13px] text-charcoal/40">
                          Venue site coming soon
                        </span>
                      )}
                      {!venue.verified && (
                        <span
                          className="rounded-full bg-mist px-2.5 py-1 text-[10px] font-semibold tracking-wide text-charcoal/50 uppercase"
                          title="Partnership details being confirmed"
                        >
                          Confirming details
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Your venue, our kitchen"
            title="Booked somewhere else? Bring us along."
            lead="Tell us where you're gathering — we'll handle load-in to last plate."
            align="center"
          />
          <Reveal className="mt-9">
            <CtaButton href="/contact" location="venues-bottom">
              Request a Custom Proposal
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Found the perfect venue?"
        copy="Tell us where and when you're celebrating — we'll build a menu and service plan that fits the space beautifully."
      />
    </>
  );
}
