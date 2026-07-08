import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Custom Catering in Downingtown & Chester County | Dragonfly Catering",
  description:
    "Chef-led custom catering for weddings, showers, corporate events, fundraisers, and celebrations across Downingtown, Chester County, and the Main Line. Every menu written for your event.",
  path: "/custom-catering",
});

export default function CustomCateringPage() {
  return (
    <ServicePage
      path="/custom-catering"
      serviceName="Custom Catering"
      serviceDescription="Chef-led custom catering for private, corporate, and community events across Downingtown, Chester County, and the Main Line."
      eyebrow="Custom catering"
      title="Custom catering for meaningful gatherings"
      lead="From intimate dinners to milestone celebrations, every menu is built around your guests, your setting, and the feeling you want to create."
      heroImage={{ src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard }}
      coverage={{
        eyebrow: "Where we cater",
        title: "Your setting. Our kitchen.",
        lead: "Any guest count, any location — menus scaled to fit the room.",
        items: [
          "Private homes & backyard events",
          "Rental venues & estates",
          "Buffets, grazing displays & staffed stations",
          "Corporate offices & meeting spaces",
          "Weddings & rehearsal dinners",
          "Bridal & baby showers",
          "Fundraisers & nonprofit events",
          "Community gatherings",
          "Celebrations of life",
          "Holiday parties",
          "The Dragonfly Event Space in Downingtown",
        ],
      }}
      detail={{
        image: { src: assets.foodPastaPrep, alt: alt.foodPastaPrep },
        eyebrow: "Service styles",
        title: "Served the way your event flows best",
        paragraphs: [
          "Plated dinners. Family-style platters. Buffets, stations, tapas, and passed hors d'oeuvres. A la carte when you just need the food handled.",
          "Seasonal and local whenever possible — comfort food, international favorites, and fusion, written for your guests rather than pulled from a package.",
        ],
      }}
      faqs={[
        {
          question: "How far in advance should we book?",
          answer:
            "Because Dragonfly keeps a boutique calendar, popular dates fill early — especially spring and fall weekends. Reach out as soon as you have a date in mind and we'll confirm availability quickly.",
        },
        {
          question: "Can you accommodate dietary restrictions?",
          answer:
            "Yes. Vegetarian, vegan, gluten-free, and allergy-aware menus are part of nearly every event we cater. Share your guests' needs in your proposal request and we'll design around them.",
        },
        {
          question: "Do you handle staffing, setup, and cleanup?",
          answer:
            "Full-service events include professional service staff, setup, and breakdown. For smaller gatherings, we also offer drop-off and a la carte options — tell us what level of service fits your event.",
        },
        {
          question: "Is there a guest minimum or maximum?",
          answer:
            "We cater everything from dinners for two to large celebrations. Guest count shapes the menu and service plan, so include your best estimate in your proposal request.",
        },
      ]}
      finalCta={{
        title: "Tell us about the gathering you're planning",
        copy: "Share your date, guest count, location, and vision — Chef Matt will shape a custom catering proposal around it.",
      }}
    />
  );
}
