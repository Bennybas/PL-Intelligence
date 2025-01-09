import React from 'react';
import Header from './Landing/Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;