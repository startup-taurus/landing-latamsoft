"use client";

import { motion } from "framer-motion";
import { Database, RefreshCw, BarChart2, TrendingUp, ShoppingCart, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [Database, RefreshCw, BarChart2, TrendingUp, ShoppingCart, Globe];

export function WhenToHelp() {
  const { language } = useLanguage();
  const t = content[language].whenToHelp;

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h2>
          <p className="text-lg text-muted leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col gap-4 rounded-xl border border-border bg-brand-darkPanel/60 p-6 hover:border-brand-turquoise/30 transition-colors"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/25 text-brand-turquoise">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
