import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/brandInfo';

export const WomensWear = () => {
  const categories = [
    {
      title: 'Bridal & Wedding Lehengas',
      description: 'Handcrafted bridal lehengas adorned with zardozi, gota patti, and resham threadwork. Designed to become your cherished heirloom.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      alt: 'Bridal lehenga with royal zari motifs',
      tag: 'Couture Bridal',
    },
    {
      title: 'Ethnic Suits & Anarkalis',
      description: 'Flowing anarkalis, regal straight-cut suits, and flared shararas tailored in pure georgette, silk, and chanderi.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4stKBoqFRuwgcz4q0n5yK4qgovGOPifBJYFh5ae-Aqw&s=10',
      alt: 'Ethnic anarkali suit with embroidered borders',
      tag: 'Ethnic Classics',
    },
    {
      title: 'Festive & Occasion Wear',
      description: 'Vibrant palettes, intricate necklines, and luminous drapes curated for Diwali, Karwa Chauth, sangeets, and celebrations.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      alt: 'Festive Indian ethnic wear',
      tag: 'Celebration',
    },
    {
      title: 'Contemporary & Indo-Western',
      description: 'Modern silhouettes meeting traditional Indian craftsmanship: draped capes, asymmetric tunics, and structured co-ord sets.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      alt: 'Contemporary draped fusion dress',
      tag: 'Fusion & Pret',
    },
    {
      title: 'Everyday Elegance',
      description: 'Breathable cotton kurtis, lightweight linen sets, and understated daily ethnic wear that feels effortless all day.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      alt: 'Minimalist daily ethnic wear',
      tag: 'Daily Luxe',
    },
    {
      title: 'Bespoke Sarees & Designer Blouses',
      description: 'Handpicked organza, tissue, and silk sarees paired with custom-embroidered, structured designer blouses.',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=80',
      alt: 'Indian festive saree and custom blouse',
      tag: 'Bespoke Drapes',
    },
  ];

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            WOMEN'S COUTURE &amp; BESPOKE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            Made for Her. <br />
            <span className="italic font-normal text-mauve">Inspired by Her.</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            From heirloom bridal lehengas to effortless everyday kurtis, explore women's silhouettes tailored to your individual proportions, colour palette, and celebration.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-rose/15 shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[3/4] w-full overflow-hidden bg-blush/20 relative">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    width="600"
                    height="800"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 border border-white/70">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-mauve">
                      {cat.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-display text-2xl text-charcoal group-hover:text-mauve transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-rose/10 flex items-center justify-between gap-3 mt-4">
                <Link
                  to="/custom-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-rose transition-colors"
                >
                  <span>Customise This Style</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-rose" />
                </Link>

                <a
                  href={BRAND.getWhatsAppLink('women')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-mauve hover:text-charcoal hover:bg-blush/20 rounded-full transition-colors"
                  aria-label={`Enquire about ${cat.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Callout */}
        <div className="glass-panel p-8 sm:p-12 border border-white/80 shadow-luxury text-center space-y-4 max-w-3xl mx-auto">
          <p className="editorial-sub text-rose">PERSONAL STYLING DIALOGUE</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal">
            Have a Specific Silhouette in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 font-sans max-w-xl mx-auto">
            Share your saved phone pictures, Pinterest inspirations, or moodboards with Mukta. We will guide you through fabrics, embellishments, and measurements.
          </p>
          <div className="pt-2">
            <Link
              to="/custom-design"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest hover:bg-mauve transition-all"
            >
              <span>Submit Custom Design Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-blush" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
