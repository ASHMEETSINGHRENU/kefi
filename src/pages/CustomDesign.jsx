import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { Sparkles, Ruler, Palette, Clock, CheckCircle } from 'lucide-react';

export const CustomDesign = () => {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            THE BESPOKE ATELIER
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            Your Vision. <br />
            Your Design. <br />
            <span className="italic font-normal text-mauve">Your Outfit.</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            From the initial spark of an idea to the finished garment hanging in your wardrobe, KEFI BY MUKTA crafts personalised fashion that celebrates you.
          </p>
        </div>

        {/* 4 Atelier Promises */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-2">
            <div className="w-9 h-9 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
              <Ruler className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xl text-charcoal">Precision Fit</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Tailored to your individual body measurements with guided video calls for remote clients.
            </p>
          </div>

          <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-2">
            <div className="w-9 h-9 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
              <Palette className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xl text-charcoal">Curated Palettes</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Explore handpicked silks, organzas, and chanderis dyed in shades that flatter your skin tone.
            </p>
          </div>

          <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-2">
            <div className="w-9 h-9 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xl text-charcoal">Artisanal Details</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Custom zardozi, sequins, mirrorwork, or minimalist borders chosen according to your taste.
            </p>
          </div>

          <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-2">
            <div className="w-9 h-9 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xl text-charcoal">Direct Consultation</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Direct discussions with the studio team to ensure every preference is respected.
            </p>
          </div>
        </div>

        {/* The Core Custom Outfit Enquiry System Form */}
        <div className="max-w-4xl mx-auto">
          <EnquiryForm />
        </div>

      </div>
    </div>
  );
};
