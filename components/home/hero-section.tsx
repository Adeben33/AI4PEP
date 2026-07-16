import {ArrowRight, UsersRound} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';
import type {HomeContent} from '@/lib/content';
import {NetworkGlobe} from './network-globe';

export function HeroSection({content}: {content: HomeContent}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-cream dark:bg-brand-dark">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_36%,rgba(242,201,76,0.26),transparent_34%),linear-gradient(90deg,rgba(255,248,232,0.72),rgba(239,226,200,0.52))] dark:bg-[radial-gradient(circle_at_75%_36%,rgba(242,201,76,0.16),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(74,140,92,0.32),transparent_38%),linear-gradient(90deg,rgba(19,42,32,0.94),rgba(24,58,43,0.78))]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 opacity-40 dark:opacity-20">
        <div className="h-full bg-[repeating-radial-gradient(ellipse_at_center,rgba(242,162,26,0.38)_0_1px,transparent_1px_11px)]" />
      </div>

      <div className="mx-auto grid min-h-[760px] max-w-[96rem] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-brand-green/35 bg-white/70 px-4 py-2 text-xs font-black uppercase text-brand-green shadow-sm dark:border-brand-yellow/30 dark:bg-white/10 dark:text-brand-yellow">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-55 dark:opacity-70" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand-yellow shadow-[0_0_0_4px_rgba(242,201,76,0.22),0_0_18px_rgba(242,201,76,0.62)] dark:shadow-[0_0_0_4px_rgba(242,201,76,0.28),0_0_22px_rgba(242,201,76,0.78)]" />
            </span>
            {content.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-black leading-[1.08] text-brand-ink dark:text-brand-cream sm:text-5xl lg:text-6xl">
            <span className="block text-brand-green dark:text-brand-green-light">
              {content.hero.titleLine1}
            </span>
            <span className="block">{content.hero.titleLine2}</span>
            <span className="block text-brand-red dark:text-brand-yellow">
              {content.hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-semibold leading-9 text-brand-ink/70 dark:text-brand-cream dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
            {content.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="green" className="gap-3 shadow-lg shadow-brand-green/20">
              <Link href="/#projects">
                {content.hero.primaryCta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-3 border-brand-green/40 bg-white/50 dark:border-brand-yellow/35 dark:bg-white/10 dark:text-brand-cream">
              <Link href="/#network">
                {content.hero.secondaryCta}
                <UsersRound className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-[720px]">
          <NetworkGlobe />
        </div>
      </div>
    </section>
  );
}
