"use client";

import { motion } from "framer-motion";
import { Glasses } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EASE_OUT, VIEWPORT_ONCE } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function CaseIntro() {
  const { language } = useLanguage();
  const t = content[language].caseIntro;

  return (
    <section id="caso-opticas" className="relative pt-24 md:pt-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        {/* divider that signals "we're zooming into one project" */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-lime whitespace-nowrap">
            {t.kicker}
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: VIEWPORT_ONCE.margin }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            style={{ transformOrigin: "left" }}
            className="h-px flex-1 bg-gradient-to-r from-brand-lime/50 to-transparent"
          />
        </div>

        <div className="grid lg:grid-cols-[auto_1fr] gap-7 items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: VIEWPORT_ONCE.margin }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-turquoise text-brand-night shadow-lg shadow-brand-turquoise/20"
          >
            <Glasses size={30} />
          </motion.div>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">{t.eyebrow}</p>
            <h2 className="text-balance font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
              {t.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
