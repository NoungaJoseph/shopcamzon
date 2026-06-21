import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';

const productData: Record<string, { price: number, img: string }> = {
  'hq_product_1': { price: 65000, img: 'hq_product_1' },
  'product_1': { price: 48000, img: '1' },
  'hq_product_2': { price: 72000, img: 'hq_product_2' },
  'product_5': { price: 75000, img: '5' },
  'hq_product_3': { price: 45000, img: 'hq_product_3' },
  'product_8': { price: 55000, img: '8' },
  'hq_product_4': { price: 85000, img: 'hq_product_4' },
  'product_9': { price: 60000, img: '9' },
};

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation(['shop', 'common']);
  const { addToCart } = useCart();

  if (!id || !productData[id]) {
    return (
      <div className="min-h-screen py-24 flex flex-col items-center justify-center bg-[var(--color-bg-white)]">
        <h1 className="text-3xl font-headline uppercase">Product Not Found</h1>
        <Link to="/shop" className="mt-6 underline uppercase tracking-wider text-sm font-semibold hover:text-[var(--color-accent)]">Back to Shop</Link>
      </div>
    );
  }

  const product = productData[id];

  return (
    <div className="bg-[var(--color-bg-white)] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-black)] transition-colors uppercase font-bold text-xs tracking-wider">
          <ArrowLeft size={16} />
          {t('common:buttons.back', 'Back')}
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <Reveal className="aspect-[4/5] bg-[var(--color-bg-cream)]">
          <img src={`/${product.img}.jpg`} alt={t(`shop:products.${id}.name`)} className="w-full h-full object-cover" />
        </Reveal>

        <Reveal className="flex flex-col">
          <h1 className="text-4xl font-headline uppercase tracking-widest mb-4">{t(`shop:products.${id}.name`)}</h1>
          <span className="text-2xl font-body text-[var(--color-text-muted)] mb-8">{product.price.toLocaleString()} XAF</span>

          <Divider className="mb-8 w-1/4" />

          <p className="text-[var(--color-text-primary)] mb-8 leading-relaxed">
            {t(`shop:products.${id}.tagline`)}
            <br /><br />
            {t('shop:detailDescription', "This premium Shopcamzon edition brings cutting-edge AI face tracking, stable 360-degree rotation, and seamless gesture controls to your fingertips. Built with sturdy materials to support both smartphones and cameras, it's perfect for vloggers, live streamers, and content creators aiming for professional results.")}
          </p>

          <button
            onClick={() => addToCart({ id, name: t(`shop:products.${id}.name`), price: product.price, img: product.img })}
            className="bg-[var(--color-black)] text-white py-4 px-8 uppercase font-bold tracking-widest hover:bg-[var(--color-accent)] transition-colors w-full md:w-auto self-start"
          >
            {t('common:buttons.addToCart', 'Add to Cart')}
          </button>
        </Reveal>
      </div>
    </div>
  );
};
