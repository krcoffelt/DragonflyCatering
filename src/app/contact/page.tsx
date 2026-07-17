import type { Metadata } from "next";
import Image from "next/image";
import { ProposalForm } from "@/components/ProposalForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Request a Custom Proposal | Dragonfly Catering, Downingtown PA",
  description:
    "Tell Dragonfly Catering about your event — date, guest count, location, and vision — and Chef Matt will shape a custom proposal for catering, private chef dinners, bartending, or the Downingtown event space.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="overflow-hidden bg-ivory pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="vv-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
            <Reveal>
              <aside className="lg:sticky lg:top-36">
                <h1 className="max-w-[560px] font-display text-[46px] leading-[0.98] text-plum sm:text-[60px] lg:text-[68px]">
                  Tell us about your event.
                </h1>
                <p className="mt-6 max-w-lg text-base leading-7 text-charcoal/65">
                  Share the basics and Chef Matt will follow up.
                </p>

                <div className="relative mt-9 hidden aspect-[4/3] overflow-hidden rounded-[24px] lg:block">
                  <Image
                    src="/assets/dragonfly/photos/private-chef/dragonfly-private-chef-plating-winners-001.webp"
                    alt="Chef Matt plating a meal for a private event"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[24px] border border-plum/10 bg-warmwhite p-5 shadow-[0_24px_70px_rgba(44,22,53,0.09)] sm:p-8 lg:p-10 xl:p-12">
                <ProposalForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
