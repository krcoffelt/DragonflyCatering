"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "./ArrowCta";

export type Quote = {
  text: string;
  attribution: string;
  role: string;
};

function Avatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum/10 text-sm font-medium text-plum">
      {initial}
    </span>
  );
}

export function QuoteCarousel({
  quotes,
  backgroundImage,
}: {
  quotes: Quote[];
  backgroundImage: { src: string; alt: string };
}) {
  const [index, setIndex] = useState(0);
  const pair = [quotes[index % quotes.length], quotes[(index + 1) % quotes.length]];

  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);
  const next = () => setIndex((i) => (i + 1) % quotes.length);

  return (
    <section className="relative h-[789px] overflow-hidden">
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/20" aria-hidden />

      <div className="absolute inset-x-0 bottom-[30px] top-[400px] flex items-end px-[30px]">
        <div className="mx-auto flex w-full max-w-[1380px] items-stretch">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous quote"
            className="hidden w-[54px] shrink-0 items-center justify-center rounded-l-[3px] bg-warmwhite text-plum transition-colors hover:bg-ivory sm:flex"
          >
            ←
          </button>

          <div className="flex flex-1 overflow-hidden rounded-[3px] border border-warmwhite/40 bg-warmwhite/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <AnimatePresence mode="wait">
              {pair.map((quote, i) => (
                <motion.blockquote
                  key={`${quote.attribution}-${index}-${i}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`flex min-h-[280px] w-full flex-col justify-between p-8 sm:min-h-[359px] sm:p-10 ${
                    i === 1 ? "hidden border-l border-plum/10 md:flex md:w-1/2" : "md:w-1/2"
                  }`}
                >
                  <p className="text-[18px] font-medium leading-[1.45] text-plum sm:text-xl">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="mt-8 flex items-center gap-3 border-t border-plum/10 pt-6">
                    <Avatar name={quote.attribution} />
                    <div>
                      <p className="text-base font-medium text-plum">{quote.attribution}</p>
                      <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-body">
                        {quote.role}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next quote"
            className="hidden w-[54px] shrink-0 items-center justify-center rounded-r-[3px] bg-warmwhite text-plum transition-colors hover:bg-ivory sm:flex"
          >
            →
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center bg-warmwhite text-plum"
        >
          <ArrowUpRight className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center bg-warmwhite text-plum"
        >
          <ArrowUpRight />
        </button>
      </div>
    </section>
  );
}
