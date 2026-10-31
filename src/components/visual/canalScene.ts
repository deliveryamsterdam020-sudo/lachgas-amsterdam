import { generateRow, rng, type House } from "./gables.ts";

// A canal at dusk, drawn as a standalone SVG: a row of gabled houses on the far
// quay, a side canal crossed by a bridge outlined in light bulbs, elms, quay
// lanterns, and reflections breaking up on the water. It is served from
// /canal-scene.svg so it is cached once instead of inlined into every page.
// Animations are CSS inside the file and stop under prefers-reduced-motion.

const W = 1600;
const H = 1000;
const QUAY = 680;
const WATER = 700;
const mirror = (y: number) => 2 * WATER - y;
const n = (v: number) => Math.round(v * 10) / 10;

const front: House[] = [
  ...generateRow({ seed: 11, from: -30, to: 560, baseline: QUAY, minH: 300, maxH: 450, litChance: 0.34 }),
  ...generateRow({ seed: 29, from: 1040, to: 1640, baseline: QUAY, minH: 290, maxH: 440, litChance: 0.34 }),
];
const back: House[] = generateRow({ seed: 7, from: 520, to: 1090, baseline: 650, minH: 150, maxH: 230, minW: 44, maxW: 70, litChance: 0.22 });

const ARCH = { cx: 800, rx: 150, ry: 54 };
const bridgePath = `M560,${QUAY} Q800,626 1040,${QUAY} L1040,${WATER} L${ARCH.cx + ARCH.rx},${WATER} A${ARCH.rx},${ARCH.ry} 0 0 0 ${ARCH.cx - ARCH.rx},${WATER} L560,${WATER} Z`;

const archBulbs = Array.from({ length: 15 }, (_, i) => {
  const t = Math.PI * (i / 14);
  return { x: ARCH.cx + ARCH.rx * Math.cos(t), y: WATER - ARCH.ry * Math.sin(t) };
});
const deckBulbs = Array.from({ length: 17 }, (_, i) => {
  const t = i / 16;
  // Quadratic Bézier of the deck, lifted 8px for the railing.
  return {
    x: (1 - t) ** 2 * 560 + 2 * (1 - t) * t * 800 + t ** 2 * 1040,
    y: (1 - t) ** 2 * QUAY + 2 * (1 - t) * t * 626 + t ** 2 * QUAY - 8,
  };
});

const trees = [
  { x: 150, r: 84 },
  { x: 470, r: 70 },
  { x: 1130, r: 76 },
  { x: 1470, r: 90 },
];
const lanterns = [310, 1290];

const anim = (seed: number, o: number) => {
  const rand = rng(seed);
  return `--d:${(3.5 + rand() * 4).toFixed(2)}s;--delay:${(-rand() * 6).toFixed(2)}s;--o:${o.toFixed(2)};--x:${(rand() * 6 - 3).toFixed(1)}px`;
};

function houses(list: House[], fill: string, windowFill: string, withWindows = true) {
  // Lit windows are drawn statically here; their flicker lives in the light layer.
  return list
    .map((h) => {
      let out = `<path d="${h.path}" fill="${fill}"/>`;
      if (h.beam) out += `<rect x="${n(h.beam.x)}" y="${n(h.beam.y)}" width="${h.beam.w}" height="9" fill="${fill}"/>`;
      if (withWindows)
        for (const w of h.windows) {
          out += w.lit
            ? `<rect x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" rx="1" fill="url(#window)" opacity="${w.o}"/>`
            : `<rect x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" rx="1" fill="${windowFill}"/>`;
        }
      return out;
    })
    .join("");
}

const treesSvg = (fill: string) =>
  `<g fill="${fill}">${trees
    .map(
      (t) =>
        `<rect x="${t.x - 4}" y="${QUAY - 120}" width="8" height="120"/><circle cx="${t.x}" cy="${QUAY - 150}" r="${t.r}"/><circle cx="${n(t.x - t.r * 0.7)}" cy="${QUAY - 120}" r="${n(t.r * 0.62)}"/><circle cx="${n(t.x + t.r * 0.72)}" cy="${QUAY - 126}" r="${n(t.r * 0.66)}"/><circle cx="${n(t.x + t.r * 0.2)}" cy="${QUAY - 205}" r="${n(t.r * 0.55)}"/>`,
    )
    .join("")}</g>`;

// A generic Amsterdam church tower: square base, lantern stages and spire.
const tower = (() => {
  const x = 1262;
  return `<g fill="#14243f"><rect x="${x}" y="250" width="64" height="420"/><rect x="${x + 6}" y="190" width="52" height="64"/><rect x="${x + 12}" y="140" width="40" height="54"/><path d="M${x + 16},140 Q${x + 32},96 ${x + 48},140 Z"/><rect x="${x + 30}" y="58" width="4" height="50"/><rect x="${x + 18}" y="206" width="8" height="26" fill="url(#window)" opacity="0.35"/><rect x="${x + 38}" y="206" width="8" height="26" fill="url(#window)" opacity="0.35"/></g>`;
})();

// Only the light layer is animated. Its elements are plain rectangles without
// filters or masks, so re-rendering it each frame stays cheap.
const STYLE = `
.shimmer{animation:shimmer var(--d,5s) ease-in-out infinite;animation-delay:var(--delay,0s);transform-box:fill-box;transform-origin:center;opacity:var(--o,.55)}
@keyframes shimmer{0%,100%{transform:scaleX(1) translateX(0);opacity:var(--o,.55)}50%{transform:scaleX(.55) translateX(var(--x,3px));opacity:calc(var(--o,.55)*.45)}}
.window-glow{animation:glow var(--d,9s) ease-in-out infinite;animation-delay:var(--delay,0s)}
@keyframes glow{0%,100%{opacity:var(--o,.9)}50%{opacity:calc(var(--o,.9)*.55)}}
.ripple-lines{animation:ripple 9s linear infinite}
@keyframes ripple{from{transform:translateX(0)}to{transform:translateX(-120px)}}
@media (prefers-reduced-motion:reduce){.shimmer,.window-glow,.ripple-lines{animation:none}}`;

const open = (extra = "") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice">${extra}`;

/** Animated lights only: flickering windows, reflections and ripples. Overlaid on the base layer. */
export function canalLightsSvg(): string {
  const glows = front
    .flatMap((h, i) => h.windows.map((w, j) => ({ w, i, j })))
    .filter(({ w }) => w.glow)
    .map(({ w, i, j }) => `<rect x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" rx="1" fill="#05101f" class="window-glow" style="${anim(i * 31 + j, 0.45)}"/>`)
    .join("");
  return `${open(`<style>${STYLE}</style>`)}
<defs><pattern id="ripples" width="120" height="7" patternUnits="userSpaceOnUse"><path d="M0 3.5 Q15 1.5 30 3.5 T60 3.5 T90 3.5 T120 3.5" stroke="#0a1424" stroke-width="2.2" fill="none"/></pattern></defs>
<g>${glows}</g>
<g>${streaks()}</g>
<g class="ripple-lines" opacity="0.75"><rect x="0" y="${WATER + 4}" width="${W + 240}" height="${H - WATER}" fill="url(#ripples)"/></g>
</svg>`;
}

function streaks(): string {
  const litFront = front.flatMap((h) => h.windows.filter((w) => w.lit));
  return [
    ...litFront.map((w, i) => {
      const y = mirror(w.y + w.h);
      if (y > H) return "";
      return `<rect x="${n(w.x + w.w * 0.15)}" y="${n(y)}" width="${n(w.w * 0.7)}" height="${n(Math.min(w.h * 0.9, 26))}" rx="2" fill="#e8b96f" class="shimmer" style="${anim(i + 101, 0.32)}"/>`;
    }),
    ...archBulbs.map((b, i) => `<rect x="${n(b.x - 2)}" y="${n(mirror(b.y) - 3)}" width="4" height="10" rx="2" fill="#f7d9a3" class="shimmer" style="${anim(i + 501, 0.7)}"/>`),
    ...lanterns.flatMap((x, i) =>
      [0, 1, 2, 3, 4].map(
        (k) =>
          `<rect x="${x - 9 + (k % 2) * 3}" y="${mirror(QUAY - 82) + k * 16 - 30}" width="${18 - k * 2}" height="5" rx="2.5" fill="#f7d9a3" class="shimmer" style="${anim(900 + i * 10 + k, 0.5 - k * 0.07)}"/>`,
      ),
    ),
  ].join("");
}

/** The static scene: sky, houses, bridge, water and softened reflections. */
export function canalSceneSvg(): string {
  const rand = rng(3);
  const stars = Array.from({ length: 46 }, () => `<circle cx="${n(rand() * W)}" cy="${n(rand() * 330)}" r="${n(0.6 + rand() * 1.1)}" opacity="${n(0.15 + rand() * 0.5)}"/>`).join("");
  const bulbs = [...deckBulbs, ...archBulbs];

  return `${open()}
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070e1c"/><stop offset="0.45" stop-color="#101c32"/><stop offset="0.78" stop-color="#1f3a5e"/><stop offset="1" stop-color="#3a4d6b"/></linearGradient>
<radialGradient id="horizon" cx="0.5" cy="0.68" r="0.55"><stop offset="0" stop-color="#e8b96f" stop-opacity="0.22"/><stop offset="1" stop-color="#e8b96f" stop-opacity="0"/></radialGradient>
<radialGradient id="moon" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f4ecdf" stop-opacity="0.35"/><stop offset="1" stop-color="#f4ecdf" stop-opacity="0"/></radialGradient>
<linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#13243f"/><stop offset="1" stop-color="#060c18"/></linearGradient>
<linearGradient id="window" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6d49a"/><stop offset="1" stop-color="#e2a654"/></linearGradient>
<radialGradient id="lantern" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f7d9a3" stop-opacity="0.9"/><stop offset="0.25" stop-color="#e8b96f" stop-opacity="0.35"/><stop offset="1" stop-color="#e8b96f" stop-opacity="0"/></radialGradient>
<filter id="soften" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="2.2"/></filter>
<linearGradient id="reflectionFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="white" stop-opacity="0.75"/><stop offset="1" stop-color="white" stop-opacity="0.1"/></linearGradient>
<mask id="reflectionMask"><rect x="0" y="${WATER}" width="${W}" height="${H - WATER}" fill="url(#reflectionFade)"/></mask>
</defs>
<g>
<rect width="${W}" height="${WATER}" fill="url(#sky)"/><rect width="${W}" height="${WATER}" fill="url(#horizon)"/>
<g fill="#f4ecdf">${stars}</g>
<circle cx="1360" cy="170" r="120" fill="url(#moon)"/><circle cx="1360" cy="170" r="26" fill="#efe4d2" opacity="0.9"/>
${tower}
${houses(back, "#162843", "#1b2f4d")}
<rect x="540" y="650" width="520" height="${WATER - 650}" fill="#0c1930"/>
${houses(front, "#0c172b", "#14233c")}
${treesSvg("#08111f")}
${lanterns.map((x) => `<rect x="${x - 1.5}" y="${QUAY - 78}" width="3" height="78" fill="#08111f"/><circle cx="${x}" cy="${QUAY - 82}" r="30" fill="url(#lantern)"/><circle cx="${x}" cy="${QUAY - 82}" r="3.4" fill="#f7d9a3"/>`).join("")}
<rect x="0" y="${QUAY}" width="${W}" height="${WATER - QUAY}" fill="#091223"/><rect x="0" y="${QUAY}" width="${W}" height="1" fill="#e8b96f" opacity="0.18"/>
<path d="${bridgePath}" fill="#0a1528"/>
<g fill="#f7d9a3">${deckBulbs.map((b) => `<circle cx="${n(b.x)}" cy="${n(b.y)}" r="2.3" opacity="0.95"/>`).join("")}${archBulbs.map((b) => `<circle cx="${n(b.x)}" cy="${n(b.y)}" r="2.6"/>`).join("")}</g>
<g>${bulbs.map((b) => `<circle cx="${n(b.x)}" cy="${n(b.y)}" r="9" fill="url(#lantern)" opacity="0.6"/>`).join("")}</g>
<rect x="0" y="${WATER}" width="${W}" height="${H - WATER}" fill="url(#water)"/>
<g mask="url(#reflectionMask)"><g transform="translate(0 ${2 * WATER}) scale(1 -1)" filter="url(#soften)" opacity="0.55">${houses(front, "#0f1d34", "#14233c", false)}${treesSvg("#0b1527")}<path d="${bridgePath}" fill="#0d192e"/></g></g>
</g>
</svg>`;
}
