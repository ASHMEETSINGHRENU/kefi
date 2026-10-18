import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#FAF0F1] text-[#29292B] border-b border-[#E8D4D6] px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs tracking-wider font-medium text-center relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 text-[11px] sm:text-xs">
        <div className="hidden md:flex items-center gap-1.5 text-mauve">
          <MapPin className="w-3.5 h-3.5" />
          <span>Parasia Studio, Madhya Pradesh</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-center mx-auto sm:mx-0">
          <Sparkles className="w-3 h-3 text-rose hidden sm:inline" />
          <span className="font-sans text-charcoal/90">
            Personalised fashion for your most meaningful moments.
          </span>
          <span className="hidden lg:inline text-mauve">|</span>
          <span className="hidden lg:inline text-mauve">Worldwide Enquiries Welcome</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={BRAND.getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mauve hover:text-charcoal transition-colors underline decoration-blush underline-offset-4"
          >
            Direct WhatsApp Consult
          </a>
        </div>
      </div>
    </div>
  );
};
