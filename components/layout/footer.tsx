import Image from 'next/image';
import {ArrowUpRight, Mail, MapPin, Phone} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {assetPath} from '@/lib/asset-path';

const siteLinks = [
  {href: '/about-us', label: 'About AI4PEP'},
  {href: '/projects', label: 'Our Projects'},
  {href: '/about-us/our-hubs', label: 'Our Hubs'},
  {href: '/news', label: 'Our Stories'},
  {href: '/funding', label: 'Funders and Hosts'}
];

const addresses = [
  '4700 Keele St, Toronto, ON M3J 1P3',
  '155 College Street, Office 662, Toronto, ON, M5T 3M7'
];

const socials = [
  {
    label: 'LinkedIn',
    short: 'in',
    href: 'https://www.linkedin.com/in/ai4pep%E2%80%94global-south-ai-for-pandemic-and-epidemic-preparedness-and-response-network-83477624b/'
  },
  {label: 'X', short: 'x', href: 'https://x.com/Ai4Pep'}
];

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="relative overflow-hidden bg-brand-cream px-4 py-12 dark:bg-brand-dark">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(45,106,63,0.08)_0_1px,transparent_1px_42px)] dark:bg-[repeating-linear-gradient(90deg,rgba(242,201,76,0.08)_0_1px,transparent_1px_42px)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-brand-green/12 bg-white/80 p-7 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
              Connect with AI4PEP
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-brand-green dark:text-brand-cream">
              Building responsible AI capacity for pandemic and epidemic preparedness across the Global South.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-black text-white transition hover:bg-brand-red"
            >
              Explore Projects
            </Link>
            <a
              href="mailto:ai4pep@gmail.org"
              className="inline-flex h-12 items-center justify-center rounded-full border border-brand-green/30 bg-white px-6 text-sm font-black text-brand-green transition hover:bg-brand-green hover:text-white dark:border-brand-yellow/30 dark:bg-transparent dark:text-brand-cream dark:hover:bg-brand-yellow dark:hover:text-brand-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-y border-brand-yellow/20 bg-brand-green dark:bg-[#183A2B]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.7fr_1.1fr] lg:px-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src={assetPath('/logo.png')}
                alt="AI4PEP logo"
                width={52}
                height={52}
                className="h-14 w-14 rounded-full bg-white object-contain shadow-lg"
              />
              <span className="text-3xl font-black tracking-tight sm:text-4xl">
                <span className="text-brand-yellow">AI</span>
                <span>4</span>
                <span className="text-brand-yellow">PEP</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-base font-medium leading-8 text-white/78">
              A Global South network building responsible AI tools for pandemic and epidemic preparedness.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-black uppercase transition hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-green"
                  aria-label={social.label}
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-yellow">
              Explore
            </p>
            <div className="mt-5 grid gap-3">
              {siteLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-base font-semibold text-white/82 transition hover:text-brand-yellow"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </nav>

          <div className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-yellow">
              Contact
            </p>
            <div className="mt-5 grid gap-4">
              <a
                href="mailto:ai4pep@gmail.org"
                className="flex items-center gap-3 text-base font-semibold text-white/86 transition hover:text-brand-yellow"
              >
                <Mail className="h-5 w-5 text-brand-yellow" />
                ai4pep@gmail.org
              </a>
              <a
                href="tel:+14167362100"
                className="flex items-center gap-3 text-base font-semibold text-white/86 transition hover:text-brand-yellow"
              >
                <Phone className="h-5 w-5 text-brand-yellow" />
                (416) 736-2100 ext. 66093
              </a>
            </div>

            <div className="mt-8 grid gap-4">
              {addresses.map((address, index) => (
                <div key={address} className="flex items-start gap-3 text-sm leading-6 text-white/74">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" />
                  <p>
                    <span className="font-black text-white">Address {index + 1}: </span>
                    {address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-cream px-4 py-7 text-center text-sm font-medium text-brand-ink/72 dark:bg-brand-dark dark:text-brand-cream/70">
        <p>
          This project is part of a global IDRC and UK International Development-funded initiative on{' '}
          <span className="font-black text-brand-green dark:text-brand-yellow">AI for Global Health</span>.
        </p>
        <p className="mt-2">All rights reserved. © 2026 AI4PEP</p>
      </div>
    </footer>
  );
}
