import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Wedding Catering, Rehearsal Dinners & Showers in Chester County | Dragonfly Catering",
  description:
    "Personal wedding catering, rehearsal dinners, bridal showers, and post-wedding brunches across Downingtown, Chester County, and the Main Line — with custom menus and warm, chef-led service.",
  path: "/wedding-catering-rehearsal-dinners-showers",
});

export default function WeddingsPage() {
  return (
    <ServicePage
      path="/wedding-catering-rehearsal-dinners-showers"
      serviceName="Wedding Catering, Rehearsal Dinners & Showers"
      serviceDescription="Wedding catering, rehearsal dinners, showers, and celebration brunches with custom seasonal menus across Chester County and the Main Line."
      eyebrow="Weddings & celebrations"
      title="Weddings, rehearsal dinners & showers"
      lead="Your wedding season is more than one day — we cater the whole arc, from the first shower to the morning-after brunch."
      heroImage={{ src: assets.heroAppetizers, alt: alt.heroAppetizers }}
      coverage={{
        eyebrow: "Every celebration",
        title: "First toast to last brunch",
        lead: "Every celebration in the season, designed around the moment.",
        items: [
          "Intimate weddings",
          "Rehearsal dinners",
          "Bridal showers",
          "Baby showers",
          "Engagement parties",
          "Welcome parties",
          "Post-wedding brunches",
          "Vow renewals & anniversaries",
        ],
      }}
      detail={{
        image: {
          src: assets.mattAppetizerBoard,
          alt: alt.mattAppetizerBoard,
        },
        eyebrow: "The Dragonfly difference",
        title: "A caterer who knows your name",
        paragraphs: [
          "We keep a boutique wedding calendar on purpose. Chef Matt is part of every menu, tasting, and service day — so the food tastes like it was made for you, because it was.",
          "Booked a venue? We work across Chester County and the Main Line. Something smaller? Our Downingtown space hosts showers and rehearsal dinners beautifully.",
        ],
      }}
      faqs={[
        {
          question: "Do you cater full weddings or only smaller events?",
          answer:
            "Both. We specialize in intimate weddings and the celebrations around them — rehearsal dinners, showers, welcome parties, and brunches. Share your guest count and we'll confirm the right fit.",
        },
        {
          question: "Can we do a tasting before booking?",
          answer:
            "Menu conversations and tasting arrangements are part of the planning process for wedding clients. Ask about tastings in your proposal request and we'll walk you through how it works.",
        },
        {
          question: "Can you cater at our venue?",
          answer:
            "Almost certainly. We regularly cater at venues across Chester County, the Main Line, and nearby Pennsylvania communities — see our preferred venues page, or tell us where you're booked.",
        },
        {
          question: "Do you offer bar service for weddings?",
          answer:
            "Yes — our event bartending team can serve signature cocktails, wine, and elevated mocktails alongside your menu. You provide the alcohol; we handle the service plan.",
        },
      ]}
      finalCta={{
        title: "Planning a wedding weekend?",
        copy: "Tell us about your celebration — dates, guest counts, and venues — and we'll design menus that carry your story from rehearsal to brunch.",
      }}
    />
  );
}
