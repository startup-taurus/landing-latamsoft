"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { content } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = content[language].header;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "que-hacemos", label: t.services },
    { id: "como-trabajamos", label: t.process },
    { id: "proyectos", label: t.portfolio },
    { id: "preguntas", label: t.faq },
  ];

  const active = useScrollSpy(links.map((l) => l.id));

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* logo with live status dot */}
        <Link href="/" className="group inline-flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="relative inline-flex">
            <Image src="/brand/latamsoft-symbol-light.svg" alt="LatamSoft" width={34} height={34} priority />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-lime ring-2 ring-background animate-glow-pulse" />
          </span>
          <span className="font-display font-bold text-xl tracking-tight">
            Latam<span className="text-brand-turquoise">Soft</span>
          </span>
        </Link>

        {/* desktop nav — animated underline + sliding active indicator */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => {
            const isActive = active === l.id;
            return (
              <Link
                key={l.id}
                href={`#${l.id}`}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="font-mono text-[0.6rem] text-brand-turquoise/70">
                    0{i + 1}
                  </span>
                  {l.label}
                </span>
                {/* sliding active pill (shared layout) */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {/* animated underline on hover (and persistent under active) */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-brand-turquoise to-brand-lime transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="font-mono text-xs font-bold text-muted hover:text-brand-lime transition-colors uppercase tracking-widest border border-border rounded-full px-2.5 py-1"
            aria-label="Toggle language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="#contacto">{t.contact}</Link>
          </Button>

          <button className="md:hidden text-text" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <Link
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 py-3 text-base font-medium transition-colors border-b border-border/60 last:border-0 ${
                    active === l.id ? "text-brand-lime" : "text-muted hover:text-text"
                  }`}
                >
                  <span className="font-mono text-[0.65rem] text-brand-turquoise/70">0{i + 1}</span>
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full">
                <Link href="#contacto" onClick={() => setMenuOpen(false)}>
                  {t.contact}
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
