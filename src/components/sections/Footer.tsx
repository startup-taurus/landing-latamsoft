"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="border-t border-border mt-12 bg-background relative z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="inline-flex items-center">
            <Image 
              src="/brand/latamsoft-isologo-light.svg" 
              alt="LatamSoft" 
              width={140} 
              height={40} 
              className="hidden dark:block"
            />
            <Image 
              src="/brand/latamsoft-isologo-dark.svg" 
              alt="LatamSoft" 
              width={140} 
              height={40} 
              className="block dark:hidden"
            />
          </Link>

          <div className="flex gap-6 text-sm font-medium text-muted">
            <Link href="#soluciones" className="hover:text-brand-turquoise transition-colors">
              {content[language].header.solutions}
            </Link>
            <Link href="#contacto" className="hover:text-brand-lime transition-colors">
              {content[language].header.contact}
            </Link>
          </div>
        </div>

        <motion.div 
          className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} LatamSoft. {t.rights}</p>
          <p className="mt-2 sm:mt-0">{t.tagline}</p>
        </motion.div>
      </div>
    </footer>
  );
}