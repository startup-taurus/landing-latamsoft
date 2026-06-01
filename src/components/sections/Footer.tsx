"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = content[language].footer;
  const h = content[language].header;

  const cols = [
    {
      title: t.colsTitle[0],
      links: [
        { href: "#que-hacemos", label: h.services },
        { href: "#como-trabajamos", label: h.process },
        { href: "#confianza", label: language === "es" ? "Seguridad" : "Security" },
        { href: "#preguntas", label: h.faq },
      ],
    },
    {
      title: t.colsTitle[1],
      links: [
        { href: "#proyectos", label: h.portfolio },
        { href: "#caso-opticas", label: language === "es" ? "Sistema para ópticas" : "Optical system" },
      ],
    },
    {
      title: t.colsTitle[2],
      links: [{ href: "#contacto", label: "WhatsApp" }],
    },
  ];

  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/latamsoft-isologo-light.svg"
              alt="LatamSoft"
              width={150}
              height={42}
              className="mb-5"
            />
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-5">{t.tagline}</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
              <MapPin size={13} className="text-brand-lime" />
              {t.madeIn}
            </span>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-turquoise mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted hover:text-text transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} LatamSoft. {t.rights}</p>
          <p className="font-mono">latamsoft.io</p>
        </motion.div>
      </div>
    </footer>
  );
}
