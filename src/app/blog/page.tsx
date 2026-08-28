import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Catering Planning Journal | Dragonfly Catering",
  description:
    "Local guides to catering costs, corporate events, private chef dinners, party planning, and small event venues in Chester County and the Main Line.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...remaining] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="The Dragonfly journal"
        title="Good gatherings begin before the table is set"
        lead="Practical, local guidance for planning menus, rooms, service, and memorable events across Chester County and the Main Line."
        image={{
          src: "/assets/dragonfly/photos/july-2026/dragonfly-passed-appetizer-spoons.webp",
          alt: "Passed appetizers prepared by Dragonfly Catering",
          position: "center 48%",
        }}
        cta={{ label: "Read the latest guide", href: `#${featured.slug}` }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <section id={featured.slug} className="scroll-mt-24 bg-warmwhite py-20 lg:py-28">
        <div className="vv-container grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-[5/4]">
            <Image
              src={featured.hero.src}
              alt={featured.hero.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              style={{ objectPosition: featured.hero.position ?? "center" }}
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="eyebrow">Featured guide · {featured.category}</p>
            <h2 className="mt-4 font-display text-[42px] leading-[1.02] text-plum sm:text-[54px] lg:text-[62px]">
              {featured.title}
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-charcoal/72">{featured.description}</p>
            <div className="mt-6 flex gap-4 text-[12px] text-charcoal/50">
              <time dateTime={featured.published}>{featured.publishedLabel}</time>
              <span>{featured.readingTime}</span>
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-8 inline-flex min-h-12 items-center bg-plum px-5 py-3 text-[14px] font-semibold text-warmwhite transition-colors hover:bg-royal"
            >
              Read the guide <span className="ml-2" aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28" aria-labelledby="all-guides">
        <div className="vv-container">
          <Reveal>
            <p className="eyebrow">Plan with confidence</p>
            <h2 id="all-guides" className="mt-4 max-w-[760px] font-display text-[42px] leading-[1.02] text-plum sm:text-[56px]">
              Local answers for the decisions that shape an event
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-plum/15 border-y border-plum/15">
            {remaining.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <article className="grid gap-7 py-9 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-10 lg:py-12">
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[3/2] overflow-hidden bg-mist">
                    <Image
                      src={post.hero.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      style={{ objectPosition: post.hero.position ?? "center" }}
                    />
                  </Link>
                  <div>
                    <p className="text-[12px] font-semibold uppercase text-sage">{post.category}</p>
                    <h3 className="mt-3 font-display text-[31px] leading-[1.08] text-plum sm:text-[38px]">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-royal">{post.title}</Link>
                    </h3>
                    <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-charcoal/68">{post.description}</p>
                    <p className="mt-4 text-[12px] text-charcoal/45">{post.readingTime}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="flex h-12 w-12 items-center justify-center border border-plum/20 text-royal transition-colors hover:border-royal hover:bg-royal hover:text-warmwhite"
                  >
                    <span aria-hidden>↗</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Have a gathering in mind?"
        copy="Tell us the date, place, and people. Chef Matt will turn those details into a thoughtful menu and service plan."
      />
    </>
  );
}
