import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Phone, Mail } from 'lucide-react';


export const Footer: React.FC = () => {
  const { t } = useTranslation(['footer']);

  return (
    <footer className="bg-[var(--color-brand-skyblue)] text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        
        {/* Column 1 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-white">{t('footer:socials')}</h4>
          <div className="flex space-x-4 mt-6 text-white">
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8">
            <img src="/logo1.png" alt="SHOPCAMZON Logo" className="h-32 w-auto object-contain" />
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-white">{t('footer:newsletter.title')}</h4>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('footer:newsletter.placeholder')}
              className="border border-white/20 bg-white/5 text-white px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-white placeholder-white/50"
            />
            <label className="flex items-center space-x-3 text-sm text-white/70 cursor-pointer">
              <input type="checkbox" className="accent-[var(--color-brand-red)] w-4 h-4 rounded-none cursor-pointer" />
              <span>{t('footer:newsletter.consent')}</span>
            </label>
            <Button variant="outline" className="mt-2 w-fit text-xs border-white text-white hover:bg-white hover:text-[var(--color-brand-skyblue)]">{t('footer:newsletter.button')}</Button>
          </form>
        </div>
        
        {/* Column 3 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-white">{t('footer:contact.title')}</h4>
          <div className="text-white/70 font-body flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a href="tel:+237678237456" className="hover:text-[var(--color-brand-red)] transition-colors" aria-label="Call">
                <Phone size={20} strokeWidth={1.5} />
              </a>
              <a href="https://wa.me/237678237456" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <span className="text-sm font-semibold">+237 6 78 23 74 56</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:olatransagency@gmail.com" className="hover:text-[var(--color-brand-red)] transition-colors" aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:olatransagency@gmail.com" className="hover:text-[var(--color-brand-red)] transition-colors underline underline-offset-4 text-sm">
                olatransagency@gmail.com
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center text-white/50 text-sm">
        <p>{t('footer:copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};
