"use client";

import { motion } from "framer-motion";
import { CloudCog, Lock, Globe2, HeartHandshake } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [CloudCog, Lock, Globe2, HeartHandshake];

export function Trust() {
  const { language } = useLanguage();
  const t = content[language].trust;

  return (
    <section id="confianza" className="relative py-24 md:py-32 px-6 overflow-hidden grain bg-brand-night">
      <div className="absolute -bottom-32 left-1/4 w-[40vw] h-[40vw] bg-brand-blue/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold mb-5 leading-tight text-text">
              {t.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed">{t.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {t.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                >
                  <SpotlightCard
                    glow="rgba(18,199,184,0.2)"
                    className="h-full bg-brand-darkPanel/70 p-7 backdrop-blur-sm"
                  >
                    <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-lg bg-brand-lime/15 text-brand-lime">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 text-text">{item.title}</h3>
                    <p className="text-muted text-[0.95rem] leading-relaxed">{item.text}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
