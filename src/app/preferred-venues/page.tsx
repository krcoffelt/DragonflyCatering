import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { venues } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Preferred Catering Venues | Chester County, PA",
  description:
    "Browse Dragonfly Catering's preferred venues across Chester County, the Main Line, and nearby Pennsylvania, from farm estates to intimate event spaces.",
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

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue, i) => (
              <li key={venue.name}>
                <Reveal delay={0.03 * (i % 6)}>
                  <a
                    href={venue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${venue.name} website`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                      <Image
                        src={venue.image}
                        alt={venue.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-plum/20 via-transparent to-transparent opacity-70"
                        aria-hidden
                      />
                    </div>

                    <div className="border-t border-plum/15 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#65704f]">
                        {venue.location}
                      </p>
                      <h2 className="mt-2 font-display text-[28px] leading-[1.05] text-plum sm:text-[32px]">
                        {venue.name}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
                        {venue.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-royal transition-colors group-hover:text-plum">
                        Visit venue site <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="mt-14 max-w-2xl border-t border-plum/15 pt-6 text-sm leading-relaxed text-charcoal/65">
            Venue details and availability can change. Visit each venue&apos;s
            website for current information, then tell us where you&apos;re
            gathering.
          </p>
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
