"use client";

import { PrimaryButton, SectionReveal } from "./VerdePrimitives";
import { getFullAddress, getMapSearchUrl, site } from "@/lib/site";

type FinalTableCtaProps = {
  title: string;
};

export function FinalTableCta({ title }: FinalTableCtaProps) {
  const address = getFullAddress();
  const mapUrl = getMapSearchUrl();

  return (
    <section data-sticky-cta-exclude className="relative overflow-hidden bg-plum py-24 text-warmwhite sm:py-32 lg:py-44">
      <div className="absolute inset-x-0 top-0 overflow-hidden text-center font-display text-[18vw] leading-none text-warmwhite/[0.025]" aria-hidden>
        Dragonfly
      </div>
      <div className="vv-container relative">
        <SectionReveal className="mx-auto max-w-[980px] text-center">
          <p className="text-[12px] font-semibold uppercase text-gold">Let us feed your moment</p>
          <h2 className="mt-6 font-display text-[64px] leading-[0.84] italic sm:text-[96px] lg:text-[150px]">{title}</h2>
          <p className="mx-auto mt-8 max-w-[500px] text-[15px] leading-[24px] text-warmwhite/68">
            Tell us about the people, the place, and the feeling you want to create. We will build the menu around it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact" location="final-cta" tone="light">
              {site.primaryCta}
            </PrimaryButton>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center border border-warmwhite/45 px-[18px] py-[12px] text-[14px] font-semibold text-warmwhite transition-colors hover:border-gold hover:text-gold"
            >
              {address} <span className="ml-2" aria-hidden>↗</span>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
