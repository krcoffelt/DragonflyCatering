"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "./VerdePrimitives";

export type EventCard = {
  title: string;
  copy: string;
  href: string;
};

type PrivateEventsBandProps = {
  title: string;
  lead: string;
  image: { src: string; alt: string };
  cards: EventCard[];
};

export function PrivateEventsBand({ title, lead, image, cards }: PrivateEventsBandProps) {
  return (
    <section className="bg-warmwhite py-20 sm:py-24 lg:py-32">
      <div className="vv-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
          <SectionReveal>
            <p className="text-[12px] font-semibold uppercase text-royal">Gather your people</p>
            <h2 className="mt-5 font-display text-[52px] leading-[0.9] text-plum sm:text-[72px] lg:text-[96px]">
              {title}
            </h2>
            <p className="mt-7 max-w-[470px] text-[15px] leading-[25px] text-body">{lead}</p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="relative aspect-[5/4] overflow-hidden bg-mist sm:aspect-[16/10]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_32%]"
            />
          </SectionReveal>
        </div>

        <div className="mt-12 grid border-t border-plum/15 md:grid-cols-3 md:divide-x md:divide-plum/15">
          {cards.map((card, index) => (
            <motion.article
              key={card.href}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="border-b border-plum/15 py-7 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-display text-sm text-gold">0{index + 1}</p>
              <h3 className="mt-5 font-display text-[28px] leading-[1.05] text-plum sm:text-[32px] lg:text-[38px]">
                {card.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[22px] text-body">{card.copy}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-royal transition-colors hover:text-plum"
              >
                Explore <span aria-hidden>↗</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
