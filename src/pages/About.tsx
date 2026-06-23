import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/Reveal';
import { Divider } from '../components/Divider';

export const About: React.FC = () => {
  const { t } = useTranslation(['about', 'common']);

  return (
    <div className="bg-[var(--color-bg-cream)] min-h-screen">
      
      {/* 7.1 Full-bleed photo banner */}
      <Reveal className="w-full h-[60vh]">
        <img src="/21.jpg" alt="Visual breather" className="w-full h-full object-cover" />
      </Reveal>

      {/* 7.2 Who We Are */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative">
        {/* Decorative leaf illustration placeholder */}
        <div className="absolute top-0 right-1/4 w-8 h-8 rounded-full bg-[var(--color-product-green)] opacity-60" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline uppercase tracking-widest leading-tight whitespace-pre-line">
              {t('about:hero.title')}
            </h1>
            <Divider />
            {/* Illustrated fruit graphic placeholder */}
            <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full opacity-50 mt-8" />
          </Reveal>

          <Reveal className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed pt-2">
            <p>{t('about:story.p1')}</p>
            <p>{t('about:story.p2')}</p>
            <p className="italic font-headline text-2xl text-[var(--color-text-primary)] mt-8">
              "{t('about:mission.text')}"
            </p>
          </Reveal>
        </div>
      </div>
      
      {/* 7.3 How It Works */}
      <div className="bg-white py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-headline uppercase tracking-widest">{t('about:howItWorks.title')}</h2>
            <Divider />
            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl">{t('about:howItWorks.intro')}</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {['product_1', 'product_5', 'product_8', 'product_9'].map((productId) => (
              <Reveal key={productId} className="bg-[var(--color-bg-cream)] p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-headline uppercase tracking-wider mb-6 pb-4 border-b border-gray-200">
                  {t(`about:howItWorks.${productId}.name`)}
                </h3>
                <ul className="space-y-4 text-[var(--color-text-primary)]">
                  {(t(`about:howItWorks.${productId}.steps`, { returnObjects: true }) as string[]).map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-[var(--color-accent)] font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
