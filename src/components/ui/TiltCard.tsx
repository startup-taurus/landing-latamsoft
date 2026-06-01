"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  className?: string;
  children: React.ReactNode;
  /** max rotation in degrees */
  max?: number;
}

/**
 * Subtle 3D tilt toward the cursor with spring physics. Kept gentle so it reads
 * as "premium", not gimmicky. Disabled automatically on touch (no hover).
 */
export function TiltCard({ className, children, max = 7 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={cn("[transform-style:preserve-3d]", className)}
    >
      {children}
    </motion.div>
  );
}
