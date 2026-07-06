"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SecondaryCta, TextCta } from "./ArrowCta";

export type ServiceCardData = {
  title: string;
  copy: string;
  href: string;
  ctaLabel?: string;
  image: { src: string; alt: string };
};

export function ServiceGrid({ eyebrow, title, viewAllHref, cards }: {
  eyebrow: string;
  title: string;
  viewAllHref: string;
  cards: ServiceCardData[];
}) {
  return (
    <section className="bg-ivory py-[130px]">
      <div className="eden-container">
        <div className="flex flex-col gap-6 border-b border-plum/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eden-eyebrow">{eyebrow}</p>
            <h2 className="eden-h2 mt-3 max-w-[640px] text-plum">{title}</h2>
          </div>
          <TextCta href={viewAllHref} location="home-services-header" className="shrink-0">
            View All Services
          </TextCta>
        </div>

        <div className="mt-[60px] grid lg:grid-cols-3 lg:divide-x lg:divide-plum/15">
          {cards.map((card, i) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.06 * i }}
              className="px-[41px]"
            >
              <Link href={card.href} className="group block">
                <div className="relative mb-0 h-[450px] overflow-visible">
                  <div className="absolute -top-[90px] left-1/2 h-[540px] w-[410px] max-w-none -translate-x-1/2 overflow-hidden rounded-[3px]">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="410px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-[18px] font-medium leading-[25.2px] text-plum">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-[22.4px] text-body">{card.copy}</p>
              </Link>
              <div className="mt-5">
                <SecondaryCta href={card.href} location={`home-service-${i}`}>
                  {card.ctaLabel ?? "Explore"}
                </SecondaryCta>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
