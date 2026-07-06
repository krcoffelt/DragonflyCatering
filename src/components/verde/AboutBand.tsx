"use client";

import Image from "next/image";
import { PrimaryButton, SectionReveal } from "./VerdePrimitives";

type AboutBandProps = {
  image: { src: string; alt: string };
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Verde home-about: full-height atmospheric image + editorial copy block. */
export function AboutBand({ image, title, body, ctaLabel, ctaHref }: AboutBandProps) {
  return (
    <section className="bg-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[900px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-[60px] lg:py-[120px]">
          <SectionReveal className="max-w-[398px]">
            <h2 className="vv-h2 text-plum">{title}</h2>
            <p className="mt-6 text-[15px] leading-[24px] text-body">{body}</p>
            <div className="mt-10">
              <PrimaryButton href={ctaHref} location="about-band" tone="dark">
                {ctaLabel}
              </PrimaryButton>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
