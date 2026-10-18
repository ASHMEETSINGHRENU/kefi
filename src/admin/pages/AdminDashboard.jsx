import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Sparkles,
  Users,
  MessageSquare,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  getAdminStatsRequest,
  getEnquiriesRequest,
  getProductsRequest,
  createProductRequest,
} from '../../services/adminApi';
import { ProductModal } from '../components/ProductModal';
import { BRAND } from '../../data/brandInfo';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    totalEnquiries: 0,
    activeEnquiries: 0,
    totalMessages: 0,
    totalCustomers: 0,
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsData, enquiriesData, productsData] = await Promise.all([
        getAdminStatsRequest(),
        getEnquiriesRequest(),
        getProductsRequest({ limit: 4 }),
      ]);
      setStats(statsData);
      setRecentEnquiries(enquiriesData.slice(0, 4));
      setRecentProducts(productsData.slice(0, 4));
    } catch (err) {
      console.error('Dashboard load error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleCreateProduct = async (payload) => {
    await createProductRequest(payload);
    loadDashboardData();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Received':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Consultation Scheduled':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'In Production':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Welcome Banner */}
      <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-mauve text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose" />
            <span>MUKTA ATELIER SUITE</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
            Welcome back, Mukta
          </h1>
          <p className="text-xs text-charcoal/70 font-sans">
            Manage your boutique listings, bespoke outfit requests, customer directory, and studio messages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-charcoal text-ivory text-xs font-bold uppercase tracking-wider hover:bg-mauve transition-all duration-300 shadow-sm rounded-sm"
          >
            <Plus className="w-4 h-4 text-blush" />
            <span>Add New Listing</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Products */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider">
              Outfit Listings
            </p>
            <p className="font-display text-3xl text-charcoal font-normal">
              {stats.totalProducts}
            </p>
            <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{stats.activeProducts} Live in Catalog</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-sm bg-rose/15 flex items-center justify-center text-mauve">
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>

        {/* Custom Enquiries */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider">
              Bespoke Enquiries
            </p>
            <p className="font-display text-3xl text-charcoal font-normal">
              {stats.totalEnquiries}
            </p>
            <p className="text-[10px] text-amber-700 font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" />
              <span>{stats.activeEnquiries} Active in Pipeline</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-sm bg-amber-50 flex items-center justify-center text-amber-600">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider">
              Customer Directory
            </p>
            <p className="font-display text-3xl text-charcoal font-normal">
              {stats.totalCustomers}
            </p>
            <p className="text-[10px] text-charcoal/60">
              Clients &amp; Lead Contacts
            </p>
          </div>
          <div className="w-12 h-12 rounded-sm bg-blue-50 flex items-center justify-center text-blue-600">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider">
              Studio Messages
            </p>
            <p className="font-display text-3xl text-charcoal font-normal">
              {stats.totalMessages}
            </p>
            <p className="text-[10px] text-rose font-semibold">
              Contact form inquiries
            </p>
          </div>
          <div className="w-12 h-12 rounded-sm bg-purple-50 flex items-center justify-center text-purple-600">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Main Split: Recent Enquiries Pipeline (7 cols) + Featured Products (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Enquiries Table */}
        <div className="lg:col-span-7 bg-white border border-charcoal/10 rounded-sm p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-4">
              <div>
                <h2 className="font-display text-xl text-charcoal font-normal">
                  Recent Custom Outfit Leads
                </h2>
                <p className="text-xs text-charcoal/60 font-sans">
                  Direct customer submissions awaiting consultation or production
                </p>
              </div>
              <Link
                to="/admin/enquiries"
                className="text-xs font-semibold text-mauve hover:text-charcoal uppercase tracking-wider flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {loading ? (
              <p className="text-xs text-charcoal/50 py-8 text-center">Loading inquiries...</p>
            ) : recentEnquiries.length === 0 ? (
              <p className="text-xs text-charcoal/50 py-8 text-center">No inquiries yet.</p>
            ) : (
              <div className="space-y-3">
                {recentEnquiries.map((enq) => (
                  <div
                    key={enq._id}
                    className="p-3.5 rounded border border-charcoal/10 hover:border-rose/40 hover:bg-ivory/50 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base text-charcoal font-semibold truncate">
                          {enq.fullName}
                        </span>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getStatusBadge(
                            enq.status
                          )}`}
                        >
                          {enq.status}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/70 truncate">
                        {enq.outfitCategory} · {enq.occasion} ({enq.budgetRange})
                      </p>
                      <p className="text-[11px] text-charcoal/50 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-mauve" />
                        <span>Needed by: {enq.requiredDate || 'TBD'}</span>
                        <span className="mx-1">·</span>
                        <span>{enq.shippingCity || 'India'}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hi ${enq.fullName}, this is Mukta from KEFI BY MUKTA regarding your bespoke outfit enquiry for ${enq.outfitCategory}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#2E7D32] border border-[#A5D6A7] transition-colors"
                        title="Chat with client on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#C8E6C9]" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-charcoal/10 text-right">
            <Link
              to="/admin/enquiries"
              className="text-xs font-semibold text-charcoal hover:text-mauve transition-colors uppercase tracking-wider"
            >
              Manage Complete Custom Orders Pipeline →
            </Link>
          </div>
        </div>

        {/* Recent Product Listings */}
        <div className="lg:col-span-5 bg-white border border-charcoal/10 rounded-sm p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-4">
              <div>
                <h2 className="font-display text-xl text-charcoal font-normal">
                  Outfit Catalog Preview
                </h2>
                <p className="text-xs text-charcoal/60 font-sans">
                  Recently created or updated designer pieces
                </p>
              </div>
              <Link
                to="/admin/products"
                className="text-xs font-semibold text-mauve hover:text-charcoal uppercase tracking-wider flex items-center gap-1"
              >
                <span>All Listings</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {loading ? (
              <p className="text-xs text-charcoal/50 py-8 text-center">Loading listings...</p>
            ) : recentProducts.length === 0 ? (
              <p className="text-xs text-charcoal/50 py-8 text-center">No listings yet.</p>
            ) : (
              <div className="space-y-3">
                {recentProducts.map((prod) => (
                  <div
                    key={prod._id}
                    className="flex items-center gap-3 p-2.5 rounded border border-charcoal/10 hover:border-rose/40 hover:bg-ivory/40 transition-all"
                  >
                    <img
                      src={prod.images?.[0] || 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800'}
                      alt={prod.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover rounded-sm border border-charcoal/10 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="font-display text-sm text-charcoal font-semibold truncate">
                          {prod.title}
                        </p>
                        <span
                          className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${
                            prod.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {prod.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-mauve font-semibold uppercase tracking-wider mt-0.5">
                        {prod.category}
                      </p>
                      <p className="text-xs font-bold text-charcoal mt-1">
                        ₹{Number(prod.price).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-charcoal/10">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full py-2.5 border border-dashed border-charcoal/30 hover:border-charcoal hover:bg-ivory/60 text-xs font-semibold uppercase tracking-wider text-charcoal transition-all rounded flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4 text-rose" />
              <span>Create Another Outfit Listing</span>
            </button>
          </div>
        </div>

      </div>

      {/* Modal for creating listing */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleCreateProduct}
      />

    </div>
  );
};
