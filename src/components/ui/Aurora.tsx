"use client";

import { cn } from "@/lib/utils";

/**
 * A soft, slowly-rotating aurora of brand-colored blobs. Sits behind a section
 * as an ambient backdrop. Far less "flat AI gradient" than a single static blur.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-aurora opacity-60 blur-[90px]">
        <div className="absolute left-[10%] top-[15%] h-[45%] w-[45%] rounded-full bg-brand-blue/50" />
        <div className="absolute right-[8%] top-[10%] h-[40%] w-[40%] rounded-full bg-brand-turquoise/30" />
        <div className="absolute bottom-[8%] left-[30%] h-[42%] w-[42%] rounded-full bg-brand-lime/15" />
      </div>
    </div>
  );
}
