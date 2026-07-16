import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {ThemeProvider} from '@/components/theme-provider';
import {Navbar} from '@/components/layout/navbar';
import {Footer} from '@/components/layout/footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AI4PEP Website Starter',
  description: 'AI4PEP multilingual website starter with Azure translation.'
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NextIntlClientProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-brand-cream text-brand-ink dark:bg-brand-dark dark:text-brand-cream">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
