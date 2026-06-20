import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';
import { useCart } from '../context/CartContext';

export const Shop: React.FC = () => {
  const { t } = useTranslation(['shop', 'common']);
  const { addToCart } = useCart();

  // Only the actual standalone products identified from the images
  const products = [
    { id: 'product_1', img: '1', price: 48000 },
    { id: 'product_5', img: '5', price: 75000 },
    { id: 'product_8', img: '8', price: 55000 },
    { id: 'product_9', img: '9', price: 60000 },
  ];

  return (
    <div className="bg-[var(--color-bg-white)] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <Reveal className="text-center flex flex-col items-center mb-24">
          <h1 className="text-4xl md:text-5xl font-headline uppercase tracking-widest">{t('shop:title')}</h1>
          <Divider />
          <p className="text-[var(--color-text-muted)] mt-6">{t('shop:intro')}</p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full">
          {products.map((p) => (
            <Reveal key={p.id} className="group flex flex-col">
              <div className="flex flex-col h-full">
                <div className="aspect-[3/4] overflow-hidden relative mb-6">
                  <Link to={`/product/${p.id}`} aria-label={t('common:buttons.viewDetails', 'View Details')}>
                    <img 
                      src={`/${p.img}.jpg`} 
                      alt={t(`shop:products.${p.id}.name`, `AeroTrack Edition ${p.img}`)} 
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300 ease-out" 
                    />
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2 group-hover:text-[var(--color-accent)] transition-colors">{t(`shop:products.${p.id}.name`, `AeroTrack Edition ${p.img}`)}</h3>
                  <span className="font-body text-[var(--color-text-muted)]">{p.price.toLocaleString()} XAF</span>
                  <div className="mt-5 grid w-full grid-cols-1 gap-3">
                    <Link
                      to={`/product/${p.id}`}
                      className="border border-[var(--color-black)] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[var(--color-black)] hover:text-white"
                    >
                      {t('common:buttons.viewDetails', 'View Details')}
                    </Link>
                    <button
                      type="button"
                      onClick={() => addToCart({ id: p.id, name: t(`shop:products.${p.id}.name`), price: p.price, img: p.img })}
                      className="bg-[var(--color-black)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[var(--color-accent)]"
                    >
                      {t('common:buttons.addToCart', 'Add to Cart')}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
};
