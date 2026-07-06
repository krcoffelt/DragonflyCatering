"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { UnderlineCta } from "./ArrowCta";

type IntroBandProps = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  leftImage: { src: string; alt: string };
  rightImage: { src: string; alt: string };
};

export function IntroBand({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  leftImage,
  rightImage,
}: IntroBandProps) {
  return (
    <section className="relative overflow-hidden bg-ivory py-[130px]">
      <Reveal className="absolute left-[15px] top-[86px] hidden w-[180px] lg:block" y={32}>
        <div className="relative h-[230px] overflow-hidden rounded-[3px]">
          <Image src={leftImage.src} alt={leftImage.alt} fill sizes="180px" className="object-cover" />
        </div>
      </Reveal>
      <Reveal
        className="absolute right-[15px] bottom-[86px] hidden w-[180px] lg:block"
        y={32}
        delay={0.12}
      >
        <div className="relative h-[230px] overflow-hidden rounded-[3px]">
          <Image src={rightImage.src} alt={rightImage.alt} fill sizes="180px" className="object-cover" />
        </div>
      </Reveal>

      <div className="eden-container flex justify-center">
        <Reveal className="mx-auto w-full max-w-[750px] text-center">
          <p className="eden-eyebrow">{eyebrow}</p>
          <h2 className="eden-h2 mt-5 text-plum">{heading}</h2>
          <p className="mt-6 text-base leading-[22.4px] text-body">{body}</p>
          <div className="mt-10 flex justify-center">
            <UnderlineCta href={ctaHref} iconPosition="after" location="home-intro">
              {ctaLabel}
            </UnderlineCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
