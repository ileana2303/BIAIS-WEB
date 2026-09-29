import type { MetadataRoute } from "next"

const baseUrl = "https://www.biaisys.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tech-orbit`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us/careers`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]
}
