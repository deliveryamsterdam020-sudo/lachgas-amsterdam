import type { NextConfig } from "next";

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
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
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
  // One canonical host: the .com domain and www variants redirect permanently to https://lachgasinfo.nl.
  async redirects() {
    return ["www.lachgasinfo.nl", "lachgasinfo.com", "www.lachgasinfo.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://lachgasinfo.nl/:path*",
      permanent: true,
    }));
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
