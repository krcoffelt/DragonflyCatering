import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "",
  "/services",
  "/custom-catering",
  "/wedding-catering-rehearsal-dinners-showers",
  "/corporate-catering",
  "/social-events",
  "/private-chef-experiences",
  "/event-bartending",
  "/dragonfly-event-space",
  "/preferred-venues",
  "/sample-menus",
  "/gallery",
  "/reviews",
  "/about",
  "/community",
  "/gift-cards",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
