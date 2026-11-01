// Deterministic generator for Amsterdam canal-house silhouettes. Every gable
// type here exists along the grachten: trapgevel (step), halsgevel (neck),
// klokgevel (bell), tuitgevel (spout) and lijstgevel (cornice). A fixed seed
// keeps server and client output identical and the skyline stable.

export type GableType = "step" | "neck" | "bell" | "spout" | "cornice";

export interface Window {
  x: number;
  y: number;
  w: number;
  h: number;
  lit: boolean;
  o: number;
  glow: boolean;
}

export interface House {
  x: number;
  w: number;
  top: number;
  baseline: number;
  type: GableType;
  path: string;
  windows: Window[];
  beam?: { x: number; y: number; w: number };
}

export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;
// Path data rounded to 0.1px: the skyline is inlined several times per page, so float noise like 62.13000000000001 adds up.
const roundPath = (d: string) => d.replace(/-?\d+\.\d+/g, (n) => String(r1(Number(n))));

function gablePath(type: GableType, x: number, w: number, top: number, baseline: number): string {
  const gh = Math.min(w * 0.9, 90); // gable height
  const e = top + gh; // eave line
  const L = x;
  const R = x + w;
  const cx = x + w / 2;
  switch (type) {
    case "step": {
      const steps = 3;
      const sx = w / (2 * steps + 2);
      const sy = gh / (steps + 1);
      let d = `M${L},${baseline} L${L},${e}`;
      for (let i = 0; i < steps; i++) d += ` L${L + sx * i},${e - sy * (i + 1)} L${L + sx * (i + 1)},${e - sy * (i + 1)}`;
      d += ` L${L + sx * steps},${top} L${R - sx * steps},${top}`;
      for (let i = steps - 1; i >= 0; i--) d += ` L${R - sx * (i + 1)},${e - sy * (i + 1)} L${R - sx * i},${e - sy * (i + 1)}`;
      return `${d} L${R},${e} L${R},${baseline} Z`;
    }
    case "neck": {
      const nw = w * 0.46;
      const nl = cx - nw / 2;
      const nr = cx + nw / 2;
      const sh = e - gh * 0.35;
      return `M${L},${baseline} L${L},${e} Q${L + (nl - L) * 0.2},${sh} ${nl},${sh} L${nl},${top + gh * 0.18} L${cx},${top} L${nr},${top + gh * 0.18} L${nr},${sh} Q${R - (R - nr) * 0.2},${sh} ${R},${e} L${R},${baseline} Z`;
    }
    case "bell": {
      const nw = w * 0.5;
      const nl = cx - nw / 2;
      const nr = cx + nw / 2;
      return `M${L},${baseline} L${L},${e} C${L},${e - gh * 0.45} ${nl},${e - gh * 0.3} ${nl},${top + gh * 0.25} Q${cx},${top - gh * 0.12} ${nr},${top + gh * 0.25} C${nr},${e - gh * 0.3} ${R},${e - gh * 0.45} ${R},${e} L${R},${baseline} Z`;
    }
    case "spout": {
      const tw = w * 0.22;
      return `M${L},${baseline} L${L},${e} L${cx - tw / 2},${top + gh * 0.1} L${cx - tw / 2},${top} L${cx + tw / 2},${top} L${cx + tw / 2},${top + gh * 0.1} L${R},${e} L${R},${baseline} Z`;
    }
    case "cornice": {
      const ov = 4;
      const ct = top + gh * 0.55;
      return `M${L},${baseline} L${L},${ct + 10} L${L - ov},${ct + 6} L${L - ov},${ct} L${R + ov},${ct} L${R + ov},${ct + 6} L${R},${ct + 10} L${R},${baseline} Z`;
    }
  }
}

const TYPES: GableType[] = ["step", "neck", "bell", "spout", "cornice", "neck", "step", "bell"];

interface RowOptions {
  seed: number;
  from: number;
  to: number;
  baseline: number;
  minH: number;
  maxH: number;
  minW?: number;
  maxW?: number;
  litChance?: number;
  windows?: boolean;
}

export function generateRow(o: RowOptions): House[] {
  const rand = rng(o.seed);
  const houses: House[] = [];
  let x = o.from;
  const minW = o.minW ?? 62;
  const maxW = o.maxW ?? 104;
  while (x < o.to) {
    const w = Math.round(minW + rand() * (maxW - minW));
    const h = Math.round(o.minH + rand() * (o.maxH - o.minH));
    const top = o.baseline - h;
    const type = TYPES[Math.floor(rand() * TYPES.length)];
    const house: House = { x, w, top, baseline: o.baseline, type, path: roundPath(gablePath(type, x, w, top, o.baseline)), windows: [] };

    if (o.windows !== false) {
      const gh = Math.min(w * 0.9, 90);
      const cols = w > 86 ? 3 : 2;
      const colW = w / cols;
      const ww = Math.round(colW * 0.42);
      const wh = Math.round(ww * 1.55);
      const start = top + gh + 14;
      const rowGap = wh + 16;
      const rows = Math.max(1, Math.floor((o.baseline - 30 - start) / rowGap));
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const lit = rand() < (o.litChance ?? 0.3);
          house.windows.push({
            x: r1(x + colW * c + (colW - ww) / 2),
            y: r1(start + r * rowGap),
            w: ww,
            h: wh,
            lit,
            o: r1(0.45 + rand() * 0.5),
            glow: lit && rand() < 0.35,
          });
        }
      }
      // Gable window
      if (type !== "cornice" && rand() < 0.7) {
        const gw = Math.round(ww * 0.8);
        house.windows.push({ x: r1(x + w / 2 - gw / 2), y: r1(top + gh * 0.42), w: gw, h: Math.round(gw * 1.3), lit: rand() < 0.25, o: 0.6, glow: false });
      }
      // Hoisting beam (hijsbalk), characteristic of canal houses
      if (rand() < 0.6) house.beam = { x: x + w / 2 - 1.5, y: top + (type === "cornice" ? gh * 0.55 - 8 : 4), w: 3 };
    }

    houses.push(house);
    x += w + (rand() < 0.15 ? 2 : 0);
  }
  return houses;
}
