import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingChat } from './FloatingChat';
import { CartToast } from './CartToast';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-cream)] text-[var(--color-text-primary)]">
      <Header />
      <CartToast />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};
