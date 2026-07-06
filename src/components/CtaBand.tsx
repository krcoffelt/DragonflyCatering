"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryCta } from "./ArrowCta";

type CtaBandProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  leftImage: { src: string; alt: string };
  rightImage: { src: string; alt: string };
};

export function CtaBand({
  heading,
  body,
  ctaLabel,
  ctaHref,
  leftImage,
  rightImage,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-ivory px-[15px] pb-[130px] pt-[270px]">
      <div className="pointer-events-none absolute left-[15px] top-[86px] hidden w-[180px] lg:block">
        <div className="relative h-[230px] overflow-hidden rounded-[3px]">
          <Image src={leftImage.src} alt={leftImage.alt} fill sizes="180px" className="object-cover" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-[15px] bottom-[130px] hidden w-[180px] lg:block">
        <div className="relative h-[230px] overflow-hidden rounded-[3px]">
          <Image src={rightImage.src} alt={rightImage.alt} fill sizes="180px" className="object-cover" />
        </div>
      </div>

      <div className="eden-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[800px] flex-col items-center gap-[60px] text-center"
        >
          <h2 className="font-display text-[48px] font-medium leading-[52.8px] text-plum">
            {heading}
          </h2>
          <div className="flex flex-col items-center gap-9">
            <p className="max-w-[640px] text-base leading-[22.4px] text-body">{body}</p>
            <PrimaryCta href={ctaHref} tone="section" location="home-cta-band">
              {ctaLabel}
            </PrimaryCta>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
