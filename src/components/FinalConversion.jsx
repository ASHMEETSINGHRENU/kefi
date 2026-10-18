import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/brandInfo';
import { IMAGES } from '../data/images';

export const FinalConversion = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory overflow-hidden border-t border-blush/60">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-[#FAF1F2]/60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-14 lg:p-20 border border-white/80 shadow-luxury relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
              BEGIN YOUR JOURNEY
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-charcoal leading-[1.05]">
              Your Next Favourite Outfit <br />
              <span className="italic text-mauve font-normal">Starts Here.</span>
            </h2>

            <div className="space-y-3 max-w-xl mx-auto text-charcoal/80 text-sm sm:text-base font-sans">
              <p className="font-display italic text-xl text-charcoal/90">
                A wedding to celebrate? A special occasion on the calendar? Or a design you've been dreaming about?
              </p>
              <p>
                Tell us your idea. Share your inspiration. Let's create something that feels like you.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/custom-design"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-mauve transition-all duration-300 shadow-md group border border-charcoal hover:border-mauve"
              >
                <span>Start Your Custom Order</span>
                <ArrowUpRight className="w-4 h-4 text-blush group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={BRAND.getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-charcoal/30 bg-white/70 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-white hover:border-charcoal transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-mauve" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Studio Note */}
            <div className="pt-6 border-t border-rose/20 max-w-md mx-auto text-[11px] text-mauve">
              <p>Studio visits by prior appointment · Virtual consultations worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
