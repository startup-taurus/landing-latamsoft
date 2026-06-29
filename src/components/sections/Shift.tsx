"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Parallax } from "@/components/ui/Parallax";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Shift() {
  const { language } = useLanguage();
  const t = content[language].shift;

  return (
    <section className="relative py-24 md:py-28 px-6 overflow-hidden">
      <Parallax
        amount={110}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[40vw] w-[60vw] rounded-full bg-brand-turquoise/10 blur-[140px]" />
      </Parallax>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-background/60 p-7 md:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-5">{t.beforeLabel}</p>
            <ul className="space-y-4">
              {t.before.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-500/10 text-red-400/80">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span className="leading-snug line-through decoration-border decoration-1">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-turquoise/40 bg-brand-turquoise/10 text-brand-turquoise">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grain relative overflow-hidden rounded-xl border border-brand-turquoise/30 bg-brand-darkPanel p-7 md:p-8 shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-turquoise to-brand-lime" />
            <p className="font-mono text-xs uppercase tracking-widest text-brand-turquoise mb-5">{t.afterLabel}</p>
            <ul className="space-y-4">
              {t.after.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-text">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-turquoise text-brand-night">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="font-medium leading-snug">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
