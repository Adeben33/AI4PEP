import {ArrowUpRight} from 'lucide-react';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {getChildPages, getPageBySlug, sitePages} from '@/lib/site-map';
import {Button} from '@/components/ui/button';
import {ActivitiesCommitteePage} from '@/components/about/activities-committee-page';
import {BoardOfTrusteesPage} from '@/components/about/board-of-trustees-page';
import {OurHubsPage} from '@/components/about/our-hubs-page';
import {PartnersPage} from '@/components/about/partners-page';
import {PerformanceDashboardPage} from '@/components/about/performance-dashboard-page';
import {SecretariatPage} from '@/components/about/secretariat-page';
import {SteeringCommitteePage} from '@/components/about/steering-committee-page';
import {StrategyPage} from '@/components/about/strategy-page';
import {AfricaPage} from '@/components/projects/africa-page';
import {AsiaPage} from '@/components/projects/asia-page';
import {LacPage} from '@/components/projects/lac-page';
import {MenaPage} from '@/components/projects/mena-page';
import {ProjectsPage} from '@/components/projects/projects-page';

type Props = {
  params: Promise<{locale: Locale; slug: string[]}>;
};

export function generateStaticParams() {
  return sitePages.flatMap((page) =>
    ['en', 'fr', 'es', 'pt', 'ar'].map((locale) => ({
      locale,
      slug: page.slug.split('/')
    }))
  );
}

export default async function SitePage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const path = slug.join('/');
  const page = getPageBySlug(path);

  if (!page) {
    notFound();
  }

  if (path === 'about-us/our-team') {
    return <SecretariatPage />;
  }

  if (path === 'about-us/our-hubs') {
    return <OurHubsPage />;
  }

  if (path === 'about-us/our-strategy') {
    return <StrategyPage />;
  }

  if (path === 'about-us/our-partners') {
    return <PartnersPage />;
  }

  if (path === 'about-us/steering-committee') {
    return <SteeringCommitteePage />;
  }

  if (path === 'about-us/activities-committee') {
    return <ActivitiesCommitteePage />;
  }

  if (path === 'about-us/board-of-trustees') {
    return <BoardOfTrusteesPage />;
  }

  if (path === 'about-us/performance-dashboard') {
    return <PerformanceDashboardPage />;
  }

  if (path === 'projects') {
    return <ProjectsPage />;
  }

  if (path === 'projects/africa') {
    return <AfricaPage />;
  }

  if (path === 'projects/asia') {
    return <AsiaPage />;
  }

  if (path === 'projects/lac') {
    return <LacPage />;
  }

  if (path === 'projects/mena') {
    return <MenaPage />;
  }

  const children = getChildPages(page.slug);
  const siblings = page.parent ? getChildPages(page.parent) : [];

  return (
    <section className="min-h-[70vh] bg-brand-cream py-20 dark:bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-red dark:text-brand-yellow">
            {page.section}
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-brand-green dark:text-brand-cream sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-7 text-xl font-semibold leading-9 text-brand-ink/72 dark:text-brand-cream/76">
            {page.summary}
          </p>

          {page.externalUrl ? (
            <Button asChild className="mt-9" variant="green" size="lg">
              <a href={page.externalUrl} target="_blank" rel="noreferrer">
                Visit Team Website
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>

        {children.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <Link
                key={child.slug}
                href={`/${child.slug}`}
                className="group rounded-lg border border-brand-green/10 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-red dark:text-brand-yellow">
                  {child.section}
                </p>
                <h2 className="mt-3 text-2xl font-black text-brand-green transition group-hover:text-brand-red dark:text-brand-cream dark:group-hover:text-brand-yellow">
                  {child.title}
                </h2>
                <p className="mt-4 text-sm font-medium leading-7 text-brand-ink/66 dark:text-brand-cream/66">
                  {child.summary}
                </p>
              </Link>
            ))}
          </div>
        ) : null}

        {children.length === 0 && siblings.length > 1 ? (
          <div className="mt-14 rounded-lg border border-brand-green/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
              Related Pages
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {siblings
                .filter((sibling) => sibling.slug !== page.slug)
                .map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/${sibling.slug}`}
                    className="rounded-full border border-brand-green/20 px-4 py-2 text-sm font-bold text-brand-green transition hover:bg-brand-green hover:text-white dark:border-brand-yellow/30 dark:text-brand-cream dark:hover:bg-brand-yellow dark:hover:text-brand-dark"
                  >
                    {sibling.title}
                  </Link>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
