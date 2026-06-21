import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';
import { useCart } from '../context/CartContext';

export const Shop: React.FC = () => {
  const { t } = useTranslation(['shop', 'common']);
  const { addToCart } = useCart();

  const products = [
    { id: 'hq_product_1', img: 'hq_product_1', price: 65000 },
    { id: 'product_1', img: '1', price: 48000 },
    { id: 'hq_product_2', img: 'hq_product_2', price: 72000 },
    { id: 'product_5', img: '5', price: 75000 },
    { id: 'hq_product_3', img: 'hq_product_3', price: 45000 },
    { id: 'product_8', img: '8', price: 55000 },
    { id: 'hq_product_4', img: 'hq_product_4', price: 85000 },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((p) => (
            <Reveal key={p.id} className="flex flex-col bg-white border border-[var(--color-black)] group">
              <Link to={`/product/${p.id}`} className="block w-full aspect-[4/5] relative overflow-hidden bg-white p-6">
                <img src={`/${p.img}.jpg`} alt={t(`shop:products.${p.id}.name`)} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </Link>
              <div className="bg-[var(--color-bg-cream)] p-6 flex flex-col border-t border-[var(--color-black)] flex-grow justify-between">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="text-lg font-headline tracking-wide text-[var(--color-black)] leading-tight text-left">{t(`shop:products.${p.id}.name`)}</h3>
                  <span className="text-lg font-body whitespace-nowrap text-[var(--color-text-muted)]">{p.price.toLocaleString()} XAF</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id: p.id, name: t(`shop:products.${p.id}.name`), price: p.price, img: p.img });
                  }}
                  className="w-full bg-transparent text-[var(--color-black)] px-6 py-3 uppercase font-bold text-xs tracking-wider border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors"
                >
                  {t('common:buttons.addToCart', 'Add to Cart')}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
};
