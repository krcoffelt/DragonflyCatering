"use client";

import Image from "next/image";
import { PrimaryButton, SectionReveal } from "./VerdePrimitives";

type SpiritBandProps = {
  image: { src: string; alt: string };
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Verde home-video-bg: full-bleed image band with bottom-left overlay copy. */
export function SpiritBand({ image, title, body, ctaLabel, ctaHref }: SpiritBandProps) {
  return (
    <section className="relative h-[900px] overflow-hidden bg-ivory">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/30" aria-hidden />

      <div className="vv-container relative flex h-full items-end pb-[90px]">
        <SectionReveal className="max-w-[420px]">
          <h2 className="vv-h2 text-warmwhite">{title}</h2>
          <p className="mt-5 text-[15px] leading-[22.5px] text-warmwhite/85">{body}</p>
          <div className="mt-8">
            <PrimaryButton href={ctaHref} location="spirit-band" tone="outline-light">
              {ctaLabel}
            </PrimaryButton>
          </div>
        </SectionReveal>

        <button
          type="button"
          aria-label="Pause background"
          className="absolute bottom-[90px] right-[22.5px] flex h-12 w-12 items-center justify-center rounded-full border border-warmwhite/40 text-warmwhite backdrop-blur-sm transition-colors hover:bg-warmwhite/10"
        >
          <span className="flex gap-1" aria-hidden>
            <span className="h-4 w-[3px] rounded-full bg-current" />
            <span className="h-4 w-[3px] rounded-full bg-current" />
          </span>
        </button>
      </div>
    </section>
  );
}
