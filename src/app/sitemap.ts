import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/applications", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const mainPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route.path}`,
    lastModified: new Date("2026-10-09"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${SITE_CONFIG.siteUrl}/products/${product.slug}`,
    lastModified: new Date("2026-10-09"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...productPages];
}
