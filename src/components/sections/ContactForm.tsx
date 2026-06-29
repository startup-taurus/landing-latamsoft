"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { Aurora } from "@/components/ui/Aurora";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", company: "" });
  const { language } = useLanguage();
  const t = content[language].cta;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "593995923599";
    let text = t.whatsappTemplate.replace("{{name}}", formData.name || (language === "es" ? "alguien" : "someone"));
    text = text.replace(
      "{{company}}",
      formData.company ? (language === "es" ? ` de ${formData.company}` : ` from ${formData.company}`) : ""
    );
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <Aurora className="opacity-70" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grain relative overflow-hidden rounded-2xl border border-brand-turquoise/30 bg-brand-darkPanel p-8 md:p-14 shadow-2xl"
        >
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-turquoise to-brand-lime" />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <p className="eyebrow mb-4">{t.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight text-text">
                {t.title1}
                <span className="text-brand-turquoise">{t.title2}</span>
              </h2>
              <p className="text-lg text-muted mb-8 max-w-md leading-relaxed">{t.description}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <Zap size={16} className="text-brand-lime" />
                  {t.fastResponse}
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-turquoise" />
                  {t.noCommitment}
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto md:min-w-[380px]">
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <Input
                  placeholder={t.namePlaceholder}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 bg-brand-night/60"
                />
                <Input
                  placeholder={t.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-14 bg-brand-night/60"
                />
                <Button type="submit" size="lg" className="w-full gap-3">
                  <MessageCircle size={20} />
                  {t.submit}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
