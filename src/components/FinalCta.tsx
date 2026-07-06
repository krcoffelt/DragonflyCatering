import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

type FinalCtaProps = {
  title?: string;
  copy?: string;
  ctaLabel?: string;
};

export function FinalCta({
  title = "Let's create something special",
  copy = "Tell us about your event — Chef Matt will shape a custom proposal around it.",
  ctaLabel = "Request a Custom Proposal",
}: FinalCtaProps) {
  return (
    <section className="bg-plum">
      <div className="mx-auto max-w-[1280px] px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Food Is Love.</p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.12] text-warmwhite sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-warmwhite/75 sm:text-lg">
            {copy}
          </p>
          <div className="mt-10">
            <CtaButton href="/contact" variant="gold" location="final-cta">
              {ctaLabel}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
