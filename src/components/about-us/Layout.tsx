// src/components/layout/Layout.tsx
'use client'; 

type LayoutProps = {
  children: React.ReactNode;
};

import React from 'react';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-darkBackground font-sans">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
