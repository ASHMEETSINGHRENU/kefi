import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/brandInfo';

export const OccasionShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <p className="editorial-sub">MOMENT-LED FASHION</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            Every Occasion Has a Look.
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
            Some moments call for timeless elegance. Others deserve a little sparkle. Find or create an outfit that feels right for the occasion and for you.
          </p>
        </div>

        {/* 5 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {IMAGES.occasions.map((occ) => (
            <div
              key={occ.id}
              className="group flex flex-col justify-between bg-white border border-rose/15 shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-blush/20 relative">
                  <img
                    src={occ.image}
                    alt={occ.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    width="600"
                    height="800"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-xl text-charcoal leading-snug group-hover:text-mauve transition-colors">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                    {occ.desc}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 border-t border-rose/10 flex items-center justify-between gap-2 mt-4">
                <Link
                  to="/custom-design"
                  className="text-[11px] font-semibold uppercase tracking-wider text-charcoal hover:text-rose transition-colors flex items-center gap-1"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-rose" />
                </Link>

                <a
                  href={BRAND.getWhatsAppLink('festive')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-mauve hover:text-charcoal transition-colors"
                  title="Discuss on WhatsApp"
                  aria-label={`Discuss ${occ.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
