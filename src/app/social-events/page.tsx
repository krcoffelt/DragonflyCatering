import type { Metadata } from "next";
import { ReviewPullQuote } from "@/components/ReviewPullQuote";
import { ServicePage } from "@/components/ServicePage";
import { getClientReview } from "@/lib/reviews";
import { buildMetadata } from "@/lib/seo";
import { assets, alt } from "@/lib/site";

const socialEventsReview = getClientReview("valerie-dixon");

export const metadata: Metadata = buildMetadata({
  title:
    "Social Event Catering | Dragonfly Catering",
  description:
    "Catering for birthdays, anniversaries, celebrations of life, engagement parties, holiday events, and family gatherings across Chester County.",
  path: "/social-events",
});

export default function SocialEventsPage() {
  return (
    <ServicePage
      path="/social-events"
      serviceName="Social Event Catering"
      serviceDescription="Catering for birthdays, anniversaries, celebrations of life, holiday events, and family gatherings across Chester County."
      eyebrow="Social events"
      title="Celebrations & milestone moments"
      lead="The best parties feel effortless — because someone else is in the kitchen."
      heroImage={{
        src: assets.julyGrazingTableEvent,
        alt: alt.julyGrazingTableEvent,
      }}
      coverage={{
        eyebrow: "Life's occasions",
        title: "Whatever you're celebrating",
        items: [
          "Birthday celebrations",
          "Anniversaries",
          "Engagement parties",
          "Celebrations of life",
          "Family reunions & gatherings",
          "Holiday events & parties",
          "Graduation parties",
          "Housewarmings & private parties",
          "Community gatherings",
        ],
      }}
      detail={{
        image: {
          src: assets.julyPrivateDinnerGuests,
          alt: alt.julyPrivateDinnerGuests,
        },
        eyebrow: "Hosting, made easy",
        title: "Be a guest at your own party",
        paragraphs: [
          "Hosting shouldn't mean missing your own celebration. We design a menu and service style that keeps you in the room where it's happening.",
          "At your home, a rented venue, or our intimate Downingtown space for parties up to 50 guests.",
        ],
      }}
      faqs={[
        {
          question: "Do you cater small home gatherings?",
          answer:
            "Yes — home gatherings are some of our favorite events. We scale from intimate dinners to full backyard parties, with drop-off, buffet, or fully staffed service.",
        },
        {
          question: "Can you handle a celebration of life on short notice?",
          answer:
            "We understand these events often come together quickly. Reach out and we'll do everything we can to accommodate your timeline with care.",
        },
        {
          question: "Do you provide bar service for parties?",
          answer:
            "Our bartending team can join any social event with signature cocktails, mocktails, and full bar setup. You provide the alcohol; we take care of the rest.",
        },
      ]}
      finalCta={{
        title: "Let's plan the party you actually get to enjoy",
        copy: "Tell us the occasion, the guest list, and the vibe — we'll bring a menu that fits it perfectly.",
      }}
    >
      <ReviewPullQuote
        review={socialEventsReview}
        quote="Cheff Matt and Rhiannon are amazing people. AND they make amazing food. For your family meal … or for a larger dinner crowd or special event … look no where else."
        placement="social-events-review"
      />
    </ServicePage>
  );
}
