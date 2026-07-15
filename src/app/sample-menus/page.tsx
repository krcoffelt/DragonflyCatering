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

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {menuCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={0.05 * (i % 2)}>
                <article className="flex h-full flex-col rounded-lg border border-plum/10 bg-warmwhite p-8 sm:p-10">
                  <h2 className="font-display text-2xl text-plum">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {cat.description}
                  </p>
                  <p className="mt-6 border-t border-plum/10 pt-5 text-xs text-charcoal/60">
                    Ask for the current sample menu PDF during your proposal
                    conversation.
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
