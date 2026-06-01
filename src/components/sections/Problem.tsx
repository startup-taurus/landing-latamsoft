"use client";

import { motion } from "framer-motion";
import { FileX2, PackageSearch, CalendarX, Boxes, UserMinus, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [FileX2, PackageSearch, CalendarX, Boxes, UserMinus, Building2];

export function Problem() {
  const { language } = useLanguage();
  const t = content[language].problem;

  return (
    <section id="problema" className="relative pt-14 md:pt-16 pb-24 md:pb-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h2>
          <p className="text-lg text-muted leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group bg-background p-7 md:p-8 hover:bg-surface transition-colors duration-300"
              >
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface text-muted group-hover:text-brand-lime group-hover:border-brand-lime/40 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 leading-snug">{item.title}</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
