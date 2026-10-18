export const BRAND = {
  name: 'KEFI BY MUKTA',
  shortName: 'KEFI',
  designer: 'Mukta',
  logo: '/logo.jpg',
  tagline: 'Your Style. Your Story. Your Kefi.',
  subTagline: 'Personalised designs. Meaningful moments. Fashion that feels like you.',
  description:
    'KEFI BY MUKTA creates personalised fashion for everyday moments, special celebrations, weddings, festivals, and memorable occasions. The studio brings together Indian ethnic wear, contemporary fashion, fusion styles, and customised outfit design for women and men.',
  
  phone: '+91 92034 16860',
  phoneRaw: '919203416860',
  whatsappBase: 'https://wa.me/919203416860',
  instagram: 'https://www.instagram.com/kefibymukta/',
  instagramHandle: '@kefibymukta',
  
  location: {
    address: 'In front of Dr. Subhanshu Manekar Clinic, Jamai Road',
    city: 'Parasia',
    state: 'Madhya Pradesh',
    country: 'India',
    full: 'In front of Dr. Subhanshu Manekar Clinic, Jamai Road, Parasia, Madhya Pradesh, India',
  },

  getWhatsAppLink: (context = 'general') => {
    let message = "Hi KEFI BY MUKTA, I would like to enquire about a customised outfit. Could you please guide me?";
    
    if (context === 'wedding' || context === 'bridal') {
      message = "Hi KEFI BY MUKTA, I'm planning my wedding/festive ensemble and would love to consult with you on a custom bridal/wedding design.";
    } else if (context === 'women') {
      message = "Hi KEFI BY MUKTA, I am interested in custom women's wear (ethnic/contemporary). Could you share details on the design process?";
    } else if (context === 'men') {
      message = "Hi KEFI BY MUKTA, I would like to enquire about custom traditional menswear/kurta sets for an upcoming occasion.";
    } else if (context === 'festive') {
      message = "Hi KEFI BY MUKTA, I am looking for a festive occasion outfit and would love to discuss style ideas and fabric options.";
    }
    
    return `https://wa.me/919203416860?text=${encodeURIComponent(message)}`;
  },

  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: "Women's Wear", path: '/womens-wear' },
    { name: "Men's Wear", path: '/mens-wear' },
    { name: 'Occasion Wear', path: '/occasion-wear' },
    { name: 'Custom Design', path: '/custom-design' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ],
};

export const FAQS = [
  {
    question: 'How does the custom outfit design process work at KEFI BY MUKTA?',
    answer:
      'The journey begins when you share your idea, occasion, preferred style, colours, and budget with us — either through our online Custom Design enquiry form or directly on WhatsApp. We then discuss silhouette options, fabric textures, embroidery choices, and precise measurements. Once the design details and timeframe are confirmed, the studio crafts your outfit with personal attention to detail.',
  },
  {
    question: 'Can I request an outfit based on a reference picture or sketch?',
    answer:
      'Yes, absolutely. We welcome your Pinterest boards, saved phone photos, textile swatches, or original sketches. Rather than making rigid replicas, we interpret your inspiration to flatter your personal proportions, choice of colours, and event needs.',
  },
  {
    question: 'How are measurements taken for remote or outstation clients?',
    answer:
      'We work with clients across India and internationally. We provide an easy-to-follow measurement guide and can schedule a video consultation on WhatsApp to guide you or your local tailor through exact measurement points to ensure an impeccable fit.',
  },
  {
    question: 'What is the typical timeframe required to create a custom outfit?',
    answer:
      'Timelines vary depending on the intricacy of hand-embroidery, fabric sourcing, and design complexity. Everyday and contemporary pieces typically require 2–3 weeks, while elaborate festive and bridal ensembles generally take 4–8 weeks. We recommend enquiring as early as possible before your event date.',
  },
  {
    question: 'What is the pricing range for personalised designs?',
    answer:
      'Because every piece is custom-designed around your unique requirements, pricing is tailored according to fabric selections, level of hand craftsmanship, and design complexity. In our Custom Design form, you can select your comfortable budget tier, and we will propose designs aligned with your expectations.',
  },
  {
    question: 'Do you design outfits for men as well?',
    answer:
      'Yes! Alongside our primary focus on women\'s bridal and ethnic couture, KEFI BY MUKTA designs bespoke traditional and contemporary menswear, including tailored kurta-pajama sets, bandhgalas, Nehru jackets, and coordinated couple ensembles for weddings.',
  },
  {
    question: 'Do you ship across India and internationally?',
    answer:
      'Yes, we coordinate secure domestic shipping across India and international courier delivery for clients residing abroad. Shipping schedules and details are confirmed prior to dispatch.',
  },
];
