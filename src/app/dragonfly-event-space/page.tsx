import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckList } from "@/components/CheckList";
import { EditorialSplit } from "@/components/EditorialSplit";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site, assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Private Event Space in Downingtown, PA | Dragonfly Catering",
  description: `An intimate private event space at 4325 W. Lincoln Highway in Downingtown, PA for gatherings up to about ${site.eventSpaceCapacity} guests — showers, rehearsal dinners, private chef dinners, corporate meetings, and community events with Dragonfly catering built in.`,
  path: "/dragonfly-event-space",
});

const eventTypes = [
  "Rehearsal dinners",
  "Bridal showers",
  "Baby showers",
  "Birthday celebrations",
  "Engagement parties",
  "Celebrations of life",
  "Corporate meetings & retreats",
  "Crafting & painting events",
  "Cigar dinners",
  "Private chef dinners",
  "Nonprofit events & fundraisers",
  "Community gatherings",
];

const faqs = [
  {
    question: "How many guests does the space hold?",
    answer: `The space is designed for intimate gatherings of up to approximately ${site.eventSpaceCapacity} guests. Tell us your headcount and layout needs and we'll confirm the right fit.`,
  },
  {
    question: "Is catering included?",
    answer:
      "Yes — the event space is an extension of Dragonfly's kitchen. Every booking includes a custom menu conversation with Chef Matt, from passed hors d'oeuvres to plated dinners.",
  },
  {
    question: "Can we add bar service?",
    answer:
      "Our RAMP-certified bartending team can run a full bar for your event. You provide the alcohol; we provide bartenders, mixers, garnishes, and setup.",
  },
  {
    question: "Where is the space located?",
    answer: `Dragonfly Catering & Event Space is at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip} — on Lincoln Highway with convenient access from Route 30 and the surrounding Chester County area.`,
  },
];

export default function EventSpacePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Dragonfly Event Space",
            description: `Intimate private event space in Downingtown, PA for gatherings up to about ${site.eventSpaceCapacity} guests with chef-led catering.`,
            path: "/dragonfly-event-space",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Dragonfly Event Space", path: "/dragonfly-event-space" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Dragonfly Event Space · Downingtown"
        title="An intimate event space in Downingtown"
        lead={`Some celebrations don't need a ballroom — they need a warm room, exceptional food, and people you love. Up to ${site.eventSpaceCapacity} guests.`}
        cta={{ label: "Inquire About the Space", href: "/contact" }}
        secondaryCta={{ label: "View Sample Menus", href: "/sample-menus" }}
      />

      <section className="bg-ivory pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <EditorialSplit
            image={{
              src: assets.foodRoastedVegetables,
              alt: alt.foodRoastedVegetables,
            }}
            imageAspect="aspect-[4/3]"
          >
            <Reveal>
              <p className="eyebrow mb-3">The space</p>
              <h2 className="font-display text-3xl leading-[1.1] text-plum sm:text-4xl">
                A personal setting, built around hospitality
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/75 sm:text-base">
                A flexible room that becomes a shower brunch by morning and a
                candlelit chef dinner by evening. Because the space is ours,
                the food, service, and setting all work together.
              </p>
              <address className="mt-6 rounded-xl border border-mist bg-warmwhite p-5 text-sm not-italic leading-relaxed text-charcoal/75">
                <span className="font-semibold text-plum">{site.fullName}</span>
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <div className="mt-8">
                <CtaButton href="/contact" location="event-space-detail">
                  Check Available Dates
                </CtaButton>
              </div>
            </Reveal>
          </EditorialSplit>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading
              eyebrow="What happens here"
              title="One room, many gatherings"
              lead="If it brings people around a table, it belongs here."
            />
            <div className="lg:pt-12">
              <CheckList items={eventTypes} columns={2} />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder — no event-space photos exist in the asset
          library yet. Replace this band with a real gallery before launch. */}
      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-dashed border-gold/50 bg-warmwhite p-10 text-center sm:p-14">
              <p className="eyebrow mb-3">Space gallery</p>
              <h2 className="font-display text-2xl text-plum sm:text-3xl">
                Photos coming soon
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                We&rsquo;re photographing the space now — in the meantime,
                we&rsquo;d love to show you around in person.
              </p>
              <div className="mt-7">
                <CtaButton href="/contact" variant="outline" location="event-space-gallery">
                  Schedule a Visit
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Good to know"
            title="Event space questions"
            align="center"
          />
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <FinalCta
        title="Host your next gathering at Dragonfly"
        copy="Tell us the occasion, your date, and your guest count — we'll share availability, menu ideas, and everything the space includes."
        ctaLabel="Inquire About the Event Space"
      />
    </>
  );
}
