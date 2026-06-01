"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

interface HeroVisualProps {
  cardTitle: string;
  cardStatus: string;
  cardPoints: string[];
}

/**
 * The hero's right-hand visual: a "what you get" card with a cursor-following
 * spotlight, topped by the LS logo floating in light 3D parallax.
 *
 * Efficiency notes:
 * - Pure CSS transforms + framer springs, NO WebGL. Cheap on weak devices.
 * - A single pointer listener on the wrapper; spotlight uses CSS vars (no React
 *   re-render per move). will-change hints the compositor.
 * - Tilt + parallax disabled on touch / prefers-reduced-motion.
 */
export function HeroVisual({ cardTitle, cardStatus, cardPoints }: HeroVisualProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const spotRef = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // normalized cursor position within the wrapper (-0.5 .. 0.5)
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 120, damping: 18 });
  const sy = useSpring(py, { stiffness: 120, damping: 18 });

  // card tilts gently; logo tilts a bit more + sits "above" for parallax
  const cardRX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const cardRY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const logoRX = useTransform(sy, [-0.5, 0.5], [14, -14]);
  const logoRY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const logoX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const logoY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      if (!reduce) {
        px.set(nx - 0.5);
        py.set(ny - 0.5);
      }
      // spotlight position (CSS vars — no re-render)
      const s = spotRef.current;
      if (s) {
        s.style.setProperty("--mx", `${e.clientX - r.left}px`);
        s.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    },
    [px, py, reduce]
  );

  const onLeave = React.useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group/hero relative mx-auto w-full max-w-md lg:max-w-none"
      style={{ perspective: 1000 }}
    >
      {/* floating status chip */}
      <div className="absolute -top-5 -right-3 z-30 hidden md:flex items-center gap-2 rounded-xl border border-brand-lime/40 bg-brand-night/90 px-3 py-2 shadow-xl animate-float-slow">
        <span className="h-2 w-2 rounded-full bg-brand-lime animate-glow-pulse" />
        <span className="font-mono text-[0.7rem] text-brand-lime">{cardStatus}</span>
      </div>

      {/* THE CARD — tilts + spotlight */}
      <motion.div
        style={{ rotateX: cardRX, rotateY: cardRY, transformStyle: "preserve-3d", willChange: "transform" }}
        className="grain relative overflow-hidden rounded-xl border border-border bg-brand-darkPanel/90 p-7 shadow-2xl backdrop-blur-sm"
      >
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-turquoise to-brand-lime" />

        {/* cursor-following spotlight (CSS-var driven, only visible on hover) */}
        <div
          ref={spotRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx) var(--my), rgba(18,199,184,0.22), transparent 60%)",
          }}
        />

        <div className="relative z-10 flex items-center gap-3 border-b border-border pb-5">
          <div className="relative h-11 w-11 shrink-0">
            <Image src="/brand/latamsoft-symbol-light.png" alt="" fill className="object-contain" />
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">LatamSoft</p>
            <p className="font-display font-bold text-text leading-tight">{cardTitle}</p>
          </div>
        </div>

        <ul className="relative z-10 mt-5 space-y-3">
          {cardPoints.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.14 }}
              className="flex items-center gap-3 rounded-lg bg-brand-night/50 px-4 py-3.5"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-turquoise text-brand-night">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-text leading-snug">{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* THE LOGO — floats above the card with stronger parallax (the "3D in motion") */}
      <motion.div
        style={{
          rotateX: logoRX,
          rotateY: logoRY,
          x: logoX,
          y: logoY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="pointer-events-none absolute -left-6 -top-8 z-20 hidden lg:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-24 w-24"
        >
          {/* glow halo behind logo */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-turquoise/30 blur-2xl" />
          <Image
            src="/brand/latamsoft-symbol-light.png"
            alt="LatamSoft"
            fill
            priority
            className="object-contain drop-shadow-[0_12px_30px_rgba(6,24,38,0.6)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
