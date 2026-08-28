import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { blogPosts } from "@/lib/blog";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";

export function BlogArticle({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative flex min-h-[76svh] items-end overflow-hidden bg-plum">
          <Image
            src={post.hero.src}
            alt={post.hero.alt}
            fill
            priority
            sizes="100vw"
            className="hero-media object-cover opacity-70"
            style={{ objectPosition: post.hero.position ?? "center" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-plum via-plum/55 to-plum/15"
            aria-hidden
          />
          <div className="relative vv-container pb-14 pt-40 sm:pb-18 lg:pb-20">
            <div className="hero-copy max-w-[940px]">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[13px] text-warmwhite/70">
                <Link href="/" className="transition-colors hover:text-gold">Home</Link>
                <span aria-hidden>/</span>
                <Link href="/blog" className="transition-colors hover:text-gold">Journal</Link>
                <span aria-hidden>/</span>
                <span aria-current="page" className="text-warmwhite">{post.category}</span>
              </nav>
              <p className="eyebrow text-gold">{post.category}</p>
              <h1 className="mt-4 max-w-[900px] font-display text-[42px] leading-[0.98] text-warmwhite sm:text-[58px] lg:text-[76px]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-[720px] text-[17px] leading-7 text-warmwhite/84 sm:text-[19px] sm:leading-8">
                {post.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-warmwhite/20 pt-5 text-[13px] text-warmwhite/65">
                <span>By Chef Matt Stone</span>
                <time dateTime={post.published}>{post.publishedLabel}</time>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-warmwhite">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[250px_minmax(0,760px)] lg:justify-center lg:gap-20 lg:py-24">
            <aside className="self-start lg:sticky lg:top-[128px]" aria-label="Article navigation">
              <p className="text-[12px] font-semibold uppercase text-sage">In this guide</p>
              <nav className="mt-5 border-t border-plum/15">
                {post.sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group grid grid-cols-[28px_1fr] gap-2 border-b border-plum/15 py-3 text-[13px] leading-5 text-charcoal/68 transition-colors hover:text-royal"
                  >
                    <span className="text-plum/40">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.heading}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-8 border-l-2 border-gold pl-4">
                <p className="text-[12px] font-semibold uppercase text-sage">Explore services</p>
                <div className="mt-3 space-y-2">
                  {post.relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-[13px] font-semibold text-royal transition-colors hover:text-plum"
                    >
                      {service.label} <span aria-hidden>↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <Reveal>
                <section aria-labelledby="quick-answer" className="border-y border-plum/15 py-8 sm:py-10">
                  <p className="text-[12px] font-semibold uppercase text-sage">The short answer</p>
                  <h2 id="quick-answer" className="mt-3 font-display text-[30px] leading-[1.12] text-plum sm:text-[38px]">
                    Start with the whole experience.
                  </h2>
                  <p className="mt-5 text-[18px] leading-8 text-charcoal/78">{post.quickAnswer}</p>
                </section>
              </Reveal>

              <div className="mt-14 sm:mt-18">
                {post.sections.map((section, index) => (
                  <div key={section.id}>
                    <Reveal>
                      <section id={section.id} className="scroll-mt-32 border-b border-plum/12 py-12 first:pt-0 sm:py-16">
                        <p className="text-[12px] font-semibold text-gold">{String(index + 1).padStart(2, "0")}</p>
                        <h2 className="mt-3 font-display text-[34px] leading-[1.08] text-plum sm:text-[44px]">
                          {section.heading}
                        </h2>
                        <div className="mt-6 space-y-5">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-[17px] leading-8 text-charcoal/75">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {section.bullets && (
                          <ul className="mt-7 divide-y divide-plum/12 border-y border-plum/12">
                            {section.bullets.map((bullet, bulletIndex) => (
                              <li key={bullet} className="grid grid-cols-[30px_1fr] gap-3 py-3.5 text-[15px] leading-6 text-charcoal/75">
                                <span className="font-display text-royal">{String(bulletIndex + 1).padStart(2, "0")}</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.callout && (
                          <blockquote className="mt-9 border-l-2 border-gold pl-6 font-display text-[25px] leading-[1.25] text-plum sm:text-[30px]">
                            {section.callout}
                          </blockquote>
                        )}
                      </section>
                    </Reveal>

                    {index === 1 && (
                      <Reveal className="relative my-12 aspect-[4/3] overflow-hidden bg-mist sm:my-16 sm:aspect-[16/10]">
                        <Image
                          src={post.feature.src}
                          alt={post.feature.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 760px"
                          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                          style={{ objectPosition: post.feature.position ?? "center" }}
                        />
                      </Reveal>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="bg-ivory py-20 lg:py-24">
          <div className="mx-auto max-w-[880px] px-5 sm:px-8">
            <Faq items={post.faqs} eyebrow="Good to know" title="Frequently asked questions" />
          </div>
        </section>
      </article>

      <section className="bg-warmwhite py-20 lg:py-24" aria-labelledby="related-reading">
        <div className="vv-container">
          <div className="flex flex-col gap-4 border-b border-plum/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Keep planning</p>
              <h2 id="related-reading" className="mt-3 font-display text-[38px] leading-none text-plum sm:text-[48px]">Related reading</h2>
            </div>
            <Link href="/blog" className="text-[14px] font-semibold text-royal transition-colors hover:text-plum">
              View the full journal <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="divide-y divide-plum/15">
            {relatedPosts.map((related, index) => (
              <Reveal key={related.slug} delay={index * 0.04}>
                <Link href={`/blog/${related.slug}`} className="group grid gap-4 py-7 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-8">
                  <p className="text-[12px] font-semibold uppercase text-sage">{related.category}</p>
                  <h3 className="font-display text-[27px] leading-[1.12] text-plum transition-colors group-hover:text-royal sm:text-[32px]">
                    {related.title}
                  </h3>
                  <span className="text-royal transition-transform group-hover:translate-x-1" aria-hidden>↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Let the room, menu, and moment come together"
        copy="Share your date, guest count, and location. Chef Matt will shape a custom proposal around the gathering you have in mind."
      />
    </>
  );
}
