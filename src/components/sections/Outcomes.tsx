"use client";

import { CountUp } from "@/components/ui/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Outcomes() {
  const { language } = useLanguage();
  const t = content[language].outcomes;

  return (
    <section className="relative py-20 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <h2 className="mx-auto max-w-3xl text-balance font-display text-2xl font-bold leading-tight md:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <Stagger
          gap={0.09}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border"
        >
          {t.items.map((item, i) => (
            <StaggerItem
              key={i}
              distance={26}
              className="bg-background p-7 md:p-8 text-center"
            >
              <div className="mb-1 font-display text-4xl font-extrabold text-brand-lime md:text-5xl">
                <CountUp value={item.stat} />
              </div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-turquoise">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
