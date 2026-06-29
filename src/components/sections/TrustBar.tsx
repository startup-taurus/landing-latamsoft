"use client";

import { CheckCircle2, Zap, FileText, Handshake } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

const icons = [CheckCircle2, Zap, FileText, Handshake];

export function TrustBar() {
  const { language } = useLanguage();
  const t = content[language].trustBar;

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="max-w-3xl mb-14 md:mb-16">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {t.title}
          </h2>
        </Reveal>

        <Stagger gap={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={i}
                blur
                distance={24}
                className="flex flex-col gap-4 rounded-xl border border-border bg-brand-darkPanel/60 p-6 transition-colors hover:border-brand-turquoise/30"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/25 text-brand-turquoise">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold leading-snug text-text">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
