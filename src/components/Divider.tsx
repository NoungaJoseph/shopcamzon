import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div className={twMerge(clsx("w-[40px] h-[2px] bg-[var(--color-black)] my-6", className))} />
  );
};
