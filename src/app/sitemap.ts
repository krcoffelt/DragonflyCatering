import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

const paths = [
  "",
  "/services",
  "/service-areas",
  "/service-areas/main-line-catering",
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
  "/privacy",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...paths, ...blogPaths].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : path.startsWith("/blog/") ? 0.75 : 0.7,
  }));
}
