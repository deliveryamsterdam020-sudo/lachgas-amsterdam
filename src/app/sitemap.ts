import type { MetadataRoute } from "next";
import { alternatePath, isIndexable, pages, specialRoutes } from "@/content";
import { absoluteUrl } from "@/lib/site";

/**
 * Lists only indexable (published) URLs, each with its hreflang alternate.
 * Pages awaiting review are reachable but deliberately absent until approved.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...specialRoutes, ...pages];
  return routes
    .filter((r) => isIndexable(r.status))
    .map((r) => {
      const alt = alternatePath(r.id);
      const altRoute = alt ? routes.find((x) => x.path === alt) : undefined;
      const languages: Record<string, string> = { [r.locale === "nl" ? "nl-NL" : "en"]: absoluteUrl(r.path) };
      if (alt && altRoute && isIndexable(altRoute.status)) languages[r.locale === "nl" ? "en" : "nl-NL"] = absoluteUrl(alt);
      return {
        url: absoluteUrl(r.path),
        lastModified: r.reviewed,
        alternates: { languages },
      };
    });
}
