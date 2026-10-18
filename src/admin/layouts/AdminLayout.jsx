import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Sparkles,
  Users,
  MessageSquare,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Bell,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { BRAND } from '../../data/brandInfo';

export const AdminLayout = () => {
  const { adminUser, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    {
      name: 'Overview',
      path: '/admin',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      name: 'Products & Listings',
      path: '/admin/products',
      icon: ShoppingBag,
      badge: 'Manage',
    },
    {
      name: 'Custom Enquiries',
      path: '/admin/enquiries',
      icon: Sparkles,
      badge: 'Bespoke',
    },
    {
      name: 'Customer Directory',
      path: '/admin/customers',
      icon: Users,
      badge: null,
    },
    {
      name: 'Contact Messages',
      path: '/admin/messages',
      icon: MessageSquare,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F4] text-charcoal flex flex-col lg:flex-row font-sans">
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-charcoal text-ivory px-4 py-3 flex items-center justify-between border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <img
            src={BRAND.logo}
            alt="KEFI Logo"
            className="w-8 h-8 rounded-full border border-rose/30"
          />
          <div>
            <span className="font-display tracking-[0.2em] text-sm text-ivory block leading-none">
              KEFI
            </span>
            <span className="font-sans text-[8px] tracking-[0.25em] text-rose uppercase font-semibold">
              ADMIN ATELIER
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            target="_blank"
            className="p-1.5 text-xs text-ivory/80 hover:text-ivory bg-white/10 rounded flex items-center gap-1"
            title="Open Storefront"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 text-ivory hover:text-blush focus:outline-none"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar (Desktop + Mobile Drawer) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-charcoal text-ivory flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } border-r border-charcoal-50/20 shadow-xl lg:shadow-none`}
      >
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10">
            <Link to="/admin" className="flex items-center gap-3 group">
              <img
                src={BRAND.logo}
                alt="KEFI Logo"
                className="w-10 h-10 rounded-full border border-rose/40 shadow-sm group-hover:scale-105 transition-transform"
              />
              <div>
                <h1 className="font-display tracking-[0.22em] text-lg text-ivory leading-none">
                  KEFI
                </h1>
                <p className="font-sans text-[9px] tracking-[0.28em] text-rose uppercase font-semibold mt-1">
                  ATELIER ADMIN
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5" aria-label="Admin Navigation">
            {navItems.map((item) => {
              const isActive =
                item.path === '/admin'
                  ? location.pathname === '/admin'
                  : location.pathname.startsWith(item.path);
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-rose text-charcoal font-bold shadow-sm'
                      : 'text-ivory/75 hover:bg-white/10 hover:text-ivory'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-charcoal' : 'text-rose'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && !isActive && (
                    <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/10 text-ivory/60 font-mono">
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-charcoal" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Area with Mukta User Profile & Logout */}
        <div className="p-4 border-t border-white/10 space-y-3 bg-black/20">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between w-full px-3 py-2 text-xs text-blush hover:text-ivory hover:bg-white/5 rounded-sm transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Storefront</span>
            </span>
            <span className="text-[10px] text-ivory/50">kefibymukta.com</span>
          </Link>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose text-charcoal font-display font-bold flex items-center justify-center text-sm shadow-xs">
                M
              </div>
              <div>
                <p className="text-xs font-semibold text-ivory leading-tight">
                  {adminUser?.name || 'Mukta'}
                </p>
                <p className="text-[10px] text-ivory/60 font-sans">
                  Atelier Owner
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="p-1.5 text-ivory/60 hover:text-rose hover:bg-white/10 rounded transition-colors"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="hidden lg:flex items-center justify-between px-8 py-3.5 bg-white border-b border-charcoal/10 sticky top-0 z-30">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-mauve uppercase tracking-widest text-[11px]">
              KEFI STUDIO MANAGEMENT
            </span>
            <span className="text-charcoal/30">/</span>
            <span className="font-semibold text-charcoal uppercase tracking-wider">
              {location.pathname === '/admin'
                ? 'Overview'
                : location.pathname.replace('/admin/', '').replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-charcoal hover:text-mauve hover:bg-black/5 rounded-sm transition-colors border border-charcoal/15"
            >
              <span>View Storefront</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-2 pl-3 border-l border-charcoal/15">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-charcoal/80">
                Studio System Active
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};
