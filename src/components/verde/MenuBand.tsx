"use client";

import { PrimaryButton, SectionReveal } from "./VerdePrimitives";

export type MenuItem = {
  name: string;
  detail: string;
};

type MenuBandProps = {
  title: string;
  lead: string;
  category: string;
  items: MenuItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function MenuBand({
  title,
  lead,
  category,
  items,
  ctaLabel,
  ctaHref,
}: MenuBandProps) {
  return (
    <section className="bg-plum py-20 text-warmwhite sm:py-24 lg:py-32">
      <div className="vv-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionReveal className="lg:sticky lg:top-36 lg:self-start">
          <p className="text-[12px] font-semibold uppercase text-gold">{category}</p>
          <h2 className="mt-5 max-w-[520px] font-display text-[52px] leading-[0.9] sm:text-[72px] lg:text-[96px]">
            {title}
          </h2>
          <p className="mt-7 max-w-[430px] text-[15px] leading-[25px] text-warmwhite/68">
            {lead}
          </p>
          <div className="mt-9">
            <PrimaryButton href={ctaHref} location="menu-band" tone="light">
              {ctaLabel}
            </PrimaryButton>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ol className="border-t border-warmwhite/18">
            {items.map((item, index) => (
              <li
                key={item.name}
                className="group grid gap-4 border-b border-warmwhite/18 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-baseline sm:gap-6 sm:py-9"
              >
                <span className="font-display text-lg text-gold">0{index + 1}</span>
                <h3 className="font-display text-[26px] leading-none transition-colors group-hover:text-gold sm:text-[32px] lg:text-[38px]">
                  {item.name}
                </h3>
                <p className="text-[14px] leading-[22px] text-warmwhite/65">{item.detail}</p>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </div>
    </section>
  );
}
