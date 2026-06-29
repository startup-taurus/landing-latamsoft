"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function HowItWorks() {
  const { language } = useLanguage();
  const t = content[language].process;

  return (
    <section
      id="como-trabajamos"
      className="relative py-24 md:py-32 px-6 bg-surface/40 border-y border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {t.title}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="relative">
          {/* connecting line draws across as the steps enter */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: VIEWPORT_ONCE.margin }}
            transition={{ duration: 1.1, ease: EASE_OUT }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-turquoise/40 to-transparent"
          />

          <Stagger gap={0.12} className="grid md:grid-cols-4 gap-8 md:gap-6">
            {t.steps.map((step, i) => (
              <StaggerItem key={i} distance={26} className="relative">
                <div className="relative z-10 mb-6 grid h-14 w-14 place-items-center rounded-xl border border-border bg-background font-mono text-lg font-bold text-brand-turquoise shadow-lg">
                  {step.n}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {step.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
