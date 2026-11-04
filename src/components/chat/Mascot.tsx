// "Incognito", the chat mascot: a little detective with a fedora, dark shades and an
// upturned trench-coat collar who peeks in from the edge of the screen. Original artwork
// in the site palette. On hover he lowers his shades to peer over them and swings his
// coat open, but the lining holds only information (law, health, cylinders, 112): a wink
// at the site's "no sales" promise. The pupils follow --look-x / --look-y (set by ChatWidget).

export function Mascot({ className = "", mini = false }: { className?: string; mini?: boolean }) {
  return (
    <svg
      viewBox={mini ? "22 10 96 92" : "0 0 140 162"}
      aria-hidden="true"
      focusable="false"
      className={`chat-mascot ${mini ? "chat-mascot--mini" : ""} ${className}`}
    >
      <g className="chat-mascot__body">
        {!mini && (
          <>
            {/* Coat lining with the "goods": only information */}
            <path d="M34 108h72v54H34z" fill="#0e1a2c" />
            <g className="chat-mascot__goods">
              {/* Law */}
              <rect x="40" y="114" width="15" height="15" rx="3.5" fill="#1f3a5e" />
              <text x="47.5" y="125.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#e8b96f" fontFamily="system-ui, sans-serif">
                §
              </text>
              {/* Health */}
              <path
                d="M47.5 147.5s-7-4.4-7-9.2c0-2.4 1.8-4.1 3.9-4.1 1.4 0 2.5.8 3.1 1.8.6-1 1.7-1.8 3.1-1.8 2.1 0 3.9 1.7 3.9 4.1 0 4.8-7 9.2-7 9.2Z"
                fill="#e2735f"
              />
              {/* Cylinder, to recycle */}
              <rect x="86" y="113" width="10" height="18" rx="5" fill="#9aa6b6" />
              <rect x="88.5" y="110" width="5" height="4" rx="1.2" fill="#737d8c" />
              <path d="M88 125.5a3 3 0 1 0 3-3.2" stroke="#0f5f4a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="m90 120.7 1.6 1.6-1.9 1.2" stroke="#0f5f4a" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Emergency */}
              <rect x="80" y="137" width="22" height="11" rx="3" fill="#9a3412" />
              <text x="91" y="145.4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#ffffff" fontFamily="system-ui, sans-serif">
                112
              </text>
            </g>

            {/* Coat flaps (swing open on hover) */}
            <path
              className="chat-mascot__flap chat-mascot__flap--l"
              d="M70 104 52 100c-13 3-25 9-32 18-5 8-7 26-7 44h57Z"
              fill="#c9a26a"
            />
            <path
              className="chat-mascot__flap chat-mascot__flap--r"
              d="m70 104 18-4c13 3 25 9 32 18 5 8 7 26 7 44H70Z"
              fill="#b8915a"
            />
            {/* Belt */}
            <path d="M13 140h114v7H13z" fill="#8f6d3f" className="chat-mascot__belt" />
          </>
        )}

        {/* Face, partly hidden behind the collar */}
        <ellipse cx="70" cy="74" rx="21" ry="24" fill="#f1dcc6" />
        <path d="M58 86c4 4 8 5 12 5s8-1 12-5" stroke="#d9b896" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Eyes (visible when the shades come down) */}
        <g className="chat-mascot__eyes">
          <ellipse cx="61" cy="70" rx="5" ry="5.4" fill="#ffffff" />
          <ellipse cx="79" cy="70" rx="5" ry="5.4" fill="#ffffff" />
          <g className="chat-mascot__pupils">
            <circle cx="61" cy="70.5" r="2.6" fill="#101c32" />
            <circle cx="79" cy="70.5" r="2.6" fill="#101c32" />
          </g>
          <g className="chat-mascot__lids">
            <rect x="55" y="64" width="12" height="12" rx="6" fill="#f1dcc6" />
            <rect x="73" y="64" width="12" height="12" rx="6" fill="#f1dcc6" />
          </g>
        </g>

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
        <g className="chat-mascot__hat">
          <path d="M45 50c0-10 2-24 8-29 4-3 9 1 17 1s13-4 17-1c6 5 8 19 8 29Z" fill="#172c49" />
          <path d="M60 22c3 3 6 4 10 4s7-1 10-4" stroke="#0e1a2c" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M45.5 43h49l.5 7h-50Z" fill="#e8b96f" />
          <ellipse cx="70" cy="53" rx="41" ry="9" fill="#1f3a5e" />
          <path d="M31 53c8 4.5 22 6.5 39 6.5s31-2 39-6.5" stroke="#0e1a2c" strokeWidth="2" fill="none" opacity="0.45" />
        </g>
      </g>
    </svg>
  );
}
