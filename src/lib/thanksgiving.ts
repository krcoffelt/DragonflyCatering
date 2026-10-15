/** Thanksgiving pre-order menu, pricing, and schedule. Update yearly. */

export const thanksgiving = {
  year: 2026,
  /** Last day orders are accepted (local time, inclusive). */
  orderCutoff: "2026-11-23",
  cutoffLabel: "Monday, November 23",
  serviceDayLabel: "Wednesday, November 25",
  serviceDayShort: "Wed, Nov 25",
  deliveryWindow: "2–6 PM",
  pickupWindow: "12–2 PM",
};

export type SizeOption = {
  id: string;
  label: string;
  detail: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  options: SizeOption[];
  /** Sides can be prepared vegan on request. */
  veganAvailable?: boolean;
};

const sideSizes: SizeOption[] = [
  { id: "small", label: "Small", detail: "Serves 2–3", price: 15 },
  { id: "large", label: "Large", detail: "Serves 4–6", price: 25 },
];

export const sides: MenuItem[] = [
  { id: "garlic-mash", name: "Roasted Garlic Mashed Potatoes" },
  { id: "goat-cheese-mash", name: "Goat Cheese Mashed Potatoes" },
  {
    id: "green-beans",
    name: "Sautéed Green Beans",
    description: "Garlic butter and cherry tomatoes",
  },
  {
    id: "brioche-stuffing",
    name: "Brioche Stuffing",
    description: "Celery, onions, garlic and fresh herbs",
  },
  {
    id: "brussels-sprouts",
    name: "Roasted Brussels Sprouts",
    description: "With smoked bacon",
  },
  {
    id: "sweet-potato-mash",
    name: "Sweet Potato Mash",
    description: "Cinnamon and a touch of brown sugar",
  },
  {
    id: "root-vegetables",
    name: "Herb-Roasted Root Vegetables",
    description: "Parsnips, beets, turnips, butternut squash and carrots",
  },
  {
    id: "creamed-spinach",
    name: "Creamed Spinach",
    description: "Parmesan, sweet onions and garlic",
  },
  {
    id: "mac-and-cheese",
    name: "Smoked Gouda & Aged Cheddar Mac n’ Cheese",
  },
].map((item) => ({ ...item, options: sideSizes, veganAvailable: true }));

export const gravy: MenuItem = {
  id: "gravy",
  name: "Scratch-Made Gravy",
  description: "Rich, slow-simmered and ready to warm",
  options: [
    { id: "half-pint", label: "½ Pint", detail: "8 oz", price: 5 },
    { id: "pint", label: "Pint", detail: "16 oz", price: 10 },
    { id: "quart", label: "Quart", detail: "32 oz", price: 15 },
  ],
};

export const desserts: MenuItem[] = [
  {
    id: "apple-bread-pudding",
    name: "Apple Cinnamon Bread Pudding",
    description: "With crème anglaise",
    options: [{ id: "pound", label: "1 lb", detail: "Per pound", price: 16 }],
  },
  {
    id: "vanilla-bread-pudding",
    name: "Vanilla Bean Bread Pudding",
    description: "With crème anglaise",
    options: [{ id: "pound", label: "1 lb", detail: "Per pound", price: 15 }],
  },
  {
    id: "blueberry-bread-pudding",
    name: "Blueberry Bread Pudding",
    description: "With crème anglaise",
    options: [{ id: "pound", label: "1 lb", detail: "Per pound", price: 16 }],
  },
  {
    id: "cookie-platter",
    name: "Dragonfly Cookie Platter",
    description:
      "Chocolate chip, oatmeal raisin, snickerdoodle, peanut butter chocolate chip, and cornflake marshmallow chocolate chip",
    options: [{ id: "platter", label: "Platter", detail: "20 cookies", price: 20 }],
  },
];

export const allMenuItems: MenuItem[] = [...sides, gravy, ...desserts];

export function isThanksgivingOrderingOpen(now = new Date()) {
  const [y, m, d] = thanksgiving.orderCutoff.split("-").map(Number);
  const endOfCutoffDay = new Date(y, m - 1, d, 23, 59, 59);
  return now <= endOfCutoffDay;
}

export function formatPrice(value: number) {
  return `$${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}
