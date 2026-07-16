import fs from 'node:fs/promises';
import path from 'node:path';
import type {Locale} from '@/i18n/routing';

export type HomeContent = {
  hero: {
    badge: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: Array<{value: string; label: string}>;
  focusAreas: Array<{title: string; description: string}>;
  featured: {
    title: string;
    description: string;
  };
};

const contentRoot = path.join(process.cwd(), 'content');

export async function getHomeContent(locale: Locale): Promise<HomeContent> {
  const requested = path.join(contentRoot, locale, 'home.json');
  const fallback = path.join(contentRoot, 'en', 'home.json');

  try {
    const data = await fs.readFile(requested, 'utf8');
    return JSON.parse(data) as HomeContent;
  } catch {
    const data = await fs.readFile(fallback, 'utf8');
    return JSON.parse(data) as HomeContent;
  }
}
