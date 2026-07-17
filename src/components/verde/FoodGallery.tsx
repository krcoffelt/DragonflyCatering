"use client";

import Image from "next/image";

type GallerySlide = {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
};

function GalleryRibbonGroup({
  slides,
  duplicate = false,
}: {
  slides: GallerySlide[];
  duplicate?: boolean;
}) {
  return (
    <div className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4 lg:gap-5 lg:pr-5" aria-hidden={duplicate || undefined}>
      {slides.map((slide, index) => (
        <figure
          key={`${duplicate ? "duplicate" : "original"}-${slide.src}`}
          className={`relative h-[250px] shrink-0 overflow-hidden bg-mist sm:h-[300px] lg:h-[380px] xl:h-[420px] ${
            slide.aspect === "portrait"
              ? "w-[185px] sm:w-[225px] lg:w-[285px] xl:w-[315px]"
              : slide.aspect === "square"
                ? "w-[250px] sm:w-[300px] lg:w-[380px] xl:w-[420px]"
                : "w-[335px] sm:w-[400px] lg:w-[500px] xl:w-[560px]"
          }`}
        >
          <Image
            src={slide.src}
            alt={duplicate ? "" : slide.alt}
            fill
            loading={index < 2 ? "eager" : "lazy"}
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 500px, (min-width: 640px) 400px, 335px"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
          />
          {!duplicate && <figcaption className="sr-only">{slide.alt}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function FoodGallery({ slides }: { slides: GallerySlide[] }) {
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

      </div>

      <div className="gallery-ribbon mt-8 overflow-hidden">
        <div className="gallery-ribbon-track flex w-max">
          <GalleryRibbonGroup slides={slides} />
          <GalleryRibbonGroup slides={slides} duplicate />
        </div>
      </div>
    </section>
  );
}
