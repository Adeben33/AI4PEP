'use client';

import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-brand-green/20" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-green/25 bg-white/70 text-brand-ink transition hover:bg-brand-green/10 dark:border-white/15 dark:bg-white/10 dark:text-brand-cream"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
