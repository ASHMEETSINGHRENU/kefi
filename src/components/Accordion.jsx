import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-rose/20 bg-white shadow-subtle overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-blush/20 transition-colors"
            >
              <span className="font-display text-xl sm:text-2xl text-charcoal">
                {item.question}
              </span>
              <span className="w-8 h-8 rounded-full bg-blush/30 flex items-center justify-center shrink-0 text-mauve">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans border-t border-rose/10 pt-4 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
