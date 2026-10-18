import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Check } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const MensWear = () => {
  const mensCategories = [
    {
      title: 'Custom Kurta-Pajama Sets',
      description: 'Hand-tailored in raw silk, breathable linen, and fine chanderi with subtle neck embroidery and contemporary cuts.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      alt: 'Bespoke Indian menswear kurta',
      tag: 'Bespoke Sets',
    },
    {
      title: 'Bandhgalas & Jodhpuris',
      description: 'Structured formal bandhgalas with structured shoulders, handcrafted buttons, and tailored trousers for weddings and galas.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      alt: 'Royal bandhgala suit for men',
      tag: 'Royal Formal',
    },
    {
      title: 'Nehru Jackets & Waistcoats',
      description: 'Versatile layered waistcoats in textured brocade, raw silk, and embroidered fabrics, paired effortlessly with solid kurtas.',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80',
      alt: 'Traditional Indian waistcoat styling',
      tag: 'Festive Layers',
    },
    {
      title: 'Wedding & Groom Ensembles',
      description: 'Heirloom sherwanis, achkans, and coordinated couple ensembles designed in harmony with bridal colour palettes.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwTBOFy2MADiU9aC4pJuVguEnocjJP7TuBoEaVCPyWw&s=10',
      alt: 'Groom wedding ensemble details',
      tag: 'Groom Attire',
    },
  ];

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            MEN'S BESPOKE &amp; OCCASION
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            His Style. <br />
            <span className="italic font-normal text-mauve">His Statement.</span>
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            From tailored kurta-pajamas to bespoke bandhgalas and coordinated wedding wear, discover menswear crafted for distinguished elegance and comfort.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {mensCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-rose/15 shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-blush/20 relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 border border-white/70">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-mauve">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl text-charcoal group-hover:text-mauve transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-rose/10 flex items-center justify-between gap-3 mt-4">
                <Link
                  to="/custom-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-rose transition-colors"
                >
                  <span>Enquire Custom Menswear</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-rose" />
                </Link>

                <a
                  href={BRAND.getWhatsAppLink('men')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-mauve hover:text-charcoal hover:bg-blush/20 rounded-full transition-colors"
                  aria-label={`Enquire about ${item.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why Bespoke Menswear at KEFI */}
        <div className="bg-[#FAF2F2] border border-blush/80 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="editorial-sub text-rose">THE BESPOKE DIFFERENCE</span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal leading-snug">
                Coordinated Couple &amp; Family Outfits
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                Planning a wedding or milestone festival? We specialize in harmonic styling where the groom or partner’s outfit seamlessly complements the bride’s lehenga, motifs, or colour tones without being identical.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose" />
                  <span>Matching fabric swatches and hand-dyed silk threads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose" />
                  <span>Custom necklines and pocket square coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose" />
                  <span>Precise measurement guidance for remote orders</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 text-center lg:text-right">
              <Link
                to="/custom-design"
                className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest hover:bg-mauve transition-all"
              >
                <span>Design Custom Menswear</span>
                <ArrowUpRight className="w-4 h-4 text-blush" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
