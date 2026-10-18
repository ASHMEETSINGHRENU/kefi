import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

export const Hero = () => {
  const scrollToExplore = () => {
    const el = document.getElementById('explore-collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-[95vh] flex items-center bg-ivory overflow-hidden pt-6 pb-16 lg:py-12">
      {/* Editorial Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Subtle Ivory Glass Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill rounded-full border border-rose/30 shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
              <span className="editorial-sub text-[11px] text-mauve font-semibold">
                THE WORLD OF KEFI
              </span>
            </div>

            {/* Oversized Luxury Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.05] tracking-tight text-charcoal">
                Your Style. <br />
                <span className="italic font-normal text-mauve">Your Story.</span> <br />
                Your Kefi.
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="space-y-3 max-w-xl text-charcoal/80">
              <p className="font-display italic text-xl sm:text-2xl text-charcoal/90 leading-snug">
                Every outfit has a story. Let's make yours unforgettable.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-charcoal/75 font-sans">
                From everyday elegance to the magic of weddings and special occasions, discover personalised designs that celebrate your individuality.
              </p>
            </div>

            {/* CTAs & Micro Labels */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/custom-design"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-mauve transition-all duration-300 shadow-md group border border-charcoal hover:border-mauve"
              >
                <span>Design Your Outfit</span>
                <ArrowUpRight className="w-4 h-4 text-blush group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={scrollToExplore}
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/25 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-blush/30 hover:border-charcoal/50 transition-all duration-300"
              >
                <span>Explore Our Collection</span>
              </button>
            </div>

            {/* Editorial Footer Tagline */}
            <div className="pt-4 flex items-center gap-4 text-xs tracking-[0.25em] text-mauve uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-rose shrink-0" />
              <span>CONTEMPORARY · FUSION · PRET</span>
            </div>
          </div>

          {/* Right Column: Immersive Indian Fashion Editorial Visual (5 cols on Desktop) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Soft decorative background frame */}
            <div className="absolute -inset-4 bg-blush/30 rounded-none transform rotate-1 -z-10 hidden sm:block" />
            
            {/* Main Editorial Image Container */}
            <div className="relative overflow-hidden shadow-luxury border border-white/80 aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <img
                src={IMAGES.hero.url}
                alt={IMAGES.hero.alt}
                fetchpriority="high"
                width="1200"
                height="1600"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Liquid Glass Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel p-4 border border-white/60">
                <p className="editorial-sub text-[10px] text-mauve">HAUTE COUTURE INSPIRATION</p>
                <p className="font-display italic text-base sm:text-lg text-charcoal mt-0.5">
                  Bespoke Zari &amp; Hand-Embroidered Lehengas
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center pt-12">
          <button
            onClick={scrollToExplore}
            className="flex flex-col items-center gap-2 text-mauve hover:text-charcoal transition-colors group focus:outline-none"
            aria-label="Scroll to explore collections"
          >
            <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll to Discover</span>
            <div className="w-7 h-10 border border-charcoal/30 rounded-full flex items-start justify-center p-1.5 group-hover:border-charcoal transition-colors">
              <span className="w-1 h-2 bg-rose rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
