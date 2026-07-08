import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { assets, alt, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Catering, Private Chef & Event Bartending in Chester County | Dragonfly Catering",
  description:
    "Explore Dragonfly Catering's services: custom catering, private chef experiences, event bartending, an intimate Downingtown event space, preferred venue catering, and community events.",
  path: "/services",
});

const services = [
  {
    title: "Custom Catering",
    copy: "Weddings, showers, and celebrations — at your venue or ours.",
    href: "/custom-catering",
    ctaLabel: "Custom Catering",
    image: { src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard },
  },
  {
    title: "Buffets & Stations",
    copy: "Abundant displays, grazing-style service, and staffed stations.",
    href: "/custom-catering",
    ctaLabel: "Buffets & Stations",
    image: {
      src: assets.foodRoastedVegetables,
      alt: alt.foodRoastedVegetables,
    },
  },
  {
    title: "Weddings & Showers",
    copy: "The whole wedding season, first shower to last brunch.",
    href: "/wedding-catering-rehearsal-dinners-showers",
    ctaLabel: "Weddings & Showers",
    image: {
      src: assets.engagementAppetizers,
      alt: alt.heroAppetizers,
    },
  },
  {
    title: "Corporate Catering",
    copy: "Polished food that makes the host look good.",
    href: "/corporate-catering",
    ctaLabel: "Corporate Catering",
    image: {
      src: assets.heroPastaPrep,
      alt: alt.heroPastaPrep,
    },
  },
  {
    title: "Social Events",
    copy: "Birthdays, anniversaries, and milestone moments.",
    href: "/social-events",
    ctaLabel: "Social Events",
    image: {
      src: assets.mattCrabCakes,
      alt: alt.mattCrabCakes,
    },
  },
  {
    title: "Private Chef",
    copy: "Restaurant-quality dinners, plated in your home.",
    href: "/private-chef-experiences",
    ctaLabel: "Private Chef",
    image: { src: assets.chefMattPortrait, alt: alt.chefMattPortrait },
  },
  {
    title: "Event Bartending",
    copy: "Signature cocktails, mocktails, and pairings from RAMP-certified bartenders.",
    href: "/event-bartending",
    ctaLabel: "Event Bartending",
    placeholderLabel: "Bar photography coming soon",
  },
  {
    title: "The Event Space",
    copy: `An intimate Downingtown room for small gatherings up to ${site.eventSpaceCapacity} guests.`,
    href: "/dragonfly-event-space",
    ctaLabel: "The Event Space",
    image: {
      src: assets.foodRoastedVegetables,
      alt: alt.foodRoastedVegetables,
    },
  },
  {
    title: "Preferred Venues",
    copy: "Partner venues across Chester County and the Main Line.",
    href: "/preferred-venues",
    ctaLabel: "Preferred Venues",
    placeholderLabel: "Venue photography coming soon",
  },
  {
    title: "Gift Cards",
    copy: "Private chef dinners and catered moments available by email.",
    href: "/gift-cards",
    ctaLabel: "Gift Cards",
    image: { src: assets.chefMattPortrait, alt: alt.chefMattPortrait },
  },
  {
    title: "Community Events",
    copy: "Fundraisers and events for the people who show up.",
    href: "/community",
    ctaLabel: "Community Events",
    placeholderLabel: "Community photography coming soon",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our services"
        title="One team, your vision"
        lead="Every service starts with a conversation about your guests, your setting, and the feeling you want to create."
        secondaryCta={{ label: "View Sample Menus", href: "/sample-menus" }}
      />

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.href} {...service} index={i % 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to final plate"
            align="center"
          />
          <div className="mt-12 grid gap-10 text-left sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us about your event",
                copy: "Share your date, guest count, location, and vision through our proposal form.",
              },
              {
                step: "02",
                title: "Get a custom proposal",
                copy: "Chef Matt designs a menu and service plan written specifically for your gathering.",
              },
              {
                step: "03",
                title: "Gather and enjoy",
                copy: "We handle the food, the service, and the details — you stay with your guests.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.08 * i}>
                <p className="font-display text-3xl text-gold">{item.step}</p>
                <h3 className="mt-3 font-display text-lg text-plum">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
