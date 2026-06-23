import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';

export const WhereToBuy: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-[var(--color-bg-cream)] min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center flex flex-col items-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-headline uppercase">{t('nav.whereToBuy', 'Where To Buy')}</h1>
          <Divider className="my-6" />
          <p className="text-[var(--color-text-muted)] max-w-xl">{t('whereToBuy.subtitle', 'Find SHOPCAMZON in a store near you or order online.')}</p>
        </Reveal>

        <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {['Douala', 'Bamenda', 'Yaounde', 'Buea', 'Limbe', 'Bafoussam'].map((location, i) => {
            const locKey = location.toLowerCase().replace('é', 'e');
            return (
              <div key={i} className="bg-white p-8 shadow-sm flex items-center justify-center transition-all hover:bg-[var(--color-black)] hover:text-white cursor-pointer border border-[var(--color-black)] h-32 group">
                <span className="font-headline tracking-widest text-lg uppercase group-hover:text-white text-[var(--color-black)]">{t(`cities.${locKey}`, location)}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
};
