import { ImageResponse } from "next/og";
import { generateRow } from "@/components/visual/gables";

export const shareImageSize = { width: 1200, height: 630 };

/** Branded Open Graph image: navy night sky, canal-house skyline, lamp-lit waterline. */
export function shareImage({ kicker, subtitle }: { kicker: string; subtitle: string }) {
  const houses = generateRow({ seed: 17, from: -10, to: 1210, baseline: 150, minH: 70, maxH: 140, minW: 40, maxW: 70, windows: false });
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(180deg, #070e1c 0%, #101c32 55%, #1f3a5e 100%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "64px 72px 0" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#e8b96f", textTransform: "uppercase" }}>{kicker}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 112, fontWeight: 700, lineHeight: 0.95, letterSpacing: -4 }}>
            <span>LACHGAS</span>
            <span>AMSTERDAM</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "rgba(255,255,255,0.8)" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <svg width="1200" height="150" viewBox="0 0 1200 150">
            {houses.map((h, i) => (
              <path key={i} d={h.path} fill="#0c172b" />
            ))}
          </svg>
          <div style={{ display: "flex", height: 4, background: "#e8b96f", opacity: 0.6 }} />
          <div style={{ display: "flex", height: 36, background: "#060c18" }} />
        </div>
      </div>
    ),
    shareImageSize,
  );
}
