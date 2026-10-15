import { assets, getMapSearchUrl, site } from "./site";

const catererId = `${site.url}/#caterer`;
const chefId = `${site.url}/about#chef-matthew-stone`;
const topChefCoverageUrl =
  "https://www.inquirer.com/food/michael-klein/top-chef-quickfire-philadelphia-restaurants-wings-20200122.html";

/** LocalBusiness / Caterer schema for sitewide use. */
export function catererSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Caterer",
    "@id": catererId,
    name: site.fullName,
    alternateName: site.name,
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
    founder: { "@id": chefId },
    foundingDate: "2020",
    slogan: "Food Is Love.",
  };
}

/** Chef entity with third-party corroboration for experience claims. */
export function chefSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": chefId,
    name: "Matthew Stone",
    url: `${site.url}/about`,
    image: `${site.url}${assets.chefMattQuickfireHeadshot}`,
    jobTitle: "Chef & Owner",
    worksFor: { "@id": catererId },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Johnson & Wales University",
      url: "https://www.jwu.edu/",
    },
    sameAs: [site.social.linkedin],
    subjectOf: {
      "@type": "NewsArticle",
      name: "‘Top Chef’ comes to the Comcast Center",
      url: topChefCoverageUrl,
      publisher: { "@type": "Organization", name: "The Philadelphia Inquirer" },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: site.url,
    publisher: { "@id": catererId },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { "@id": catererId },
    areaServed:
      opts.areaServed ??
      "Downingtown, Chester County, and the Main Line, Pennsylvania",
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

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  const articleAuthorId = `${site.url}/about#chef-matthew-stone`;
  const articlePublisherId = `${site.url}/#caterer`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    mainEntityOfPage: `${site.url}${opts.path}`,
    image: `${site.url}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@id": articleAuthorId },
    publisher: { "@id": articlePublisherId },
  };
}
