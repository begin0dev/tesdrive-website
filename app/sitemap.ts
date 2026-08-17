import type { MetadataRoute } from "next";

const host =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = host ? `https://${host}` : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy"].map((path) => ({ url: `${siteUrl}${path}` }));
}
