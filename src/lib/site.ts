/** Central site configuration for Dragonfly Catering LLC. */

export const site = {
  name: "Dragonfly Catering",
  legalName: "Dragonfly Catering LLC",
  fullName: "Dragonfly Catering & Event Space",
  url: "https://dragonfly-catering.com",
  email: "dragonflycatering727@gmail.com",
  phone: "+14849473296",
  phoneDisplay: "(484) 947-3296",
  primaryCta: "Request a Custom Proposal",
  address: {
    street: "4325 Lincoln Highway",
    city: "Downingtown",
    state: "PA",
    zip: "19335",
  },
  serviceArea:
    "Downingtown, Chester County, the Main Line & nearby Pennsylvania communities",
  eventSpaceCapacity: 50,
  taglines: {
    primary: "Food Is Love.",
    secondary: "Seasonal. Local. Special.",
    tertiary: "Let us feed your moment.",
  },
  social: {
    facebook: "https://www.facebook.com/dragonflycatering1",
    instagram: "https://www.instagram.com/dragonflycatering/",
    linkedin: "https://www.linkedin.com/in/matthew-stone-34338678/",
  },
};

export function getFullAddress() {
  return `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
}

export function getMapSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.fullName}, ${getFullAddress()}`,
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
  socialIcon: "/icon.png",
  socialPreview: "/opengraph-image.jpg",
  twitterPreview: "/twitter-image.jpg",
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
  chefMattQuickfireHeadshot:
    "/assets/dragonfly/photos/from-matt-source/chef-matt-stone-top-chef-quickfire-headshot.jpg",
  mattAppetizerBoard:
    "/assets/dragonfly/photos/from-matt-source/IMG_20210927_085008_854.webp",
  mattCrabCakes:
    "/assets/dragonfly/photos/from-matt-source/IMG_20201011_101630_474.jpg",
  guestToast:
    "/assets/dragonfly/photos/misc-review/original-dsc07875-family-photos.jpg",
  galleryPassedAppetizers:
    "/assets/dragonfly/photos/gallery/dragonfly-event-passed-appetizers.jpg",
  galleryBuffetService:
    "/assets/dragonfly/photos/gallery/dragonfly-engagement-buffet-service.jpg",
  galleryLobsterRolls:
    "/assets/dragonfly/photos/gallery/dragonfly-lobster-rolls.webp",
  galleryChefMattFinishingAppetizers:
    "/assets/dragonfly/photos/gallery/dragonfly-chef-matt-finishing-appetizers.webp",
  galleryPrivateDinnerGuests:
    "/assets/dragonfly/photos/gallery/dragonfly-private-dinner-guests.webp",
  galleryCateredBuffetGuests:
    "/assets/dragonfly/photos/gallery/dragonfly-catered-buffet-guests.webp",
  galleryPrivateDiningTableService:
    "/assets/dragonfly/photos/gallery/dragonfly-private-dining-table-service.webp",
  galleryRackOfLamb:
    "/assets/dragonfly/photos/gallery/dragonfly-rack-of-lamb-platter.webp",
  galleryGrazingTable:
    "/assets/dragonfly/photos/gallery/dragonfly-grazing-table-charcuterie.webp",
  gallerySearedScallops:
    "/assets/dragonfly/photos/gallery/dragonfly-seared-scallops-catering.webp",
  galleryGuestsServingGrazingBuffet:
    "/assets/dragonfly/photos/gallery/dragonfly-guests-serving-grazing-buffet.webp",
  julyPlatedVegetableAppetizer:
    "/assets/dragonfly/photos/july-2026/dragonfly-plated-seasonal-vegetable-appetizer.webp",
  julyRackOfLamb:
    "/assets/dragonfly/photos/july-2026/dragonfly-herb-rack-of-lamb.webp",
  julyPassedTomatoAppetizers:
    "/assets/dragonfly/photos/july-2026/dragonfly-passed-tomato-appetizers.webp",
  julyFlowerAppetizerCups:
    "/assets/dragonfly/photos/july-2026/dragonfly-edible-flower-appetizer-cups.webp",
  julyRaspberryDessertCups:
    "/assets/dragonfly/photos/july-2026/dragonfly-raspberry-dessert-cups.webp",
  julyAppetizerSpoons:
    "/assets/dragonfly/photos/july-2026/dragonfly-passed-appetizer-spoons.webp",
  julySeasonalCourse:
    "/assets/dragonfly/photos/july-2026/dragonfly-plated-seasonal-course.webp",
  julyTomatoBruschetta:
    "/assets/dragonfly/photos/july-2026/dragonfly-tomato-bruschetta-trays.webp",
  julyCanapes:
    "/assets/dragonfly/photos/july-2026/dragonfly-bite-size-canapes.webp",
  julySoupShooters:
    "/assets/dragonfly/photos/july-2026/dragonfly-seasonal-soup-shooters.webp",
  julyPeachBerrySalad:
    "/assets/dragonfly/photos/july-2026/dragonfly-peach-berry-salad.webp",
  julyVegetableSkewers:
    "/assets/dragonfly/photos/july-2026/dragonfly-grilled-vegetable-skewers.webp",
  julySearedBeefPrep:
    "/assets/dragonfly/photos/july-2026/dragonfly-seared-beef-roast-prep.webp",
  julyChefBuffetService:
    "/assets/dragonfly/photos/july-2026/chef-matt-buffet-service.webp",
  julyChefPrivateService:
    "/assets/dragonfly/photos/july-2026/chef-matt-private-chef-service.webp",
  julyChefSaladPlatter:
    "/assets/dragonfly/photos/july-2026/chef-matt-seasonal-salad-platter.webp",
  julyPrivateDinnerTable:
    "/assets/dragonfly/photos/july-2026/dragonfly-private-dinner-table.webp",
  julyEventTableSetting:
    "/assets/dragonfly/photos/july-2026/dragonfly-event-table-setting.webp",
  julyPrivateDinnerGuests:
    "/assets/dragonfly/photos/july-2026/dragonfly-guests-private-dinner.webp",
  julyBuffetTeam:
    "/assets/dragonfly/photos/july-2026/dragonfly-catering-buffet-team.webp",
  julyGrazingTableEvent:
    "/assets/dragonfly/photos/july-2026/dragonfly-grazing-table-event.webp",
  julyBartendingService:
    "/assets/dragonfly/photos/july-2026/dragonfly-bartending-service.webp",
  julyBartenderGlassware:
    "/assets/dragonfly/photos/july-2026/dragonfly-bartender-glassware.webp",
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
  chefMattQuickfireHeadshot:
    "Chef Matt Stone in his Top Chef Quickfire chef jacket",
  mattAppetizerBoard:
    "Herb-finished appetizer board with tomato relish prepared by Dragonfly Catering",
  mattCrabCakes:
    "Crab cakes searing in a pan during Dragonfly Catering kitchen prep",
  guestToast:
    "Guests raising glasses during a Dragonfly Catering celebration in Chester County",
  galleryPassedAppetizers:
    "Passed appetizers being arranged for guests at a Dragonfly Catering event",
  galleryBuffetService:
    "A guest serving dinner from a Dragonfly Catering buffet at an engagement party",
  galleryLobsterRolls:
    "Lobster rolls finished with edible flowers by Dragonfly Catering",
  galleryChefMattFinishingAppetizers:
    "Chef Matt Stone finishing a tray of appetizers during a private Dragonfly Catering event",
  galleryPrivateDinnerGuests:
    "Guests enjoying a private dinner catered by Dragonfly Catering",
  galleryCateredBuffetGuests:
    "Guests choosing dishes from a Dragonfly Catering buffet at an evening event",
  galleryPrivateDiningTableService:
    "A Dragonfly Catering chef presenting a course to guests at a private dining table",
  galleryRackOfLamb:
    "Sliced rack of lamb with herb sauce prepared by Dragonfly Catering",
  galleryGrazingTable:
    "Charcuterie and cheese grazing table arranged by Dragonfly Catering",
  gallerySearedScallops:
    "Seared scallops with greens and roasted vegetables prepared by Dragonfly Catering",
  galleryGuestsServingGrazingBuffet:
    "Guests serving vegetables and appetizers from a colorful Dragonfly Catering grazing buffet",
  julyPlatedVegetableAppetizer:
    "A colorful seasonal vegetable appetizer plated by Dragonfly Catering",
  julyRackOfLamb:
    "Herb-crusted rack of lamb sliced and plated by Dragonfly Catering",
  julyPassedTomatoAppetizers:
    "Trays of tomato appetizers ready for passed service at a Dragonfly event",
  julyFlowerAppetizerCups:
    "Individual savory appetizer cups finished with edible flowers",
  julyRaspberryDessertCups:
    "Individual raspberry desserts arranged for a Dragonfly Catering event",
  julyAppetizerSpoons:
    "Passed appetizers presented on tasting spoons by Dragonfly Catering",
  julySeasonalCourse:
    "A composed seasonal course plated for a private Dragonfly dinner",
  julyTomatoBruschetta:
    "Tomato bruschetta arranged on trays for catered service",
  julyCanapes:
    "Bite-size canapes arranged for guests at a Dragonfly event",
  julySoupShooters:
    "Seasonal soup shooters prepared for passed service",
  julyPeachBerrySalad:
    "Seasonal peach and berry salad prepared by Dragonfly Catering",
  julyVegetableSkewers:
    "Grilled seasonal vegetable skewers ready for service",
  julySearedBeefPrep:
    "Chef-prepared seared beef roast resting before event service",
  julyChefBuffetService:
    "Chef Matt serving guests from a Dragonfly Catering buffet",
  julyChefPrivateService:
    "Chef Matt preparing a course during a private chef experience",
  julyChefSaladPlatter:
    "Chef Matt presenting a colorful seasonal salad platter",
  julyPrivateDinnerTable:
    "An intimate private dinner table set for Dragonfly guests",
  julyEventTableSetting:
    "A polished table setting prepared for a private catered event",
  julyPrivateDinnerGuests:
    "Guests enjoying conversation during a Dragonfly private dinner",
  julyBuffetTeam:
    "The Dragonfly Catering team serving guests at a buffet",
  julyGrazingTableEvent:
    "An abundant grazing table arranged for a Dragonfly social event",
  julyBartendingService:
    "A Dragonfly bartender preparing drinks for event guests",
  julyBartenderGlassware:
    "A Dragonfly bartender arranging glassware behind the event bar",
};

/** Homepage hero rotation — avoids the raw dragon-fruit prep image as the cover. */
export const heroSlides = [
  { src: assets.heroAppetizers, alt: alt.heroAppetizers },
] as const;

export const chefAccolades = [
  { lead: "Top Chef Quickfire", detail: "Executive Chef, Philadelphia" },
  { lead: "Johnson & Wales", detail: "Trained" },
  { lead: "20+", detail: "Years in professional kitchens" },
] as const;

export type GalleryPhoto = {
  src: string;
  alt: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
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
    src: assets.galleryChefMattFinishingAppetizers,
    alt: alt.galleryChefMattFinishingAppetizers,
    category: "Chef Matt",
    aspect: "square",
  },
  {
    src: assets.galleryCateredBuffetGuests,
    alt: alt.galleryCateredBuffetGuests,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.galleryRackOfLamb,
    alt: alt.galleryRackOfLamb,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.galleryPrivateDinnerGuests,
    alt: alt.galleryPrivateDinnerGuests,
    category: "Private Events",
    aspect: "square",
  },
  {
    src: assets.galleryGrazingTable,
    alt: alt.galleryGrazingTable,
    category: "Food",
    aspect: "portrait",
  },
  {
    src: assets.galleryPrivateDiningTableService,
    alt: alt.galleryPrivateDiningTableService,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.foodRoastedVegetables,
    alt: alt.foodRoastedVegetables,
    category: "Food",
    aspect: "landscape",
  },
  {
    src: assets.gallerySearedScallops,
    alt: alt.gallerySearedScallops,
    category: "Food",
    aspect: "portrait",
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
  },
  {
    src: assets.galleryPassedAppetizers,
    alt: alt.galleryPassedAppetizers,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.galleryBuffetService,
    alt: alt.galleryBuffetService,
    category: "Engagement Parties",
    aspect: "portrait",
  },
  {
    src: assets.galleryGuestsServingGrazingBuffet,
    alt: alt.galleryGuestsServingGrazingBuffet,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.galleryLobsterRolls,
    alt: alt.galleryLobsterRolls,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyPlatedVegetableAppetizer,
    alt: alt.julyPlatedVegetableAppetizer,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyRackOfLamb,
    alt: alt.julyRackOfLamb,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyPassedTomatoAppetizers,
    alt: alt.julyPassedTomatoAppetizers,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyFlowerAppetizerCups,
    alt: alt.julyFlowerAppetizerCups,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyRaspberryDessertCups,
    alt: alt.julyRaspberryDessertCups,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyAppetizerSpoons,
    alt: alt.julyAppetizerSpoons,
    category: "Food",
    aspect: "landscape",
  },
  {
    src: assets.julySeasonalCourse,
    alt: alt.julySeasonalCourse,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyTomatoBruschetta,
    alt: alt.julyTomatoBruschetta,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyCanapes,
    alt: alt.julyCanapes,
    category: "Food",
    aspect: "landscape",
  },
  {
    src: assets.julySoupShooters,
    alt: alt.julySoupShooters,
    category: "Food",
    aspect: "portrait",
  },
  {
    src: assets.julyPeachBerrySalad,
    alt: alt.julyPeachBerrySalad,
    category: "Food",
    aspect: "portrait",
  },
  {
    src: assets.julyVegetableSkewers,
    alt: alt.julyVegetableSkewers,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julySearedBeefPrep,
    alt: alt.julySearedBeefPrep,
    category: "Food",
    aspect: "square",
  },
  {
    src: assets.julyChefBuffetService,
    alt: alt.julyChefBuffetService,
    category: "Chef Matt",
    aspect: "square",
  },
  {
    src: assets.julyChefPrivateService,
    alt: alt.julyChefPrivateService,
    category: "Chef Matt",
    aspect: "portrait",
  },
  {
    src: assets.julyChefSaladPlatter,
    alt: alt.julyChefSaladPlatter,
    category: "Chef Matt",
    aspect: "portrait",
  },
  {
    src: assets.julyPrivateDinnerTable,
    alt: alt.julyPrivateDinnerTable,
    category: "Private Events",
    aspect: "square",
  },
  {
    src: assets.julyEventTableSetting,
    alt: alt.julyEventTableSetting,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.julyPrivateDinnerGuests,
    alt: alt.julyPrivateDinnerGuests,
    category: "Private Events",
    aspect: "landscape",
  },
  {
    src: assets.julyBuffetTeam,
    alt: alt.julyBuffetTeam,
    category: "Private Events",
    aspect: "portrait",
  },
  {
    src: assets.julyGrazingTableEvent,
    alt: alt.julyGrazingTableEvent,
    category: "Private Events",
    aspect: "portrait",
  },
  {
    src: assets.julyBartendingService,
    alt: alt.julyBartendingService,
    category: "Bartending",
    aspect: "landscape",
  },
  {
    src: assets.julyBartenderGlassware,
    alt: alt.julyBartenderGlassware,
    category: "Bartending",
    aspect: "portrait",
  },
];

const homepageGallerySources = new Set([
  assets.julyChefSaladPlatter,
  assets.julyGrazingTableEvent,
  assets.julyPassedTomatoAppetizers,
  assets.julyRaspberryDessertCups,
  assets.julyBartendingService,
  assets.julyPrivateDinnerGuests,
  assets.julyChefPrivateService,
  assets.julyVegetableSkewers,
]);

/** A focused homepage edit that keeps the landing-page image payload lean. */
export const homepageGalleryPhotos = galleryPhotos.filter((photo) =>
  homepageGallerySources.has(photo.src),
);

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
      { label: site.primaryCta, href: "/contact" },
    ],
  },
];

export type Venue = {
  name: string;
  location: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  verified: boolean;
};

/** Venues confirmed by the client as places Dragonfly works with. */
export const venues: Venue[] = [
  {
    name: "Beale Manor",
    location: "Parkesburg, PA",
    description:
      "A Victorian mansion with ornate interiors and an intimate ballroom.",
    url: "https://www.bealemanor.com/",
    image: "/images/venues/beale.webp",
    imageAlt: "The candlelit entrance to historic Beale Manor in Parkesburg",
    verified: true,
  },
  {
    name: "Stone Ridge Farm Inn",
    location: "Perkasie, PA",
    description:
      "A restored Bucks County farm inn with a barn, carriage house, and guest rooms.",
    url: "https://www.stoneridgefarminn.com/",
    image: "/images/venues/stone-ridge.webp",
    imageAlt: "The restored stone barn at Stone Ridge Farm Inn",
    verified: true,
  },
  {
    name: "Work2Gether",
    location: "Downingtown, Kennett Square & Phoenixville",
    description:
      "Flexible Chester County spaces for meetings, workshops, and intimate events.",
    url: "https://www.work2gether.space/",
    image: "/images/venues/work2gether.webp",
    imageAlt: "A bright contemporary meeting and event space at Work2Gether",
    verified: true,
  },
  {
    name: "Upland Farm Park",
    location: "Chester Springs, PA",
    description:
      "A renovated historic barn set within a 56-acre Chester Springs park.",
    url: "https://www.upperuwchlan-pa.gov/Facilities/Facility/Details/Upland-Farm-Park-26",
    image: "/images/venues/upland.webp",
    imageAlt: "The renovated red barn at Upland Farm Park",
    verified: true,
  },
  {
    name: "Lauxmont Farms",
    location: "Wrightsville, PA",
    description:
      "Four distinctive settings with sweeping Susquehanna River views.",
    url: "https://www.lauxmontweddings.com/",
    image: "/images/venues/lauxmont.webp",
    imageAlt: "A wedding couple overlooking the Susquehanna River at Lauxmont Farms",
    verified: true,
  },
  {
    name: "Cross Gables Estate",
    location: "Exton, PA",
    description:
      "A European-inspired 19th-century estate for weddings and private events.",
    url: "https://www.crossgablesestate.com/",
    image: "/images/venues/cross-gables.webp",
    imageAlt: "Cross Gables Estate glowing at dusk among mature trees",
    verified: true,
  },
  {
    name: "Westwynd Gardens",
    location: "Honey Brook, PA",
    description:
      "A contemporary garden venue with greenhouse architecture and lush grounds.",
    url: "https://westwyndgardens.com/",
    image: "/images/venues/westwynd.webp",
    imageAlt: "An aerial view of Westwynd Gardens and its landscaped grounds",
    verified: true,
  },
  {
    name: "Wyndsor Farms",
    location: "Elverson, PA",
    description:
      "An equestrian farm with picturesque indoor and outdoor celebration spaces.",
    url: "https://wyndsorfarm.com/",
    image: "/images/venues/wyndsor.webp",
    imageAlt: "The event barn and green lawn at Wyndsor Farm",
    verified: true,
  },
  {
    name: "Twin Linden Inn",
    location: "Narvon, PA",
    description:
      "A historic country inn surrounded by gardens and Lancaster County farmland.",
    url: "https://www.innattwinlinden.com/",
    image: "/images/venues/twin-linden.webp",
    imageAlt: "The white clapboard facade of the Inn at Twin Linden",
    verified: true,
  },
  {
    name: "Wyebrook Farm",
    location: "Honey Brook, PA",
    description:
      "A working Honey Brook farm with broad pastoral views and seasonal gatherings.",
    url: "https://www.wyebrookfarm.com/",
    image: "/images/venues/wyebrook.webp",
    imageAlt: "An aerial view of Wyebrook Farm surrounded by fields and woodland",
    verified: true,
  },
  {
    name: "Graystone Mansion",
    location: "Coatesville, PA",
    description:
      "A Collegiate Gothic mansion with wood-paneled rooms and a circular drive.",
    url: "https://www.steelmuseum.org/bookvenue/graystone.cfm",
    image: "/images/venues/graystone.webp",
    imageAlt: "Historic Graystone Mansion framed by flowering trees",
    verified: true,
  },
  {
    name: "Blue Heron",
    location: "Malvern, PA",
    description:
      "A curated King Street micro-venue for gatherings of fewer than 100 guests.",
    url: "https://www.blueheronmalvern.com/",
    image: "/images/venues/blue-heron.webp",
    imageAlt: "The light-filled brick interior of Blue Heron in Malvern",
    verified: true,
  },
  {
    name: "Bask Collective",
    location: "Malvern, PA",
    description:
      "A design-led Malvern studio for showers, workshops, and private events.",
    url: "https://www.bask-collective.com/",
    image: "/images/venues/bask.webp",
    imageAlt: "The warm modern interior and cafe tables at Bask Collective",
    verified: true,
  },
  {
    name: "White Chimneys",
    location: "Gap, PA",
    description:
      "An early-1700s estate with European gardens and a restored reception barn.",
    url: "https://whitechimneys.com/",
    image: "/images/venues/white-chimneys.webp",
    imageAlt: "The illuminated garden courtyard at White Chimneys Estate",
    verified: true,
  },
];

export type SampleMenu = {
  category: string;
  title: string;
  description: string;
  href: string;
  pageCount: number;
};

export const sampleMenus: SampleMenu[] = [
  {
    category: "Showers & brunches",
    title: "Showers, Brunches & Private Dinners",
    description:
      "Sixteen real menus spanning baby showers, milestone birthdays, mocktail bars, seasonal dinners, and chef-led celebrations.",
    href: "/sample-menus/showers-brunches-private-dinners-sample-menus.pdf",
    pageCount: 16,
  },
  {
    category: "Social & community events",
    title: "Celebrations & Community Events",
    description:
      "Twenty-three menus for graduations, weddings, BBQs, teacher appreciation, holiday gatherings, and community tables.",
    href: "/sample-menus/graduations-bbq-social-events-sample-menus.pdf",
    pageCount: 23,
  },
  {
    category: "Supper club",
    title: "The Dragonfly Supper Club",
    description:
      "A local three-course prix fixe experience featuring charcuterie, seasonal produce, braised short rib, and a bright summer dessert.",
    href: "/sample-menus/dragonfly-supper-club-sample-menu.pdf",
    pageCount: 1,
  },
  {
    category: "Private chef dinner",
    title: "Alla Famiglia",
    description:
      "An intimate family-style dinner with prosciutto caprese, lamb lollipops, lobster risotto, and a composed dessert.",
    href: "/sample-menus/private-chef-family-dinner-sample-menu.pdf",
    pageCount: 1,
  },
  {
    category: "Milestone celebration",
    title: "Birthday Dinner",
    description:
      "A celebratory dinner built around grilled vegetables, cedar-planked halibut, ribeye chimichurri, and cake jars.",
    href: "/sample-menus/milestone-birthday-dinner-sample-menu.pdf",
    pageCount: 1,
  },
  {
    category: "Seasonal gathering",
    title: "Autumn Dinner",
    description:
      "A playful fall menu with charcuterie, stuffed acorn squash, shepherd's pie, roasted vegetables, and seasonal sweets.",
    href: "/sample-menus/autumn-gathering-sample-menu.pdf",
    pageCount: 1,
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
