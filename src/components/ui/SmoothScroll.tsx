"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia scrolling for mouse wheels and trackpads. Touch devices keep their native momentum,
 * which already feels right, and nothing is smoothed for people who prefer reduced motion.
 * In-page anchors (skip link, table of contents) stay native so focus moves with them.
 */
export function SmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const sync = () => {
      const wanted = finePointer.matches && !reduced.matches;
      if (wanted && !lenis) {
        lenis = new Lenis({
          autoRaf: true,
          lerp: 0.085,
          wheelMultiplier: 0.95,
          stopInertiaOnNavigate: true,
          prevent: (node) => node.id === "mobile-menu" || node.id === "chat-log" || node.id === "alarm-dialog",
        });
      } else if (!wanted && lenis) {
        lenis.destroy();
        lenis = null;
      }
    };

    sync();
    finePointer.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return null;
}
