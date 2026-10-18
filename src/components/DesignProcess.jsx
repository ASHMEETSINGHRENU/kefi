import React from 'react';
import { Sparkles, Palette, Scissors, HeartHandshake } from 'lucide-react';

export const DesignProcess = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us Your Idea',
      description: 'Share your inspiration, occasion, preferred style, and budget.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: 'Personalise Your Design',
      description: 'Discuss colours, fabrics, measurements, and customisation options.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Finalise Your Outfit',
      description: 'Confirm the design and order details with the studio.',
      icon: Scissors,
    },
    {
      num: '04',
      title: 'Get Ready for Your Moment',
      description: 'Look forward to wearing a design created around your preferences.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FCF8F7] border-t border-blush/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <p className="editorial-sub">THE BESPOKE JOURNEY</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            From Your Imagination to Your Wardrobe.
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 font-sans">
            A seamless four-step collaborative process guided by personal care.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white p-8 border border-rose/20 shadow-subtle flex flex-col justify-between group hover:border-rose/60 transition-all duration-300"
              >
                {/* Step Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl sm:text-4xl text-rose font-light">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center text-mauve group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-mauve" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="font-display text-2xl text-charcoal leading-snug group-hover:text-mauve transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans mt-2.5">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Step Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-rose/10 flex items-center justify-between text-[11px] text-mauve uppercase tracking-widest font-semibold">
                  <span>Step {step.num}</span>
                  <span className="w-6 h-[1px] bg-rose/40" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
