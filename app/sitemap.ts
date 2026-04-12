import type { MetadataRoute } from "next";

const SITE = "https://synergymarketing.ch";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "/de",
    "/en",
    "/de/impressum",
    "/de/agb",
    "/de/datenschutz",
    "/en/imprint",
    "/en/terms",
    "/en/privacy",
  ];
  return urls.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/de" || path === "/en" ? 1 : 0.5,
  }));
}
