import Image from "next/image";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image?: { src: string; alt: string; position?: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/**
 * Interior page hero. With an image it renders a full-bleed dark hero;
 * without one it renders a warm editorial text hero.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  cta = { label: "Request a Custom Proposal", href: "/contact" },
  secondaryCta,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-plum">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-70"
          style={{ objectPosition: image.position ?? "center" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-plum via-plum/45 to-plum/20"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-16 pt-40 sm:px-8 lg:pb-20">
          <Reveal>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-warmwhite sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmwhite/85 sm:text-lg">
              {lead}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaButton href={cta.href} variant="gold" location="page-hero">
                {cta.label}
              </CtaButton>
              {secondaryCta && (
                <CtaButton
                  href={secondaryCta.href}
                  variant="light"
                  location="page-hero"
                >
                  {secondaryCta.label}
                </CtaButton>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ivory pb-14 pt-40 sm:pb-16 lg:pt-48">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-plum sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton href={cta.href} location="page-hero">
              {cta.label}
            </CtaButton>
            {secondaryCta && (
              <CtaButton
                href={secondaryCta.href}
                variant="outline"
                location="page-hero"
              >
                {secondaryCta.label}
              </CtaButton>
            )}
          </div>
        </Reveal>
        <div className="hairline mt-14" />
      </div>
    </section>
  );
}
