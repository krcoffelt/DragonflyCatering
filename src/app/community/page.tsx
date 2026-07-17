import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Community & Nonprofit Events | Dragonfly Catering, Chester County",
  description:
    "Dragonfly Catering supports Chester County nonprofits, first responders, healthcare workers, and community programs with fundraiser catering and community event support.",
  path: "/community",
});

const commitments = [
  {
    title: "Nonprofits & fundraisers",
    copy: "Events that raise more than money — they build community.",
  },
  {
    title: "First responders & healthcare",
    copy: "Cooking for the crews and staff who keep Chester County running.",
  },
  {
    title: "Community gatherings",
    copy: "Food has a way of turning a crowd into a community.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ])}
      />

      <PageHero
        eyebrow="Community"
        title="Cooking for the people who show up"
        lead="Supporting local nonprofits, first responders, and healthcare workers is part of how we run the company — not a side project."
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={0.07 * i}>
                <div className="h-full border-t-2 border-sage/60 pt-6">
                  <h2 className="font-display text-xl text-plum sm:text-2xl">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                    {c.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Working together"
            title="Planning a community event?"
            lead="Tell us about your organization and budget — we'll be straightforward, and generous where we can be."
            align="center"
          />
          {/* NEEDS CONFIRMATION — do not add specific discount/special pricing
              language for nonprofits, first responders, or healthcare workers
              until the client approves the exact wording. */}
          <Reveal className="mt-9">
            <CtaButton href="/contact" location="community-cta">
              Start the Conversation
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Let's feed something bigger than an event"
        copy="Fundraisers, appreciation dinners, and community gatherings — tell us what you're organizing and we'll help make it memorable."
      />
    </>
  );
}
