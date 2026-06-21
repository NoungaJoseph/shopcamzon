import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Phone, Mail } from 'lucide-react';


export const Footer: React.FC = () => {
  const { t } = useTranslation(['footer']);

  return (
    <footer className="bg-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        
        {/* Column 1 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-[var(--color-text-primary)]">{t('footer:socials')}</h4>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:opacity-75 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433"/><stop offset="25%" stopColor="#e6683c"/><stop offset="50%" stopColor="#dc2743"/><stop offset="75%" stopColor="#cc2366"/><stop offset="100%" stopColor="#bc1888"/></linearGradient></defs><path fill="url(#ig)" d="M12,2.16c3.2,0,3.58,0,4.85,0.07c3.25,0.15,4.77,1.69,4.92,4.92c0.06,1.27,0.07,1.65,0.07,4.85s0,3.58-0.07,4.85c-0.15,3.23-1.66,4.77-4.92,4.92c-1.27,0.06-1.64,0.07-4.85,0.07s-3.58,0-4.85-0.07c-3.26-0.15-4.77-1.7-4.92-4.92C2.17,15.58,2.16,15.2,2.16,12s0-3.58,0.07-4.85C2.38,3.93,3.89,2.38,7.15,2.23C8.42,2.17,8.8,2.16,12,2.16z M12,7.16A4.84,4.84,0,1,0,16.84,12,4.84,4.84,0,0,0,12,7.16Zm0,7.91A3.07,3.07,0,1,1,15.07,12,3.07,3.07,0,0,1,12,15.07Zm3.8-8.21a1.18,1.18,0,1,1-1.18-1.18A1.18,1.18,0,0,1,15.8,6.86Z"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1DA1F2" d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.38,4.48A13.95,13.95,0,0,1,1.67,3.15,4.92,4.92,0,0,0,3.19,9.72,4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54,13.94,13.94,0,0,0,7.55,21.7c9.06,0,14-7.5,14-14,0-.21,0-.42-.01-.63A10,10,0,0,0,24,4.59Z"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
          <div className="mt-8">
            <img src="/logo1.png" alt="SHOPCAMZON Logo" className="h-32 w-auto object-contain" />
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-[var(--color-text-primary)]">{t('footer:newsletter.title')}</h4>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('footer:newsletter.placeholder')}
              className="border border-[var(--color-black)] px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-[var(--color-black)]"
            />
            <label className="flex items-center space-x-3 text-sm text-[var(--color-text-muted)] cursor-pointer">
              <input type="checkbox" className="accent-[var(--color-black)] w-4 h-4 rounded-none cursor-pointer" />
              <span>{t('footer:newsletter.consent')}</span>
            </label>
            <Button variant="solid" className="mt-2 w-fit text-xs">{t('footer:newsletter.button')}</Button>
          </form>
        </div>
        
        {/* Column 3 */}
        <div className="flex flex-col">
          <h4 className="font-headline uppercase tracking-widest text-sm mb-6 text-[var(--color-text-primary)]">{t('footer:contact.title')}</h4>
          <div className="text-[var(--color-text-muted)] font-body flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a href="tel:+237678237456" className="hover:text-[var(--color-accent)] transition-colors" aria-label="Call">
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
              <a href="mailto:olatransagency@gmail.com" className="hover:text-[var(--color-accent)] transition-colors" aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:olatransagency@gmail.com" className="hover:text-[var(--color-accent)] transition-colors underline underline-offset-4 text-sm">
                olatransagency@gmail.com
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center text-[var(--color-text-muted)] text-sm">
        <p>{t('footer:copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};
