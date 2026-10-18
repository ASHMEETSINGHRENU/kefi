import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-12 border-t border-charcoal-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <span className="font-display text-3xl sm:text-4xl tracking-[0.2em] text-ivory uppercase font-light">
                KEFI
              </span>
              <span className="block font-sans text-xs tracking-[0.3em] text-rose uppercase font-medium mt-1">
                BY MUKTA
              </span>
            </Link>

            <p className="font-display italic text-lg text-blush/90 max-w-md">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-md font-sans">
              Personalised Indian ethnic wear, contemporary fusion, bespoke bridal wear, and custom occasion outfits designed around your individuality.
            </p>

            {/* Social & Contact Badges */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs text-ivory transition-all group"
                aria-label="Follow KEFI BY MUKTA on Instagram"
              >
                <Instagram className="w-4 h-4 text-rose group-hover:text-blush transition-colors" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-ivory/50" />
              </a>

              <a
                href={BRAND.getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs text-ivory transition-all group"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-rose group-hover:text-blush transition-colors" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-ivory/50" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="editorial-sub text-rose/90 tracking-widest text-[11px]">
              COLLECTIONS &amp; PAGES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/womens-wear" className="hover:text-blush transition-colors">
                  Women's Ethnic &amp; Bridal
                </Link>
              </li>
              <li>
                <Link to="/mens-wear" className="hover:text-blush transition-colors">
                  Men's Traditional &amp; Occasion
                </Link>
              </li>
              <li>
                <Link to="/occasion-wear" className="hover:text-blush transition-colors">
                  Occasion &amp; Festive Looks
                </Link>
              </li>
              <li>
                <Link to="/custom-design" className="hover:text-blush transition-colors flex items-center gap-1.5 text-rose font-medium">
                  <span>Custom Design Studio</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-rose/20 text-rose rounded">Enquire</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blush transition-colors">
                  Lookbook Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-blush transition-colors">
                  Our Story &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blush transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blush transition-colors">
                  Studio Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="editorial-sub text-rose/90 tracking-widest text-[11px]">
              STUDIO LOCATION &amp; APPOINTMENTS
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-ivory/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  In front of Dr. Subhanshu Manekar Clinic, Jamai Road, Parasia, Madhya Pradesh, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-blush transition-colors font-sans"
                >
                  {BRAND.phone}
                </a>
              </div>

              <div className="pt-2">
                <p className="text-xs text-ivory/50">
                  Online order consultations and bespoke wardrobe enquiries welcomed across India and worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} KEFI BY MUKTA. All rights reserved.</p>
            <span className="text-white/20">|</span>
            <Link to="/admin" className="hover:text-blush transition-colors text-[11px] opacity-60 hover:opacity-100">
              Atelier Portal
            </Link>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-ivory/60">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
            <span>for personal style &amp; meaningful moments.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
