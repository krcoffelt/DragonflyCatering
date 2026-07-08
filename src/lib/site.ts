/**
 * Central site configuration for Dragonfly Catering LLC.
 * Values marked NEEDS CONFIRMATION must be verified with the client before launch.
 */

export const site = {
  name: "Dragonfly Catering",
  legalName: "Dragonfly Catering LLC",
  fullName: "Dragonfly Catering & Event Space",
  url: "https://www.dragonfly-catering.com",
  email: "dragonflycatering727@gmail.com",
  /**
   * NEEDS CONFIRMATION — the old site lists 484-228-1993 while Chef Matt's
   * email signature lists 484-947-3296. Set to the confirmed number to enable
   * phone display and tel: links across the site. Leave null to hide phone.
   */
  phone: null as string | null,
  phoneDisplay: null as string | null,
  address: {
    street: "4325 W. Lincoln Highway",
    city: "Downingtown",
    state: "PA",
    zip: "19335", // NEEDS CONFIRMATION — zip inferred from Downingtown; verify.
  },
  serviceArea:
    "Downingtown, Chester County, the Main Line & nearby Pennsylvania communities",
  /** NEEDS CONFIRMATION — capacity wording ("up to approximately 50 guests"). */
  eventSpaceCapacity: 50,
  taglines: {
    primary: "Food Is Love.",
    secondary: "Seasonal. Local. Special.",
    tertiary: "Let us feed your moment.",
  },
  social: {
    // NEEDS CONFIRMATION — add verified social profile URLs before launch.
  },
};

export function getFullAddress() {
  return `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
}

export function getMapSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    getFullAddress(),
  )}`;
}

export function getMapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`;
}

export const assets = {
  logoHeader: "/assets/dragonfly/logos/optimized/dragonfly-logo-header-horizontal-bw.png",
  logoHeader2x: "/assets/dragonfly/logos/optimized/dragonfly-logo-header-horizontal-bw@2x.png",
  logoFooter: "/assets/dragonfly/logos/optimized/dragonfly-logo-footer-stacked-bw.png",
  logoFooter2x: "/assets/dragonfly/logos/optimized/dragonfly-logo-footer-stacked-bw@2x.png",
  socialPreview: "/assets/dragonfly/logos/optimized/dragonfly-logo-social-preview-bw.jpg",
  heroDragonFruit:
    "/assets/dragonfly/photos/hero/dragonfly-hero-dragon-fruit-prep-catering-1017-001.webp",
  heroChefPlating:
    "/assets/dragonfly/photos/hero/dragonfly-hero-chef-plating-winners-001.webp",
  heroAppetizers:
    "/assets/dragonfly/photos/hero/dragonfly-hero-appetizer-display-engagement-party-001.webp",
  heroPastaPrep:
    "/assets/dragonfly/photos/hero/dragonfly-hero-pasta-prep-winners-001.webp",
  foodDragonFruit:
    "/assets/dragonfly/photos/food/dragonfly-food-dragon-fruit-prep-catering-1017-001.webp",
  foodPastaPrep:
    "/assets/dragonfly/photos/food/dragonfly-food-pasta-prep-winners-001.webp",
  foodRoastedVegetables:
    "/assets/dragonfly/photos/food/dragonfly-food-roasted-root-vegetables-catering-1017-001.webp",
  corporateRoastedVegetables:
    "/assets/dragonfly/photos/corporate/dragonfly-corporate-catering-roasted-vegetables-001.webp",
  privateChefPlating:
    "/assets/dragonfly/photos/private-chef/dragonfly-private-chef-plating-winners-001.webp",
  privateEventAppetizers:
    "/assets/dragonfly/photos/private-events/dragonfly-private-event-appetizer-display-001.webp",
  engagementAppetizers:
    "/assets/dragonfly/photos/engagement-party/dragonfly-engagement-party-passed-appetizers-001.webp",
  chefMattPortrait:
    "/assets/dragonfly/photos/from-matt-source/DSC06191-2.jpg",
  mattAppetizerBoard:
    "/assets/dragonfly/photos/from-matt-source/IMG_20210927_085008_854.webp",
  mattCrabCakes:
    "/assets/dragonfly/photos/from-matt-source/IMG_20201011_101630_474.jpg",
};

export const alt = {
  heroDragonFruit:
    "Chef slicing a vivid pink dragon fruit on a wooden board during Dragonfly Catering event prep",
  heroChefPlating:
    "Chef Matt of Dragonfly Catering plating dishes in a client's home kitchen during a private chef dinner",
  heroAppetizers:
    "Passed appetizer display styled by Dragonfly Catering at a private engagement party",
  heroPastaPrep:
    "Fresh pasta being prepared in saute pans during Dragonfly Catering event prep",
  foodPastaPrep:
    "Fresh pasta being prepared in saute pans by Dragonfly Catering for an upcoming event",
  foodRoastedVegetables:
    "Roasted root vegetables in a catering pan prepared by Dragonfly Catering",
  corporateRoastedVegetables:
    "Roasted vegetable catering spread styled for a corporate gathering by Dragonfly Catering",
  privateEventAppetizers:
    "Tray of passed appetizers prepared by Dragonfly Catering for a private event",
  chefMattPortrait:
    "Chef Matt Stone of Dragonfly Catering standing in the Downingtown event space",
  mattAppetizerBoard:
    "Herb-finished appetizer board with tomato relish prepared by Dragonfly Catering",
  mattCrabCakes:
    "Crab cakes searing in a pan during Dragonfly Catering kitchen prep",
};

/** Homepage hero rotation — avoids the raw dragon-fruit prep image as the cover. */
export const heroSlides = [
  { src: assets.mattAppetizerBoard, alt: alt.mattAppetizerBoard },
] as const;

export const chefAccolades = [
  "Top Chef alum",
  "Johnson & Wales trained",
  "20+ years in professional kitchens",
] as const;

export type GalleryPhoto = {
  src: string;
  alt: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
  needsApproval?: boolean;
};

/** All approved public gallery photos from the asset manifest. */
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: assets.mattAppetizerBoard,
    alt: alt.mattAppetizerBoard,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.foodPastaPrep,
    alt: alt.foodPastaPrep,
    category: "Food",
    aspect: "landscape",
  },
  {
    src: assets.foodRoastedVegetables,
    alt: alt.foodRoastedVegetables,
    category: "Food",
    aspect: "landscape",
  },
  {
    src: assets.mattCrabCakes,
    alt: alt.mattCrabCakes,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.chefMattPortrait,
    alt: alt.chefMattPortrait,
    category: "Chef Matt",
    aspect: "landscape",
  },
  {
    src: assets.engagementAppetizers,
    alt: alt.heroAppetizers,
    category: "Engagement Parties",
    aspect: "portrait",
    needsApproval: true,
  },
];

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Event Space", href: "/dragonfly-event-space" },
  { label: "Sample Menus", href: "/sample-menus" },
  { label: "Preferred Venues", href: "/preferred-venues" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Custom Catering", href: "/custom-catering" },
      { label: "Weddings & Showers", href: "/wedding-catering-rehearsal-dinners-showers" },
      { label: "Corporate Catering", href: "/corporate-catering" },
      { label: "Social Events", href: "/social-events" },
      { label: "Private Chef Experiences", href: "/private-chef-experiences" },
      { label: "Event Bartending", href: "/event-bartending" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Dragonfly Event Space", href: "/dragonfly-event-space" },
      { label: "Preferred Venues", href: "/preferred-venues" },
      { label: "Sample Menus", href: "/sample-menus" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    heading: "Dragonfly",
    links: [
      { label: "About Chef Matt", href: "/about" },
      { label: "Community", href: "/community" },
      { label: "Gift Cards", href: "/gift-cards" },
      { label: "Request a Proposal", href: "/contact" },
    ],
  },
];

export type Venue = {
  name: string;
  location: string;
  description: string;
  url?: string;
  verified: boolean;
};

/** NEEDS CONFIRMATION — every venue partnership below must be verified with the client. */
export const venues: Venue[] = [
  {
    name: "Beale Manor",
    location: "Parkesburg, PA",
    description:
      "A stately private manor setting for weddings and milestone celebrations in western Chester County.",
    verified: false,
  },
  {
    name: "Stone Ridge Farm Inn",
    location: "Perkasie, PA",
    description:
      "A restored Bucks County farm inn with rustic charm for intimate weddings and gatherings.",
    verified: false,
  },
  {
    name: "Work2Gether",
    location: "Multiple Locations",
    description:
      "Flexible coworking and meeting spaces suited to corporate lunches, workshops, and team events.",
    verified: false,
  },
  {
    name: "Upland Farm Park",
    location: "Chester Springs, PA",
    description:
      "A scenic preserved-farm setting for outdoor celebrations and community events.",
    verified: false,
  },
  {
    name: "Lauxmont Farms",
    location: "Wrightsville, PA",
    description:
      "Sweeping Susquehanna views and formal gardens for weddings and large celebrations.",
    url: "https://www.lauxmontfarms.com",
    verified: false,
  },
  {
    name: "Cross Gables Estate",
    location: "Exton, PA",
    description:
      "A private estate venue close to Downingtown for elegant gatherings of all sizes.",
    verified: false,
  },
  {
    name: "Westwynd Gardens",
    location: "Pennsylvania",
    description:
      "A garden venue for outdoor ceremonies, showers, and seasonal celebrations.",
    verified: false,
  },
  {
    name: "Wyndsor Farms",
    location: "Elverson, PA",
    description:
      "A countryside farm venue for rustic weddings and relaxed private events.",
    verified: false,
  },
  {
    name: "Twin Linden Inn",
    location: "Narvon, PA",
    description:
      "A historic country inn for intimate weddings, rehearsal dinners, and weekend gatherings.",
    verified: false,
  },
  {
    name: "Wyebrook Farm",
    location: "Honey Brook, PA",
    description:
      "A working farm setting with pastoral views, well suited to seasonal, locally driven menus.",
    verified: false,
  },
  {
    name: "Greystone Mansion",
    location: "Coatesville, PA",
    description:
      "A grand stone mansion for formal weddings, galas, and fundraisers.",
    verified: false,
  },
  {
    name: "Blue Heron",
    location: "Malvern, PA",
    description:
      "An intimate Malvern event space with a warm, refined hospitality feel.",
    url: "https://www.blueheronmalvern.com",
    verified: false,
  },
  {
    name: "Bask Collective",
    location: "Malvern, PA",
    description:
      "A modern gathering space for showers, brand events, and creative celebrations.",
    verified: false,
  },
  {
    name: "White Chimneys",
    location: "Gap, PA",
    description:
      "A historic estate on the Chester–Lancaster county line for weddings and formal events.",
    verified: false,
  },
];

export type MenuCategory = {
  title: string;
  description: string;
  items: string[];
};

/**
 * PLACEHOLDER MENU CONTENT — sample menu PDFs were not found in the asset
 * library. These previews reflect Dragonfly's service styles but every item
 * must be replaced with client-approved menu copy or PDFs before launch.
 */
export const menuCategories: MenuCategory[] = [
  {
    title: "Weddings & Rehearsal Dinners",
    description:
      "Plated, family-style, or stationed dinners built around your ceremony, venue, and guest count.",
    items: [
      "Passed hors d'oeuvres & welcome bites",
      "Seasonal plated dinner courses",
      "Family-style shared platters",
      "Late-night comfort food stations",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Polished breakfasts, lunches, and board dinners that make the host look good.",
    items: [
      "Executive breakfast & brunch spreads",
      "Composed lunch service",
      "Client-dinner tasting menus",
      "Reception-style hors d'oeuvres",
    ],
  },
  {
    title: "Private Chef Dinners",
    description:
      "Coursed, restaurant-quality menus prepared and plated in your home.",
    items: [
      "Multi-course tasting dinners",
      "Wine & bourbon pairing menus",
      "Interactive chef's-counter experiences",
      "Date-night dinners for two",
    ],
  },
  {
    title: "Showers & Brunches",
    description:
      "Bright, seasonal spreads for bridal showers, baby showers, and daytime celebrations.",
    items: [
      "Brunch boards & pastry displays",
      "Garden-inspired salads & tartines",
      "Mimosa-friendly light bites",
      "Sweet finishing tables",
    ],
  },
  {
    title: "Cocktail Parties",
    description:
      "Passed and stationed hors d'oeuvres designed for mingling, not managing plates.",
    items: [
      "Passed canapés & skewers",
      "Grazing & charcuterie displays",
      "Tapas-style small plates",
      "Signature cocktail pairings",
    ],
  },
  {
    title: "BBQ & Casual Gatherings",
    description:
      "Elevated comfort food for backyard parties, family reunions, and relaxed celebrations.",
    items: [
      "Smoked & grilled mains",
      "Seasonal picnic sides",
      "Build-your-own stations",
      "Family-style dessert platters",
    ],
  },
  {
    title: "Seasonal Menus",
    description:
      "Menus that follow the local growing season — spring through the holidays.",
    items: [
      "Spring & summer garden menus",
      "Autumn harvest dinners",
      "Holiday gatherings & parties",
      "International favorites & fusion courses",
    ],
  },
  {
    title: "Beverage & Bartending",
    description:
      "Signature cocktails, elevated mocktails, and pairings served by RAMP-certified bartenders.",
    items: [
      "Signature cocktail design",
      "Zero-proof mocktail menus",
      "Wine & bourbon pairing dinners",
      "Mixers, garnishes & portable bar setup",
    ],
  },
];

export const differentiators = [
  {
    title: "Chef-led, start to finish",
    copy: "Chef Matt is part of every event, from menu to service day.",
  },
  {
    title: "Custom, never cookie-cutter",
    copy: "Every proposal is written for your guests and your setting.",
  },
  {
    title: "A boutique calendar",
    copy: "Fewer events on purpose, so each one gets more attention.",
  },
  {
    title: "Seasonal & local",
    copy: "Menus follow the growing season and nearby farms.",
  },
  {
    title: "Every kind of gathering",
    copy: "Private, corporate, and community events alike.",
  },
  {
    title: "Warm, polished service",
    copy: "Personal hospitality backed by kitchen discipline.",
  },
];
