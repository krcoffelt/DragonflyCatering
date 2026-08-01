import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Catering Service Areas | Dragonfly Catering",
  description:
    "Dragonfly Catering serves Downingtown, Chester County, the Main Line, and select nearby Pennsylvania communities with custom catering and chef-led hospitality.",
  path: "/service-areas",
});

const faqs = [
  {
    question: "Where does Dragonfly Catering travel?",
    answer:
      "Dragonfly regularly serves Downingtown, Chester County, the Main Line, and select nearby Pennsylvania communities. Share your venue or address in the proposal form and we will confirm availability for your date.",
  },
  {
    question: "Can Dragonfly cater at a venue that is not on the preferred list?",
    answer:
      "Yes. The preferred venues are places Dragonfly knows and recommends, not a limit on where the team can work. We are happy to coordinate with a venue you have already chosen.",
  },
  {
    question: "Do you cater events in private homes and offices?",
    answer:
      "Yes. Dragonfly caters in private homes, offices, rented spaces, and event venues. The proposal accounts for the kitchen, access, staffing, setup, service style, and breakdown at your location.",
  },
  {
    question: "Does travel affect the catering proposal?",
    answer:
      "Location and venue logistics are considered in every custom proposal. Tell us where you are gathering so travel, load-in, equipment, staffing, and service timing can be planned clearly from the start.",
  },
];

const regions = [
  {
    eyebrow: "Home base",
    title: "Downingtown & Chester County",
    copy: "Chef-led catering close to Dragonfly's Downingtown kitchen and event space, from private dinners and showers to weddings, company gatherings, and milestone celebrations.",
    href: "/",
    cta: "Explore Dragonfly Catering",
    image: assets.julyChefBuffetService,
    alt: alt.julyChefBuffetService,
  },
  {
    eyebrow: "Regional service",
    title: "The Main Line",
    copy: "Custom menus and polished service for gatherings in private homes, offices, and venues, supported by confirmed relationships with intimate Malvern event spaces.",
    href: "/service-areas/main-line-catering",
    cta: "Explore Main Line Catering",
    image: "/images/venues/blue-heron.webp",
    alt: "The light-filled brick interior of Blue Heron in Malvern",
  },
  {
    eyebrow: "At our table",
    title: "The Dragonfly Event Space",
    copy: "A warm, intimate Downingtown room for showers, private dinners, celebrations, workshops, and gatherings of up to 50 guests.",
    href: "/dragonfly-event-space",
    cta: "Explore the Event Space",
    image: assets.julyEventTableSetting,
    alt: alt.julyEventTableSetting,
  },
];

const services = [
  { label: "Custom Catering", href: "/custom-catering" },
  {
    label: "Weddings & Showers",
    href: "/wedding-catering-rehearsal-dinners-showers",
  },
  { label: "Corporate Catering", href: "/corporate-catering" },
  { label: "Private Chef Experiences", href: "/private-chef-experiences" },
  { label: "Social Events", href: "/social-events" },
  { label: "Event Bartending", href: "/event-bartending" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Where we cater"
        title="Catering across Chester County and the Main Line"
        lead="From our Downingtown home base to private homes, offices, and venues across the region, Dragonfly brings the menu, the team, and the hospitality to your gathering."
        image={{
          src: assets.galleryCateredBuffetGuests,
          alt: alt.galleryCateredBuffetGuests,
          position: "center 45%",
        }}
        secondaryCta={{ label: "Browse Preferred Venues", href: "/preferred-venues" }}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">One team, every setting</p>
            <h2 className="mt-4 max-w-[760px] font-display text-[42px] leading-[1.02] text-plum sm:text-[56px] lg:text-[66px]">
              Your location shapes the plan—not the quality of the experience.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="border-t border-plum/20 pt-7 lg:mt-2">
            <p className="text-[16px] leading-7 text-charcoal/72">
              Every proposal begins with the practical details of your space:
              access, kitchen capacity, guest flow, rentals, staffing, service,
              and cleanup. That local preparation lets the event itself feel
              easy.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-royal transition-colors hover:text-plum"
            >
              Tell us where you&apos;re gathering <span aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our core service area"
            title="Close to home. Ready to travel."
            lead="A focused regional footprint gives Dragonfly the flexibility to work in many kinds of spaces while keeping every proposal personal."
          />

          <div className="mt-14 divide-y divide-plum/15 border-y border-plum/15">
            {regions.map((region, index) => (
              <article
                key={region.title}
                className="grid gap-8 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:py-14"
              >
                <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={region.image}
                      alt={region.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.06} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <p className="eyebrow">{region.eyebrow}</p>
                  <h3 className="mt-4 font-display text-[36px] leading-[1.04] text-plum sm:text-[46px]">
                    {region.title}
                  </h3>
                  <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-charcoal/72">
                    {region.copy}
                  </p>
                  <Link
                    href={region.href}
                    className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-royal transition-colors hover:text-plum"
                  >
                    {region.cta} <span aria-hidden>↗</span>
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="What travels with us"
            title="A complete event team, wherever the table is set"
            lead="Choose the kind of gathering first. Dragonfly will shape the menu and service plan around your location."
            tone="dark"
          />
          <div className="mt-12 grid border-t border-warmwhite/20 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={0.04 * index}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between border-b border-warmwhite/20 py-6 text-[16px] font-medium text-warmwhite transition-colors hover:text-gold sm:mr-8"
                >
                  {service.label}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    ↗
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-28">
        <div className="mx-auto max-w-[920px] px-5 sm:px-8">
          <Faq
            items={faqs}
            eyebrow="Planning your location"
            title="Service area questions"
          />
        </div>
      </section>

      <FinalCta
        title="Tell us where the table will be"
        copy="Share your date, guest count, and location. Chef Matt will build a menu and service plan around the space."
      />
    </>
  );
}
