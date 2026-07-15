import type { Metadata } from "next";
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

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <ul className="border-t border-plum/15">
            {venues.map((venue, i) => (
              <Reveal key={venue.name} delay={0.03 * (i % 4)}>
                <li className="grid gap-3 border-b border-plum/15 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] sm:gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)_auto] lg:items-center lg:py-9">
                  <div>
                    <h2 className="font-display text-2xl text-plum sm:text-3xl">
                      {venue.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold uppercase text-[#65704f]">
                      {venue.location}
                    </p>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-charcoal/70 sm:text-[15px]">
                    {venue.description}
                  </p>
                  {venue.url && (
                    <a
                      href={venue.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-royal hover:underline"
                    >
                      Visit venue site →
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
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
