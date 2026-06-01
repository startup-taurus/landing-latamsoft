"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Outcomes() {
  const { language } = useLanguage();
  const t = content[language].outcomes;

  return (
    <section className="relative py-20 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-4xl font-bold text-center max-w-3xl mx-auto mb-14 leading-tight"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-7 md:p-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient mb-1">
                <CountUp value={item.stat} />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-turquoise mb-3">
                {item.label}
              </p>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
