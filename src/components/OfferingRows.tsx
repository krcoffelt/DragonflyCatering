"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "./ArrowCta";
import { DragonflyMark } from "./ServiceCard";

export type Offering = {
  title: string;
  href: string;
  tags: string[];
  bullets: string[];
  image?: { src: string; alt: string };
};

export function OfferingRows({ offerings }: { offerings: Offering[] }) {
  return (
    <div className="flex flex-col gap-[60px]">
      {offerings.map((offering, i) => (
        <motion.div
          key={offering.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.04 * i }}
        >
          <Link
            href={offering.href}
            className="group grid h-auto min-h-[240px] grid-cols-1 items-start gap-6 lg:grid-cols-[340px_309px_minmax(0,387px)_54px] lg:gap-x-[60px] lg:gap-y-0"
          >
            <div className="relative h-[240px] w-full max-w-[340px] overflow-hidden rounded-[3px]">
              {offering.image ? (
                <Image
                  src={offering.image.src}
                  alt={offering.image.alt}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-plum to-royal">
                  <DragonflyMark className="h-12 w-12 text-gold/50" />
                </div>
              )}
            </div>

            <div className="flex min-h-[240px] flex-col justify-start pt-0 lg:pt-7">
              <h3 className="text-[40px] font-medium leading-[52px] text-plum">{offering.title}</h3>
              <div className="mt-5 flex flex-wrap gap-[5px]">
                {offering.tags.map((tag) => (
                  <span key={tag} className="eden-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ul className="hidden min-h-[240px] flex-col justify-center gap-0 text-base leading-[22.4px] text-plum lg:flex">
              {offering.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 py-1">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-plum/45" />
                  {bullet}
                </li>
              ))}
            </ul>

            <span
              aria-hidden
              className="hidden h-[240px] w-[54px] items-center justify-center rounded-[3px] border border-plum/15 text-plum transition-all duration-300 group-hover:border-plum/35 group-hover:bg-plum/[0.04] lg:flex"
            >
              <span className="transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight />
              </span>
            </span>
          </Link>

          <ul className="mt-4 space-y-1 text-base leading-[22.4px] text-plum lg:hidden">
            {offering.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-plum/45" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
