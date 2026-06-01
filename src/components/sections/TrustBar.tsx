"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function TrustBar() {
  const { language } = useLanguage();
  const t = content[language].trustBar;

  return (
    <section className="py-10 px-6 border-y border-border bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2 rounded-xl border border-border bg-brand-darkPanel/60 p-5"
            >
              <p className="font-semibold text-text text-sm leading-snug">{item.title}</p>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
