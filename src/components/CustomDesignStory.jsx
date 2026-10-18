import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { IMAGES } from '../data/images';

export const CustomDesignStory = () => {
  const points = [
    'Your preferred style & silhouette',
    'Your curated choice of colours & palette',
    'Your specific occasion & celebration date',
    'Your measurements & fit preferences',
    'Your design inspiration (photos, swatches & sketches)',
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAF2F2] relative overflow-hidden border-y border-blush/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Copy & Points (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="editorial-sub text-rose font-semibold tracking-[0.22em]">
                MADE PERSONAL
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.08]">
                Dream It. <br />
                Design It. <br />
                <span className="italic font-normal text-mauve">Wear It.</span>
              </h2>
            </div>

            <div className="space-y-4 text-charcoal/80 text-sm sm:text-base leading-relaxed font-sans">
              <p className="font-display italic text-xl text-charcoal leading-snug">
                Have an outfit saved on your phone? Imagining something special for an upcoming celebration? Or dreaming of a design that exists only in your imagination?
              </p>
              <p>
                Share your inspiration, your preferences, and your vision. Let's explore how to bring your idea to life through a personalised outfit designed around you.
              </p>
            </div>

            {/* Supporting Nuance Points */}
            <div className="pt-2 pb-2">
              <ul className="space-y-3">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/85">
                    <span className="w-5 h-5 rounded-full bg-rose/25 text-mauve flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-charcoal" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to="/custom-design"
                className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-mauve transition-all duration-300 shadow-md group border border-charcoal hover:border-mauve"
              >
                <span>Create My Custom Outfit</span>
                <ArrowUpRight className="w-4 h-4 text-blush group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Atelier Image with Liquid Glass Inset (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative shadow-luxury border-4 border-ivory aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES.craft.fabric}
                alt={IMAGES.craft.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                width="1000"
                height="1250"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />

              {/* Floating Liquid Glass Inset Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 border border-white/80 shadow-glass">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="editorial-sub text-[10px] text-mauve">THE ATELIER TOUCH</p>
                    <p className="font-display italic text-lg text-charcoal">
                      Tailored to Your Exact Proportions
                    </p>
                  </div>
                  <span className="text-2xl font-display text-rose">01 / 01</span>
                </div>
                <p className="text-xs text-charcoal/70 mt-2 font-sans">
                  No mass factory lines. Every seam, embellishment, and border is personally supervised.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
