"use client";

import { Glasses, Eye, Stethoscope, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [Glasses, Eye, Stethoscope];

export function WhoItsFor() {
  const { language } = useLanguage();
  const t = content[language].who;

  return (
    <section id="para-quien" className="relative py-24 md:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {t.title}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted">{t.subtitle}</p>
        </Reveal>

        <Stagger gap={0.1} className="grid md:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={i} blur distance={24} className="h-full">
                <SpotlightCard
                  glow="rgba(183,244,90,0.16)"
                  className="group/spot card-lift h-full p-8 hover:border-brand-lime/50"
                >
                  <ArrowUpRight
                    size={20}
                    className="absolute top-6 right-6 text-border transition-colors group-hover/spot:text-brand-lime"
                  />
                  <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-xl bg-brand-blue/30 text-brand-turquoise">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.text}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
