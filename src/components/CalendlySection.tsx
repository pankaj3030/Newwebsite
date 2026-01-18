'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/calendly-gurujitechglobal'
      });
      return false;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-20 bg-gradient-to-r from-red-500 to-yellow-400 text-center"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Ready to Optimize Your IT Infrastructure?
        </h2>
        <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto mb-8">
          Let Guruji Tech Global handle your comprehensive IT needs while you focus on
          business growth and strategic initiatives.
        </p>
        <button
          onClick={openCalendly}
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Schedule Your Consultation
        </button>
      </div>
    </motion.section>
  );
}
