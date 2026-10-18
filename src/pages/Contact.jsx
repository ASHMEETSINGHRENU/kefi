import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, MessageCircle, Instagram, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND } from '../data/brandInfo';
import { submitContact } from '../services/api';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await submitContact(data);
      if (response && response.success) {
        setSuccessMsg(response.message || 'Your message has been received.');
        reset();
      } else {
        setErrorMsg(response?.message || 'Failed to send message.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error sending message. Please try again or message on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            STUDIO ATELIER &amp; CONTACT
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal">
            Connect With the Studio
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            Whether inquiring about a wedding lehenga, scheduling a studio visit, or discussing custom tailoring from afar, we welcome your message.
          </p>
        </div>

        {/* Contact Information & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Details & Studio Location (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-rose/20 p-8 shadow-subtle space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal border-b border-rose/15 pb-3">
                Studio Details
              </h2>

              <div className="space-y-5 text-sm font-sans text-charcoal/80">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                      Physical Location
                    </strong>
                    <p className="leading-relaxed">
                      {BRAND.location.address}, <br />
                      {BRAND.location.city}, {BRAND.location.state}, {BRAND.location.country}
                    </p>
                    <p className="text-xs text-mauve mt-1.5 italic">
                      Visits by prior appointment for dedicated styling attention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-rose/10">
                  <Phone className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                      Phone / WhatsApp
                    </strong>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="hover:text-rose transition-colors font-medium"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-rose/10">
                  <Instagram className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                      Instagram Lookbook
                    </strong>
                    <a
                      href={BRAND.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rose transition-colors"
                    >
                      {BRAND.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Box */}
              <div className="pt-4 border-t border-rose/15">
                <a
                  href={BRAND.getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-mauve transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-blush" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#FAF4F4] border border-rose/30 rounded-sm text-xs text-charcoal/75 leading-relaxed font-sans">
              <strong className="text-charcoal block mb-1 uppercase tracking-wider">
                Ordering from outside Parasia?
              </strong>
              We welcome outfit orders from across India and worldwide. We coordinate video calls for fabric review and measurements.
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-rose/20 p-8 sm:p-10 shadow-luxury">
            <div className="space-y-2 mb-8">
              <span className="editorial-sub text-rose font-semibold tracking-[0.2em]">
                SEND A MESSAGE
              </span>
              <h2 className="font-display text-3xl text-charcoal">
                How Can We Assist You?
              </h2>
            </div>

            {successMsg && (
              <div className="mb-6 p-4 bg-[#FAF4F4] border border-rose/40 rounded-sm flex items-start gap-3 text-xs sm:text-sm text-charcoal">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Message Delivered</p>
                  <p className="mt-0.5">{successMsg}</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3 text-xs sm:text-sm text-red-700">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Failed to send message</p>
                  <p className="mt-0.5">{errorMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                    Your Name <span className="text-rose">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Ananya Mehra"
                    {...register('name', { required: 'Please enter your name' })}
                    className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp <span className="text-rose">*</span>
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    {...register('phone', { required: 'Please enter your phone number' })}
                    className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                  Email Address (Optional)
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  placeholder="e.g. ananya@example.com"
                  {...register('email')}
                  className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                  Subject <span className="text-rose">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Bridal appointment or custom kurta enquiry"
                  {...register('subject', { required: 'Please enter a subject' })}
                  className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-charcoal mb-1.5 uppercase tracking-wider">
                  Your Message <span className="text-rose">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help make your upcoming occasion unforgettable?"
                  {...register('message', {
                    required: 'Please enter your message',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                  className="w-full px-4 py-3 text-sm bg-ivory/50 border border-charcoal/20 focus:border-rose focus:ring-1 focus:ring-rose focus:outline-none transition-colors"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest hover:bg-mauve transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-blush" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-blush" />
                      <span>Send Message to Studio</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
