import type { Metadata } from "next";
import Link from "next/link";
import { ProposalForm } from "@/components/ProposalForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Request a Custom Proposal | Dragonfly Catering, Downingtown PA",
  description:
    "Tell Dragonfly Catering about your event — date, guest count, location, and vision — and Chef Matt will shape a custom proposal for catering, private chef dinners, bartending, or the Downingtown event space.",
  path: "/contact",
});

const quickLinks = [
  { label: "Sample Menus", href: "/sample-menus", note: "See where menus can begin" },
  { label: "Gallery", href: "/gallery", note: "Real food from real events" },
  { label: "Event Space", href: "/dragonfly-event-space", note: "Our Downingtown home" },
  { label: "Preferred Venues", href: "/preferred-venues", note: "Places we love to cater" },
  { label: "Gift Cards", href: "/gift-cards", note: "Available by email" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="bg-ivory pb-20 pt-40 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow mb-4">Request a custom proposal</p>
                <h1 className="font-display text-4xl leading-[1.08] text-plum sm:text-5xl">
                  Tell us about your event
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 sm:text-lg">
                  Share your date, guest count, and vision — Chef Matt
                  personally reviews every inquiry.
                </p>

                <div className="mt-10 space-y-4 rounded-2xl bg-warmwhite p-7 shadow-[0_1px_3px_rgba(44,22,53,0.07)]">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Reach us directly
                  </p>
                  <p className="text-sm leading-relaxed text-charcoal/75">
                    <span className="font-semibold text-plum">Email</span>
                    <br />
                    <a
                      href={`mailto:${site.email}`}
                      className="text-royal hover:underline"
                    >
                      {site.email}
                    </a>
                  </p>
                  {/* Phone hidden until the correct public number is confirmed
                      (old site lists 484-228-1993; email signature lists
                      484-947-3296). Set site.phone in src/lib/site.ts. */}
                  {site.phoneDisplay && site.phone && (
                    <p className="text-sm leading-relaxed text-charcoal/75">
                      <span className="font-semibold text-plum">Phone</span>
                      <br />
                      <a href={`tel:${site.phone}`} className="text-royal hover:underline">
                        {site.phoneDisplay}
                      </a>
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-charcoal/75">
                    <span className="font-semibold text-plum">
                      {site.fullName}
                    </span>
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group rounded-xl border border-mist bg-warmwhite p-4 transition-colors hover:border-gold"
                    >
                      <span className="block text-sm font-semibold text-plum transition-colors group-hover:text-royal">
                        {link.label} →
                      </span>
                      <span className="mt-1 block text-xs text-charcoal/55">
                        {link.note}
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-warmwhite p-7 shadow-[0_2px_16px_rgba(44,22,53,0.08)] sm:p-10">
                <ProposalForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
