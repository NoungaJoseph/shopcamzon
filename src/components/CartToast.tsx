import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

export const CartToast: React.FC = () => {
  const { t } = useTranslation(['common', 'shop']);
  const { lastAddedItem, clearLastAddedItem } = useCart();

  useEffect(() => {
    if (!lastAddedItem) return;

    const timeoutId = window.setTimeout(clearLastAddedItem, 2600);
    return () => window.clearTimeout(timeoutId);
  }, [lastAddedItem, clearLastAddedItem]);

  if (!lastAddedItem) return null;

  return (
    <div className="fixed left-4 right-4 top-28 z-[60] mx-auto flex max-w-md items-start gap-3 border border-[var(--color-black)] bg-white px-4 py-3 shadow-lg md:left-auto md:right-6 md:mx-0">
      <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={22} strokeWidth={1.8} />
      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
          {t('common:cart.added', 'Product added to cart')}
        </p>
        <p className="mt-1 truncate text-sm text-[var(--color-text-muted)]">
          {t(`shop:products.${lastAddedItem.id}.name`, lastAddedItem.name)}
        </p>
      </div>
    </div>
  );
};
