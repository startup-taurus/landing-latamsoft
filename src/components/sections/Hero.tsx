"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Parallax } from "@/components/ui/Parallax";
import { VelocityMarquee } from "@/components/ui/VelocityMarquee";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";

const accentClass = (accent: string) =>
  accent === "turquoise"
    ? "text-brand-turquoise"
    : accent === "lime"
    ? "text-brand-lime"
    : "text-text";

export function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);

  // The whole left column drifts up and dims as the hero scrolls away — a clean,
  // continuous exit rather than a hard cut into the next section.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, reduce ? 1 : 0.15]
  );

  // Headline: each line rises in from a clipped baseline, staggered.
  const lineParent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const lineChild: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { y: "115%" },
        show: { y: 0, transition: { duration: 0.85, ease: EASE_OUT } },
      };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pb-0 pt-32 md:pt-40"
    >
      {/* ── Backdrop: soft parallax glow + grain + editorial guides ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Parallax amount={-60} className="absolute inset-0">
          <div className="absolute -right-24 -top-16 h-[460px] w-[460px] rounded-full bg-brand-turquoise/12 blur-[130px]" />
          <div className="absolute -left-28 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-blue/25 blur-[130px]" />
        </Parallax>
        <div className="grain absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-6xl px-6">
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE_OUT }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-border to-transparent"
          />
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE_OUT }}
            className="absolute right-6 top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-border to-transparent"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* LEFT — editorial statement */}
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            {/* live-status line (replaces the generic eyebrow pill) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="inline-flex items-center gap-2.5 text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-lime/70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lime" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* kinetic headline */}
            <motion.h1
              variants={lineParent}
              initial="hidden"
              animate="show"
              className="mb-7 mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-text text-balance sm:text-5xl xl:text-[4rem]"
            >
              {t.titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.12em]">
                  <motion.span variants={lineChild} className="block">
                    {line.map((seg, j) => (
                      <span key={j} className={accentClass(seg.accent)}>
                        {seg.text}
                      </span>
                    ))}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
              className="max-w-[34rem] text-pretty text-lg leading-relaxed text-muted md:text-xl"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" asChild className="group gap-2">
                <Link href="#contacto">
                  {t.ctaPrimary}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#que-hacemos">{t.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — bespoke system board (parallax depth) */}
          <Parallax amount={48} className="w-full">
            <HeroVisual board={t.board} />
          </Parallax>
        </div>
      </div>

      {/* ── Scroll-reactive capabilities band ── */}
      <div className="relative z-10 mt-16 border-y border-border bg-surface/30 py-4 md:mt-24">
        <VelocityMarquee
          baseVelocity={1.6}
          items={t.ticker.map((item, i) => (
            <React.Fragment key={i}>
              <span className="font-mono text-sm text-muted">{item}</span>
              <span className="mx-8 h-1.5 w-1.5 rounded-full bg-brand-lime/60" />
            </React.Fragment>
          ))}
        />
      </div>
    </section>
  );
}
