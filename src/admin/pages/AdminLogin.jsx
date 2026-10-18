import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight, Sparkles, Shield, AlertCircle, ArrowLeft } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { BRAND } from '../../data/brandInfo';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  // If already logged in, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both admin email and password.');
      return;
    }

    const res = await login(email, password);
    if (res.success) {
      navigate(from, { replace: true });
    } else {
      setError(res.message || 'Invalid admin credentials.');
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@kefi.com');
    setPassword('admin123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[#F5F2F0] flex flex-col justify-center items-center p-4 relative overflow-hidden selection:bg-blush selection:text-charcoal">
      
      {/* Background Decorative Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blush/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose/20 rounded-full blur-3xl pointer-events-none" />

      {/* Return to live website link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal/70 hover:text-charcoal transition-colors bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Live Storefront</span>
        </Link>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-charcoal/10 shadow-luxury rounded-sm p-8 sm:p-10 relative z-10">
        
        {/* Header with Logo */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-block relative">
            <img
              src={BRAND.logo}
              alt="KEFI BY MUKTA"
              className="w-16 h-16 rounded-full mx-auto border-2 border-rose/40 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 p-1 bg-charcoal text-rose rounded-full">
              <Shield className="w-3 h-3" />
            </span>
          </div>

          <div>
            <h1 className="font-display text-3xl font-light text-charcoal">
              Atelier Management
            </h1>
            <p className="font-sans text-xs uppercase tracking-widest text-mauve font-semibold mt-1">
              Admin Portal · KEFI BY MUKTA
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 bg-red-50 border-l-4 border-red-500 rounded-sm flex items-start gap-2.5 text-xs text-red-800">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Admin Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal/40">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kefi.com"
                required
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal/40">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-charcoal text-ivory text-xs font-bold uppercase tracking-widest hover:bg-mauve transition-all duration-300 shadow-md rounded-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4 text-blush" />
          </button>
        </form>

        {/* Demo Credentials Quick Pill */}
        <div className="mt-6 pt-6 border-t border-charcoal/10 text-center">
          <p className="text-[11px] text-charcoal/60 mb-2">
            Default Owner Access:
          </p>
          <button
            type="button"
            onClick={handleFillDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF0F1] hover:bg-[#F3B7BA]/30 text-mauve border border-rose/30 rounded-sm text-xs font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose" />
            <span>Use Demo: admin@kefi.com / admin123</span>
          </button>
        </div>

        <div className="mt-6 text-center text-[10px] text-charcoal/50">
          KEFI BY MUKTA Atelier · Parasia Studio, Madhya Pradesh
        </div>
      </div>
    </div>
  );
};
