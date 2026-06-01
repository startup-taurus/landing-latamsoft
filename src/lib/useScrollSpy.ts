"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view, for nav highlighting.
 * Uses IntersectionObserver (cheap, no scroll listeners). The section whose
 * top is closest to ~30% of the viewport wins.
 */
export function useScrollSpy(ids: string[], offsetRatio = 0.35) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        // pick the most-visible section; fall back to last passed section
        if (visible.size) {
          let best: string | null = null;
          let bestRatio = -1;
          visible.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          });
          setActive(best);
        }
      },
      {
        rootMargin: `-${Math.round(offsetRatio * 100)}% 0px -${Math.round(
          (1 - offsetRatio) * 100
        )}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetRatio]);

  return active;
}
