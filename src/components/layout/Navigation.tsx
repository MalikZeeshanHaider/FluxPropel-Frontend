'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:items-center md:gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} className="relative">
            <span
              className={cn(
                'text-sm font-medium transition-colors',
                isActive
                  ? 'text-accent-primary'
                  : 'text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary'
              )}
            >
              {link.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
