// "Incognito", the chat mascot: a small detective head (fedora, shades, upturned
// collar) that peeks in from the edge of the screen. Original artwork in the site
// palette. On hover or tap three attention marks pop out and he lowers his shades.

export function Mascot({ className = "", mini = false }: { className?: string; mini?: boolean }) {
  return (
    <svg
      viewBox="26 12 88 96"
      aria-hidden="true"
      focusable="false"
      className={`chat-mascot ${mini ? "chat-mascot--mini" : ""} ${className}`}
    >
      {/* Attention marks, shown on hover or tap */}
      <g className="chat-mascot__alert" stroke="#e39a2d" strokeWidth="3.2" strokeLinecap="round" fill="none">
        <path d="M36 33 28 29" />
        <path d="M41 22 35 15" />
        <path d="M52 15 50.5 6" />
      </g>

      {/* Face */}
      <ellipse cx="70" cy="74" rx="21" ry="24" fill="#f1dcc6" />
      <path d="M58 86c4 4 8 5 12 5s8-1 12-5" stroke="#d9b896" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Eyes, visible when the shades come down */}
      <ellipse cx="61" cy="70" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="79" cy="70" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="59.5" cy="70.5" r="2.6" fill="#101c32" />
      <circle cx="77.5" cy="70.5" r="2.6" fill="#101c32" />

      {/* Shades */}
      <g className="chat-mascot__shades">
        <path d="M66 68.5c2.6-1.4 5.4-1.4 8 0" stroke="#0e1a2c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M50.5 66c4-1.6 10-1.8 15.5-.6.6 6.3-2.4 10.6-8 10.6-5 0-7.8-4.4-7.5-10Z" fill="#0e1a2c" />
        <path d="M89.5 66c-4-1.6-10-1.8-15.5-.6-.6 6.3 2.4 10.6 8 10.6 5 0 7.8-4.4 7.5-10Z" fill="#0e1a2c" />
        <path d="M54 68.5c1.6-.8 3.6-1 5.4-.8M77.5 67.7c1.8-.2 3.8 0 5.4.8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      </g>

      {/* Upturned collar */}
      <path d="M47 82 38 106l16-2 6-12c-6-1.5-10.5-5-13-10Z" fill="#b8915a" />
      <path d="M93 82l9 24-16-2-6-12c6-1.5 10.5-5 13-10Z" fill="#a8824e" />

      {/* Fedora */}
      <path d="M45 50c0-10 2-24 8-29 4-3 9 1 17 1s13-4 17-1c6 5 8 19 8 29Z" fill="#172c49" />
      <path d="M45.5 43h49l.5 7h-50Z" fill="#e8b96f" />
      <ellipse cx="70" cy="53" rx="41" ry="9" fill="#1f3a5e" />
    </svg>
  );
}
