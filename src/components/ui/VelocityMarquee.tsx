"use client";

import * as React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
  wrap,
} from "framer-motion";

interface VelocityMarqueeProps {
  items: React.ReactNode[];
  /** base drift speed in %/s of the track */
  baseVelocity?: number;
  className?: string;
}

/**
 * A marquee whose speed and direction react to scroll velocity: it drifts on
 * its own, surges when you scroll, and flips direction with your scrolling.
 * The page's motion becomes legible in the band itself.
 *
 * Under reduced-motion it falls back to a static, readable row.
 */
export function VelocityMarquee({
  items,
  baseVelocity = 2,
  className,
}: VelocityMarqueeProps) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  // baseX runs -20..0 (%), wrapped, so the duplicated track loops seamlessly.
  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);
  const directionFactor = React.useRef(1);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const track = [...items, ...items, ...items, ...items, ...items];

  if (reduce) {
    return (
      <div className={className}>
        <div className="flex items-center gap-10 overflow-hidden whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <motion.div className="flex w-max flex-nowrap" style={{ x }}>
          {track.map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
