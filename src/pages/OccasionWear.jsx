import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const OccasionWear = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const moments = [
    {
      id: 'wedding',
      category: 'Weddings',
      title: 'Grand Weddings & Pheras',
      description: 'Opulent lehengas and royal groom ensembles crafted with traditional zari, pearls, and custom colorways.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      alt: 'Grand wedding wear',
    },
    {
      id: 'engagement',
      category: 'Engagements',
      title: 'Cocktails & Evening Receptions',
      description: 'Gleaming pastels, sequin accents, draped modern sarees, and sleek Indo-western fusion gowns.',
      image: 'https://m.media-amazon.com/images/I/51lkkTsDJvL._AC_UY1100_.jpg',
      alt: 'Reception and cocktail couture',
    },
    {
      id: 'festivals',
      category: 'Festivals',
      title: 'Diwali & Festive Gatherings',
      description: 'Rich silks, hand-embroidered anarkalis, and classic kurtas designed for radiant family celebrations.',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=80',
      alt: 'Festive Indian dress',
    },
    {
      id: 'sangeet',
      category: 'Weddings',
      title: 'Sangeet & Mehendi Nights',
      description: 'Playful flared skirts, lightweight shararas, and dance-friendly silhouettes in vivid hues.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4stKBoqFRuwgcz4q0n5yK4qgovGOPifBJYFh5ae-Aqw&s=10',
      alt: 'Sangeet outfit with playful flair',
    },
    {
      id: 'parties',
      category: 'Parties',
      title: 'Intimate Parties & Soirées',
      description: 'Understated luxury, artistic capes, and sculpted tunics that command attention effortlessly.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJjMpkWhEaIw_gJNaRsEaPFhYi1FuL5m6ntIRRP_-wg&s=10',
      alt: 'Party celebration dress',
    },
    {
      id: 'puja',
      category: 'Festivals',
      title: 'Pujas & Traditional Rituals',
      description: 'Sacred red, saffron, ivory, and blush ensembles woven in pure natural fibers for reverent occasions.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      alt: 'Traditional ritual ensemble',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'Weddings', label: 'Weddings & Sangeet' },
    { id: 'Engagements', label: 'Engagements & Receptions' },
    { id: 'Festivals', label: 'Festivals & Pujas' },
    { id: 'Parties', label: 'Parties & Events' },
  ];

  const filteredMoments = activeFilter === 'all'
    ? moments
    : moments.filter(m => m.category === activeFilter);

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            CELEBRATION CATALOGUE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            Made for the Moments <br />
            <span className="italic font-normal text-mauve">That Matter.</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            From vibrant sangeet dances to sacred rituals and high-glamour receptions, discover designs created to match the spirit of your occasion.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-white/80 text-charcoal/75 border-rose/25 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMoments.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-rose/15 shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-blush/20 relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 border border-white/70">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-mauve">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-mauve transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-rose/10 flex items-center justify-between gap-3 mt-4">
                <Link
                  to="/custom-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-rose transition-colors"
                >
                  <span>Enquire For This Event</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-rose" />
                </Link>

                <a
                  href={BRAND.getWhatsAppLink('festive')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-mauve hover:text-charcoal hover:bg-blush/20 rounded-full transition-colors"
                  aria-label={`Discuss ${item.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Consultation Link */}
        <div className="text-center pt-8">
          <Link
            to="/custom-design"
            className="inline-flex items-center gap-2 px-9 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-mauve transition-all"
          >
            <span>Start Custom Outfit Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-blush" />
          </Link>
        </div>

      </div>
    </div>
  );
};
