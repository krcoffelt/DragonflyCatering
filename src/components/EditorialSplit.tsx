import Image from "next/image";
import { Reveal } from "./Reveal";
import { DragonflyMark } from "./ServiceCard";

type EditorialSplitProps = {
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right";
  children: React.ReactNode;
  /** Shown inside the placeholder panel when no image exists. */
  placeholderLabel?: string;
  imageAspect?: string;
};

/** Two-column editorial band: image on one side, content on the other. */
export function EditorialSplit({
  image,
  imagePosition = "left",
  children,
  placeholderLabel = "Photography coming soon",
  imageAspect = "aspect-[4/5]",
}: EditorialSplitProps) {
  const imageEl = (
    <Reveal className="relative" y={32}>
      {image ? (
        <div className={`relative ${imageAspect} overflow-hidden rounded-2xl`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        /* Placeholder — replace with an approved photo before launch. */
        <div
          className={`flex ${imageAspect} flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-plum to-royal p-8 text-center`}
        >
          <DragonflyMark className="h-12 w-12 text-gold/70" />
          <span className="text-xs font-medium tracking-[0.18em] text-warmwhite/60 uppercase">
            {placeholderLabel}
          </span>
        </div>
      )}
    </Reveal>
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imagePosition === "left" ? (
        <>
          {imageEl}
          <div>{children}</div>
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageEl}</div>
          <div className="lg:order-1">{children}</div>
        </>
      )}
    </div>
  );
}
