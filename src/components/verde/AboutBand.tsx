"use client";

import Image from "next/image";
import { chefAccolades } from "@/lib/site";
import { PrimaryButton, SectionReveal } from "./VerdePrimitives";

type AboutBandProps = {
  image: { src: string; alt: string };
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function AboutBand({ image, title, body, ctaLabel, ctaHref }: AboutBandProps) {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-36">
      <div className="vv-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <SectionReveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[5/6]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-7 right-0 hidden w-[58%] bg-gold p-6 text-plum sm:block">
            <p className="text-[11px] font-semibold uppercase">Chef &amp; founder</p>
            <p className="mt-2 font-display text-2xl leading-none">Matt Stone</p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="max-w-[650px]">
          <p className="text-[12px] font-semibold uppercase text-royal">Behind the menu</p>
          <h2 className="mt-5 font-display text-[48px] leading-[0.94] font-medium text-plum sm:text-[64px] lg:text-[86px]">
            {title}
          </h2>
          <p className="mt-7 max-w-[590px] text-[16px] leading-[27px] text-body sm:text-[17px]">
            {body}
          </p>

          <dl className="mt-10 grid border-y border-plum/15 sm:grid-cols-3 sm:divide-x sm:divide-plum/15">
            {chefAccolades.map((accolade) => (
              <div
                key={accolade.lead}
                className="border-b border-plum/15 py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="font-display text-[25px] leading-none text-plum sm:text-[22px] lg:text-[25px]">
                  {accolade.lead}
                </dt>
                <dd className="mt-2 text-[11px] font-semibold uppercase leading-[1.35] text-body">
                  {accolade.detail}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9">
            <PrimaryButton href={ctaHref} location="about-band" tone="dark">
              {ctaLabel}
            </PrimaryButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
