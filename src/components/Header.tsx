import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Menu } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);
  const location = useLocation();
  const { itemCount } = useCart();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };


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
            <button className="md:hidden">
              <Menu size={24} className="text-[var(--color-text-dark)]" />
            </button>
            
            {/* The user provided logo1.png, replacing the text mark */}
            <Link to="/" className="flex items-center">
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
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`text-xs font-bold uppercase border border-[var(--color-black)] w-8 h-8 flex items-center justify-center transition-colors ${i18n.language === 'en' ? 'bg-[var(--color-black)] text-white' : 'hover:bg-gray-100 text-[#1A1A1A]'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('fr')} 
                className={`text-xs font-bold uppercase border border-[var(--color-black)] w-8 h-8 flex items-center justify-center transition-colors ${i18n.language === 'fr' ? 'bg-[var(--color-black)] text-white' : 'hover:bg-gray-100 text-[#1A1A1A]'}`}
              >
                FR
              </button>
            </div>
            <Link to="/cart" className="relative group hover:text-[var(--color-accent)] transition-colors text-[#1A1A1A]">
              <ShoppingCart size={24} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-black)] text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
};
