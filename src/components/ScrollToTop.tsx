"use client";

import { useEffect } from "react";

/**
 * Backs up the inline <head> script: keeps scroll restoration manual and resets
 * to the top on load / bfcache restore (when there's no hash to honor).
 * Anchor links (#section) still work because we only reset when the URL has no hash.
 */
export function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const toTop = () => {
      if (!window.location.hash) window.scrollTo(0, 0);
    };
    toTop();
    window.addEventListener("pageshow", toTop);
    return () => window.removeEventListener("pageshow", toTop);
  }, []);

  return null;
}
