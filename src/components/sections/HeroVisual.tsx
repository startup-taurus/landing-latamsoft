"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  LineChart,
  Users,
  Truck,
  ClipboardList,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

const MODULES = [
  { key: "inventario", label: "Inventario", icon: Boxes },
  { key: "ventas", label: "Ventas", icon: LineChart },
  { key: "clientes", label: "Clientes", icon: Users },
  { key: "logistica", label: "Logística", icon: Truck },
  { key: "reportes", label: "Reportes", icon: ClipboardList },
];

// Bar heights (%) for the little activity chart.
const BARS = [34, 52, 41, 64, 56, 78, 88];

const FEED = [
  { label: "Pedido #1042", meta: "Entregado" },
  { label: "Venta del día", meta: "+ $1.240" },
  { label: "Cliente nuevo", meta: "María L." },
];

/**
 * The hero's bespoke visual: a solid "system board" that depicts a business
 * brought into order — a real-feeling product window, NOT a glassmorphic
 * feature card. Continuous, quiet motion (a module that cycles, a chart that
 * grows, a feed that fills in) signals "live software" without shouting.
 *
 * Depth comes from a glow placed *behind* the panel, never a drop-shadow on the
 * panel itself (avoids the 1px-border + soft-shadow "ghost card" look).
 */
export function HeroVisual({ status }: { status: string }) {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % MODULES.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* depth glow — behind the panel, not a shadow on it */}
      <div aria-hidden className="absolute -inset-8 -z-10">
        <div className="absolute right-4 top-0 h-44 w-44 rounded-full bg-brand-turquoise/20 blur-[80px]" />
        <div className="absolute bottom-2 left-2 h-40 w-40 rounded-full bg-brand-lime/12 blur-[80px]" />
      </div>

      <TiltCard max={6}>
        <div className="grain relative overflow-hidden rounded-lg border border-border bg-brand-darkPanel">
          {/* window top bar */}
          <div className="flex items-center justify-between border-b border-border/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src="/brand/latamsoft-symbol-light.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-[0.7rem] text-muted">
                panel.latamsoft
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-brand-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-lime animate-glow-pulse" />
              en vivo
            </span>
          </div>

          <div className="grid grid-cols-[auto_1fr]">
            {/* module sidebar — active item cycles with a sliding indicator */}
            <nav className="border-r border-border/70 p-2 sm:p-3">
              <ul className="space-y-1">
                {MODULES.map((m, i) => {
                  const Icon = m.icon;
                  const on = i === active;
                  return (
                    <li key={m.key}>
                      <div
                        className={cn(
                          "relative flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors duration-300",
                          on ? "text-brand-night" : "text-muted"
                        )}
                      >
                        {on && (
                          <motion.span
                            layoutId="hero-active-module"
                            className="absolute inset-0 -z-10 rounded-md bg-brand-turquoise"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 32,
                            }}
                          />
                        )}
                        <Icon size={15} className="shrink-0" />
                        <span className="hidden text-xs font-semibold sm:block">
                          {m.label}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* main panel */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-sm font-bold leading-tight text-text">
                  {status}
                </p>
                <ArrowUpRight size={16} className="shrink-0 text-brand-turquoise" />
              </div>

              {/* two compact stats */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Stat label="Pedidos" value="1248" />
                <Stat label="A tiempo" value="98" suffix="%" />
              </div>

              {/* activity chart — bars grow from the baseline */}
              <div className="mt-4 flex h-16 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + i * 0.06,
                      ease: EASE_OUT,
                    }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    className={cn(
                      "flex-1 rounded-sm",
                      i === BARS.length - 1
                        ? "bg-brand-lime"
                        : "bg-brand-turquoise/35"
                    )}
                  />
                ))}
              </div>

              {/* live feed — rows fill in one by one */}
              <ul className="mt-4 space-y-1.5">
                {FEED.map((f, i) => (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.75 + i * 0.12,
                      ease: EASE_OUT,
                    }}
                    className="flex items-center justify-between rounded-md bg-brand-night/50 px-3 py-2"
                  >
                    <span className="flex items-center gap-2 text-xs text-text">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-turquoise/20 text-brand-turquoise">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f.label}
                    </span>
                    <span className="font-mono text-[0.65rem] text-muted">
                      {f.meta}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-md border border-border/60 bg-brand-night/40 px-3 py-2">
      <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="font-display text-lg font-bold text-text">
        <CountUp value={value} />
        {suffix}
      </p>
    </div>
  );
}
