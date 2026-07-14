"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type FoodSlide = {
  src: string;
  alt: string;
  caption: string;
};

export function FoodGallery({ slides }: { slides: FoodSlide[] }) {
  return (
    <section className="bg-warmwhite py-20 sm:py-24 lg:py-32">
      <div className="vv-container">
        <div className="grid gap-6 border-b border-plum/15 pb-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[12px] font-semibold uppercase text-royal">From the kitchen</p>
            <h2 className="mt-4 max-w-[680px] font-display text-[46px] leading-[0.92] text-plum sm:text-[64px] lg:text-[88px]">
              A taste of what we do.
            </h2>
          </div>
          <p className="max-w-[480px] text-[15px] leading-[25px] text-body lg:justify-self-end">
            Food that feels generous, considered, and completely at home in the room.
            Every plate starts with the season and ends with your guests.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-12 md:items-end">
          {slides.map((slide, index) => (
            <motion.figure
              key={slide.src}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className={
                index === 0
                  ? "md:col-span-5"
                  : index === 1
                    ? "md:col-span-4 md:pb-16"
                    : "md:col-span-3"
              }
            >
              <div
                className={`group relative overflow-hidden bg-mist ${
                  index === 0
                    ? "aspect-[4/5]"
                    : index === 1
                      ? "aspect-[3/4]"
                      : "aspect-square md:aspect-[3/5]"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <figcaption className="mt-4 grid grid-cols-[32px_1fr] gap-2 border-t border-plum/15 pt-3">
                <span className="font-display text-sm text-gold">0{index + 1}</span>
                <p className="text-[13px] leading-[19px] text-plum">{slide.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
