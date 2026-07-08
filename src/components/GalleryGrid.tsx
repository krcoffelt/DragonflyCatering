"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  aspect?: "landscape" | "portrait" | "square";
  needsApproval?: boolean;
};

type GalleryGridProps = {
  images: GalleryImage[];
  categories: string[];
  /** Categories that exist as services but have no approved photos yet. */
  pendingCategories?: string[];
};

export function GalleryGrid({
  images,
  categories,
  pendingCategories = [],
}: GalleryGridProps) {
  const [active, setActive] = useState("All");
  const filters = ["All", ...categories];
  const visible =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Gallery categories"
        className="flex flex-wrap gap-2"
      >
        {filters.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
              active === cat
                ? "border-royal bg-royal text-warmwhite"
                : "border-mist bg-warmwhite text-plum/70 hover:border-gold hover:text-plum"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((img) => (
            <motion.figure
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div
                className={`relative w-full ${
                  img.aspect === "portrait"
                    ? "aspect-[2/3]"
                    : img.aspect === "square"
                      ? "aspect-square"
                      : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
              <figcaption className="sr-only">{img.alt}</figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-10 rounded-xl border border-dashed border-gold/50 bg-warmwhite p-8 text-center text-sm text-charcoal/60">
          Photography for {active.toLowerCase()} is being gathered now — check
          back soon, or{" "}
          <a href="/contact" className="font-semibold text-royal underline">
            ask us about recent events
          </a>
          .
        </p>
      )}

      {pendingCategories.length > 0 && active === "All" && (
        <p className="mt-10 text-center text-sm text-charcoal/55">
          More photography is on the way for{" "}
          {pendingCategories.join(", ").toLowerCase()} — this gallery grows
          after every event season.
        </p>
      )}
    </div>
  );
}
