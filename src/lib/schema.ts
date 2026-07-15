import { assets, getMapSearchUrl, site } from "./site";

/** LocalBusiness / Caterer schema for sitewide use. */
export function catererSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Caterer",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    hasMap: getMapSearchUrl(),
    image: [`${site.url}${assets.heroAppetizers}`],
    menu: `${site.url}/sample-menus`,
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "Place", name: "Downingtown PA" },
      { "@type": "Place", name: "Chester County PA" },
      { "@type": "Place", name: "Main Line PA" },
    ],
    servesCuisine: ["American", "Seasonal", "International", "Fusion"],
    founder: { "@type": "Person", name: "Matthew Stone", jobTitle: "Chef & Owner" },
    foundingDate: "2020",
    slogan: "Food Is Love.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { "@type": "FoodEstablishment", name: site.legalName, url: site.url },
    areaServed: "Downingtown, Chester County, and the Main Line, Pennsylvania",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
