// "Incognito", the chat mascot: a flat one-colour detective silhouette (fedora, shades,
// upturned collar) without a background that peeks in from the edge of the screen. Original
// artwork in the site's navy. On hover or tap three attention marks pop out and he lifts
// his hat a little.

export function Mascot({ className = "", mini = false }: { className?: string; mini?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={`chat-mascot ${mini ? "chat-mascot--mini" : ""} ${className}`}
    >
      {/* Attention marks, shown on hover or tap */}
      <g className="chat-mascot__alert" stroke="#e39a2d" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M8 30 0 25" />
        <path d="M15 17 9 9" />
        <path d="M28 10 26.5 0" />
      </g>

      <g fill="#172c49">
        {/* Collar and coat */}
        <path d="M27 63 17 88c9 6 20 9 33 9l-6-14Z" />
        <path d="M73 63 83 88c-9 6-20 9-33 9l6-14Z" />
        <path d="M44 83 50 97l6-14-6 6Z" opacity="0.85" />

        {/* Shades */}
        <path d="M31 58c5-1.6 11-1.8 16-.6.3 5.4-3 8.6-8 8.6-4.6 0-8-3.4-8-8Z" />
        <path d="M69 58c-5-1.6-11-1.8-16-.6-.3 5.4 3 8.6 8 8.6 4.6 0 8-3.4 8-8Z" />
        <path d="M46 58.6c2.6-1 5.4-1 8 0" stroke="#172c49" strokeWidth="2.6" fill="none" strokeLinecap="round" />

        {/* Fedora */}
        <g className="chat-mascot__hat">
          <path d="M31 40c0-8 1.5-17 5.5-21.5 2.6-2.8 6.6-1 13.5-1s10.9-1.8 13.5 1C67.5 23 69 32 69 40Z" />
          <path d="M17 46.5C17 42 31 39 50 39s33 3 33 7.5S69 53 50 53 17 51 17 46.5Z" />
          {/* Hat band as a thin cut-out */}
          <path d="M31.2 35.5h37.6" stroke="#ffffff" strokeWidth="2.4" />
        </g>
      </g>
    </svg>
  );
}
