import React, { useState, useEffect } from 'react';
import { X, Image, Sparkles, AlertCircle, Save } from 'lucide-react';

export const ProductModal = ({ isOpen, onClose, onSave, product = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    sku: '',
    category: "Women's Wear",
    price: '',
    fabric: '',
    colors: '',
    badge: 'None',
    status: 'Active',
    imageUrl: '',
    description: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        sku: product.sku || '',
        category: product.category || "Women's Wear",
        price: product.price || '',
        fabric: product.fabric || '',
        colors: Array.isArray(product.colors) ? product.colors.join(', ') : '',
        badge: product.badge || 'None',
        status: product.status || 'Active',
        imageUrl: product.images?.[0] || '',
        description: product.description || '',
      });
    } else {
      setFormData({
        title: '',
        sku: 'KEFI-' + Math.floor(1000 + Math.random() * 9000),
        category: "Women's Wear",
        price: '',
        fabric: 'Pure Silk & Chiffon',
        colors: 'Blush Pink, Gold',
        badge: 'None',
        status: 'Active',
        imageUrl: 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800',
        description: '',
      });
    }
    setError('');
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title || !formData.price || !formData.description) {
      setError('Please fill in Title, Price, and Description.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        title: formData.title,
        sku: formData.sku,
        category: formData.category,
        price: Number(formData.price),
        fabric: formData.fabric,
        colors: formData.colors.split(',').map((c) => c.trim()).filter(Boolean),
        badge: formData.badge,
        status: formData.status,
        images: [formData.imageUrl || 'https://shobitam.com/cdn/shop/files/KF-29Pink_4.jpg?v=1740989894&width=1800'],
        description: formData.description,
      };

      await onSave(payload);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save product listing');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-charcoal/15 rounded-sm shadow-luxury max-w-2xl w-full overflow-hidden animate-fadeIn my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-charcoal text-ivory flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose" />
            <h2 className="font-display text-lg tracking-wide">
              {product ? 'Edit Outfit Listing' : 'Create New Outfit Listing'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-ivory/60 hover:text-ivory hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-sm flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Outfit Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Royal Scarlet Velvet Lehenga"
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                SKU Reference Code
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                placeholder="e.g. KEFI-B101"
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal uppercase"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              >
                <option value="Women's Wear">Women's Wear</option>
                <option value="Men's Wear">Men's Wear</option>
                <option value="Occasion Wear">Occasion Wear</option>
                <option value="Bridal Couture">Bridal Couture</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Everyday Elegance">Everyday Elegance</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Price (INR ₹) *
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="e.g. 65000"
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              >
                <option value="Active">Active (Live in catalog)</option>
                <option value="Draft">Draft (Hidden)</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Fabric &amp; Craft Details
              </label>
              <input
                type="text"
                value={formData.fabric}
                onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                placeholder="e.g. Pure Raw Silk, Net & Organza"
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                Marketing Badge
              </label>
              <select
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              >
                <option value="None">None</option>
                <option value="Bestseller">Bestseller</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Trending">Trending</option>
                <option value="Limited Edition">Limited Edition</option>
                <option value="Haute Couture">Haute Couture</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Color Palette (comma separated)
            </label>
            <input
              type="text"
              value={formData.colors}
              onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
              placeholder="e.g. Crimson Red, Antique Gold, Ivory"
              className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
            />
          </div>

          {/* Image URL & Preview */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Image URL
            </label>
            <div className="flex gap-3 items-center">
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://..."
                className="flex-1 px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
              />
              {formData.imageUrl && (
                <div className="w-12 h-12 rounded border border-charcoal/20 overflow-hidden bg-ivory shrink-0">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Description *
            </label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe silhouette, embroidery technique, and ideal occasion..."
              className="w-full px-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-charcoal/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-charcoal/20 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-black/5 rounded-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 bg-charcoal text-ivory text-xs font-bold uppercase tracking-wider hover:bg-mauve transition-colors rounded-sm flex items-center gap-1.5 disabled:opacity-50"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Saving...' : 'Save Outfit Listing'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
