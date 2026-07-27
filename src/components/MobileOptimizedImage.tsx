import Image, { type ImageProps } from "next/image";

type MobileOptimizedImageProps = Omit<ImageProps, "src" | "quality"> & {
  src: string;
  mobileSizes?: string;
  mobileWidths: readonly number[];
};

export function MobileOptimizedImage({
  alt,
  mobileSizes,
  mobileWidths,
  sizes,
  src,
  ...props
}: MobileOptimizedImageProps) {
  const resolvedMobileSizes =
    mobileSizes ?? (typeof sizes === "string" ? sizes : "100vw");
  const encodedSrc = encodeURIComponent(src);
  const mobileSrcSet = mobileWidths
    .map(
      (width) =>
        `/_next/image?url=${encodedSrc}&w=${width}&q=65 ${width}w`,
    )
    .join(", ");

  return (
    <picture>
      <source
        media="(max-width: 639px)"
        sizes={resolvedMobileSizes}
        srcSet={mobileSrcSet}
      />
      <Image
        {...props}
        src={src}
        alt={alt}
        sizes={sizes}
        quality={75}
      />
    </picture>
  );
}
