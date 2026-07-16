'use client';

import {ChevronDown} from 'lucide-react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

const labels: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية'
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(event) => {
          router.replace(pathname, {locale: event.target.value});
        }}
        className="h-9 appearance-none rounded-full border border-brand-green/25 bg-white/75 py-0 pl-3 pr-8 text-sm font-semibold text-brand-ink outline-none transition hover:bg-brand-green/10 dark:border-white/15 dark:bg-white/10 dark:text-brand-cream"
        aria-label="Change language"
      >
        {routing.locales.map((code) => (
          <option key={code} value={code}>
            {labels[code]}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-ink/70 dark:text-brand-cream/80"
        aria-hidden="true"
      />
    </div>
  );
}
