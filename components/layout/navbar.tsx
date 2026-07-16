import Image from 'next/image';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {assetPath} from '@/lib/asset-path';
import {siteNavigation} from '@/lib/site-map';
import {LanguageSwitcher} from './language-switcher';
import {ThemeToggle} from './theme-toggle';

export function Navbar() {
  const t = useTranslations('Navbar');
  const projectRegionItems: Record<string, Array<{title: string; href: string}>> = {
    Africa: [
      {title: 'Cabo Verde', href: '/projects/africa/cabo-verde'},
      {title: 'Cameroon', href: '/projects/africa/cameroon'},
      {title: 'Ethiopia', href: '/projects/africa/ethiopia'},
      {title: 'Ghana - Team 1', href: '/projects/africa/ghana-team-1'},
      {title: 'Ghana - Team 2', href: '/projects/africa/ghana-team-2'},
      {title: 'Nigeria', href: '/projects/africa/nigeria'},
      {title: 'Senegal', href: '/projects/africa/senegal'},
      {title: 'South Africa', href: '/projects/africa/south-africa'}
    ],
    Asia: [
      {title: 'Indonesia', href: '/projects/asia/indonesia'},
      {title: 'Malaysia', href: '/projects/asia/malaysia'},
      {title: 'Philippines', href: '/projects/asia/philippines'},
      {title: 'Mongolia', href: '/projects/asia/mongolia'}
    ],
    LAC: [
      {title: 'Brazil', href: '/projects/lac/brazil'},
      {title: 'Dominican Republic', href: '/projects/lac/dominican-republic'},
      {title: 'Pan-Caribbean', href: '/projects/lac/pan-caribbean'},
      {title: 'Peru', href: '/projects/lac/peru'}
    ],
    MENA: [
      {title: 'Lebanon', href: '/projects/mena/lebanon'},
      {title: 'Morocco', href: '/projects/mena/morocco'},
      {title: 'Tunisia', href: '/projects/mena/tunisia'},
      {title: 'West Bank / Palestine', href: '/projects/mena/west-bank-palestine'}
    ]
  };

  const labelOverrides: Record<string, string> = {
    Home: t('home'),
    'About Us': t('about'),
    Projects: t('projects'),
    AI4Mpox: t('ai4mpox'),
    News: t('news'),
    Events: t('events'),
    Resources: t('resources'),
    Students: t('students'),
    Funding: t('funding'),
    'Contact Us': t('contact')
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-brand-cream/80 backdrop-blur-xl dark:border-white/10 dark:bg-brand-dark/80">
      <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <Image
            src={assetPath('/logo.png')}
            alt="AI4PEP logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
            priority
          />
          <p className="text-2xl font-black tracking-tight sm:text-3xl" aria-label="AI4PEP">
            <span className="text-brand-yellow">AI</span>
            <span className="text-brand-green">4</span>
            <span className="text-brand-red">PEP</span>
          </p>
        </Link>

        <div className="flex min-w-0 items-center gap-3">
          <nav className="hidden items-center gap-3 lg:flex xl:gap-4">
            {siteNavigation.map((item) => (
              <div key={item.href} className="group/nav relative py-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-0.5 whitespace-nowrap text-sm font-semibold text-brand-ink/70 transition hover:text-brand-red dark:text-brand-cream/70 dark:hover:text-brand-yellow xl:text-base"
                >
                  {labelOverrides[item.title] ?? item.title}
                  {item.items ? <ChevronDown className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" /> : null}
                </Link>

                {item.items ? (
                  <div className="invisible absolute left-0 top-full z-50 min-w-64 rounded-lg border border-brand-green/10 bg-white p-2 opacity-0 shadow-soft transition group-hover/nav:visible group-hover/nav:opacity-100 dark:border-white/10 dark:bg-brand-dark">
                    {item.items.map((child) => {
                      const regionItems = item.title === 'Projects' ? projectRegionItems[child.title] : undefined;

                      if (regionItems) {
                        return (
                          <div key={child.href} className="group/region relative">
                            <Link
                              href={child.href}
                              className="flex items-center justify-between rounded-md px-4 py-2.5 text-sm font-bold text-brand-ink/72 transition hover:bg-brand-cream hover:text-brand-red group-hover/region:bg-brand-cream group-hover/region:text-brand-red dark:text-brand-cream/78 dark:hover:bg-white/10 dark:hover:text-brand-yellow dark:group-hover/region:bg-white/10 dark:group-hover/region:text-brand-yellow"
                            >
                              <span>{child.title}</span>
                              <ChevronRight className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                            </Link>
                            <div className="absolute left-full top-0 hidden h-full w-3 group-hover/region:block" aria-hidden="true" />
                            <div className="invisible absolute left-[calc(100%+0.5rem)] top-0 z-50 min-w-64 rounded-lg border border-brand-green/10 bg-white p-3 opacity-0 shadow-soft transition group-hover/region:visible group-hover/region:opacity-100 dark:border-white/10 dark:bg-brand-dark">
                              {regionItems.map((project) => (
                                <Link
                                  key={project.href}
                                  href={project.href}
                                  className="block rounded-md px-4 py-2.5 text-sm font-bold text-brand-ink/72 transition hover:bg-brand-cream hover:text-brand-red dark:text-brand-cream/78 dark:hover:bg-white/10 dark:hover:text-brand-yellow"
                                >
                                  {project.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-4 py-2.5 text-sm font-bold text-brand-ink/72 transition hover:bg-brand-cream hover:text-brand-red dark:text-brand-cream/78 dark:hover:bg-white/10 dark:hover:text-brand-yellow"
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
