import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-ivory min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
          PAGE NOT FOUND
        </span>

        <h1 className="font-display text-7xl sm:text-8xl font-light text-charcoal">
          404
        </h1>

        <div className="space-y-2">
          <p className="font-display italic text-2xl text-charcoal/90">
            A Moment Out of Place
          </p>
          <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
            The page you are looking for may have been moved or does not exist. Let's guide you back to our curated collections.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest hover:bg-mauve transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-blush" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/custom-design"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-charcoal/30 text-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-blush/30 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose" />
            <span>Create Your Outfit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
