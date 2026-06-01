"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** glow color (rgb/hex). Defaults to brand turquoise. */
  glow?: string;
  /** extra ring on the border that follows the cursor */
  border?: boolean;
}

/**
 * A card with a radial spotlight that follows the cursor, plus an optional
 * border highlight. Pure CSS variables driven by pointer position — cheap and
 * smooth. Inspired by the Linear / Aceternity "spotlight card" pattern.
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, children, glow = "rgba(18,199,184,0.18)", border = true, ...props }, ref) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const onMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }, []);

    return (
      <div
        ref={innerRef}
        onMouseMove={onMove}
        className={cn(
          "group/spot relative overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300",
          className
        )}
        style={
          {
            "--glow": glow,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* spotlight fill */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), var(--glow), transparent 65%)",
          }}
        />
        {/* border highlight */}
        {border && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
            style={{
              background:
                "radial-gradient(280px circle at var(--mx) var(--my), rgba(183,244,90,0.5), transparent 60%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";
