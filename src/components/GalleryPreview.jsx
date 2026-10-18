import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/brandInfo';

export const GalleryPreview = () => {
  // Take 6 representative gallery previews
  const previews = IMAGES.gallery.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-ivory border-t border-blush/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <p className="editorial-sub">LOOKBOOK &amp; MOODS</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
              A Glimpse of What's Possible.
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 font-sans">
              From ethereal wedding lehengas to contemporary fusion silhouettes and bespoke menswear.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-charcoal/20 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-blush/30 transition-all rounded-none"
            >
              <Instagram className="w-4 h-4 text-rose" />
              <span>Follow @kefibymukta</span>
            </a>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-mauve transition-all"
            >
              <span>Explore the Gallery</span>
              <ArrowUpRight className="w-4 h-4 text-blush" />
            </Link>
          </div>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((item, index) => {
            const isLandscape = item.orientation === 'landscape';
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-blush/20 border border-black/5 ${
                  isLandscape ? 'aspect-[4/3]' : 'aspect-[3/4]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width="800"
                  height="1000"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Liquid Glass Overlay Tag on Hover */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="glass-panel p-4 border border-white/60 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="editorial-sub text-[10px] text-mauve">
                      {item.category}
                    </span>
                    <p className="font-display italic text-base text-charcoal mt-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-mauve/80 italic font-sans">
            Reference inspirations for silhouette and craft exploration. Every KEFI BY MUKTA outfit is uniquely designed around you.
          </p>
        </div>

      </div>
    </section>
  );
};
