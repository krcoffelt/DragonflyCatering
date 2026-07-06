"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type FoodSlide = {
  src: string;
  alt: string;
  caption: string;
};

/** Verde food gallery slider — 450×613 portrait cards in horizontal track. */
export function FoodGallery({ slides }: { slides: FoodSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden bg-ivory py-[60px]">
      <motion.div
        ref={trackRef}
        className="flex gap-5 px-[22.5px] md:gap-6 md:px-[calc((100vw-1500px)/2+22.5px)]"
        drag={reduce ? false : "x"}
        dragConstraints={trackRef}
        style={{ cursor: reduce ? "default" : "grab" }}
      >
        {slides.map((slide, i) => (
          <motion.figure
            key={slide.src}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative h-[613px] w-[min(450px,80vw)] shrink-0 overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="vv-h3 text-warmwhite">{slide.caption}</h3>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
