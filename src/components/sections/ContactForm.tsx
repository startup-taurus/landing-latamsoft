"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", company: "" });
  const { language } = useLanguage();
  const t = content[language].contact;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "593995923599";
    let text = t.whatsappTemplate.replace("{{name}}", formData.name);
    text = text.replace("{{company}}", formData.company ? (language === 'es' ? ` de ${formData.company}` : ` from ${formData.company}`) : '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="bg-brand-darkPanel border border-border rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-2xl"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">{t.title1}<span className="text-brand-turquoise">{t.title2}</span></h2>
            <p className="text-lg text-muted mb-8 max-w-md">
              {t.description}
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-3 text-muted text-sm mt-8">
              <span className="flex items-center gap-2">
                <MessageCircle size={16} className="text-brand-lime" />
                {t.fastResponse}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a href="mailto:ridencedenods@gmail.com" className="hover:text-text transition-colors flex items-center gap-2">
                <Mail size={16} />
                ridencedenods@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto md:min-w-[400px]">
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <div className="space-y-4">
                <Input 
                  placeholder={t.namePlaceholder}
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="h-14"
                />
                <Input 
                  placeholder={t.companyPlaceholder}
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="h-14"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-3 mt-4">
                <MessageCircle size={20} />
                {t.submit}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}