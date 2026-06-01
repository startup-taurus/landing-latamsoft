"use client";

import * as React from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** the final value as a string; numeric part is animated, the rest kept */
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Counts a numeric value up when it scrolls into view. If the value isn't a
 * plain number (e.g. "24/7", "Auto", "0"), it renders as-is — so it's safe to
 * use across a mixed stat strip.
 */
export function CountUp({ value, duration = 1200, className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = React.useState(value);

  const target = React.useMemo(() => {
    const m = value.match(/^(\d+)$/);
    return m ? parseInt(m[1], 10) : null;
  }, [value]);

  React.useEffect(() => {
    if (!inView || target === null) {
      if (target === null) setDisplay(value);
      return;
    }
    if (target === 0) {
      setDisplay("0");
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(eased * target)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
