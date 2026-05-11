import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  asLink?: boolean;
  to?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  asLink, 
  to, 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-shutter font-label-sm uppercase tracking-widest text-center px-8 py-4";
  
  const variants = {
    primary: "bg-primary-container text-white hover:bg-white hover:text-black red-accent-hover",
    outline: "border thin-border bg-transparent text-on-surface hover:bg-white hover:text-black",
    ghost: "text-on-surface hover:text-primary-container text-glow p-0"
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (asLink && to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
