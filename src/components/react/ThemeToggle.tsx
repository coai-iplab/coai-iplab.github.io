import React, { useState, useEffect } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  // Initialize theme on mount
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved) {
        setTheme(saved);
      }
    }
  }, []);

  // Update theme classes on change
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const isDark = 
        theme === 'dark' || 
        (theme === 'system' && mediaQuery.matches);
      
      root.classList.toggle('dark', isDark);
    };

    applyTheme();

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }

    // Listen for OS change if set to system
    const handleMediaChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [theme]);

  return (
    <div className="flex items-center justify-between p-1 bg-gray-100 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl w-full max-w-[240px] mx-auto shadow-inner transition-colors duration-200">
      <button
        onClick={() => setTheme('light')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
          theme === 'light'
            ? 'bg-white dark:bg-gray-700 text-amber-500 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
        title="Light Mode"
      >
        <Sun size={15} />
        <span className="hidden sm:inline">Light</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
          theme === 'dark'
            ? 'bg-white dark:bg-gray-700 text-blue-500 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
        title="Dark Mode"
      >
        <Moon size={15} />
        <span className="hidden sm:inline">Dark</span>
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
          theme === 'system'
            ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
        title="System Preference"
      >
        <Laptop size={15} />
        <span className="hidden sm:inline">Auto</span>
      </button>
    </div>
  );
}
