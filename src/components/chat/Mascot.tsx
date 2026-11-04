// "Incognito", the chat mascot: a small hooded figure with round glasses who peeks in
// from the edge of the screen. Original artwork in the site palette. The pupils move
// with the CSS variables --look-x / --look-y (set by ChatWidget from the pointer).

export function Mascot({ className = "", mini = false }: { className?: string; mini?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 132"
      aria-hidden="true"
      focusable="false"
      className={`chat-mascot ${mini ? "chat-mascot--mini" : ""} ${className}`}
    >
      <defs>
        <linearGradient id="mascot-hood" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#2a4a74" />
          <stop offset="1" stopColor="#152842" />
        </linearGradient>
        <radialGradient id="mascot-lens" cx="0.38" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#2b3b55" />
          <stop offset="1" stopColor="#0d1626" />
        </radialGradient>
      </defs>

      {/* Body and hood */}
      <g className="chat-mascot__body">
        <path
          d="M60 6C30 6 13 29 13 58v36c0 21 15 34 47 34s47-13 47-34V58C107 29 90 6 60 6Z"
          fill="url(#mascot-hood)"
        />
        {/* Hood rim */}
        <path
          d="M60 22c-22 0-35 15-35 36 0 20 14 34 35 34s35-14 35-34c0-21-13-36-35-36Z"
          fill="#0e1a2c"
        />
        {/* Face in the shadow of the hood */}
        <ellipse cx="60" cy="61" rx="29" ry="27" fill="#16243a" />
        {/* Drawstrings */}
        <path d="M45 93c-1 8-1 14 1 19" stroke="#e8b96f" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M75 93c1 8 1 14-1 19" stroke="#e8b96f" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
        <circle cx="46" cy="114" r="3" fill="#e8b96f" />
        <circle cx="74" cy="114" r="3" fill="#e8b96f" />
      </g>

      {/* Glasses with eyes */}
      <g className="chat-mascot__eyes">
        <path d="M56 59h8" stroke="#e8b96f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="45" cy="60" r="12" fill="url(#mascot-lens)" stroke="#e8b96f" strokeWidth="3" />
        <circle cx="75" cy="60" r="12" fill="url(#mascot-lens)" stroke="#e8b96f" strokeWidth="3" />
        <g className="chat-mascot__pupils">
          <circle cx="45" cy="60" r="3.6" fill="#ffffff" />
          <circle cx="75" cy="60" r="3.6" fill="#ffffff" />
        </g>
        {/* Lens glints */}
        <path d="M37 54a9 9 0 0 1 6-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.35" fill="none" />
        <path d="M67 54a9 9 0 0 1 6-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.35" fill="none" />
        {/* Eyelids for blinking */}
        <g className="chat-mascot__lids">
          <rect x="33" y="47" width="24" height="26" rx="12" fill="#16243a" />
          <rect x="63" y="47" width="24" height="26" rx="12" fill="#16243a" />
        </g>
      </g>

      {/* Hand holding on to the edge of the screen (waves on hover) */}
      {!mini && (
        <g className="chat-mascot__hand">
          <ellipse cx="18" cy="96" rx="10" ry="9" fill="#2a4a74" />
          <path d="M11 92c2-3 5-4 8-4M10 97c2-2 5-3 8-3" stroke="#0e1a2c" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </g>
      )}
    </svg>
  );
}
