import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';
import { BRAND } from '../data/brandInfo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(60);
  
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Monitor scroll to smoothly compress header and heighten elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header height to ensure mobile drawer aligns with zero gaps
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [scrolled]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (mobileMenuOpen || dropdownOpen) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          setDropdownOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [mobileMenuOpen, dropdownOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Store Content (Showcased directly in the navbar)
  const storeLinks = [
    { name: "Women's Wear", path: '/womens-wear' },
    { name: 'Occasion Wear', path: '/occasion-wear' },
    { name: "Men's Wear", path: '/mens-wear' },
    { name: 'Custom Design', path: '/custom-design' },
  ];

  // Other Part (Organized inside a luxury dropdown menu)
  const studioLinks = [
    {
      name: 'Our Story',
      path: '/our-story',
      desc: 'The Atelier, Mukta’s Journey & Heritage',
    },
    {
      name: 'Gallery',
      path: '/gallery',
      desc: 'Real Brides, Client Looks & Lookbook',
    },
    {
      name: 'Contact & Studio',
      path: '/contact',
      desc: 'Parasia Studio, Directions & Enquiries',
    },
    {
      name: 'FAQ',
      path: '/faq',
      desc: 'Bespoke Sizing, Timelines & Shipping',
    },
  ];

  const isStudioActive = studioLinks.some((link) => location.pathname === link.path);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFFDFB]/98 backdrop-blur-xl py-2 sm:py-2.5 border-b border-[#29292B]/15 shadow-[0_4px_20px_-2px_rgba(41,41,43,0.10)]'
            : 'bg-[#FFFDFB]/95 sm:bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#29292B]/10 shadow-[0_2px_12px_-2px_rgba(41,41,43,0.06)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link
              to="/"
              className="group flex items-center focus:outline-none focus:ring-2 focus:ring-rose/40 rounded-full shrink-0"
              aria-label="KEFI BY MUKTA Homepage"
              title="KEFI BY MUKTA Home"
            >
              <img
                src={BRAND.logo}
                alt="KEFI BY MUKTA"
                width="48"
                height="48"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow-xs border border-rose/30 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation Links — Showcases Store Content + Dropdown for Other Part */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4" aria-label="Main navigation">
              {storeLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-1.5 text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 rounded-sm font-semibold ${
                      isActive
                        ? 'text-[#1A1A1C] font-bold bg-rose/10'
                        : 'text-[#29292B]/85 hover:text-[#1A1A1C] hover:bg-black/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-rose-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Luxury Dropdown for Studio & Other Pages */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`relative flex items-center gap-1 px-3 py-1.5 text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 rounded-sm font-semibold focus:outline-none ${
                    isStudioActive || dropdownOpen
                      ? 'text-[#1A1A1C] font-bold bg-rose/10'
                      : 'text-[#29292B]/85 hover:text-[#1A1A1C] hover:bg-black/[0.04]'
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Studio</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180 text-rose' : 'text-mauve'
                    }`}
                  />
                  {isStudioActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-rose-500 rounded-full" />
                  )}
                </button>

                {/* Dropdown Floating Card */}
                {dropdownOpen && (
                  <div className="absolute top-full right-0 lg:left-0 mt-2 w-72 bg-[#FFFDFB]/98 backdrop-blur-2xl border border-[#29292B]/10 rounded-sm shadow-[0_12px_40px_rgba(41,41,43,0.12)] p-2 z-50 animate-fadeIn">
                    <div className="px-3 py-2 border-b border-rose/15 mb-1 flex items-center justify-between">
                      <p className="editorial-sub text-[10px] text-mauve font-bold tracking-[0.2em]">
                        ATELIER &amp; ABOUT
                      </p>
                      <Sparkles className="w-3 h-3 text-rose" />
                    </div>

                    <div className="space-y-1">
                      {studioLinks.map((item) => {
                        const isItemActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex flex-col px-3 py-2.5 rounded-sm transition-all group/item ${
                              isItemActive
                                ? 'bg-rose/15 text-charcoal font-semibold'
                                : 'hover:bg-rose/10 text-charcoal/90 hover:text-charcoal'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-base tracking-wide group-hover/item:text-mauve transition-colors">
                                {item.name}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-mauve opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-[11px] text-charcoal/60 font-sans mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={BRAND.getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1F4B38] bg-[#E8F5E9] hover:bg-[#C8E6C9] border border-[#A5D6A7] rounded-sm transition-all shadow-xs"
                title="Direct WhatsApp Consultation"
                aria-label="Direct WhatsApp Consultation"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32] fill-[#C8E6C9]" />
                <span className="hidden xl:inline">Enquire</span>
              </a>

              <Link
                to="/custom-design"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-charcoal text-ivory hover:bg-mauve transition-all duration-300 shadow-sm rounded-sm border border-charcoal hover:border-mauve shrink-0"
              >
                <span>Create Your Outfit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blush" />
              </Link>
            </div>

            {/* Mobile Header Actions & Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BRAND.getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#2E7D32] bg-[#E8F5E9] hover:bg-[#C8E6C9] border border-[#A5D6A7] rounded-sm transition-colors"
                aria-label="WhatsApp Enquiry"
                title="WhatsApp Enquiry"
              >
                <MessageCircle className="w-4 h-4 fill-[#C8E6C9]" />
              </a>

              <Link
                to="/custom-design"
                className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-charcoal text-ivory rounded-sm shadow-xs hover:bg-mauve transition-colors"
              >
                Custom
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-charcoal hover:text-mauve hover:bg-black/5 rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-rose/50"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 bg-[#FFFDFB]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 overflow-y-auto border-t border-rose/30 shadow-2xl animate-fadeIn"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="space-y-5 pt-2">
            <div className="flex items-center justify-between pb-2 border-b border-rose/20">
              <div className="flex items-center gap-2">
                <img
                  src={BRAND.logo}
                  alt="KEFI BY MUKTA"
                  className="h-8 w-8 rounded-full object-cover border border-rose/30 shadow-xs"
                />
                <div>
                  <span className="font-display text-base font-semibold tracking-wide text-charcoal block leading-none">
                    KEFI
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.25em] text-mauve uppercase font-bold">
                    BY MUKTA
                  </span>
                </div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-rose" />
            </div>

            {/* Store & Collections */}
            <div className="space-y-1">
              <p className="editorial-sub text-[10px] text-mauve font-bold tracking-[0.2em] px-2 mb-1">
                STORE &amp; COLLECTIONS
              </p>
              {storeLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-sm transition-all font-display text-xl tracking-wide ${
                      isActive
                        ? 'text-rose font-semibold bg-rose/10 border-l-2 border-rose'
                        : 'text-charcoal hover:text-mauve hover:bg-black/[0.03]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-rose' : 'text-charcoal/40'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Studio & Atelier */}
            <div className="space-y-1 pt-2 border-t border-rose/15">
              <p className="editorial-sub text-[10px] text-mauve font-bold tracking-[0.2em] px-2 mb-1">
                ATELIER &amp; ABOUT
              </p>
              {studioLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between py-2 px-3 rounded-sm transition-all font-sans text-sm font-semibold tracking-wide ${
                      isActive
                        ? 'text-rose bg-rose/10'
                        : 'text-charcoal/80 hover:text-charcoal hover:bg-black/[0.03]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-rose' : 'text-charcoal/40'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-rose/25 space-y-3 pb-6">
            <Link
              to="/custom-design"
              className="flex items-center justify-center gap-2 w-full py-3 bg-charcoal text-ivory text-xs font-bold uppercase tracking-widest hover:bg-mauve transition-colors shadow-sm rounded-sm"
            >
              <span>Start Custom Design</span>
              <ArrowUpRight className="w-4 h-4 text-blush" />
            </Link>

            <a
              href={BRAND.getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#E8F5E9] border border-[#A5D6A7] text-xs font-bold uppercase tracking-wider text-[#1F4B38] hover:bg-[#C8E6C9] rounded-sm transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#2E7D32] fill-[#C8E6C9]" />
              <span>WhatsApp Consultation ({BRAND.phone})</span>
            </a>

            <div className="text-center text-[11px] text-mauve pt-1">
              <p>{BRAND.location.city} Studio, {BRAND.location.state}</p>
              <p className="italic mt-0.5 font-display text-xs text-charcoal/80">
                "{BRAND.tagline}"
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
