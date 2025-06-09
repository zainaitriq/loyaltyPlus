import { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (stored) setToken(stored);
  }, []);

  const login = (jwt) => {
    setToken(jwt);
    if (typeof window !== 'undefined') localStorage.setItem('token', jwt);
    Router.push('/dashboard');
  };

  const logout = () => {
    setToken(null);
    if (typeof window !== 'undefined') localStorage.removeItem('token');
    Router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
