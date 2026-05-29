"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-blue/30 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-turquoise/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.p 
        className="text-brand-turquoise font-bold uppercase tracking-widest text-sm mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t.eyebrow}
      </motion.p>
      
      <motion.h1 
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight relative z-10 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t.title1}<span className="text-brand-lime">{t.title2}</span>{t.title3}
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-muted max-w-2xl mb-12 relative z-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {t.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button size="lg" asChild>
          <Link href="#contacto">{t.ctaPrimary}</Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="#soluciones">{t.ctaSecondary}</Link>
        </Button>
      </motion.div>
    </section>
  );
}
