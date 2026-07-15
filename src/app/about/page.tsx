import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialSplit } from "@/components/EditorialSplit";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { assets, alt, chefAccolades } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Chef Matt | Dragonfly Catering, Downingtown PA",
  description:
    "Meet Chef Matthew Stone, Executive Chef of Top Chef Quickfire Philadelphia, Johnson & Wales-trained, and founder of Dragonfly Catering in Downingtown, PA.",
  path: "/about",
});

const milestones = [
  {
    label: "The training",
    copy: "Executive Chef of Top Chef Quickfire Philadelphia and Johnson & Wales University graduate in Culinary Arts and Food Service Management.",
  },
  {
    label: "The kitchens",
    copy: "Over two decades in professional kitchens, with leadership roles in fine dining, upscale casual, and concept-driven restaurants including The Capital Grille and True Food Kitchen.",
  },
  {
    label: "The leap",
    copy: "In 2020, Chef Matt and Rhiannon founded Dragonfly Catering — built on the belief that food is comfort, connection, and craft.",
  },
  {
    label: "Today",
    copy: "Dragonfly Catering in Downingtown serves weddings, private dinners, corporate events, and the Chester County community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Chef Matt", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Dragonfly"
        title="Food is comfort, connection & craft"
        lead="What happens when a career fine-dining chef decides the best table in town should be yours."
        image={{
          src: assets.chefMattQuickfireHeadshot,
          alt: alt.chefMattQuickfireHeadshot,
          position: "35% top",
        }}
        cta={{ label: "Request a Custom Proposal", href: "/contact" }}
        secondaryCta={{ label: "View the Gallery", href: "/gallery" }}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <EditorialSplit
            image={{ src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard }}
            imageAspect="aspect-[4/5]"
          >
            <Reveal>
              <p className="eyebrow mb-3">Chef Matthew Stone</p>
              <h2 className="font-display text-3xl leading-[1.1] text-plum sm:text-4xl">
                Two decades in serious kitchens
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {chefAccolades.map((accolade) => (
                  <span
                    key={accolade.lead}
                    className="rounded-full border border-gold/40 bg-warmwhite px-3 py-1.5 text-xs font-semibold tracking-wide text-plum"
                  >
                    {accolade.lead} {accolade.detail.toLowerCase()}
                  </span>
                ))}
              </div>
              <div className="mt-6 max-w-md space-y-4 text-[15px] leading-relaxed text-charcoal/75 sm:text-base">
                <p>
                  Chef Matt served as Executive Chef of Top Chef Quickfire
                  Philadelphia and trained at Johnson &amp; Wales. He then spent
                  twenty years leading fine-dining and concept-driven kitchens,
                  including The Capital Grille and True Food Kitchen.
                </p>
                <p>
                  In 2020, he and Rhiannon founded Dragonfly on a simple idea:
                  the care of a great restaurant kitchen belongs at personal
                  gatherings too. Food is love.
                </p>
              </div>
            </Reveal>
          </EditorialSplit>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="The story"
            title={
              <>
                From restaurant kitchens
                <br />
                to your table
              </>
            }
            align="center"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.label} delay={0.07 * i}>
                <div className="border-t-2 border-gold/50 pt-5">
                  <p className="text-xs font-semibold uppercase text-[#65704f]">
                    {m.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                    {m.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Rooted here"
            title="A Chester County company, on purpose"
            lead="Cooking for local families, businesses, nonprofits, first responders, and healthcare workers."
            align="center"
          />
          <Reveal className="mt-9 flex flex-wrap justify-center gap-4">
            <CtaButton href="/community" variant="outline" location="about-community">
              Our Community Work
            </CtaButton>
            <CtaButton href="/contact" location="about-cta">
              Contact Chef Matt
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Cook with us"
        copy="Whether it's a private dinner for two or a celebration for fifty, Chef Matt would love to hear what you're planning."
      />
    </>
  );
}
