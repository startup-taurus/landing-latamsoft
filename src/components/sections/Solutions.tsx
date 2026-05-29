"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Solutions() {
  const { language } = useLanguage();
  const t = content[language].solutions;

  return (
    <section id="soluciones" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 md:mb-24 text-center sm:text-left"
        >
          <p className="text-brand-lime font-bold uppercase tracking-widest text-sm mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.items.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-surface border border-border p-8 md:p-10 rounded-lg hover:border-brand-turquoise/50 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-turquoise transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <span className="inline-block text-xs font-bold px-3 py-1 bg-background border border-border rounded-full text-muted mb-6">
                {sol.category}
              </span>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-brand-turquoise transition-colors">{sol.title}</h3>
              <p className="text-muted leading-relaxed mb-8">{sol.description}</p>
              
              <ul className="space-y-3">
                {sol.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
