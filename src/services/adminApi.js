import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

// Attach admin token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('kefi_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Default Mock Data for local browser storage resilience
const DEFAULT_PRODUCTS = [
  {
    _id: 'prod_101',
    title: 'Ivory & Gold Zardozi Bridal Lehenga',
    sku: 'KEFI-B101',
    category: 'Bridal Couture',
    price: 85000,
    currency: 'INR',
    description: 'Bespoke hand-embroidered raw silk lehenga with intricate dabka, zardozi and pearl detailing on an ivory canvas. Paired with a double net dupatta.',
    images: [
      'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800',
    ],
    badge: 'Bestseller',
    fabric: 'Pure Raw Silk, Net & Organza',
    colors: ['Ivory', 'Soft Gold', 'Rose Tint'],
    status: 'Active',
    featured: true,
    createdAt: '2026-10-01T10:00:00Z',
  },
  {
    _id: 'prod_102',
    title: 'Royal Scarlet Velvet Festive Lehenga',
    sku: 'KEFI-F202',
    category: "Women's Wear",
    price: 62000,
    currency: 'INR',
    description: 'Rich crimson velvet lehenga adorned with traditional peacock motifs, resham embroidery, and antique gold sequins for winter weddings.',
    images: [
      'https://assets.mytribe.in/insecure/rs:fill:420:560/f:webp/plain/s3://mytribe-assets-production/d7049107-392f-4278-8fcc-6620e2b632b0',
    ],
    badge: 'New Arrival',
    fabric: 'Micro Velvet & Organza',
    colors: ['Scarlet Red', 'Antique Gold'],
    status: 'Active',
    featured: true,
    createdAt: '2026-10-05T12:00:00Z',
  },
  {
    _id: 'prod_103',
    title: 'Powder Blue Asymmetric Fusion Tunic',
    sku: 'KEFI-C303',
    category: 'Contemporary',
    price: 24500,
    currency: 'INR',
    description: 'Sculpted crepe silk asymmetric tunic with pleated organza cuffs and delicate mirrorwork accent on the collar.',
    images: [
      'https://img.theloom.in/blog/wp-content/uploads/2026/10/vj431fs26-07kpbluevj431urgent12092026_4_.png',
    ],
    badge: 'Trending',
    fabric: 'Crepe Silk & Tissue Organza',
    colors: ['Powder Blue', 'Ice Silver'],
    status: 'Active',
    featured: false,
    createdAt: '2026-10-08T14:30:00Z',
  },
  {
    _id: 'prod_104',
    title: 'Heritage Charcoal Silk Men’s Bandhgala',
    sku: 'KEFI-M404',
    category: "Men's Wear",
    price: 38000,
    currency: 'INR',
    description: 'Structured formal bandhgala tailored in charcoal matka silk, finished with monogrammed metal buttons and tailored trousers.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT559tSwVGGK-dTqcihccqlg-9WRFeiMgKv3ybetqp23g&s=10',
    ],
    badge: 'Bestseller',
    fabric: 'Handwoven Matka Silk',
    colors: ['Charcoal Gray', 'Midnight Black'],
    status: 'Active',
    featured: true,
    createdAt: '2026-10-10T16:00:00Z',
  },
  {
    _id: 'prod_105',
    title: 'Peach Blossom Karwa Chauth Anarkali',
    sku: 'KEFI-O505',
    category: 'Occasion Wear',
    price: 34000,
    currency: 'INR',
    description: 'Floor-length georgette anarkali with fine threadwork embroidery, gotapatti border, and matching scalloped dupatta.',
    images: [
      'https://media.gettyimages.com/id/1774538452/photo/woman-looking-through-sieve-during-karva-chauth-ceremony.jpg?s=612x612&w=0&k=20&c=D3uohkQ1QHRXTLkNxSg2_1ahicAfky3GcPKOSgeXAog=',
    ],
    badge: 'Limited Edition',
    fabric: 'Pure Georgette & Shantoon',
    colors: ['Blush Pink', 'Peach', 'Rose'],
    status: 'Active',
    featured: true,
    createdAt: '2026-10-12T11:20:00Z',
  },
  {
    _id: 'prod_106',
    title: 'Minimalist Hand-Block Printed Cotton Co-ord',
    sku: 'KEFI-E606',
    category: 'Everyday Elegance',
    price: 14500,
    currency: 'INR',
    description: 'Breathable mulmul cotton long kurta with straight pants, hand-block botanical motifs, and mother-of-pearl buttons.',
    images: [
      'https://m.media-amazon.com/images/I/41diBwpwkxL._AC_UY1100_.jpg',
    ],
    badge: 'None',
    fabric: '100% Organic Mulmul Cotton',
    colors: ['Off-White', 'Muted Indigo'],
    status: 'Draft',
    featured: false,
    createdAt: '2026-10-14T09:45:00Z',
  },
];

const DEFAULT_ENQUIRIES = [
  {
    _id: 'enq_1001',
    fullName: 'Ananya Sharma',
    phone: '+91 98234 56789',
    email: 'ananya.sharma@example.com',
    collectionType: "Women's Wear",
    outfitCategory: 'Bridal Lehenga',
    occasion: 'Wedding Day Reception',
    preferredStyle: 'Traditional Zardozi with modern pastel tones',
    preferredColours: 'Rose Gold and Dusty Blush',
    budgetRange: '₹60,000 – ₹1,00,000',
    requiredDate: '2026-12-15',
    measurementsNotes: 'Blouse 36, Waist 30, Height 5ft 6in with heels',
    description: 'Looking for a regal hand-embroidered lehenga with lightweight flair and double dupatta for winter evening reception.',
    referenceImageUrl: 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800',
    shippingCity: 'Indore',
    shippingCountry: 'India',
    status: 'Consultation Scheduled',
    createdAt: '2026-10-14T10:30:00Z',
  },
  {
    _id: 'enq_1002',
    fullName: 'Rohan Mehra',
    phone: '+91 97112 34567',
    email: 'rohan.mehra@example.com',
    collectionType: "Men's Wear",
    outfitCategory: 'Bandhgala Suit',
    occasion: 'Brother’s Sangeet',
    preferredStyle: 'Minimalist luxury silk with bespoke buttons',
    preferredColours: 'Charcoal & Antique Brass',
    budgetRange: '₹35,000 – ₹60,000',
    requiredDate: '2026-11-20',
    measurementsNotes: 'Chest 40, Shoulder 18.5, Sleeve 25',
    description: 'Need a sharp tailored bandhgala with subtle tonal hand-embroidery along collar and cuffs.',
    referenceImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT559tSwVGGK-dTqcihccqlg-9WRFeiMgKv3ybetqp23g&s=10',
    shippingCity: 'Bhopal',
    shippingCountry: 'India',
    status: 'In Production',
    createdAt: '2026-10-15T09:15:00Z',
  },
  {
    _id: 'enq_1003',
    fullName: 'Pooja Verma',
    phone: '+91 94250 88990',
    email: 'pooja.verma@example.com',
    collectionType: 'Occasion Wear',
    outfitCategory: 'Festive Anarkali',
    occasion: 'Diwali & Family Reunion',
    preferredStyle: 'Flared Georgette with fine gota-patti',
    preferredColours: 'Blush Pink & Peach',
    budgetRange: '₹20,000 – ₹35,000',
    requiredDate: '2026-11-05',
    measurementsNotes: 'Standard Medium with 4 inch comfort margin',
    description: 'Festive floor length suit with scalloped dupatta and lightweight sleeves.',
    referenceImageUrl: 'https://media.gettyimages.com/id/1774538452/photo/woman-looking-through-sieve-during-karva-chauth-ceremony.jpg?s=612x612&w=0&k=20&c=D3uohkQ1QHRXTLkNxSg2_1ahicAfky3GcPKOSgeXAog=',
    shippingCity: 'Chhindwara',
    shippingCountry: 'India',
    status: 'Received',
    createdAt: '2026-10-16T16:00:00Z',
  },
];

const DEFAULT_MESSAGES = [
  {
    _id: 'msg_2001',
    name: 'Kavita Singhania',
    phone: '+91 91234 56780',
    email: 'kavita.s@example.com',
    subject: 'Bridal trousseau styling appointment',
    message: 'Hello Mukta, I would like to book an in-person studio visit at your Parasia atelier for my wedding in February 2027.',
    status: 'New',
    createdAt: '2026-10-15T15:20:00Z',
  },
  {
    _id: 'msg_2002',
    name: 'Deepak Patel',
    phone: '+91 98980 12345',
    email: 'deepak.p@example.com',
    subject: 'International shipping query to London',
    message: 'Can you deliver a customised wedding sherwani and matching stoles to London within 4 weeks?',
    status: 'Read',
    createdAt: '2026-10-16T11:00:00Z',
  },
];

// Helper to get or init localStorage data
const getLocalData = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const setLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error('Storage error:', err);
  }
};

// ----------------- Auth API -----------------
export const adminLoginRequest = async (email, password) => {
  try {
    const res = await api.post('/admin/login', { email, password });
    return res.data;
  } catch (err) {
    // Local fallback for offline mode
    if (email.trim().toLowerCase() === 'admin@kefi.com' && password === 'admin123') {
      const mockToken = 'kefi_admin_token_' + Date.now();
      return {
        success: true,
        token: mockToken,
        admin: {
          name: 'Mukta',
          email: 'admin@kefi.com',
          role: 'Master Admin / Founder',
          studio: 'Parasia Atelier, Madhya Pradesh',
        },
      };
    }
    throw new Error(err.response?.data?.message || 'Invalid admin credentials');
  }
};

// ----------------- Stats API -----------------
export const getAdminStatsRequest = async () => {
  try {
    const res = await api.get('/admin/stats');
    return res.data.stats;
  } catch {
    const prods = getLocalData('kefi_products', DEFAULT_PRODUCTS);
    const enqs = getLocalData('kefi_enquiries', DEFAULT_ENQUIRIES);
    const msgs = getLocalData('kefi_messages', DEFAULT_MESSAGES);
    return {
      totalProducts: prods.length,
      activeProducts: prods.filter((p) => p.status === 'Active').length,
      totalEnquiries: enqs.length,
      activeEnquiries: enqs.filter((e) => ['Received', 'Consultation Scheduled', 'In Production'].includes(e.status)).length,
      totalMessages: msgs.length,
      newMessages: msgs.filter((m) => m.status === 'New').length,
      totalCustomers: enqs.length + msgs.length,
    };
  }
};

// ----------------- Products API -----------------
export const getProductsRequest = async (params = {}) => {
  try {
    const res = await api.get('/products', { params });
    // Keep local backup synced
    setLocalData('kefi_products', res.data.products);
    return res.data.products;
  } catch {
    let prods = getLocalData('kefi_products', DEFAULT_PRODUCTS);
    if (params.category && params.category !== 'All') {
      prods = prods.filter((p) => p.category === params.category);
    }
    if (params.status && params.status !== 'All') {
      prods = prods.filter((p) => p.status === params.status);
    }
    if (params.search) {
      const s = params.search.toLowerCase();
      prods = prods.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.sku.toLowerCase().includes(s) ||
          p.fabric.toLowerCase().includes(s)
      );
    }
    return prods;
  }
};

export const createProductRequest = async (payload) => {
  try {
    const res = await api.post('/products', payload);
    return res.data.product;
  } catch {
    const prods = getLocalData('kefi_products', DEFAULT_PRODUCTS);
    const newProd = {
      _id: 'prod_' + Date.now(),
      ...payload,
      sku: payload.sku || 'KEFI-' + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    prods.unshift(newProd);
    setLocalData('kefi_products', prods);
    return newProd;
  }
};

export const updateProductRequest = async (id, payload) => {
  try {
    const res = await api.put(`/products/${id}`, payload);
    return res.data.product;
  } catch {
    const prods = getLocalData('kefi_products', DEFAULT_PRODUCTS);
    const idx = prods.findIndex((p) => p._id === id);
    if (idx !== -1) {
      prods[idx] = { ...prods[idx], ...payload, updatedAt: new Date().toISOString() };
      setLocalData('kefi_products', prods);
      return prods[idx];
    }
    throw new Error('Product not found');
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch {
    let prods = getLocalData('kefi_products', DEFAULT_PRODUCTS);
    prods = prods.filter((p) => p._id !== id);
    setLocalData('kefi_products', prods);
    return { success: true };
  }
};

// ----------------- Enquiries API -----------------
export const getEnquiriesRequest = async (params = {}) => {
  try {
    const res = await api.get('/admin/enquiries', { params });
    setLocalData('kefi_enquiries', res.data.enquiries);
    return res.data.enquiries;
  } catch {
    let enqs = getLocalData('kefi_enquiries', DEFAULT_ENQUIRIES);
    if (params.status && params.status !== 'All') {
      enqs = enqs.filter((e) => e.status === params.status);
    }
    if (params.search) {
      const s = params.search.toLowerCase();
      enqs = enqs.filter(
        (e) =>
          e.fullName.toLowerCase().includes(s) ||
          e.phone.toLowerCase().includes(s) ||
          e.outfitCategory.toLowerCase().includes(s)
      );
    }
    return enqs;
  }
};

export const updateEnquiryStatusRequest = async (id, status) => {
  try {
    const res = await api.patch(`/admin/enquiries/${id}/status`, { status });
    return res.data.enquiry;
  } catch {
    const enqs = getLocalData('kefi_enquiries', DEFAULT_ENQUIRIES);
    const item = enqs.find((e) => e._id === id);
    if (item) {
      item.status = status;
      item.updatedAt = new Date().toISOString();
      setLocalData('kefi_enquiries', enqs);
      return item;
    }
    throw new Error('Enquiry not found');
  }
};

export const deleteEnquiryRequest = async (id) => {
  try {
    const res = await api.delete(`/admin/enquiries/${id}`);
    return res.data;
  } catch {
    let enqs = getLocalData('kefi_enquiries', DEFAULT_ENQUIRIES);
    enqs = enqs.filter((e) => e._id !== id);
    setLocalData('kefi_enquiries', enqs);
    return { success: true };
  }
};

// ----------------- Contacts API -----------------
export const getContactsRequest = async () => {
  try {
    const res = await api.get('/admin/contacts');
    setLocalData('kefi_messages', res.data.contacts);
    return res.data.contacts;
  } catch {
    return getLocalData('kefi_messages', DEFAULT_MESSAGES);
  }
};

export const updateContactStatusRequest = async (id, status) => {
  try {
    const res = await api.patch(`/admin/contacts/${id}/status`, { status });
    return res.data.contact;
  } catch {
    const msgs = getLocalData('kefi_messages', DEFAULT_MESSAGES);
    const item = msgs.find((m) => m._id === id);
    if (item) {
      item.status = status;
      setLocalData('kefi_messages', msgs);
      return item;
    }
    throw new Error('Message not found');
  }
};

// ----------------- Customers API -----------------
export const getCustomersRequest = async () => {
  try {
    const res = await api.get('/admin/customers');
    return res.data.customers;
  } catch {
    const enqs = getLocalData('kefi_enquiries', DEFAULT_ENQUIRIES);
    const msgs = getLocalData('kefi_messages', DEFAULT_MESSAGES);
    const map = new Map();

    enqs.forEach((e) => {
      const key = (e.phone || e.email || e.fullName).toLowerCase();
      if (!map.has(key)) {
        map.set(key, {
          id: 'cust_' + Math.abs(key.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)),
          fullName: e.fullName,
          phone: e.phone,
          email: e.email || 'N/A',
          city: e.shippingCity || 'Madhya Pradesh',
          totalEnquiries: 1,
          latestOccasion: e.occasion,
          latestStatus: e.status,
          lastActive: e.createdAt,
        });
      } else {
        const item = map.get(key);
        item.totalEnquiries += 1;
      }
    });

    msgs.forEach((m) => {
      const key = (m.phone || m.email || m.name).toLowerCase();
      if (!map.has(key)) {
        map.set(key, {
          id: 'cust_' + Math.abs(key.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)),
          fullName: m.name,
          phone: m.phone,
          email: m.email || 'N/A',
          city: 'Direct Inquiry',
          totalEnquiries: 0,
          latestOccasion: m.subject,
          latestStatus: 'Contact Message',
          lastActive: m.createdAt,
        });
      }
    });

    return Array.from(map.values());
  }
};
