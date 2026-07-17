import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { assets, alt } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Corporate Catering in Chester County & the Main Line | Dragonfly Catering",
  description:
    "Corporate catering for board dinners, client appreciation, retreats, team celebrations, and nonprofit events across Downingtown, Chester County, and the Main Line.",
  path: "/corporate-catering",
});

export default function CorporateCateringPage() {
  return (
    <ServicePage
      path="/corporate-catering"
      serviceName="Corporate Catering"
      serviceDescription="Polished corporate catering for meetings, board dinners, retreats, and client events across Chester County and the Main Line."
      eyebrow="Corporate catering"
      title="Corporate catering, done personally"
      lead="When the food is right, the host looks good — meetings, board dinners, and team celebrations with service that runs quietly in the background."
      coverage={{
        eyebrow: "Corporate occasions",
        title: "Boardroom to holiday party",
        lead: "One caterer for the whole corporate calendar.",
        items: [
          "Corporate meetings & working lunches",
          "Board & executive dinners",
          "Client appreciation events",
          "Company retreats",
          "Team celebrations & milestones",
          "Employee appreciation days",
          "Nonprofit events & galas",
          "Fundraisers",
          "Holiday parties",
          "Office open houses",
        ],
      }}
      detail={{
        image: {
          src: assets.corporateRoastedVegetables,
          alt: alt.corporateRoastedVegetables,
        },
        eyebrow: "Why teams book Dragonfly",
        title: "Food that makes the host look good",
        paragraphs: [
          "No afterthought trays. The same chef-led, seasonal approach we bring to weddings — composed menus, professional presentation, staff who understand a working room.",
          "On-site at your office, at our Downingtown space, or at venues across the region. Recurring service and dietary needs are part of the conversation.",
        ],
      }}
      faqs={[
        {
          question: "Can you handle recurring office catering?",
          answer:
            "Yes — we work with teams on recurring lunches and standing events as our boutique calendar allows. Tell us your cadence and we'll design a rotation that stays interesting.",
        },
        {
          question: "Do you cater off-site retreats?",
          answer:
            "We do. Dragonfly travels to retreat venues, rented spaces, and private properties across Chester County, the Main Line, and nearby Pennsylvania communities.",
        },
        {
          question: "Can you support nonprofit budgets?",
          answer:
            "Community and nonprofit events are part of Dragonfly's story. Share your event and budget in your proposal request and we'll be straightforward about what we can build together.",
        },
      ]}
      finalCta={{
        title: "Make your next company event the one people talk about",
        copy: "Tell us about your meeting, dinner, or celebration and we'll send a corporate proposal designed around your team, timeline, and budget.",
      }}
    />
  );
}
