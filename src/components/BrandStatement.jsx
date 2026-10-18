import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export const BrandStatement = () => {
  return (
    <section className="py-20 lg:py-32 bg-ivory relative border-t border-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Pair showcasing craft and textile detail (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Primary Image */}
              <div className="col-span-8 shadow-luxury overflow-hidden border border-white/90 aspect-[3/4]">
                <img
                  src={IMAGES.story.primary}
                  alt={IMAGES.story.alt}
                  loading="lazy"
                  width="800"
                  height="1066"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Offset Secondary Atelier Image */}
              <div className="col-span-4 -ml-6 lg:-ml-8 mt-12 shadow-luxury overflow-hidden border-2 border-ivory aspect-[4/5] z-10">
                <img
                  src={IMAGES.story.secondary}
                  alt={IMAGES.story.secondaryAlt}
                  loading="lazy"
                  width="400"
                  height="500"
                  className="w-full h-full object-cover object-center"
                />
                <div className="p-2 bg-blush/40 text-[9px] uppercase tracking-wider text-charcoal font-semibold text-center">
                  STUDIO MOODBOARD
                </div>
              </div>
            </div>

            {/* Subtle decorative quote accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 glass-pill p-3 px-4 border border-rose/30">
              <span className="font-display italic text-sm text-mauve">
                “Crafted with devotion &amp; personal nuance.”
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Copy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <p className="editorial-sub">THE KEFI PHILOSOPHY</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1]">
                Fashion That Feels Like You.
              </h2>
            </div>

            <div className="space-y-4 text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              <p className="font-display italic text-xl text-mauve">
                Your style is personal. Your celebrations are unique. Your outfit should be, too.
              </p>
              <p>
                At KEFI BY MUKTA, we believe fashion becomes more meaningful when it reflects the person wearing it. From the first idea to the final look, your preferences and your personality inspire the design journey.
              </p>
              <p className="text-charcoal/70">
                Rather than choosing between rigid off-the-rack pieces or distant designer houses, our studio invites you into a collaborative creative dialogue. Every fabric touch, neckline contour, and colour balance is calibrated to honour your moment.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/our-story"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-charcoal hover:text-mauve transition-colors group"
              >
                <span>Discover Our Story</span>
                <span className="w-8 h-[1px] bg-charcoal group-hover:w-12 group-hover:bg-mauve transition-all" />
                <ArrowRight className="w-4 h-4 text-rose group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
