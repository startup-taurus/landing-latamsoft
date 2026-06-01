"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: React.ReactNode[];
  /** direction of travel */
  reverse?: boolean;
  /** seconds per loop */
  duration?: number;
  className?: string;
  /** separator dot between items */
  separator?: boolean;
  /** pause the scroll while hovered */
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal ticker. Duplicates its children and translates -50% so
 * the loop is seamless. Reusable for the hero strip and the case studies.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 38,
  className,
  separator = true,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div
        className={cn("flex w-max", pauseOnHover && "hover:[animation-play-state:paused]")}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap">{item}</span>
            {separator && <span className="mx-6 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime/60" />}
          </span>
        ))}
      </div>
    </div>
  );
}
