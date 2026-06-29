"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  EASE_OUT,
  VIEWPORT_ONCE,
  directionOffset,
  type RevealDirection,
} from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** which way the element travels in from */
  direction?: RevealDirection;
  /** travel distance in px */
  distance?: number;
  /** add a brief blur to soften the entrance (premium, masks the crossfade) */
  blur?: boolean;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span";
}

/**
 * A single, polished scroll-reveal. Replaces the ad-hoc `initial/whileInView`
 * blocks scattered across the sections so every reveal shares the same easing
 * and respects reduced-motion in one place.
 *
 * Reduced motion → a plain crossfade (no travel, no blur).
 */
export function Reveal({
  children,
  className,
  direction = "up",
  distance = 24,
  blur = false,
  delay = 0,
  duration = 0.6,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const hidden = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        ...directionOffset(direction, distance),
        ...(blur ? { filter: "blur(10px)" } : {}),
      };

  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once, margin: VIEWPORT_ONCE.margin }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Orchestrates a staggered cascade for a list of children. Pair with
 * <StaggerItem>. The cascade is short (one beat per child) so it never blocks
 * the eye — exactly what "a thousand voices in tune" stagger should feel like.
 */
export function Stagger({
  children,
  className,
  gap = 0.07,
  delayChildren = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delayChildren?: number;
  once?: boolean;
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: VIEWPORT_ONCE.margin }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 22,
  blur = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          ...directionOffset(direction, distance),
          ...(blur ? { filter: "blur(8px)" } : {}),
        },
    show: reduce
      ? { opacity: 1 }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur ? { filter: "blur(0px)" } : {}),
          transition: { duration: 0.55, ease: EASE_OUT },
        },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
