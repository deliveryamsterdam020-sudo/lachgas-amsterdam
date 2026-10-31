import { generateRow } from "./gables";

/** A thin silhouette band of canal houses, used as a section divider. */
export function GableSkyline({ seed = 5, className, fill = "currentColor" }: { seed?: number; className?: string; fill?: string }) {
  const houses = generateRow({ seed, from: -20, to: 1620, baseline: 120, minH: 58, maxH: 112, minW: 30, maxW: 54, windows: false });
  return (
    <svg viewBox="0 0 1600 120" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" focusable="false">
      <g fill={fill}>
        {houses.map((h, i) => (
          <path key={i} d={h.path} />
        ))}
      </g>
    </svg>
  );
}
