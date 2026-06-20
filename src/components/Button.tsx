import React, { type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'solid', 
  fullWidth,
  className,
  ...props 
}) => {
  // Exact styles from prompt:
  // Outlined: background: transparent; border: 1px solid var(--color-black); color: var(--color-black);
  // Hover Outlined: background solid black, text white.
  // Solid: background: var(--color-black); color: var(--color-white); border: none;
  // Hover Solid: slight opacity reduction

  const baseClasses = "inline-flex items-center justify-center font-body text-base font-semibold px-[32px] py-[12px] rounded-none transition-all duration-250 ease-out cursor-pointer text-center";
  
  const variants = {
    solid: "bg-[var(--color-black)] text-[var(--color-white)] hover:opacity-85 border border-transparent",
    outline: "bg-transparent text-[var(--color-black)] border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]"
  };

  const classes = twMerge(
    clsx(
      baseClasses,
      variants[variant],
      fullWidth && "w-full",
      className
    )
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
