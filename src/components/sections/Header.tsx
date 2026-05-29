"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = content[language].header;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image 
            src="/brand/latamsoft-symbol-light.svg" 
            alt="LatamSoft" 
            width={32} 
            height={32} 
            className="hidden dark:block"
          />
          <Image 
            src="/brand/latamsoft-symbol-dark.svg" 
            alt="LatamSoft" 
            width={32} 
            height={32} 
            className="block dark:hidden"
          />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">LatamSoft</span>
        </Link>
        <nav className="flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="text-xs font-bold text-muted hover:text-brand-lime transition-colors uppercase tracking-widest"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          
          <Link href="#soluciones" className="hidden sm:block text-sm font-medium text-muted hover:text-text transition-colors">
            {t.solutions}
          </Link>
          <Button size="sm" asChild>
            <Link href="#contacto">{t.contact}</Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
