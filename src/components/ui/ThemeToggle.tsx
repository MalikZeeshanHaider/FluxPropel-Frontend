'use client';

import React, { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
  }, [setTheme]);

  return (
    <motion.button
      onClick={toggleTheme}
      className="rounded-lg bg-light-bg-tertiary p-2 text-light-text-primary transition-colors hover:bg-light-bg-tertiary/80 dark:bg-dark-bg-tertiary dark:text-dark-text-primary dark:hover:bg-dark-bg-tertiary/80"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
