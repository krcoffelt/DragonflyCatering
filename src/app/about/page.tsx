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
    "Meet Chef Matthew Stone and follow his path from The Capital Grille, True Food Kitchen, and Top Chef Quickfire Philadelphia to Dragonfly Catering.",
  path: "/about",
});

const milestones = [
  {
    label: "The restaurant years",
    copy: "Classically trained, with experience spanning private clubs, formal steakhouses, and modern clean-eating kitchens.",
  },
  {
    label: "The kitchens",
    copy: "Leadership roles at The Capital Grille and True Food Kitchen, followed by Top Chef Quickfire Philadelphia—his final restaurant role before 2020.",
  },
  {
    label: "The leap",
    copy: "Dragonfly Catering was founded in 2020 on the belief that food is comfort, connection, and craft.",
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
            image={{ src: assets.julyChefSaladPlatter, alt: alt.julyChefSaladPlatter }}
            imageAspect="aspect-[4/5]"
          >
            <Reveal>
              <p className="eyebrow mb-3">Chef Matthew Stone</p>
              <h2 className="font-display text-3xl leading-[1.1] text-plum sm:text-4xl">
                A restaurant career, brought to your table
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
                  Chef Matt is classically trained, with more than twenty years
                  working across private clubs, formal steakhouses, and modern
                  clean-eating cuisine. His career includes The Capital Grille
                  and True Food Kitchen. His final restaurant role before 2020
                  was Executive Chef of Top Chef Quickfire Philadelphia.
                </p>
                <p className="text-sm">
                  <a
                    href="https://www.inquirer.com/food/michael-klein/top-chef-quickfire-philadelphia-restaurants-wings-20200122.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-royal underline decoration-gold/60 underline-offset-4 transition-colors hover:text-plum"
                  >
                    Philadelphia Inquirer coverage of Top Chef Quickfire ↗
                  </a>
                </p>
                <p>
                  In 2020, Dragonfly was founded on a simple idea: the care of a
                  great restaurant kitchen belongs at personal gatherings too.
                  Food is love.
                </p>
              </div>
              <details className="group mt-7 max-w-xl border-t border-plum/15 pt-5">
                <summary className="w-fit cursor-pointer list-none text-[12px] font-semibold uppercase tracking-[0.14em] text-royal underline decoration-gold/60 underline-offset-4 transition-colors hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">Read more about Chef Matt</span>
                  <span className="hidden group-open:inline">Show less</span>
                </summary>
                <div className="mt-6 space-y-5 border-l-2 border-gold/50 pl-5 text-[15px] leading-[1.75] text-charcoal/75 sm:text-base">
                  <h3 className="font-display text-2xl leading-tight text-plum">
                    About Our Founder and Executive Chef
                  </h3>
                  <p>
                    Chef Matthew Stone is a classically trained culinary
                    professional whose career spans private clubs, formal
                    steakhouses, and modern clean-eating cuisine. He led
                    high-volume and concept-driven kitchens in Boston, Atlanta,
                    and Philadelphia, including The Capital Grille and True Food
                    Kitchen. His final restaurant role before Dragonfly was
                    Executive Chef of Top Chef Quickfire Philadelphia, where he
                    helped shape the branded dining experience from concept
                    through execution.
                  </p>
                  <p>
                    In 2020, amid the uncertainty of the pandemic, Dragonfly
                    Catering began serving the community through comfort,
                    connection, and culinary craft. Home-delivered meals grew
                    into full-service catering, private chef experiences,
                    artisan pop-ups, and curated events. Dragonfly evolved from
                    a home kitchen into a shared collaborative space at Artisan
                    Exchange before establishing its current home in
                    Downingtown.
                  </p>
                  <p>
                    Today, Chef Matt leads Dragonfly&apos;s Downingtown catering
                    and event-space operation. From elegant plated dinners and
                    immersive tastings to bourbon pairings and interactive
                    cooking classes, his approach remains rooted in integrity,
                    flavor, sustainability, and community. The goal is always
                    larger than the meal: to create thoughtful moments and make
                    food feel like love made visible.
                  </p>
                </div>
              </details>
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
                Matt&apos;s restaurant career led directly to Dragonfly. After his
                final restaurant role at Top Chef Quickfire Philadelphia,
                Dragonfly Catering was founded in Chester County in 2020.
              </p>
              <p>
                What began with meals for local families grew through the
                relationships built along the way. Weddings, private
                dinners, corporate events, and community work followed—not from
                a fixed package, but from listening to what each gathering
                needed.
              </p>
              <p>
                Today, Dragonfly pairs chef-led catering and bartending with an
                intimate event space in Downingtown. The team still approaches
                every event the same way: make the food personal, take care of
                the details, and give the host time to be present.
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
