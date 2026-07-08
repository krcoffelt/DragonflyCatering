"use client";

import Image from "next/image";
import { SectionReveal } from "./VerdePrimitives";

type DrinksHeroProps = {
  image: { src: string; alt: string };
  title: string;
};

/** Verde drinks full-bleed band with centered overlay headline. */
export function DrinksHero({ image, title }: DrinksHeroProps) {
  return (
    <section className="relative h-[78svh] min-h-[560px] overflow-hidden bg-ivory lg:h-[900px]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/35" aria-hidden />

      <div className="vv-container relative flex h-full items-center justify-center">
        <SectionReveal>
          <h2 className="vv-h2 max-w-[400px] text-center text-warmwhite">{title}</h2>
        </SectionReveal>
      </div>
    </section>
  );
}
