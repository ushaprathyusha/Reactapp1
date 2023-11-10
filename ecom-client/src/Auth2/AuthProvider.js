// Auth2/AuthProvider.js
import React, { createContext, useState,useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log('User set:', userData);
    setUser(userData);
  };
  useEffect(() => {
    console.log('User logged in:', user);
  }, [user]);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
