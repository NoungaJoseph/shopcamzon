import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AnnouncementBar: React.FC = () => {
  const { t } = useTranslation(['common']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    t('announcement.message1'),
    t('announcement.message2')
  ].filter(Boolean);

  useEffect(() => {
    if (messages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-[var(--color-black)] text-[var(--color-white)] uppercase text-xs tracking-wide py-2 flex items-center justify-center overflow-hidden">
      <div className="relative w-full text-center h-4 flex items-center justify-center">
        {messages.map((msg, index) => (
          <span
            key={index}
            className={`absolute transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};
