"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = { src: string; alt: string };

export function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(1);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const visible = [
    slides[(index - 1 + slides.length) % slides.length],
    slides[index],
    slides[(index + 1) % slides.length],
  ];

  return (
    <section className="overflow-hidden bg-ivory py-[80px]">
      <div className="relative flex items-center justify-center">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-6 z-10 hidden h-12 w-12 items-center justify-center border border-plum/15 text-plum hover:bg-plum/[0.04] lg:flex"
        >
          ←
        </button>

        <div className="flex items-center justify-center gap-6 px-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((slide, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={`${slide.src}-${index}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: isCenter ? 1 : 0.5, scale: isCenter ? 1 : 0.9 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className={`relative overflow-hidden rounded-[3px] ${
                    isCenter
                      ? "h-[420px] w-[min(90vw,360px)] sm:h-[520px] sm:w-[400px]"
                      : "hidden h-[320px] w-[220px] sm:block sm:h-[400px] sm:w-[280px]"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes={isCenter ? "400px" : "280px"}
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-6 z-10 hidden h-12 w-12 items-center justify-center border border-plum/15 text-plum hover:bg-plum/[0.04] lg:flex"
        >
          →
        </button>
      </div>
    </section>
  );
}
