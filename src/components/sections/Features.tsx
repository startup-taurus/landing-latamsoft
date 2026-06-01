"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  CalendarCheck,
  FlaskConical,
  Receipt,
  Boxes,
  Building2,
  MessageCircle,
  ShieldCheck,
  Check,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [
  ClipboardList,
  CalendarCheck,
  FlaskConical,
  Receipt,
  Boxes,
  Building2,
  MessageCircle,
  ShieldCheck,
];

export function Features() {
  const { language } = useLanguage();
  const t = content[language].features;

  return (
    <section id="funciones" className="relative py-24 md:py-32 px-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            // First card spans two columns on large screens to break the grid.
            const wide = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className={wide ? "lg:col-span-2" : ""}
              >
                <SpotlightCard className="group/spot card-lift h-full p-7 md:p-8 hover:border-brand-turquoise/50">
                  <div className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-turquoise to-brand-lime transition-transform duration-500 group-hover/spot:scale-x-100" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-turquoise/12 text-brand-turquoise transition-colors group-hover/spot:bg-brand-turquoise group-hover/spot:text-brand-night">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted border border-border rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 leading-snug group-hover/spot:text-brand-turquoise transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 text-[0.95rem]">{item.text}</p>

                  <ul className={`grid gap-2.5 ${wide ? "sm:grid-cols-3" : ""}`}>
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2.5 text-sm font-medium">
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-lime/20 text-brand-lime">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
