import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';
import { WomensWear } from './pages/WomensWear';
import { MensWear } from './pages/MensWear';
import { OccasionWear } from './pages/OccasionWear';
import { CustomDesign } from './pages/CustomDesign';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { NotFound } from './pages/NotFound';

// Admin Portal Imports
import { AdminAuthProvider } from './admin/context/AdminAuthContext';
import { AdminRouteGuard } from './admin/components/AdminRouteGuard';
import { AdminLayout } from './admin/layouts/AdminLayout';
import { AdminLogin } from './admin/pages/AdminLogin';
import { AdminDashboard } from './admin/pages/AdminDashboard';
import { AdminProducts } from './admin/pages/AdminProducts';
import { AdminEnquiries } from './admin/pages/AdminEnquiries';
import { AdminCustomers } from './admin/pages/AdminCustomers';
import { AdminMessages } from './admin/pages/AdminMessages';

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          {/* Public Storefront Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="womens-wear" element={<WomensWear />} />
            <Route path="mens-wear" element={<MensWear />} />
            <Route path="occasion-wear" element={<OccasionWear />} />
            <Route path="custom-design" element={<CustomDesign />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
          </Route>

          {/* Admin Login Portal */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Separated Admin Portal */}
          <Route
            path="/admin"
            element={
              <AdminRouteGuard>
                <AdminLayout />
              </AdminRouteGuard>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="messages" element={<AdminMessages />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
