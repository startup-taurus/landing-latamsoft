"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline reading-progress bar pinned to the top of the viewport. Tied to
 * page scroll and spring-smoothed, it gives a constant, quiet sense of motion
 * and position as you move down the page.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-brand-blue via-brand-turquoise to-brand-lime"
    />
  );
}
