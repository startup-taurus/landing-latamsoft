"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Faq() {
  const { language } = useLanguage();
  const t = content[language].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="relative py-24 md:py-32 px-6 bg-surface/40 border-y border-border">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{t.title}</h2>
        </motion.div>

        <div className="space-y-3">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border bg-background overflow-hidden transition-colors ${
                  isOpen ? "border-brand-turquoise/50" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base md:text-lg leading-snug">{item.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-brand-turquoise bg-brand-turquoise text-brand-night"
                        : "border-border text-muted"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
