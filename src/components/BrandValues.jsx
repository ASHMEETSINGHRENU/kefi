import React from 'react';
import { UserCheck, CalendarHeart, Sparkles, MessageSquareQuote } from 'lucide-react';

export const BrandValues = () => {
  const values = [
    {
      title: 'Personal Expression',
      description: 'Your preferences and individuality are at the heart of your design.',
      icon: UserCheck,
    },
    {
      title: 'Occasion-Led Styling',
      description: 'Explore outfits for celebrations, weddings, everyday life, and special milestones.',
      icon: CalendarHeart,
    },
    {
      title: 'Traditional Meets Contemporary',
      description: 'Discover a balance of Indian fashion, modern silhouettes, and fusion inspiration.',
      icon: Sparkles,
    },
    {
      title: 'A Personal Design Journey',
      description: 'Share your ideas and discuss your requirements directly with the studio.',
      icon: MessageSquareQuote,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory border-t border-blush/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <p className="editorial-sub">CORE PILLARS</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            Beautifully Personal. <br className="hidden sm:inline" />
            Thoughtfully Designed.
          </h2>
        </div>

        {/* 4 Brand Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#FFFBFB] border border-rose/15 rounded-sm hover:border-rose/50 transition-all duration-300 space-y-4"
              >
                <div className="w-11 h-11 rounded-full bg-blush/40 flex items-center justify-center text-charcoal">
                  <Icon className="w-5 h-5 text-mauve" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-charcoal">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
