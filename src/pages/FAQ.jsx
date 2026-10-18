import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, HelpCircle } from 'lucide-react';
import { Accordion } from '../components/Accordion';
import { FAQS, BRAND } from '../data/brandInfo';

export const FAQ = () => {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            CLIENT CONCIERGE &amp; GUIDANCE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light text-charcoal">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-xl mx-auto">
            Everything you need to know about our bespoke design process, measurement consultations, timelines, and shipping.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={FAQS} />

        {/* Help Callout */}
        <div className="bg-[#FAF4F4] border border-rose/30 p-8 sm:p-10 text-center space-y-4 rounded-sm">
          <div className="w-10 h-10 rounded-full bg-blush/40 flex items-center justify-center text-mauve mx-auto">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-charcoal">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/75 max-w-md mx-auto font-sans leading-relaxed">
            Our studio is always happy to speak with you directly. Reach out on WhatsApp or fill out our custom design form.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-mauve transition-all"
            >
              <MessageCircle className="w-4 h-4 text-blush" />
              <span>Ask on WhatsApp</span>
            </a>

            <Link
              to="/custom-design"
              className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all"
            >
              <span>Custom Design Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
