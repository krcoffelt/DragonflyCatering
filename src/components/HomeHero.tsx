"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "@/lib/site";
import { PrimaryButton, TrustBadge } from "./verde/VerdePrimitives";

const slides = [...heroSlides];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative h-[100svh] min-h-[680px] max-h-[900px] overflow-hidden bg-ivory">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: index === i ? 1 : 0 }}
          aria-hidden={index !== i}
        >
          <Image
            src={slide.src}
            alt={i === 0 ? slide.alt : ""}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-charcoal/25 to-transparent" aria-hidden />

      <div className="vv-container relative flex h-full flex-col justify-end pb-16 pt-[140px] sm:pb-[90px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-[525px]"
        >
          <h1 className="vv-h1 text-warmwhite">
            Chef-led catering for meaningful gatherings
          </h1>
          <p className="mt-6 max-w-[480px] text-[15px] leading-[22.5px] text-warmwhite/85">
            At Dragonfly, every menu reflects seasonal craft and every event is
            designed with intention — weddings, private dinners, and celebrations
            across Chester County.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryButton href="/contact" location="home-hero" tone="outline-light">
              Request a Proposal
            </PrimaryButton>
            <TrustBadge tone="light" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
