import type { MetadataRoute } from "next";
import { SITE } from "./portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url }];
}
