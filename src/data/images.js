/**
 * KEFI BY MUKTA — Centralized Image Assets Configuration
 * High-quality curated Indian fashion photography with editorial composition.
 * Easily swappable with custom studio lookbook photography.
 */

export const IMAGES = {
  // Hero Section Visual Centerpiece
  hero: {
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1800&q=85',
    alt: 'KEFI BY MUKTA luxury Indian bridal couture with intricate artisanal embroidery',
    caption: 'Bridal Couture & Festive Haute Couture',
  },
  
  // Brand Philosophy & Story Supporting Imagery
  story: {
    primary: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artisanal hand-embroidered festive ensemble showcasing delicate zardozi detailing',
    secondary: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    secondaryAlt: 'Design studio mood board and bespoke fabric selection',
  },

  // Collections (6 Main Editorial Categories)
  collections: {
    bridal: {
      id: 'wedding-bridal',
      title: 'Wedding & Bridal Wear',
      subtitle: 'Heirloom lehengas, regal dupattas, and unforgettable wedding ensembles.',
      image: 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800',
      alt: 'Luxury Indian bridal lehenga with royal zari motifs',
      route: '/womens-wear',
    },
    festive: {
      id: 'festive-occasion',
      title: 'Festive & Occasion Wear',
      subtitle: 'Vibrant anarkalis, shararas, and sarees curated for joyous celebrations.',
      image: 'https://assets.mytribe.in/insecure/rs:fill:420:560/f:webp/plain/s3://mytribe-assets-production/d7049107-392f-4278-8fcc-6620e2b632b0',
      alt: 'Festive Indian ethnic wear with shimmering mirrorwork and fine silk',
      route: '/occasion-wear',
    },
    everyday: {
      id: 'everyday-elegance',
      title: 'Everyday Elegance',
      subtitle: 'Bespoke cotton kurtas, lightweight co-ords, and effortless daywear.',
      image: 'https://m.media-amazon.com/images/I/41diBwpwkxL._AC_UY1100_.jpg',
      alt: 'Contemporary Indian ethnic daywear with modern silhouette',
      route: '/womens-wear',
    },
    contemporary: {
      id: 'contemporary-fusion',
      title: 'Contemporary & Fusion',
      subtitle: 'Modern silhouettes meeting traditional Indian craftsmanship and drapery.',
      image: 'https://img.theloom.in/blog/wp-content/uploads/2026/10/vj431fs26-07kpbluevj431urgent12092026_4_.png',
      alt: 'Indo-western fusion jacket and sculpted contemporary styling',
      route: '/womens-wear',
    },
    customWomen: {
      id: 'custom-women',
      title: "Custom Women's Wear",
      subtitle: 'Bespoke silhouettes cut to your exact measurements, palette, and style.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2SdhWcWGgXjOADspu9pfe2D_Rmi0qYXXct5I2IA1Sw&s=10',
      alt: 'Tailor-made designer suit ensemble with hand-stitched borders',
      route: '/custom-design',
    },
    customMen: {
      id: 'custom-men',
      title: "Custom Men's Wear",
      subtitle: 'Refined bandhgalas, tailored kurta-pajamas, and classic Nehru jackets.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT559tSwVGGK-dTqcihccqlg-9WRFeiMgKv3ybetqp23g&s=10',
      alt: 'Bespoke Indian menswear with tailored fit and rich tones',
      route: '/mens-wear',
    },
  },

  // Occasions Showcase (5 Moments)
  occasions: [
    {
      id: 'weddings',
      title: 'Weddings & Bridal Celebrations',
      desc: 'Regal lehengas, bridal trousseau pieces, and coordinated couple ensembles.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      alt: 'Grand wedding lehenga with ornate hand-craft',
    },
    {
      id: 'engagements',
      title: 'Engagements & Receptions',
      desc: 'Glamorous gowns, cocktail sarees, and sleek Indo-western fusion pieces.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      alt: 'Reception couture silhouette in blush and rose',
    },
    {
      id: 'festivals',
      title: 'Festivals & Family Gatherings',
      desc: 'Diwali, Eid, Karwa Chauth, and festive celebrations alive with warmth and colour.',
      image: 'https://media.gettyimages.com/id/1774538452/photo/woman-looking-through-sieve-during-karva-chauth-ceremony.jpg?s=612x612&w=0&k=20&c=D3uohkQ1QHRXTLkNxSg2_1ahicAfky3GcPKOSgeXAog=',
      alt: 'Festive Indian family celebration attire with opulent colors',
    },
    {
      id: 'parties',
      title: 'Parties & Special Events',
      desc: 'Statement kurtis, pre-draped sarees, and distinctive partywear.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Nlb8WvfzjYozIEtJWf1CQVQNiigrw-64dhk7DEmHbA&s=10',
      alt: 'Artistic festive partywear ensemble',
    },
    {
      id: 'everyday',
      title: 'Everyday & Workwear',
      desc: 'Understated elegance, breathable linens, silks, and pure cotton comfort.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-upXbOujn3AVuTpoWgx0hN6U56A8Mp0R7OYCQzvBQw&s=10',
      alt: 'Refined ethnic daily wear suit with gentle draping',
    },
  ],

  // Custom Studio / Craft Details
  craft: {
    fabric: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdyhDHZd7S2RZe-myxdgOtifaldR-EgW_nhHuSvHM4A&s=10',
    alt: 'Textiles, silks, and embroidery threads in the design atelier',
    sketch: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    sketchAlt: 'Fashion sketch and fabric swatches for personalised tailoring',
  },

  // Gallery Showcase Items (Editorial Mix of Portrait & Landscape)
  gallery: [
    {
      id: 'g-1',
      title: 'Ivory & Gold Zardozi Bridal Lehenga',
      category: 'Bridal',
      orientation: 'portrait',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      alt: 'Bridal outfit in ivory and golden hand embroidery',
    },
    {
      id: 'g-2',
      title: 'Sculpted Mauve & Rose Festive Ensemble',
      category: 'Festive',
      orientation: 'landscape',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Festive Indian dress with rose and mauve embellishments',
    },
    {
      id: 'g-3',
      title: 'Bespoke Charcoal & Silk Men’s Bandhgala',
      category: 'Menswear',
      orientation: 'portrait',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      alt: 'Men bespoke festive traditional outfit',
    },
    {
      id: 'g-4',
      title: 'Contemporary Indo-Western Asymmetric Silhouette',
      category: 'Contemporary',
      orientation: 'landscape',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      alt: 'Contemporary draped fusion outfit',
    },
    {
      id: 'g-5',
      title: 'Royal Scarlet & Dupatta Festive Trousseau',
      category: 'Bridal',
      orientation: 'portrait',
      image: 'https://images.unsplash.com/photo-1610030469668-93530c17b58f?auto=format&fit=crop&w=1000&q=80',
      alt: 'Intricate wedding lehenga detailing',
    },
    {
      id: 'g-6',
      title: 'Artisanal Hand-Weave & Minimal Kurtis',
      category: 'Everyday',
      orientation: 'portrait',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      alt: 'Minimalist ethnic silhouette',
    },
    {
      id: 'g-7',
      title: 'Traditional Raw Silk Kurta & Stole',
      category: 'Menswear',
      orientation: 'landscape',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Men classic occasion festive wear',
    },
    {
      id: 'g-8',
      title: 'Blush Flora Hand-Embroidered Anarkali',
      category: 'Festive',
      orientation: 'portrait',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
      alt: 'Anarkali suit in blush tones with subtle threadwork',
    },
  ],
};
