import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Event Bartending & Mobile Bar Service in Chester County",
  description:
    "Professional event bartending with RAMP-certified bartenders across Downingtown, Chester County, and the Main Line. Signature cocktails, elevated mocktails, portable bar setup, and responsible service.",
  path: "/event-bartending",
});

export default function EventBartendingPage() {
  return (
    <ServicePage
      path="/event-bartending"
      serviceName="Event Bartending"
      serviceDescription="RAMP-certified event bartending and mobile bar service with signature cocktails and elevated mocktails across Chester County and the Main Line."
      eyebrow="Event bartending"
      title="Event bartending, cocktails & mocktails"
      lead="RAMP-certified bartenders, signature cocktails, elevated mocktails, and a polished portable bar — wherever your event takes you."
      coverage={{
        eyebrow: "Behind the bar",
        title: "Everything but the alcohol",
        lead: "You provide the bottles; we bring the rest, bar to garnish.",
        items: [
          "RAMP-certified bartenders",
          "Signature cocktail design",
          "Elevated mocktails & zero-proof menus",
          "Wine & bourbon pairing guidance",
          "Portable bar setup & breakdown",
          "Mixers, garnishes & ice",
          "Barware & service tools",
          "Responsible service & compliance",
        ],
      }}
      detail={{
        placeholderLabel: "Bar and mocktail photography coming soon",
        eyebrow: "The Dragonfly bar",
        title: "Cocktails and mocktails with kitchen-level care",
        paragraphs: [
          "Fresh ingredients, balanced builds, drinks designed for your event — a signature cocktail named for the couple, a bourbon flight, or a bright mocktail program.",
          "Every bartender is RAMP-certified and trained in responsible service. Book the bar alone or alongside catering and private chef dinners.",
        ],
        ctaLabel: "Request Bar Service",
      }}
      faqs={[
        {
          question: "Who provides the alcohol?",
          answer:
            "You do — Dragonfly provides bartenders, the portable bar, mixers, garnishes, and service support. We'll help you plan quantities and selections so nothing runs short. If arrangements differ for your event, we'll confirm details in your proposal.",
        },
        {
          question: "What does RAMP-certified mean?",
          answer:
            "RAMP (Responsible Alcohol Management Program) is Pennsylvania's certification for responsible alcohol service. Our bartenders are trained in ID checking, safe service, and compliance.",
        },
        {
          question: "Can you serve non-drinkers something special?",
          answer:
            "Absolutely — elevated mocktails and zero-proof pairings are one of our favorite parts of the bar menu, not an afterthought.",
        },
        {
          question: "Do you bartend events you're not catering?",
          answer:
            "Yes. Bartending can be booked on its own or alongside catering, private chef dinners, or events at our Downingtown space.",
        },
      ]}
      finalCta={{
        title: "Raise the bar at your next event",
        copy: "Tell us about your event, guest count, and the drinks you love — we'll design a bar service proposal to match.",
      }}
    />
  );
}
