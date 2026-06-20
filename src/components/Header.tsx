import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, ShoppingCart, X } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);
  const location = useLocation();
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Francais' }
  ];

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/shop', label: 'nav.shop' },
    { path: '/about', label: 'nav.about' },
    { path: '/where-to-buy', label: 'nav.whereToBuy', fallback: 'Where to Buy' }
  ];

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden flex h-10 w-10 items-center justify-center border border-gray-200 text-[var(--color-text-dark)]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            
            {/* The user provided logo1.png, replacing the text mark */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <img src="/logo1.png" alt="AeroTrack" className="h-16 scale-150 transform origin-left w-auto object-contain" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-body uppercase tracking-wider transition-colors ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[#1A1A1A] hover:text-[var(--color-accent)]'
                  }`}
                >
                  {t(link.label, link.fallback || '')}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-6">
            <label className="relative">
              <span className="sr-only">Language</span>
              <select
                value={currentLanguage.startsWith('fr') ? 'fr' : 'en'}
                onChange={(event) => changeLanguage(event.target.value)}
                className="h-10 appearance-none border border-[var(--color-black)] bg-white pl-3 pr-9 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] outline-none transition-colors hover:bg-gray-50"
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]" />
            </label>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="relative group hover:text-[var(--color-accent)] transition-colors text-[#1A1A1A]">
              <ShoppingCart size={24} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-black)] text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

        </div>
        {isMenuOpen && (
          <nav className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-body uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[var(--color-accent)]' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {t(link.label, link.fallback || '')}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};
