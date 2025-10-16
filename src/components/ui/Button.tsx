import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-standard focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-accent-primary hover:bg-accent-primary/90 text-white focus:ring-accent-primary dark:bg-accent-primary dark:hover:bg-accent-primary/90',
      secondary:
        'bg-accent-secondary hover:bg-accent-secondary/90 text-white focus:ring-accent-secondary dark:bg-accent-secondary dark:hover:bg-accent-secondary/90',
      outline:
        'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary dark:border-accent-primary dark:text-accent-primary',
      ghost:
        'text-dark-text-primary hover:bg-dark-bg-tertiary dark:text-dark-text-primary dark:hover:bg-dark-bg-tertiary',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
