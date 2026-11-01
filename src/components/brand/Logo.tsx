/** Brand mark: a step gable above a waterline. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M7 24V12.5h2.5V10H12V7.5h2.5V5h3v2.5H20V10h2.5v2.5H25V24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      <rect x="14" y="16" width="4" height="8" fill="currentColor" />
      <path d="M4 27.5c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1 2 1 4 1" fill="none" stroke="var(--color-lamp)" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`flex items-center gap-2.5 ${tone === "light" ? "text-white" : "text-ink"}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[-0.01em]">Lachgas Amsterdam</span>
        <span className={`eyebrow mt-1 hidden text-[11px] min-[400px]:block ${tone === "light" ? "text-white/60" : "text-muted"}`}>Onafhankelijk · Independent</span>
      </span>
    </span>
  );
}
