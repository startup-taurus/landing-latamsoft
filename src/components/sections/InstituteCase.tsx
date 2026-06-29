"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ClipboardCheck,
  CalendarClock,
  Wallet,
  CalendarRange,
  RefreshCw,
  UserSquare2,
  ShieldHalf,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { Marquee } from "@/components/ui/Marquee";
import { CountUp } from "@/components/ui/CountUp";
import { Parallax } from "@/components/ui/Parallax";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const featureIcons = [
  GraduationCap,
  ClipboardCheck,
  CalendarClock,
  Wallet,
  CalendarRange,
  RefreshCw,
  UserSquare2,
  ShieldHalf,
];

export function InstituteCase() {
  const { language } = useLanguage();
  const t = content[language].institute;
  const [active, setActive] = useState(0);
  const current = t.features[active];

  return (
    <section id="caso-instituto" className="relative py-24 md:py-32 px-6 scroll-mt-24 overflow-hidden">
      <Parallax amount={100} className="pointer-events-none absolute -top-20 right-0">
        <div className="h-[36vw] w-[36vw] rounded-full bg-brand-lime/10 blur-[150px]" />
      </Parallax>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* "another case" divider — mirrors the optics one but flips the accent */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-gradient-to-l from-brand-turquoise/50 to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-turquoise whitespace-nowrap">
            {t.kicker}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[auto_1fr] gap-7 items-start mb-12"
        >
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-lime text-brand-night shadow-lg shadow-brand-lime/20">
            <GraduationCap size={30} />
          </div>
          <div className="max-w-3xl">
            <p className="eyebrow !text-brand-lime mb-3">{t.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h2>
            <p className="text-lg text-muted leading-relaxed">{t.summary}</p>
          </div>
        </motion.div>

        {/* before / after — compact pills, distinct from the optics layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 mb-14"
        >
          <div className="rounded-xl border border-border bg-background/60 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">{t.beforeLabel}</p>
            <ul className="space-y-2.5">
              {t.before.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                  <X size={15} className="mt-0.5 shrink-0 text-red-400/70" />
                  <span className="line-through decoration-border">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grain relative overflow-hidden rounded-xl border border-brand-lime/30 bg-brand-darkPanel p-6">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-lime to-brand-turquoise" />
            <p className="font-mono text-xs uppercase tracking-widest text-brand-lime mb-4">{t.afterLabel}</p>
            <ul className="space-y-2.5">
              {t.after.map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-text">
                  <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-brand-lime" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* the moving strip of features (your favorite) — clickable chips */}
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-5">{t.featuresLabel}</p>
        <div className="mb-8 -mx-6 px-6">
          <Marquee
            duration={34}
            pauseOnHover
            separator={false}
            items={t.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`mr-3 inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                    active === i
                      ? "border-brand-lime bg-brand-lime/10 text-brand-lime"
                      : "border-border bg-surface text-muted hover:text-text hover:border-brand-turquoise/50"
                  }`}
                >
                  <Icon size={16} />
                  {f.title}
                </button>
              );
            })}
          />
        </div>

        {/* detail panel for the selected feature */}
        <TiltCard max={4}>
          <SpotlightCard glow="rgba(183,244,90,0.16)" className="bg-brand-darkPanel p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center"
              >
                <div>
                  <span className="font-mono text-xs text-brand-lime">
                    {String(active + 1).padStart(2, "0")} / {String(t.features.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-4 leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{current.text}</p>
                </div>
                <ul className="space-y-3">
                  {current.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-3 rounded-lg bg-brand-night/50 px-4 py-3.5 text-sm"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-lime/20 text-brand-lime">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </SpotlightCard>
        </TiltCard>

        {/* who + metrics */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 mt-12 items-center">
          <div className="rounded-xl border border-border bg-surface p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-turquoise mb-3">{t.whoTitle}</p>
            <p className="text-muted leading-relaxed">{t.who}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {t.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-4 text-center"
                title={m.text}
              >
                <div className="font-display text-3xl font-extrabold text-brand-lime leading-none mb-1">
                  <CountUp value={m.stat} />
                </div>
                <p className="text-[0.7rem] text-muted leading-tight">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
