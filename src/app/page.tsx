import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { SpiritBand } from "@/components/verde/SpiritBand";
import { AboutBand } from "@/components/verde/AboutBand";
import { FoodGallery } from "@/components/verde/FoodGallery";
import { MenuBand } from "@/components/verde/MenuBand";
import { DrinksHero } from "@/components/verde/DrinksHero";
import { DrinksMenu } from "@/components/verde/DrinksMenu";
import { PrivateEventsBand } from "@/components/verde/PrivateEventsBand";
import { ReviewsBand } from "@/components/verde/ReviewsBand";
import { FinalTableCta } from "@/components/verde/FinalTableCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Dragonfly Catering | Boutique Catering & Private Events in Downingtown, PA",
  description:
    "Chef-led custom catering, private chef dinners, event bartending, and an intimate event space in Downingtown, PA. Serving Chester County and the Main Line. Request a custom proposal.",
  path: "/",
});

const faqs = [
  {
    question: "What's included in a catering proposal?",
    answer:
      "Every proposal is written for your event: a custom menu, service style, staffing, setup and breakdown, and clear pricing.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Popular spring and fall dates fill early. Reach out as soon as you have a date in mind.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes — vegetarian, vegan, gluten-free, and allergy-aware menus are part of nearly every event we cater.",
  },
  {
    question: "Do you travel to our venue?",
    answer:
      "We cater across Downingtown, Chester County, the Main Line, and nearby Pennsylvania communities.",
  },
];

const foodSlides = [
  {
    src: assets.mattCrabCakes,
    alt: alt.mattCrabCakes,
    caption: "Small bites prepared with kitchen-level care.",
  },
  {
    src: assets.foodRoastedVegetables,
    alt: alt.foodRoastedVegetables,
    caption: "Buffet spreads built for gatherings of every size.",
  },
  {
    src: assets.foodPastaPrep,
    alt: alt.foodPastaPrep,
    caption: "Seasonal ingredients, vivid and intentional.",
  },
];

const menuItems = [
  {
    name: "Passed Hors d'Oeuvres",
    detail: "Seasonal canapés designed for mingling — not managing plates.",
  },
  {
    name: "Plated Dinners",
    detail: "Coursed service with chef-led presentation for formal gatherings.",
  },
  {
    name: "Family-Style Service",
    detail: "Shared platters that keep the table warm and conversational.",
  },
  {
    name: "Buffets & Stations",
    detail: "Abundant displays and chef-attended stations for easy guest flow.",
  },
];

const drinkItems = [
  {
    name: "Signature Cocktails",
    detail: "Custom builds designed for your event — named, balanced, memorable.",
  },
  {
    name: "Elevated Mocktails",
    detail: "Zero-proof programs with the same care as the full bar.",
  },
  {
    name: "Wine & Bourbon Pairings",
    detail: "Guided pairings for private chef dinners and seated events.",
  },
];

const eventBackgrounds = [
  { src: assets.heroAppetizers, alt: alt.heroAppetizers },
  { src: assets.heroPastaPrep, alt: alt.heroPastaPrep },
  { src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard },
];

const eventCards = [
  {
    title: "Showers & Rehearsals",
    copy: "Warm, intimate gatherings with menus built for the people in the room.",
    href: "/wedding-catering-rehearsal-dinners-showers",
    image: { src: assets.engagementAppetizers, alt: alt.heroAppetizers },
  },
  {
    title: "Preferred Venues",
    copy: "Bring Dragonfly to farm estates, intimate rooms, and places you already love.",
    href: "/preferred-venues",
    image: { src: assets.heroPastaPrep, alt: alt.heroPastaPrep },
  },
  {
    title: "Corporate & Social",
    copy: "Board dinners, milestones, and parties designed around your guests.",
    href: "/corporate-catering",
    image: {
      src: assets.foodRoastedVegetables,
      alt: alt.foodRoastedVegetables,
    },
  },
];

const reviews = [
  {
    text: "Food is love. Every menu we write starts with the people who'll share it.",
    attribution: "Chef Matt Stone",
    role: "Chef & Founder",
  },
  {
    text: "Fewer events, more attention. We keep the calendar boutique on purpose.",
    attribution: "The Dragonfly Promise",
    role: "How we work",
  },
  {
    text: "Seasonal. Local. Special. Menus follow the growing season, not a package list.",
    attribution: "The Dragonfly Kitchen",
    role: "What we cook",
  },
  {
    text: "Let us feed your moment — at your home, your venue, or our Downingtown space.",
    attribution: "Dragonfly Catering",
    role: "Where we gather",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
        ]}
      />

      <HomeHero />

      <SpiritBand
        image={{ src: assets.heroAppetizers, alt: alt.heroAppetizers }}
        title="The spirit of chef-led catering"
        body="From seasonal ingredients to warm, polished service — every detail reflects craft, care, and the people around your table."
        ctaLabel="About Chef Matt"
        ctaHref="/about"
      />

      <AboutBand
        image={{ src: assets.chefMattPortrait, alt: alt.chefMattPortrait }}
        title="Rooted in craft, refined by taste"
        body="At Dragonfly, catering is more than a meal — it's a quiet celebration of seasonal food, personal attention, and thoughtful hospitality. Every menu is written for your guests, your setting, and the feeling you want to create."
        ctaLabel="Read more about us"
        ctaHref="/about"
      />

      <FoodGallery slides={foodSlides} />

      <MenuBand
        title="Seasonal & local"
        lead="Every dish on our menus is crafted with carefully selected ingredients, celebrating freshness and the Chester County growing season."
        category="Service styles"
        items={menuItems}
        image={{ src: assets.foodRoastedVegetables, alt: alt.foodRoastedVegetables }}
        ctaLabel="View sample menus"
        ctaHref="/sample-menus"
        tagline="Precision in every move, perfection in every plate."
      />

      <DrinksHero
        image={{ src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard }}
        title="Cocktails, mocktails & thoughtful pairings."
      />

      <DrinksMenu
        title="The art of the bar"
        lead="From signature cocktails to elevated mocktails, every drink is thoughtfully crafted to complement the flavors of our kitchen."
        category="Event bartending"
        items={drinkItems}
        image={{ src: assets.mattCrabCakes, alt: alt.mattCrabCakes }}
        ctaLabel="Request bar service"
        ctaHref="/event-bartending"
        tagline="Precision in every move, perfection in every plate."
      />

      <PrivateEventsBand
        title="Private events at Dragonfly"
        lead="From intimate showers to milestone celebrations, Dragonfly offers a warm setting where every gathering feels personal, polished, and unforgettable."
        backgrounds={eventBackgrounds}
        cards={eventCards}
      />

      <ReviewsBand
        title="The Dragonfly standard"
        lead="Real food, honest flavors, and gatherings designed around the people at the table."
        reviews={reviews}
        image={{ src: assets.heroAppetizers, alt: alt.heroAppetizers }}
        ctaLabel="Request a proposal"
        ctaHref="/contact"
      />

      <FinalTableCta
        title="Your table awaits"
        image={{ src: assets.chefMattPortrait, alt: alt.chefMattPortrait }}
      />
    </>
  );
}
