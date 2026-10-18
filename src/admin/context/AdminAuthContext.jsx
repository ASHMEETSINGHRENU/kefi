import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminLoginRequest } from '../../services/adminApi';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('kefi_admin_token') || null);
  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('kefi_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await adminLoginRequest(email, password);
      setToken(data.token);
      setAdminUser(data.admin);
      localStorage.setItem('kefi_admin_token', data.token);
      localStorage.setItem('kefi_admin_user', JSON.stringify(data.admin));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setAdminUser(null);
    localStorage.removeItem('kefi_admin_token');
    localStorage.removeItem('kefi_admin_user');
  };

  const isAuthenticated = Boolean(token);

  return (
    <AdminAuthContext.Provider
      value={{
        token,
        adminUser,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
