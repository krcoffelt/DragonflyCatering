import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { menuCategories } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sample Catering Menus | Dragonfly Catering",
  description:
    "Browse sample menus from Dragonfly Catering — weddings, corporate events, private chef dinners, showers, cocktail parties, and seasonal gatherings. Every proposal is customized to your event.",
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

      {/*
        PLACEHOLDER — no client-approved menu PDFs exist in the asset library.
        These preview sections must be replaced with approved menu copy or
        downloadable PDFs before launch. When PDFs arrive, add download
        buttons wired to events.menuDownload() for tracking.
      */}
      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {menuCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={0.05 * (i % 2)}>
                <article className="flex h-full flex-col rounded-2xl bg-warmwhite p-8 shadow-[0_1px_3px_rgba(44,22,53,0.07)] sm:p-10">
                  <h2 className="font-display text-2xl text-plum">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {cat.description}
                  </p>
                  <div className="hairline my-6" />
                  <ul className="flex-1 space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-[15px] text-charcoal/80"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rotate-45 bg-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs italic text-charcoal/50">
                    Full sample menu available on request — detailed menus are
                    shared during your proposal conversation.
                  </p>
                </article>
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
