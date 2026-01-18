'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = sessionStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Load Google Analytics here if needed
  };

  const handleReject = () => {
    sessionStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-[9999] flex flex-wrap items-center justify-center gap-4">
      <p className="text-sm text-slate-600 flex-1">
        We use cookies to improve your experience and analyze our traffic.{' '}
        <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">
          Learn more
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded transition-colors"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
