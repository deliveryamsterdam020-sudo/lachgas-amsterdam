// Abstract map of the grachtengordel: the four main canals as concentric
// half-rings south of the IJ, with the Singelgracht as the outer ring. A
// stylisation, not a cartographic map.

const CX = 400;
const CY = 70;
const rings = [
  { r: 110, name: "Singel" },
  { r: 160, name: "Herengracht" },
  { r: 210, name: "Keizersgracht" },
  { r: 260, name: "Prinsengracht" },
  { r: 318, name: "Singelgracht" },
];

export function CanalRings({ className, labels = true }: { className?: string; labels?: boolean }) {
  return (
    <svg viewBox="0 0 800 420" className={className} aria-hidden="true" focusable="false">
      {/* Label paths only exist when labels are shown, so decorative copies never duplicate ids. */}
      {labels && (
        <defs>
          {rings.map(({ r, name }) => (
            <path key={name} id={`ring-${name}`} d={`M${CX - r + 10},${CY} A${r - 10},${r - 10} 0 0 0 ${CX + r - 10},${CY}`} />
          ))}
        </defs>
      )}
      <rect x="0" y="0" width="800" height={CY - 18} fill="currentColor" opacity="0.08" />
      <text x="40" y={CY - 30} className="eyebrow" fill="currentColor" opacity="0.6" fontSize="12">
        IJ
      </text>
      {rings.map(({ r, name }, i) => (
        <path
          key={name}
          d={`M${CX - r},${CY} A${r},${r} 0 0 0 ${CX + r},${CY}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === rings.length - 1 ? 1 : 2}
          strokeDasharray={i === rings.length - 1 ? "2 6" : undefined}
          opacity={0.25 + i * 0.12}
        />
      ))}
      {/* Radial streets (the ‘straatjes’) */}
      {[200, 230, 260, 290, 320, 340].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={CX + 90 * Math.cos(a)}
            y1={CY - 90 * Math.sin(a)}
            x2={CX + 270 * Math.cos(a)}
            y2={CY - 270 * Math.sin(a)}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.18"
          />
        );
      })}
      <circle cx={CX} cy={CY - 6} r="5" fill="var(--color-lamp)" />
      {labels &&
        rings.slice(0, 4).map(({ name }) => (
          <text key={name} fontSize="11" fill="currentColor" opacity="0.7" letterSpacing="2">
            <textPath href={`#ring-${name}`} startOffset="22%">
              {name.toUpperCase()}
            </textPath>
          </text>
        ))}
    </svg>
  );
}
