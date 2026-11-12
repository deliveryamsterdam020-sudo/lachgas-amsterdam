import type { NextConfig } from "next";
import { AUTOMATED_CLIENT_UA_PATTERNS } from "./src/lib/bots";

// The homepages carry the age check. For recognisable automated clients they are served from a
// prerendered variant without it (see src/components/home/AgeGateSlot.tsx). Homepage → variant.
const AGE_GATE_FREE_VARIANTS = [
  { home: "/", variant: "/zonder-leeftijdscheck/" },
  { home: "/en/", variant: "/en/without-age-check/" },
];

// Security headers. The site loads no third-party scripts, fonts or trackers,
// so the policy can stay strict. 'unsafe-inline' for scripts is needed for the
// framework's inline bootstrap and JSON-LD blocks on statically generated pages.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'none'",
      "object-src 'none'",
      // No upgrade-insecure-requests: every resource is same-origin and HSTS already
      // enforces HTTPS. The directive also broke local testing in WebKit.
    ].join("; "),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  trailingSlash: true,
  poweredByHeader: false,
  experimental: { globalNotFound: true },
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // One canonical host, matching the primary domain in Vercel: the bare .nl domain and
  // both .com variants redirect permanently to https://www.lachgasinfo.nl. The www host
  // itself must never redirect, or it loops with Vercel's own domain redirect.
  async redirects() {
    const hosts = ["lachgasinfo.nl", "lachgasinfo.com", "www.lachgasinfo.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.lachgasinfo.nl/:path*",
      permanent: true,
    }));
    // Old or guessed URLs without a page of their own: send them to the homepage.
    const paths = [{ source: "/lachgas", destination: "/", permanent: true }];
    // The age-check variants are internal: opened directly, they lead to the homepage. Redirects
    // only see the requested URL, so the rewrites below still reach the variants.
    const variants = AGE_GATE_FREE_VARIANTS.map(({ home, variant }) => ({ source: variant, destination: home, permanent: true }));
    return [...hosts, ...paths, ...variants];
  },
  // Decided in routing, before the CDN cache, so both variants stay static and cached. beforeFiles,
  // because the homepages exist as files and later rewrites would never be reached.
  async rewrites() {
    return {
      // One rule per pattern (Vercel limits the length of a condition); the first match wins.
      // A missing or empty User-Agent matches none of them, so it gets the age check.
      beforeFiles: AGE_GATE_FREE_VARIANTS.flatMap(({ home, variant }) =>
        AUTOMATED_CLIENT_UA_PATTERNS.map((value) => ({
          source: home,
          destination: variant,
          has: [{ type: "header" as const, key: "user-agent", value }],
        })),
      ),
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    // The dev server needs eval for fast refresh and runs over plain HTTP, so CSP
    // and HSTS are only sent in production builds.
    const headers =
      process.env.NODE_ENV === "production"
        ? securityHeaders
        : securityHeaders.filter(
            (h) => h.key !== "Strict-Transport-Security" && h.key !== "Content-Security-Policy",
          );
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
