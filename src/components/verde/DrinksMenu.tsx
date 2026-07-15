"use client";

import Image from "next/image";
import { PrimaryButton, SectionReveal } from "./VerdePrimitives";
import type { MenuItem } from "./MenuBand";

type DrinksMenuProps = {
  title: string;
  lead: string;
  category: string;
  items: MenuItem[];
  image: { src: string; alt: string };
  ctaLabel: string;
  ctaHref: string;
};

export function DrinksMenu({
  title,
  lead,
  category,
  items,
  image,
  ctaLabel,
  ctaHref,
}: DrinksMenuProps) {
  return (
    <section className="bg-ivory">
      <div className="grid lg:min-h-[820px] lg:grid-cols-[1.08fr_0.92fr]">
        <SectionReveal className="relative min-h-[520px] lg:min-h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 to-transparent" aria-hidden />
          <p className="absolute bottom-7 left-6 text-[11px] font-semibold uppercase text-warmwhite sm:left-9">
            The same care, beyond the plate
          </p>
        </SectionReveal>

        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16 lg:py-24">
          <SectionReveal delay={0.08} className="w-full max-w-[540px]">
            <p className="text-[12px] font-semibold uppercase text-royal">{category}</p>
            <h2 className="mt-5 font-display text-[48px] leading-[0.92] text-plum sm:text-[64px] lg:text-[80px]">
              {title}
            </h2>
            <p className="mt-6 max-w-[470px] text-[15px] leading-[25px] text-body">{lead}</p>

            <ul className="mt-10 border-t border-plum/15">
              {items.map((item, index) => (
                <li key={item.name} className="border-b border-plum/15 py-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-gold">0{index + 1}</span>
                    <h3 className="font-display text-xl text-plum">{item.name}</h3>
                  </div>
                  <p className="mt-2 pl-9 text-[13px] leading-[20px] text-body">{item.detail}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <PrimaryButton href={ctaHref} location="drinks-menu" tone="dark">
                {ctaLabel}
              </PrimaryButton>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
