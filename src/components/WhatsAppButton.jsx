import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Editorial Pill on Hover / Desktop */}
      <div
        className={`hidden md:block transition-all duration-300 transform ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="glass-pill px-3.5 py-1.5 text-xs text-charcoal shadow-sm border border-rose/30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium tracking-wide">Chat with Studio</span>
        </div>
      </div>

      {/* Floating Button */}
      <a
        href={BRAND.getWhatsAppLink('general')}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-charcoal text-ivory flex items-center justify-center shadow-luxury hover:bg-[#1E1E20] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 relative group"
        aria-label="Direct WhatsApp consultation with KEFI BY MUKTA (+91 92034 16860)"
        title="Direct WhatsApp consultation"
      >
        <span className="absolute inset-0 rounded-full bg-rose/20 animate-ping opacity-75 group-hover:opacity-100" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blush relative z-10" />
      </a>
    </aside>
  );
};
