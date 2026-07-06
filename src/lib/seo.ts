import type { Metadata } from "next";
import { site, assets } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.fullName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${site.url}${assets.socialPreview}`,
          width: 1200,
          height: 630,
          alt: "Dragonfly Catering logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
