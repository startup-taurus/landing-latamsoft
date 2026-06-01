"use client";

import { motion } from "framer-motion";
import { Glasses } from "lucide-react";
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
          <span className="h-px flex-1 bg-gradient-to-r from-brand-lime/50 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[auto_1fr] gap-7 items-start max-w-4xl"
        >
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-turquoise text-brand-night shadow-lg shadow-brand-turquoise/20">
            <Glasses size={30} />
          </div>
          <div>
            <p className="eyebrow mb-3">{t.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h2>
            <p className="text-lg text-muted leading-relaxed">{t.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
