import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EditorialSplit } from "@/components/EditorialSplit";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { getClientReview } from "@/lib/reviews";
import { assets, alt, venues } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Main Line Catering | Dragonfly Catering",
  description:
    "Chef-led Main Line catering for weddings, showers, corporate events, private dinners, and celebrations, with custom menus and polished service.",
  path: "/service-areas/main-line-catering",
});

const faqs = [
  {
    question: "What kinds of Main Line events does Dragonfly cater?",
    answer:
      "Dragonfly caters weddings, showers, rehearsal dinners, corporate gatherings, milestone celebrations, private chef dinners, holiday events, and other custom gatherings throughout the Main Line.",
  },
  {
    question: "Can Dragonfly cater in a private Main Line home?",
    answer:
      "Yes. Private homes are a natural fit for in-home chef dinners, showers, cocktail parties, family celebrations, and catered gatherings. The proposal accounts for your kitchen, access, guest flow, staffing, and cleanup.",
  },
  {
    question: "Does Dragonfly work with Main Line event venues?",
    answer:
      "Yes. Dragonfly works with venues across the region and has confirmed preferred relationships with Blue Heron and Bask Collective in Malvern. We are also happy to coordinate with a venue you have already selected.",
  },
  {
    question: "Can catering and bartending be included in one proposal?",
    answer:
      "Yes. Catering and RAMP-certified bartending can be planned together, including staffing, portable bar needs, mixers, garnishes, signature cocktails, elevated mocktails, and service timing.",
  },
  {
    question: "How far ahead should we book a Main Line event?",
    answer:
      "Reach out as soon as you have a date and approximate guest count. Popular spring, fall, holiday, and wedding-weekend dates tend to book first, while smaller weekday gatherings may have more flexibility.",
  },
];

const offerings = [
  {
    title: "Weddings, showers & rehearsal dinners",
    copy: "Custom seasonal menus for the celebrations surrounding the wedding day, from the first shower to the morning-after brunch.",
    href: "/wedding-catering-rehearsal-dinners-showers",
  },
  {
    title: "Corporate catering",
    copy: "Polished food and quiet, capable service for board dinners, client events, retreats, and company celebrations.",
    href: "/corporate-catering",
  },
  {
    title: "Private chef experiences",
    copy: "Restaurant-quality dinners cooked and plated in your home, from date nights to multi-course celebrations.",
    href: "/private-chef-experiences",
  },
  {
    title: "Social events & milestones",
    copy: "Birthdays, anniversaries, engagement parties, holidays, and family gatherings shaped around the people in the room.",
    href: "/social-events",
  },
  {
    title: "Event bartending",
    copy: "RAMP-certified bartenders, portable bars, signature cocktails, elevated mocktails, and thoughtful pairings.",
    href: "/event-bartending",
  },
];

const mainLineVenues = venues.filter(
  (venue) => venue.name === "Blue Heron" || venue.name === "Bask Collective",
);

const featuredReview = getClientReview("lisa-sinkiewicz");

export default function MainLineCateringPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            {
              name: "Main Line Catering",
              path: "/service-areas/main-line-catering",
            },
          ]),
          serviceSchema({
            name: "Main Line Catering",
            description:
              "Custom catering, private chef experiences, and event bartending for gatherings along the Main Line in Pennsylvania.",
            path: "/service-areas/main-line-catering",
            areaServed: "Main Line, Pennsylvania",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Main Line catering"
        title="Main Line catering, made personal"
        lead="Custom seasonal menus, chef-led hospitality, and polished service for gatherings in private homes, offices, and venues along the Main Line."
        image={{
          src: assets.galleryPrivateDiningTableService,
          alt: alt.galleryPrivateDiningTableService,
          position: "center 44%",
        }}
        secondaryCta={{ label: "View Sample Menus", href: "/sample-menus" }}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <EditorialSplit
            image={{ src: assets.julyChefBuffetService, alt: alt.julyChefBuffetService }}
            imageAspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <Reveal>
              <p className="eyebrow">From menu to last plate</p>
              <h2 className="mt-4 font-display text-[42px] leading-[1.02] text-plum sm:text-[54px]">
                A caterer who plans for the place as carefully as the plate.
              </h2>
              <p className="mt-6 text-[16px] leading-7 text-charcoal/72">
                A private home, a design-led studio, and a formal venue each ask
                for a different kind of preparation. Dragonfly builds the menu,
                staffing, rentals, timing, setup, and breakdown around the room
                you have chosen.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-charcoal/72">
                Chef Matt stays close to every detail, so the experience feels
                generous and polished without becoming impersonal.
              </p>
              <Link
                href="/custom-catering"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-royal transition-colors hover:text-plum"
              >
                Explore custom catering <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </EditorialSplit>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Gatherings we cater"
            title="One table or a full room"
            lead="Choose the shape of the event. Dragonfly will write the menu and service plan around your guests and setting."
          />

          <div className="mt-12 divide-y divide-plum/15 border-y border-plum/15">
            {offerings.map((offering, index) => (
              <Reveal key={offering.href} delay={0.04 * index}>
                <Link
                  href={offering.href}
                  className="group grid gap-4 py-7 sm:grid-cols-[0.72fr_1.28fr_auto] sm:items-center sm:gap-8"
                >
                  <h3 className="font-display text-[28px] leading-[1.08] text-plum transition-colors group-hover:text-royal">
                    {offering.title}
                  </h3>
                  <p className="max-w-[620px] text-[14px] leading-6 text-charcoal/68">
                    {offering.copy}
                  </p>
                  <span
                    className="text-royal transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    ↗
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Preferred in Malvern"
            title="Intimate venues with a sense of place"
            lead="Two confirmed Dragonfly venue relationships give Main Line hosts a thoughtful starting point for smaller gatherings."
            tone="dark"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
            {mainLineVenues.map((venue, index) => (
              <Reveal key={venue.name} delay={0.08 * index}>
                <a
                  href={venue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-plum/70">
                    <Image
                      src={venue.image}
                      alt={venue.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="border-t border-warmwhite/20 pt-5">
                    <p className="text-[12px] font-semibold uppercase text-gold">
                      {venue.location}
                    </p>
                    <h3 className="mt-2 font-display text-[34px] leading-none text-warmwhite">
                      {venue.name}
                    </h3>
                    <p className="mt-4 max-w-[560px] text-[14px] leading-6 text-warmwhite/68">
                      {venue.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-gold">
                      Visit venue site <span aria-hidden>↗</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-warmwhite/20 pt-7">
            <Link
              href="/preferred-venues"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-warmwhite transition-colors hover:text-gold"
            >
              Browse all preferred venues <span aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Local logistics"
              title="Prepared for the room before service begins"
              lead="The proposal turns venue details into a clear operating plan, so guests only see the hospitality."
            />
            <div className="mt-10 divide-y divide-plum/15 border-y border-plum/15">
              {[
                ["01", "Access & load-in", "Arrival windows, parking, stairs, elevators, and venue requirements."],
                ["02", "Kitchen & equipment", "Available prep space, power, water, rentals, and portable equipment."],
                ["03", "Service & flow", "Staffing, bar placement, guest movement, clearing, and breakdown."],
              ].map(([number, title, copy]) => (
                <Reveal key={number} className="grid gap-3 py-6 sm:grid-cols-[54px_1fr]">
                  <p className="font-display text-[24px] text-royal">{number}</p>
                  <div>
                    <h3 className="font-display text-[24px] text-plum">{title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-charcoal/68">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.08} className="lg:pt-8">
            <ReviewCard review={featuredReview} />
            <p className="mt-4 text-[12px] leading-5 text-charcoal/55">
              This review reflects a Dragonfly client experience and is not
              presented as a location-specific Main Line testimonial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-28">
        <div className="mx-auto max-w-[920px] px-5 sm:px-8">
          <Faq
            items={faqs}
            eyebrow="Planning along the Main Line"
            title="Main Line catering questions"
          />
        </div>
      </section>

      <FinalCta
        title="Planning a Main Line gathering?"
        copy="Share your date, guest count, and location. Chef Matt will shape a custom menu and service plan around the space."
      />
    </>
  );
}
