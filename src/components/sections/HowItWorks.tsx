"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function HowItWorks() {
  const { language } = useLanguage();
  const t = content[language].process;

  return (
    <section id="como-trabajamos" className="relative py-24 md:py-32 px-6 bg-surface/40 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h2>
          <p className="text-lg text-muted leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          {/* connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 grid h-14 w-14 place-items-center rounded-xl border border-border bg-background font-mono text-lg font-bold text-brand-turquoise shadow-lg">
                {step.n}
              </div>
              <h3 className="font-display text-lg font-bold mb-2 leading-snug">{step.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
