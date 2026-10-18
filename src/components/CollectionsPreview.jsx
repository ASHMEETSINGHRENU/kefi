import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export const CollectionsPreview = () => {
  const collectionList = [
    {
      ...IMAGES.collections.bridal,
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
    },
    {
      ...IMAGES.collections.festive,
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
    },
    {
      ...IMAGES.collections.everyday,
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
    },
    {
      ...IMAGES.collections.contemporary,
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
    },
    {
      ...IMAGES.collections.customWomen,
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
    },
    {
      ...IMAGES.collections.customMen,
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-4',
    },
  ];

  return (
    <section id="explore-collections" className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <p className="editorial-sub">CURATED CATEGORIES</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            Find Your Kind of Beautiful.
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-lg mx-auto">
            Explore styles for every mood, milestone, and moment.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {collectionList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${item.colSpan} group flex flex-col justify-between`}
              >
                {/* Image Container with subtle hover zoom */}
                <Link
                  to={item.route}
                  className="block relative overflow-hidden bg-blush/20 shadow-subtle border border-black/5"
                  aria-label={`View ${item.title}`}
                >
                  <div className={`${item.aspect} w-full overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      width="800"
                      height="1000"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Liquid Glass Badge */}
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 border border-white/70">
                    <span className="text-[10px] uppercase tracking-widest text-mauve font-semibold">
                      0{index + 1}
                    </span>
                  </div>
                </Link>

                {/* Content Block */}
                <div className="pt-5 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-charcoal group-hover:text-mauve transition-colors">
                      <Link to={item.route}>{item.title}</Link>
                    </h3>
                    <Link
                      to={item.route}
                      className="w-8 h-8 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal group-hover:border-rose group-hover:text-rose transition-colors shrink-0 mt-0.5"
                      aria-label={`Explore ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-blush/60">
          <Link
            to="/custom-design"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-mauve transition-colors"
          >
            <span>Have a specific vision in mind? Start a bespoke enquiry</span>
            <ArrowUpRight className="w-4 h-4 text-rose" />
          </Link>
        </div>

      </div>
    </section>
  );
};
