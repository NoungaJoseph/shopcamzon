import React from 'react';
import { useTranslation } from 'react-i18next';

export const FloatingChat: React.FC = () => {
  const { t } = useTranslation(['common']);
  return (
    <a 
      href="https://wa.me/237678237456" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-0 right-0 m-6 z-50 bg-[var(--color-black)] text-[var(--color-white)] px-6 py-4 font-body font-bold tracking-wide uppercase text-sm border-none shadow-none rounded-none hover:opacity-85 transition-opacity inline-block"
    >
      {t('chat.button', "Let's Chat!")}
    </a>
  );
};
