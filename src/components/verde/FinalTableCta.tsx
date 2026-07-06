"use client";

import Image from "next/image";
import { PrimaryButton, SectionReveal } from "./VerdePrimitives";
import { getFullAddress, getMapSearchUrl } from "@/lib/site";

type FinalTableCtaProps = {
  title: string;
  image: { src: string; alt: string };
};

/** Verde "Your Table Awaits" — full-bleed closing CTA with address. */
export function FinalTableCta({ title, image }: FinalTableCtaProps) {
  const address = getFullAddress();
  const mapUrl = getMapSearchUrl();

  return (
    <section className="relative h-[min(990px,100svh)] overflow-hidden bg-ivory">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/40" aria-hidden />

      <div className="vv-container relative flex h-full flex-col items-center justify-center text-center">
        <SectionReveal className="max-w-[500px]">
          <h2 className="vv-h2 italic text-warmwhite">{title}</h2>
          <p className="mt-6 text-[15px] leading-[24px] text-warmwhite/85">{address}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact" location="final-cta" tone="outline-light">
              Request a Proposal
            </PrimaryButton>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-warmwhite bg-warmwhite px-[15px] py-[11px] text-[15px] font-medium text-plum shadow-sm transition-colors hover:border-gold hover:bg-gold"
            >
              View on map
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
