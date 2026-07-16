import {BookOpenText, Check, CirclePlay, FilePieChart, Globe2, Network} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';

const quickLinks = [
  {
    href: '/#about',
    label: 'About AI4PEP',
    icon: Globe2
  },
  {
    href: '/#projects',
    label: 'Our Projects',
    icon: FilePieChart
  },
  {
    href: '/#stories',
    label: 'Our Stories',
    icon: Network
  }
];

const regions = [
  'Africa',
  'Asia',
  'Latin America & the Caribbean (LAC)',
  'Middle East & North Africa (MENA)'
];

const funders = [
  {
    name: 'IDRC CRDI',
    url: 'https://www.idrc.ca/',
    logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/International%20Development%20Research%20Centre%20logo.svg'
  },
  {
    name: 'UK International Development',
    url: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office',
    logo: '/funders/uk-international-development.png',
    wide: true
  },
  {
    name: 'Dalla Lana School of Public Health',
    url: 'https://www.dlsph.utoronto.ca/',
    logo: '/funders/dalla-lana-utoronto.png',
    wide: true
  },
  {
    name: 'University of Toronto',
    url: 'https://www.utoronto.ca/',
    logo: '/funders/university-of-toronto.png'
  },
  {
    name: 'York University',
    url: 'https://www.yorku.ca/',
    logo: '/funders/york-university.png'
  },
  {
    name: 'Government of Canada',
    url: 'https://www.canada.ca/',
    logo: 'https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg'
  }
];

export function IntroQuickLinks() {
  return (
    <section id="about" className="border-b border-brand-green/10 bg-white py-16 dark:border-white/10 dark:bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-4xl text-center text-xl font-black leading-9 text-brand-green dark:text-brand-cream">
          AI4PEP is a global network that brings together an interdisciplinary team of data scientists,
          public health professionals, physicists, mathematicians and community leaders from across
          the Global South who are committed to driving AI-powered innovations in global health.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-center gap-4 py-4 text-xl font-black text-brand-green transition hover:text-brand-red dark:text-brand-cream dark:hover:text-brand-yellow"
              >
                <Icon className="h-10 w-10 text-cyan-500 transition group-hover:scale-110 dark:text-brand-yellow" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function NetworkProjects() {
  return (
    <section id="projects" className="bg-brand-cream/50 py-20 dark:bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="overflow-hidden rounded-lg bg-brand-green shadow-soft dark:bg-brand-dark">
          <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_70%_35%,rgba(242,201,76,0.35),transparent_20%),linear-gradient(135deg,#174A34,#132A20_55%,#24523B)]">
            <div className="absolute inset-8 rounded-full border border-brand-yellow/45 bg-[repeating-radial-gradient(circle_at_center,rgba(242,201,76,0.42)_0_1px,transparent_1px_18px)] opacity-70" />
            <div className="absolute inset-x-10 bottom-12 rounded-xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">
                AI4PEP Network
              </p>
              <p className="mt-3 text-3xl font-black">20 teams across 4 regions</p>
            </div>
          </div>
        </div>

        <div>
          <FilePieChart className="h-14 w-14 text-cyan-500 dark:text-brand-yellow" />
          <h2 className="mt-8 text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream sm:text-5xl">
            Our Projects
          </h2>
          <p className="mt-6 text-lg font-semibold leading-8 text-brand-ink/75 dark:text-brand-cream/75">
            Explore research projects harnessing responsible AI for pandemic and epidemic preparedness.
          </p>

          <div className="mt-8 grid gap-4">
            {regions.map((region) => (
              <div key={region} className="flex items-center gap-4 text-lg font-bold text-brand-green dark:text-brand-cream">
                <Check className="h-5 w-5 text-brand-green dark:text-brand-yellow" />
                {region}
              </div>
            ))}
          </div>

          <Button asChild className="mt-9" variant="green" size="lg">
            <Link href="/#network">View Network Map</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FeaturedStory() {
  return (
    <section id="stories" className="bg-white py-20 dark:bg-brand-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <Network className="h-14 w-14 text-cyan-500 dark:text-brand-yellow" />
          <h2 className="mt-8 text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream sm:text-5xl">
            Our Stories
          </h2>
          <p className="mt-6 text-lg font-semibold leading-8 text-brand-ink/75 dark:text-brand-cream/75">
            Learn how AI4PEP projects are making an outstanding impact in AI and health worldwide.
          </p>

          <Button asChild className="mt-9" variant="green" size="lg">
            <Link href="/#news">Our Stories</Link>
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg bg-[#062B74] shadow-soft">
          <div className="relative aspect-video">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.28)_0_1px,transparent_1px_64px),radial-gradient(circle_at_28%_24%,rgba(34,211,238,0.34),transparent_28%)]" />
            <div className="absolute inset-10">
              <svg viewBox="0 0 720 390" className="h-full w-full text-cyan-300">
                <path d="M18 330C120 306 190 324 282 280S420 218 520 244s143-18 182-96" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M48 82 160 154 236 70 340 162 462 86 592 170" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                {[48, 160, 236, 340, 462, 592].map((cx, index) => (
                  <circle key={cx} cx={cx} cy={[82, 154, 70, 162, 86, 170][index]} r="7" fill="currentColor" />
                ))}
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/25 bg-white/10 text-white backdrop-blur-sm">
              <CirclePlay className="h-14 w-14" />
            </div>
            <p className="absolute bottom-12 right-14 -rotate-12 text-3xl font-black text-white">
              AI4PEP Video Series
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FundersAndHosts() {
  return (
    <section id="funding" className="bg-white py-20 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream">
          Our Funders and Hosts
        </h2>
        <p className="mx-auto mt-8 max-w-5xl text-lg font-bold leading-8 text-brand-green dark:text-brand-cream/80">
          AI4PEP is grateful to be funded and supported by IDRC, UK International Development,
          Dalla Lana School of Public Health, University of Toronto, York University, and Canada.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {funders.map((funder) => (
            <a
              key={funder.name}
              href={funder.url}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-40 flex-col items-center justify-center gap-4 rounded-lg border border-brand-green/10 bg-white px-6 py-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-soft dark:border-brand-yellow/25 dark:bg-white dark:hover:border-brand-yellow/60"
            >
              <img
                src={funder.logo}
                alt={`${funder.name} logo`}
                className={`${funder.wide ? 'max-h-24' : 'max-h-20'} max-w-full object-contain transition group-hover:scale-[1.03]`}
                loading="lazy"
              />
              <span className="text-sm font-black uppercase tracking-[0.12em] text-brand-green/70 dark:text-brand-green/80">
                {funder.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
