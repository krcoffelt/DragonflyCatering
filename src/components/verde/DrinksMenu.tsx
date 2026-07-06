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
  tagline?: string;
};

/** Verde Art of Drinks — mirrored menu band layout. */
export function DrinksMenu({
  title,
  lead,
  category,
  items,
  image,
  ctaLabel,
  ctaHref,
  tagline,
}: DrinksMenuProps) {
  return (
    <section className="bg-ivory py-[60px] lg:py-[90px]">
      <div className="vv-container">
        <div className="grid items-start gap-12 lg:grid-cols-[675px_1fr] lg:gap-16">
          <SectionReveal className="relative order-2 mx-auto h-[min(871px,65vh)] w-full max-w-[675px] lg:order-1 lg:mx-0">
            <Image src={image.src} alt={image.alt} fill sizes="675px" className="object-cover" />
            {tagline && (
              <p className="absolute -bottom-10 left-0 right-0 text-center text-sm italic text-body lg:text-left">
                {tagline}
              </p>
            )}
          </SectionReveal>

          <SectionReveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="vv-h2 text-plum">{title}</h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[24px] text-body">{lead}</p>

            <div className="mt-12">
              <h3 className="font-display text-[31.5px] leading-[1.2] text-plum">{category}</h3>
              <ul className="mt-8 divide-y divide-plum/10">
                {items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1 py-5 first:pt-0">
                    <span className="font-display text-lg text-plum">{item.name}</span>
                    <p className="text-sm leading-relaxed text-body">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
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
