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
  title: "Gift Cards | Give a Dragonfly Catering Experience",
  description:
    "Give the gift of a private chef dinner, a date night at home, or a catered celebration. Dragonfly Catering gift cards for food lovers in Downingtown and Chester County.",
  path: "/gift-cards",
});

const occasions = [
  {
    title: "Date nights",
    copy: "Dinner for two, cooked and plated at home — a gift that clears the calendar instead of filling it.",
  },
  {
    title: "For the food lover",
    copy: "Give them a night on the other side of the pass.",
  },
  {
    title: "Celebrations",
    copy: "Birthdays, anniversaries, new homes — exceptional food at the center of the moment.",
  },
  {
    title: "Thank-you gifts",
    copy: "A warmer alternative to the usual gift basket.",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gift Cards", path: "/gift-cards" },
        ])}
      />

      <PageHero
        eyebrow="Gift cards"
        title="Give someone the best table in town — theirs"
        lead="A private chef evening, a catered gathering, or a night off from the kitchen. Food is love — it makes a remarkable gift."
        cta={{ label: "Inquire About Gift Cards", href: "/contact" }}
        secondaryCta={{ label: "Private Chef Experiences", href: "/private-chef-experiences" }}
      />

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={0.06 * i}>
                <div className="h-full rounded-2xl bg-warmwhite p-8 shadow-[0_1px_3px_rgba(44,22,53,0.07)] sm:p-10">
                  <h2 className="font-display text-2xl text-plum">{o.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                    {o.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Arranged personally"
            lead="Email us the amount and the occasion — we'll arrange the card and a note for your recipient."
            align="center"
          />
          <Reveal className="mt-9">
            <CtaButton href="/contact" location="gift-cards-cta">
              Arrange a Gift Card
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Know someone who deserves a night off?"
        copy="Tell us who you're gifting and the occasion — we'll take care of the rest."
        ctaLabel="Inquire About Gift Cards"
      />
    </>
  );
}
