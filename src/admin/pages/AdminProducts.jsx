import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  CheckCircle,
  Eye,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  Tag,
} from 'lucide-react';
import {
  getProductsRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from '../../services/adminApi';
import { ProductModal } from '../components/ProductModal';

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProductsRequest({ category, status, search });
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, status]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  const handleSaveProduct = async (payload) => {
    if (editingProduct) {
      await updateProductRequest(editingProduct._id, payload);
    } else {
      await createProductRequest(payload);
    }
    fetchProducts();
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      await deleteProductRequest(id);
      fetchProducts();
    }
  };

  const handleToggleStatus = async (product) => {
    const nextStatus = product.status === 'Active' ? 'Draft' : 'Active';
    await updateProductRequest(product._id, { status: nextStatus });
    fetchProducts();
  };

  const openCreateModal = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-charcoal/10">
        <div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-mauve" />
            <h1 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
              Outfit Catalog &amp; Listings
            </h1>
          </div>
          <p className="text-xs text-charcoal/70 font-sans mt-0.5">
            Create, edit, and organize designer couture pieces across boutique categories.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-charcoal text-ivory text-xs font-bold uppercase tracking-wider hover:bg-mauve transition-all duration-300 shadow-sm rounded-sm"
        >
          <Plus className="w-4 h-4 text-blush" />
          <span>Add New Outfit</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-charcoal/10 p-4 rounded-sm shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by outfit title, SKU, or fabric..."
            className="w-full pl-9 pr-20 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-charcoal text-ivory text-[10px] font-semibold uppercase rounded-sm"
          >
            Search
          </button>
        </form>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-charcoal/60 uppercase">Category:</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
            >
              <option value="All">All Categories</option>
              <option value="Women's Wear">Women's Wear</option>
              <option value="Men's Wear">Men's Wear</option>
              <option value="Occasion Wear">Occasion Wear</option>
              <option value="Bridal Couture">Bridal Couture</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Everyday Elegance">Everyday Elegance</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-charcoal/60 uppercase">Status:</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
            >
              <option value="All">All Status</option>
              <option value="Active">Active Only</option>
              <option value="Draft">Drafts Only</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      {/* Listings Table / Grid */}
      <div className="bg-white border border-charcoal/10 rounded-sm shadow-subtle overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs text-charcoal/50">
            Loading boutique listings...
          </div>
        ) : products.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <p className="font-display text-xl text-charcoal">No listings match your filter.</p>
            <p className="text-xs text-charcoal/60">Try clearing your search query or add a new outfit.</p>
            <button
              type="button"
              onClick={openCreateModal}
              className="px-4 py-2 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              Create New Listing
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF2F2] border-b border-charcoal/10 text-charcoal/70 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-3 px-4">Outfit Details</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Fabric / Notes</th>
                  <th className="py-3 px-4">Badge</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {products.map((item) => (
                  <tr key={item._id} className="hover:bg-ivory/40 transition-colors">
                    {/* Outfit Title & Image */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.images?.[0] || 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800'}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-12 h-16 object-cover rounded-sm border border-charcoal/10 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-display text-sm font-semibold text-charcoal line-clamp-1">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-mauve font-mono tracking-wider uppercase mt-0.5">
                            SKU: {item.sku}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4 font-medium text-charcoal/80">
                      {item.category}
                    </td>

                    {/* Price */}
                    <td className="py-3 px-4 font-bold text-charcoal">
                      ₹{Number(item.price).toLocaleString('en-IN')}
                    </td>

                    {/* Fabric */}
                    <td className="py-3 px-4 text-charcoal/70 max-w-xs truncate">
                      {item.fabric || 'Pure Silk'}
                    </td>

                    {/* Badge */}
                    <td className="py-3 px-4">
                      {item.badge && item.badge !== 'None' ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-rose/20 text-mauve border border-rose/30">
                          <Tag className="w-2.5 h-2.5 text-rose" />
                          <span>{item.badge}</span>
                        </span>
                      ) : (
                        <span className="text-charcoal/40 text-[11px]">—</span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(item)}
                        title="Click to toggle status"
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border cursor-pointer transition-all ${
                          item.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                            : item.status === 'Draft'
                            ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                            : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                        }`}
                      >
                        {item.status}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEditModal(item)}
                          className="p-1.5 rounded hover:bg-charcoal/10 text-charcoal/70 hover:text-charcoal transition-colors"
                          title="Edit Outfit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item._id, item.title)}
                          className="p-1.5 rounded hover:bg-red-50 text-charcoal/70 hover:text-red-600 transition-colors"
                          title="Delete Listing"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal for adding/editing */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveProduct}
        product={editingProduct}
      />

    </div>
  );
};
