import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, Send, MessageCircle } from 'lucide-react';
import { submitEnquiry } from '../services/api';
import { BRAND } from '../data/brandInfo';

export const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      collectionType: "Women's Wear",
      outfitCategory: 'Wedding & Bridal Wear',
      budgetRange: '₹25,000 - ₹50,000',
      shippingCountry: 'India',
      consentToContact: true,
    },
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [serverError, setServerError] = useState(null);

  const selectedCollection = watch('collectionType');

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError(null);
    setSuccessResponse(null);

    try {
      const response = await submitEnquiry(data);
      if (response && response.success) {
        setSuccessResponse(response);
        reset();
      } else {
        setServerError(response?.message || 'Failed to submit enquiry.');
      }
    } catch (err) {
      const msg = err.errors ? err.errors.join(' ') : (err.message || 'Submission error. Please check your network.');
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-rose/20 shadow-luxury p-6 sm:p-10 lg:p-12 relative overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-rose to-blush" />

      {/* Form Header */}
      <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
        <span className="editorial-sub text-rose font-semibold tracking-[0.2em]">
          BESPOKE DESIGN ENQUIRY
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-charcoal">
          Tell Us About Your Vision
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/70 font-sans">
          Share your style preferences, celebration date, and inspirations. We will review your requirements and connect with you directly.
        </p>
      </div>

      {/* Success Notification */}
      {successResponse && (
        <div className="mb-8 p-6 bg-[#FAF4F4] border border-rose/40 rounded-sm text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-rose/20 text-mauve flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-charcoal" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display text-2xl text-charcoal">Enquiry Received</h4>
            <p className="text-sm text-charcoal/80 max-w-lg mx-auto font-sans leading-relaxed">
              {successResponse.message}
            </p>
            {successResponse.referenceId && (
              <p className="text-xs text-mauve pt-2 font-mono">
                Reference ID: <span className="font-bold">{successResponse.referenceId}</span>
              </p>
            )}
          </div>
          <div className="pt-2">
            <a
              href={BRAND.getWhatsAppLink('wedding')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-mauve transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blush" />
              <span>Discuss Further on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {serverError && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3 rounded-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
          <div>
            <p className="font-semibold">Unable to submit enquiry</p>
            <p className="mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      {/* Multi-Section Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        
        {/* Section 1: Contact Details */}
        <div className="space-y-4">
          <h4 className="editorial-sub text-charcoal text-[11px] border-b border-rose/20 pb-2">
            1. YOUR CONTACT DETAILS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-rose">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Radhika Sharma"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Phone / WhatsApp Number <span className="text-rose">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register('phone', { required: 'Phone / WhatsApp number is required' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. radhika@example.com"
                {...register('email')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Wardrobe & Silhouette Selection */}
        <div className="space-y-4">
          <h4 className="editorial-sub text-charcoal text-[11px] border-b border-rose/20 pb-2">
            2. COLLECTION &amp; OCCASION
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="collectionType" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Collection <span className="text-rose">*</span>
              </label>
              <select
                id="collectionType"
                {...register('collectionType', { required: 'Please select a collection' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              >
                <option value="Women's Wear">Women's Wear</option>
                <option value="Men's Wear">Men's Wear</option>
                <option value="Other / Couple Ensemble">Other / Couple Ensemble</option>
              </select>
            </div>

            <div>
              <label htmlFor="outfitCategory" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Outfit Category <span className="text-rose">*</span>
              </label>
              <select
                id="outfitCategory"
                {...register('outfitCategory', { required: 'Please select category' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              >
                {selectedCollection === "Men's Wear" ? (
                  <>
                    <option value="Custom Kurta Set">Custom Kurta Set</option>
                    <option value="Wedding & Groom Attire">Wedding &amp; Groom Attire</option>
                    <option value="Bandhgala / Jodhpuri">Bandhgala / Jodhpuri</option>
                    <option value="Nehru Jacket Ensemble">Nehru Jacket Ensemble</option>
                    <option value="Festive Traditional Wear">Festive Traditional Wear</option>
                  </>
                ) : (
                  <>
                    <option value="Wedding & Bridal Wear">Wedding &amp; Bridal Wear</option>
                    <option value="Festive & Occasion Wear">Festive &amp; Occasion Wear</option>
                    <option value="Everyday Elegance Suit">Everyday Elegance Suit</option>
                    <option value="Contemporary & Fusion Dress">Contemporary &amp; Fusion Dress</option>
                    <option value="Anarkali / Sharara Suit">Anarkali / Sharara Suit</option>
                    <option value="Bespoke Saree & Blouse">Bespoke Saree &amp; Blouse</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label htmlFor="occasion" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Occasion <span className="text-rose">*</span>
              </label>
              <select
                id="occasion"
                {...register('occasion', { required: 'Occasion is required' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              >
                <option value="Wedding / Bridal">Wedding / Bridal</option>
                <option value="Reception / Cocktail">Reception / Cocktail</option>
                <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                <option value="Festivals (Diwali, Eid, etc.)">Festivals (Diwali, Eid, etc.)</option>
                <option value="Family Celebration">Family Celebration</option>
                <option value="Everyday & Workwear">Everyday &amp; Workwear</option>
                <option value="Other Milestone">Other Milestone</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Design Details & Preferences */}
        <div className="space-y-4">
          <h4 className="editorial-sub text-charcoal text-[11px] border-b border-rose/20 pb-2">
            3. DESIGN PREFERENCES &amp; BUDGET
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label htmlFor="preferredColours" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Preferred Colours
              </label>
              <input
                id="preferredColours"
                type="text"
                placeholder="e.g. Blush Pink, Ivory, Crimson, Deep Mauve"
                {...register('preferredColours')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="budgetRange" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Comfortable Budget Range (INR) <span className="text-rose">*</span>
              </label>
              <select
                id="budgetRange"
                {...register('budgetRange', { required: 'Budget range is required' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              >
                <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹2,00,000+">₹1,00,000 - ₹2,00,000+</option>
                <option value="Flexible / Under Discussion">Flexible / Under Discussion</option>
              </select>
            </div>

            <div>
              <label htmlFor="requiredDate" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Required By / Event Date <span className="text-rose">*</span>
              </label>
              <input
                id="requiredDate"
                type="date"
                {...register('requiredDate', { required: 'Please enter target date' })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
              {errors.requiredDate && (
                <p className="text-red-500 text-xs mt-1">{errors.requiredDate.message}</p>
              )}
            </div>

            <div className="lg:col-span-3">
              <label htmlFor="preferredStyle" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Preferred Style &amp; Silhouette Notes
              </label>
              <input
                id="preferredStyle"
                type="text"
                placeholder="e.g. Flared skirt with sweetheart neckline, minimalist zari border, organza dupatta"
                {...register('preferredStyle')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Outfit Description & Inspiration Link */}
        <div className="space-y-4">
          <h4 className="editorial-sub text-charcoal text-[11px] border-b border-rose/20 pb-2">
            4. INSPIRATION &amp; VISION DETAILS
          </h4>
          
          <div>
            <label htmlFor="description" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
              Describe Your Vision in Detail <span className="text-rose">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Tell us about the mood, fabric desires, embroidery density, or particular styling ideas you have imagined..."
              {...register('description', {
                required: 'Please provide a brief description of the outfit',
                minLength: { value: 10, message: 'Please write at least 10 characters' },
              })}
              className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="referenceImageUrl" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Reference Image Link (Pinterest / Google Drive / URL)
              </label>
              <input
                id="referenceImageUrl"
                type="url"
                placeholder="https://..."
                {...register('referenceImageUrl')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
              <p className="text-[11px] text-mauve mt-1 font-sans">
                You can also share images directly via WhatsApp after submitting!
              </p>
            </div>

            <div>
              <label htmlFor="measurementsNotes" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Sizing or Measurement Notes (Optional)
              </label>
              <input
                id="measurementsNotes"
                type="text"
                placeholder="e.g. Standard Size M, or custom measurement consult needed"
                {...register('measurementsNotes')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Shipping location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label htmlFor="shippingCity" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Your City
              </label>
              <input
                id="shippingCity"
                type="text"
                placeholder="e.g. Mumbai, Indore, Delhi, London"
                {...register('shippingCity')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="shippingCountry" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                Country
              </label>
              <input
                id="shippingCountry"
                type="text"
                placeholder="e.g. India, UAE, USA, UK"
                {...register('shippingCountry')}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('consentToContact', { required: 'Consent is required' })}
              className="mt-1 h-4 w-4 text-charcoal rounded border-charcoal/30 focus:ring-rose"
            />
            <span className="text-xs text-charcoal/80 leading-normal font-sans">
              I consent to being contacted by KEFI BY MUKTA on phone or WhatsApp regarding this custom outfit design enquiry. (This enquiry does not constitute an immediate charge).
            </span>
          </label>
          {errors.consentToContact && (
            <p className="text-red-500 text-xs mt-1">{errors.consentToContact.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto min-w-[280px] px-10 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-mauve transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 mx-auto disabled:opacity-60 border border-charcoal hover:border-mauve"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-blush" />
                <span>Submitting Your Vision...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-blush" />
                <span>Submit Custom Outfit Enquiry</span>
              </>
            )}
          </button>
          
          <p className="text-[11px] text-mauve mt-3 font-sans">
            Personal Attention Guaranteed · Direct Studio Coordination
          </p>
        </div>

      </form>
    </div>
  );
};
