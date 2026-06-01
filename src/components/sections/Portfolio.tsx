"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Glasses, GraduationCap, Truck, ShoppingCart, Globe, Sparkles, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [Glasses, GraduationCap, Truck, ShoppingCart, Globe, Sparkles];

export function Portfolio() {
  const { language } = useLanguage();
  const t = content[language].portfolio;

  return (
    <section id="proyectos" className="relative py-24 md:py-32 px-6">
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

        <div className="grid md:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isFlagship = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard max={6} className="h-full">
                  <SpotlightCard
                    glow={isFlagship ? "rgba(18,199,184,0.22)" : "rgba(18,199,184,0.16)"}
                    className={`group/spot flex h-full flex-col p-8 ${
                      isFlagship ? "border-brand-turquoise/40 bg-brand-darkPanel" : ""
                    }`}
                  >
                    {isFlagship && (
                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-turquoise to-brand-lime" />
                    )}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-xl ${
                          isFlagship ? "bg-brand-turquoise text-brand-night" : "bg-brand-blue/25 text-brand-turquoise"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-[0.62rem] uppercase tracking-widest text-brand-lime border border-brand-lime/30 rounded-full px-3 py-1">
                        {item.badge}
                      </span>
                    </div>

                    <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted mb-2">{item.tag}</p>
                    <h3 className="font-display text-xl font-bold mb-3 leading-snug">{item.title}</h3>
                    <p className="text-muted leading-relaxed flex-1">{item.text}</p>

                    {item.link && item.anchor && (
                      <Link
                        href={item.anchor}
                        className="mt-6 inline-flex items-center gap-1.5 font-medium text-brand-turquoise hover:text-brand-lime transition-colors"
                      >
                        {item.link}
                        <ArrowRight size={16} className="transition-transform group-hover/spot:translate-x-1" />
                      </Link>
                    )}
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
