"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides, site } from "@/lib/site";
import { PrimaryButton, TrustBadge } from "./verde/VerdePrimitives";

export function HomeHero() {
  const reduce = useReducedMotion();
  const hero = heroSlides[0];

  return (
    <section
      data-sticky-cta-exclude
      className="relative flex min-h-[720px] h-[100svh] max-h-[980px] overflow-hidden bg-charcoal"
    >
      <motion.div
        initial={reduce ? false : { scale: 1.045 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute inset-0"
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,26,28,0.86)_0%,rgba(31,26,28,0.58)_43%,rgba(31,26,28,0.12)_76%),linear-gradient(180deg,rgba(31,26,28,0.42)_0%,transparent_36%,rgba(31,26,28,0.52)_100%)]"
        aria-hidden
      />

      <div className="vv-container relative flex h-full items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full max-w-[1280px]"
        >
          <h1 className="max-w-[1040px] font-display text-[62px] leading-[0.84] font-medium text-warmwhite sm:text-[86px] lg:text-[124px] xl:text-[142px]">
            Chef-Led{" "}
            <span className="block italic text-gold">Catering</span>{" "}
            <span className="mt-5 block font-sans text-[13px] leading-none font-semibold uppercase text-warmwhite/80 not-italic sm:text-[14px] lg:text-[15px]">
              in Chester County, Pennsylvania
            </span>
          </h1>

          <div className="mt-7 grid max-w-[1240px] gap-5 border-t border-warmwhite/25 pt-6 sm:grid-cols-[1fr_auto] sm:grid-rows-[auto_auto] sm:items-end sm:gap-x-16 lg:mt-9 lg:grid-cols-[minmax(0,680px)_auto] lg:justify-between">
            <p className="font-display text-[28px] leading-[1.02] text-warmwhite sm:col-start-1 sm:row-start-1 sm:text-[34px] lg:text-[42px]">
              Custom menus for weddings, private dinners, and memorable gatherings.
            </p>
            <div className="sm:col-start-2 sm:row-start-2 sm:justify-self-end">
              <PrimaryButton href="/contact" location="home-hero" tone="light">
                {site.primaryCta}
              </PrimaryButton>
            </div>
            <div className="sm:col-start-1 sm:row-start-2">
              <TrustBadge tone="light" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
