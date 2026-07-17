import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Private Chef Experiences in Downingtown & Chester County",
  description:
    "Enjoy a restaurant-quality dinner at home, prepared and plated by Chef Matt. Private chef tasting dinners, pairing menus, date nights, and milestone celebrations across Chester County and the Main Line.",
  path: "/private-chef-experiences",
});

export default function PrivateChefPage() {
  return (
    <ServicePage
      path="/private-chef-experiences"
      serviceName="Private Chef Experiences"
      serviceDescription="In-home private chef dinners, tasting menus, pairing dinners, and interactive chef-led experiences in Downingtown, Chester County, and the Main Line."
      eyebrow="Private chef"
      title="Private chef, at your table"
      lead="A restaurant-quality dinner in your own home, prepared and plated by Chef Matt — no reservations, no rushing, no cleanup."
      heroImage={{ src: assets.chefMattPortrait, alt: alt.chefMattPortrait }}
      coverage={{
        eyebrow: "The experiences",
        title: "Date night to dinner party",
        lead: "Coursed, plated, and personal — choose the shape of the evening.",
        items: [
          "In-home coursed dinners",
          "Multi-course tasting menus",
          "Wine & bourbon pairing dinners",
          "Date nights for two",
          "Milestone celebrations",
          "Dinner parties with friends",
          "Interactive chef's-counter experiences",
          "Special-occasion brunches",
        ],
      }}
      detail={{
        image: { src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard },
        eyebrow: "How the evening works",
        title: "Your kitchen, Chef Matt's craft",
        paragraphs: [
          "Chef Matt arrives with everything the menu needs, cooks in your kitchen, plates each course, and leaves it cleaner than he found it. You stay at the table.",
          "Menus are written for your evening — add a pairing conversation, an interactive course at the counter, or a mocktail progression.",
        ],
      }}
      faqs={[
        {
          question: "How many guests can a private chef dinner serve?",
          answer:
            "From dinners for two to parties of twenty or more, depending on your kitchen and the menu. Larger groups can also book our Downingtown event space for a private chef dinner out of the house.",
        },
        {
          question: "What does the experience include?",
          answer:
            "Menu design, ingredient sourcing, on-site cooking, coursed plating and service, and full kitchen cleanup. You provide the table and the company.",
        },
        {
          question: "Can we build the menu together?",
          answer:
            "That's the whole point. Every private chef menu starts with a conversation about what you love, what's in season, and the occasion you're marking.",
        },
        {
          question: "Do you offer beverage pairings?",
          answer:
            "Yes — wine and bourbon pairing guidance is available, along with crafted mocktail pairings. For full bar service, add our professional event bartending team.",
        },
      ]}
      finalCta={{
        title: "Set the table — we'll handle the rest",
        copy: "Tell us the occasion, your guest count, and the flavors you love. Chef Matt will design a private dinner around your table.",
      }}
    />
  );
}
