import { canalSceneSvg } from "@/components/visual/canalScene";

// The hero scene is served as a standalone, cacheable SVG instead of being
// inlined (and duplicated in the React payload) on every page view.
export function GET() {
  return new Response(canalSceneSvg(), {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
