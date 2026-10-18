import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Maximize2 } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/brandInfo';
import { Lightbox } from '../components/Lightbox';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Bridal', 'Festive', 'Menswear', 'Contemporary', 'Everyday'];

  const filteredItems = activeCategory === 'All'
    ? IMAGES.gallery
    : IMAGES.gallery.filter(item => item.category === activeCategory);

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            LOOKBOOK &amp; ATELIER ARCHIVE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            The Visual Gallery
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            Explore editorial inspirations, silhouette explorations, and artisanal textures. Click any photograph to view details or enquire about a custom creation.
          </p>

          <div className="pt-2">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-charcoal/20 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-blush/30 transition-all"
            >
              <Instagram className="w-4 h-4 text-rose" />
              <span>Follow @kefibymukta on Instagram</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-white/80 text-charcoal/75 border-rose/25 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isLandscape = item.orientation === 'landscape';
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden bg-blush/20 border border-black/5 shadow-subtle hover:shadow-luxury transition-all duration-500 cursor-pointer ${
                  isLandscape ? 'aspect-[4/3]' : 'aspect-[3/4]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width="800"
                  height="1000"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Liquid Glass Overlay */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-charcoal">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="glass-panel p-4 border border-white/60 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="editorial-sub text-[10px] text-mauve">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg text-charcoal mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-mauve font-sans mt-1 flex items-center gap-1 font-semibold uppercase">
                      <span>Click to view &amp; enquire</span>
                      <ArrowUpRight className="w-3 h-3 text-rose" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="text-center pt-8 border-t border-rose/20 max-w-xl mx-auto">
          <p className="text-xs text-mauve italic font-sans">
            Reference photography represents aesthetic themes and silhouette inspirations. All KEFI BY MUKTA orders are individually designed and tailored.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};
