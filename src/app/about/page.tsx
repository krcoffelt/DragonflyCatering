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
  title: "Our Story | Dragonfly Catering, Downingtown PA",
  description:
    "Meet Chef Matthew Stone, Executive Chef of Top Chef Quickfire Philadelphia, and learn how Matt and Rhiannon founded Dragonfly Catering in Downingtown, PA.",
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
          { name: "Our Story", path: "/about" },
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

      <section className="bg-plum py-20 text-warmwhite lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-gold">How Dragonfly began</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              A restaurant standard, made personal.
            </h2>
            <p className="mt-8 border-l-2 border-gold pl-5 font-display text-2xl text-warmwhite/90 sm:text-3xl">
              Food is love.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="border-t border-warmwhite/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
            <div className="max-w-2xl space-y-6 text-[15px] leading-[1.8] text-warmwhite/78 sm:text-base">
              <p>
                After more than twenty years in professional kitchens, Matt
                wanted to bring the same discipline, timing, and care to
                gatherings that felt more personal than restaurant service. In
                2020, he and Rhiannon founded Dragonfly Catering in Chester
                County.
              </p>
              <p>
                They built the company around conversation. Every menu starts
                with the people at the table, the place they are gathering, and
                the season. That approach carries through weddings and showers,
                private chef dinners, corporate events, and community work.
              </p>
              <p>
                Today, Dragonfly pairs chef-led catering and bartending with an
                intimate event space in Downingtown. The setting may change,
                but the standard does not: thoughtful food, attentive service,
                and hospitality that lets the host be present.
              </p>
            </div>
          </Reveal>
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
