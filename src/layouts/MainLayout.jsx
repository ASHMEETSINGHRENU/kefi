import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top upon navigating to a new route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-blush selection:text-charcoal relative [overflow-anchor:none]">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};
