import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { sampleMenus } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sample Catering Menus | Dragonfly Catering",
  description:
    "Browse custom menus for weddings, corporate events, private chef dinners, showers, cocktail parties, and seasonal gatherings from Dragonfly Catering.",
  path: "/sample-menus",
});

export default function SampleMenusPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sample Menus", path: "/sample-menus" },
        ])}
      />

      <PageHero
        eyebrow="Sample menus"
        title="Menus that begin with your event"
        lead="Our sample menus are starting points, not packages — every proposal is customized to your event, guests, and budget."
        secondaryCta={{ label: "View the Gallery", href: "/gallery" }}
      />

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal className="mb-12 max-w-[680px] lg:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              From Chef Matt&apos;s kitchen
            </p>
            <h2 className="mt-4 font-display text-3xl text-plum sm:text-4xl">
              Real menus. Made for real gatherings.
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/70">
              Browse recent examples for inspiration. Every Dragonfly menu is
              rewritten around your season, setting, guests, and budget.
            </p>
          </Reveal>

          <div className="border-t border-plum/15">
            {sampleMenus.map((menu, i) => (
              <Reveal key={menu.href} delay={0.04 * (i % 3)}>
                <a
                  href={menu.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-plum/15 py-8 transition-colors duration-300 hover:bg-warmwhite/70 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:px-5 lg:py-10"
                  aria-label={`Open ${menu.title} PDF`}
                >
                  <span className="font-display text-2xl text-plum/35 transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      {menu.category}
                    </span>
                    <span className="mt-2 block font-display text-2xl text-plum sm:text-3xl">
                      {menu.title}
                    </span>
                    <span className="mt-3 block max-w-[680px] text-sm leading-relaxed text-charcoal/70 sm:text-base">
                      {menu.description}
                    </span>
                  </span>

                  <span className="flex items-center gap-4 text-sm font-semibold text-plum">
                    <span className="text-charcoal/50">
                      {menu.pageCount} {menu.pageCount === 1 ? "page" : "pages"}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Open PDF →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Dietary needs welcome"
            title="Shaped to your table"
            lead="Vegetarian, vegan, gluten-free, and allergy-aware menus are part of nearly every event."
            align="center"
          />
          <Reveal className="mt-9">
            <CtaButton href="/contact" location="menus-bottom">
              Start Your Menu Conversation
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Hungry to see your menu?"
        copy="Tell us about your event and the food you love — Chef Matt will write a sample menu specifically for your gathering."
      />
    </>
  );
}
