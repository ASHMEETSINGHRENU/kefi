import React, { useEffect } from 'react';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/brandInfo';

export const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-ivory border border-white/40 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-charcoal hover:text-mauve transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="md:w-3/5 bg-black/5 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh]"
          />
        </div>

        {/* Details & Inquiries */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-ivory">
          <div className="space-y-4">
            <div>
              <span className="editorial-sub text-[11px] text-mauve">
                {item.category} INSPIRATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-charcoal mt-1 leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
              Inspired by this silhouette? At KEFI BY MUKTA, we customise every detail: embroidery motifs, neckline, sleeve design, fabric quality, and colour tone.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-rose/20">
            <Link
              to="/custom-design"
              onClick={onClose}
              className="w-full py-3 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-mauve transition-colors"
            >
              <span>Enquire This Style</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blush" />
            </Link>

            <a
              href={BRAND.getWhatsAppLink('wedding')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 border border-charcoal/20 text-charcoal text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-blush/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-mauve" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
