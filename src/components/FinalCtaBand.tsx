"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PrimaryCta } from "./ArrowCta";

type FinalCtaBandProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: { src: string; alt: string };
};

export function FinalCtaBand({
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
}: FinalCtaBandProps) {
  return (
    <section className="relative mt-20 overflow-hidden pb-[500px]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/25" aria-hidden />

      <div className="eden-container relative pt-[100px]">
        <Reveal>
          <div className="mx-auto flex max-w-[800px] flex-col items-center gap-[60px] bg-warmwhite px-10 py-14 text-center sm:px-16 sm:py-16">
            <h2 className="font-display text-[48px] font-medium uppercase leading-[52.8px] text-plum">
              {heading}
            </h2>
            <div className="flex flex-col items-center gap-9">
              <p className="max-w-[640px] text-base leading-[22.4px] text-body">{body}</p>
              <PrimaryCta href={ctaHref} tone="section" location="home-final-cta">
                {ctaLabel}
              </PrimaryCta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
