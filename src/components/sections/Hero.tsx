"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Aurora } from "@/components/ui/Aurora";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Animated aurora + hairline grid backdrop */}
      <Aurora />
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* LEFT — studio headline */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-brand-lime" />
              <span className="eyebrow !text-[0.7rem]">{t.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display font-extrabold leading-[1.0] text-4xl md:text-6xl xl:text-[4.1rem] mt-7 mb-7"
            >
              {t.title1}
              <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                <span className="text-gradient">{t.title2}</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 320 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M3 8.5C70 4 180 2.5 317 7"
                    stroke="#B7F45A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 mt-9 justify-center lg:justify-start"
            >
              <Button size="lg" asChild className="group gap-2">
                <Link href="#contacto">
                  {t.ctaPrimary}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#que-hacemos">{t.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — interactive 3D visual (spotlight + floating LS logo) */}
          <HeroVisual cardTitle={t.cardTitle} cardStatus={t.cardStatus} cardPoints={t.cardPoints} />
        </div>
      </div>

      {/* monospace ticker marquee (reusable, pauses on hover) */}
      <div className="relative z-10 mt-16 md:mt-20 border-y border-border bg-surface/40 py-4">
        <Marquee
          pauseOnHover
          items={t.ticker.map((item) => (
            <span className="font-mono text-sm text-muted">{item}</span>
          ))}
        />
      </div>
    </section>
  );
}
