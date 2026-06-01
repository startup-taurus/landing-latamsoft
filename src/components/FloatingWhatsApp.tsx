"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.181-2.584-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleWhatsApp = () => {
    const phone = "593995923599";
    const text = language === "es"
      ? "¿Necesitas una página, un sistema o automatizar un proceso? Quiero conversar sobre soluciones para mi negocio."
      : "Do you need a website, a system or to automate a process? I'd like to talk about solutions for my business.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 md:right-8 bg-brand-darkPanel border border-brand-turquoise/30 rounded-2xl p-5 max-w-xs shadow-2xl z-40"
          >
            <div className="mb-4">
              <p className="font-semibold text-text mb-2 text-sm leading-snug">
                {language === "es"
                  ? "¿Necesitas una página, un sistema o automatizar un proceso?"
                  : "Do you need a website, a system or to automate a process?"}
              </p>
              <p className="text-xs text-muted leading-relaxed">
                {language === "es"
                  ? "Escríbenos por WhatsApp y revisamos qué solución se adapta mejor a tu negocio."
                  : "Write to us on WhatsApp and we'll review which solution best fits your business."}
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1ba85c] text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <div className="w-4 h-4">
                <WhatsAppIcon />
              </div>
              {language === "es" ? "Hablar por WhatsApp" : "Chat on WhatsApp"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 md:right-8 z-40">
        {/* Pulsing ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25" />
        )}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-brand-darkPanel border-2 border-[#25D366] text-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_28px_rgba(37,211,102,0.55)] transition-shadow"
          aria-label="WhatsApp"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="whatsapp" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <WhatsAppIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
