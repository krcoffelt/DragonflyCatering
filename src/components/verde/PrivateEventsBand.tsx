"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "./VerdePrimitives";

export type EventCard = {
  title: string;
  copy: string;
  href: string;
  image: { src: string; alt: string };
};

type PrivateEventsBandProps = {
  title: string;
  lead: string;
  backgrounds: { src: string; alt: string }[];
  cards: EventCard[];
};

/** Verde private events — sticky headline + cycling full-bleed backgrounds + event cards. */
export function PrivateEventsBand({
  title,
  lead,
  backgrounds,
  cards,
}: PrivateEventsBandProps) {
  const [activeBg, setActiveBg] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative bg-ivory">
      {/* Sticky intro */}
      <div className="vv-container py-[90px] lg:py-[120px]">
        <SectionReveal className="max-w-[420px]">
          <h2 className="vv-h2 text-plum">{title}</h2>
          <p className="mt-5 text-[15px] leading-[24px] text-body">{lead}</p>
        </SectionReveal>
      </div>

      {/* Full-bleed background frames */}
      {backgrounds.map((bg, i) => (
        <div key={bg.src} className="relative h-[560px] overflow-hidden md:h-[760px] lg:h-[900px]">
          <motion.div
            animate={{ opacity: activeBg === i ? 1 : 0.4 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image src={bg.src} alt={bg.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-charcoal/40" aria-hidden />
          </motion.div>

          <div className="vv-container relative flex h-full items-end pb-[80px]">
            <h2 className="vv-h2 max-w-[300px] text-warmwhite">{title}</h2>
          </div>
        </div>
      ))}

      {/* Event type cards */}
      <div className="vv-container relative z-10 pb-[90px] md:-mt-[120px]">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={`${card.href}-${card.title}`}
              onMouseEnter={() => {
                setActiveCard(i);
                setActiveBg(i % backgrounds.length);
              }}
              onFocus={() => {
                setActiveCard(i);
                setActiveBg(i % backgrounds.length);
              }}
              className={`overflow-hidden bg-warmwhite transition-shadow duration-300 ${
                activeCard === i ? "shadow-xl" : "shadow-md"
              }`}
            >
              <div className="relative h-[288px]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-[22.5px] leading-[1.3] text-plum">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{card.copy}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-block text-sm font-medium text-royal transition-colors hover:text-plum"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
