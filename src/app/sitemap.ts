import type { MetadataRoute } from "next";
import { departments, doctors } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://vivarchhospital.com";
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...departments.map((dept) => ({
      url: `${siteUrl}/specialities/${dept.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...doctors.map((doc) => ({
      url: `${siteUrl}/doctors/${doc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}  
