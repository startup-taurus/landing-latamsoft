"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /**
   * How far the element drifts over the full scroll-through, in px.
   * Positive = moves up as you scroll down (foreground feel);
   * negative = moves down (recedes).
   */
  amount?: number;
  /** horizontal drift instead of / in addition to vertical */
  amountX?: number;
}

/**
 * Scroll-linked parallax. The child drifts as its container passes through the
 * viewport, tied to scroll position (not time) and smoothed with a spring so it
 * never feels mechanical. Disabled under reduced-motion.
 */
export function Parallax({ children, className, amount = 60, amountX = 0 }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const xRaw = useTransform(scrollYProgress, [0, 1], [amountX, -amountX]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 });
  const x = useSpring(xRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y, x }}>{children}</motion.div>
    </div>
  );
}
