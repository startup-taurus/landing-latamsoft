"use client";

import { FileX2, PackageSearch, CalendarX, Boxes, UserMinus, Building2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [FileX2, PackageSearch, CalendarX, Boxes, UserMinus, Building2];

export function Problem() {
  const { language } = useLanguage();
  const t = content[language].problem;

  return (
    <section id="problema" className="relative pt-14 md:pt-16 pb-24 md:pb-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {t.title}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted">{t.subtitle}</p>
        </Reveal>

        <Stagger
          gap={0.07}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border"
        >
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={i}
                distance={18}
                className="group bg-background p-7 md:p-8 transition-colors duration-300 hover:bg-surface"
              >
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors group-hover:border-brand-lime/40 group-hover:text-brand-lime">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug">{item.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
