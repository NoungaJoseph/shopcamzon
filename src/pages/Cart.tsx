import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';

export const Cart: React.FC = () => {
  const { t } = useTranslation(['cart', 'shop']);
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    let message = `${t('cart:whatsapp.greeting', 'Hello Shopcamzon, I would like to place an order:')}\n\n`;
    items.forEach(item => {
      const productName = t(`shop:products.${item.id}.name`, item.name);
      message += `- ${item.quantity}x ${productName} (${(item.price * item.quantity).toLocaleString()} XAF)\n`;
    });
    message += `\n*${t('cart:summary.total', 'Total')}: ${cartTotal.toLocaleString()} XAF*\n\n${t('cart:whatsapp.nextStep', 'Please let me know how to proceed with payment and delivery.')}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/237678237456?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[var(--color-bg-white)] min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-headline uppercase tracking-widest">{t('cart:title', 'Your Cart')}</h1>
          <Divider className="mt-6" />
        </Reveal>

        {items.length === 0 ? (
          <Reveal className="text-center py-16">
            <p className="text-[var(--color-text-muted)] mb-8">{t('cart:empty', 'Your cart is currently empty.')}</p>
            <Link to="/shop" className="bg-[var(--color-black)] text-white py-3 px-8 uppercase font-bold tracking-widest hover:bg-[var(--color-accent)] transition-colors">
              {t('cart:continueShopping', 'Continue Shopping')}
            </Link>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-8">
              {items.map((item) => (
                <Reveal key={item.id} className="flex gap-4 sm:gap-6 items-start sm:items-center border-b border-gray-100 pb-8 flex-wrap sm:flex-nowrap">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[var(--color-bg-cream)] shrink-0">
                    <img src={`/${item.img}.jpg`} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold uppercase tracking-wider mb-1 pr-2 sm:pr-0 text-sm sm:text-base">{t(`shop:products.${item.id}.name`, item.name)}</h3>
                      <div className="font-bold sm:hidden text-right whitespace-nowrap text-sm">
                        {(item.price * item.quantity).toLocaleString()} XAF
                      </div>
                    </div>
                    <span className="text-[var(--color-text-muted)] text-xs sm:text-sm">{item.price.toLocaleString()} XAF</span>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4">
                      <div className="flex items-center border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-50">-</button>
                        <span className="px-3 py-1 border-x border-gray-200 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-50">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs sm:text-sm text-red-500 underline uppercase tracking-wider font-semibold">{t('cart:remove', 'Remove')}</button>
                    </div>
                  </div>
                  <div className="font-bold hidden sm:block shrink-0">
                    {(item.price * item.quantity).toLocaleString()} XAF
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="bg-[var(--color-bg-cream)] p-8 h-fit">
              <h2 className="text-xl font-headline uppercase tracking-widest mb-6">{t('cart:summary.title', 'Order Summary')}</h2>
              <div className="flex justify-between mb-4 text-[var(--color-text-muted)]">
                <span>{t('cart:summary.subtotal', 'Subtotal')}</span>
                <span>{cartTotal.toLocaleString()} XAF</span>
              </div>
              <div className="flex justify-between mb-6 text-[var(--color-text-muted)]">
                <span>{t('cart:summary.shipping', 'Shipping')}</span>
                <span>{cartTotal > 40000 ? t('cart:summary.free', 'Free') : t('cart:summary.shippingCalculated', 'Calculated at next step')}</span>
              </div>
              <Divider className="mb-6 w-full" />
              <div className="flex justify-between mb-8 font-bold text-lg">
                <span>{t('cart:summary.total', 'Total')}</span>
                <span>{cartTotal.toLocaleString()} XAF</span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[var(--color-black)] text-white py-4 px-8 uppercase font-bold tracking-widest hover:bg-[var(--color-accent)] transition-colors w-full"
              >
                {t('cart:checkoutWhatsApp', 'Checkout via WhatsApp')}
              </button>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
};
