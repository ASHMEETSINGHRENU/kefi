import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Heart, Compass } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/brandInfo';

export const OurStory = () => {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-sub text-rose font-semibold tracking-[0.25em]">
            THE STORY OF KEFI BY MUKTA
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal leading-[1.08]">
            A Little Creativity. <br />
            A Lot of Heart. <br />
            <span className="italic font-normal text-mauve">A Style That's Yours.</span>
          </h1>
          <p className="font-display italic text-xl text-charcoal/80 max-w-xl mx-auto pt-2">
            "{BRAND.subTagline}"
          </p>
        </div>

        {/* Narrative Split 1: Philosophy & Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal leading-snug">
              Fashion Born from Individual Expression
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
              <p>
                In Greek, the word <em>Kefi</em> captures a joyful state of spirit, passion, and vivacity — the sheer exuberance of living in the moment. At <strong>KEFI BY MUKTA</strong>, that spirit shapes how we look at every length of fabric, every colour palette, and every cut.
              </p>
              <p>
                Too often, contemporary fashion asks women and men to fit into standard sizes, pre-decided moulds, or fleeting trends. Our studio was founded on a simple, liberating principle: your clothes should fit your body, your lifestyle, and your story — never the other way around.
              </p>
              <p>
                Whether crafting a bride's dream wedding lehenga, a festive kurta set for an intimate family gathering, or a sleek everyday ethnic co-ord, our focus remains on thoughtful personal design.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative shadow-luxury border-4 border-white aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES.craft.sketch}
                alt={IMAGES.craft.sketchAlt}
                loading="lazy"
                width="800"
                height="1000"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 border border-white/70">
                <p className="editorial-sub text-[10px] text-mauve">CREATIVE EXPLORATION</p>
                <p className="font-display italic text-lg text-charcoal">
                  Where Ideas Transform into Crafted Reality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Craft & Values Highlight */}
        <div className="bg-[#FAF2F2] border border-blush/80 p-8 sm:p-14 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="editorial-sub text-rose font-semibold tracking-[0.2em]">
              THE STUDIO ETHOS
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-light text-charcoal">
              Personal Attention at Every Stage
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 font-sans">
              We operate not as an impersonal mass retailer, but as an intimate design studio welcoming conversations, sketches, and dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display text-2xl text-charcoal">Meaningful Moments</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                Outfits planned around the milestones that matter to you — from intimate pujas to grand wedding celebrations.
              </p>
            </div>

            <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-display text-2xl text-charcoal">Flawless Fit</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                Cut to your precise proportions. Detailed measurement consultations for local and worldwide clients.
              </p>
            </div>

            <div className="p-6 bg-white border border-rose/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center text-mauve">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-display text-2xl text-charcoal">Tradition &amp; Contemporary</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                Harmonising Indian artisanal craftsmanship with modern, wearable silhouettes and subtle hues.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Location & Invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden shadow-luxury border-2 border-white">
              <img
                src={IMAGES.story.secondary}
                alt={IMAGES.story.secondaryAlt}
                loading="lazy"
                width="600"
                height="800"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="editorial-sub text-rose font-semibold tracking-[0.2em]">
              THE PARASIA STUDIO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-charcoal leading-snug">
              Visit or Connect from Anywhere
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
              <p>
                Our physical studio is located in Parasia, Madhya Pradesh (In front of Dr. Subhanshu Manekar Clinic, Jamai Road). We invite clients for personalized fittings and fabric discoveries by prior appointment.
              </p>
              <p>
                For our patrons across India and abroad, our virtual styling consultations offer the same warmth and bespoke precision. We discuss ideas via WhatsApp video, curate mood boards, and securely deliver your outfit to your doorstep.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/custom-design"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest hover:bg-mauve transition-all"
              >
                <span>Start Your Design Journey</span>
                <ArrowUpRight className="w-4 h-4 text-blush" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/30 text-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-blush/30 transition-all"
              >
                <span>Studio Location Details</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
