import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { galleryPhotos } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Real Food & Events from Dragonfly Catering",
  description:
    "A gallery of real Dragonfly Catering events — chef-prepared food, private dinners, engagement parties, and gatherings across Downingtown and Chester County. No stock photography.",
  path: "/gallery",
});

const categories = [
  "Food",
  "Chef Matt",
  "Private Events",
  "Engagement Parties",
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      <PageHero
        eyebrow="The gallery"
        title="Real food. Real events."
        lead="Everything here was cooked, plated, and served by Dragonfly — the gallery grows after every season."
        secondaryCta={{ label: "View Sample Menus", href: "/sample-menus" }}
      />

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <GalleryGrid images={galleryPhotos} categories={categories} />
        </div>
      </section>

      <FinalCta
        title="Picture your event here"
        copy="Tell us what you're celebrating and we'll design the food, the table, and the experience around it."
      />
    </>
  );
}
