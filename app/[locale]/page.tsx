import {setRequestLocale} from 'next-intl/server';
import {HeroSection} from '@/components/home/hero-section';
import {
  FeaturedStory,
  FundersAndHosts,
  IntroQuickLinks,
  NetworkProjects
} from '@/components/home/sections';
import {getHomeContent} from '@/lib/content';
import type {Locale} from '@/i18n/routing';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const content = await getHomeContent(locale);

  return (
    <>
      <HeroSection content={content} />
      <IntroQuickLinks />
      <NetworkProjects />
      <FeaturedStory />
      <FundersAndHosts />
    </>
  );
}
