"use client";

import { CloudCog, Lock, Globe2, HeartHandshake } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [CloudCog, Lock, Globe2, HeartHandshake];

export function Trust() {
  const { language } = useLanguage();
  const t = content[language].trust;

  return (
    <section
      id="confianza"
      className="relative py-24 md:py-32 px-6 overflow-hidden grain bg-brand-night"
    >
      <Parallax amount={120} className="pointer-events-none absolute -bottom-32 left-1/4">
        <div className="h-[40vw] w-[40vw] rounded-full bg-brand-blue/40 blur-[150px]" />
      </Parallax>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="text-balance font-display text-3xl md:text-4xl xl:text-5xl font-bold mb-5 leading-tight text-text">
              {t.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted">{t.subtitle}</p>
          </Reveal>

          <Stagger gap={0.1} className="grid sm:grid-cols-2 gap-5">
            {t.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={i} blur distance={24} className="h-full">
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
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
