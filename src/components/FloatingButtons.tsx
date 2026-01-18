'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447488564873"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Contact Guruji Tech Global on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-[9998] transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 w-11 h-11 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-[9998] transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowUp size={20} fill="currentColor" />
        </button>
      )}
    </>
  );
}
