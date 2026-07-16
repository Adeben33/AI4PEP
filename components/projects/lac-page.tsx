import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const lacProjects = [
  {
    name: 'Brazil',
    href: 'https://inteligentehub.com.br/',
    summary: 'AI4PEP Brazil runs a platform called Auto-AI Pandemics that democratizes AI tools for epidemiology applications.'
  },
  {
    name: 'Dominican Republic',
    href: 'https://ai4pep.org/dominican-republic/',
    summary: 'AI4PEP Dominican Republic supports preparedness research for local and regional health needs.'
  },
  {
    name: 'Pan-Caribbean',
    href: 'https://ai4pep.org/pan-caribbean/',
    summary: 'The Pan-Caribbean team brings multi-country collaboration to AI-enabled health preparedness.'
  },
  {
    name: 'Peru',
    href: 'https://www.innovalab.info/en/ai4pep',
    summary: 'The Peru team connects innovation lab capacity with AI4PEP public health goals.'
  }
];

const lacPartners = [
  {name: 'Universidad Peruana Cayetano Heredia', src: '/partners/lac-cayetano-heredia.png', wide: true},
  {name: 'Universidade de Sao Paulo', src: '/partners/lac-sao-paulo.png'},
  {name: 'Dominican public health partner', src: '/partners/lac-dominican.png'},
  {name: 'Ministerio de Salud Publica', src: '/partners/lac-public-health.png'},
  {name: 'Ministerio da Saude', src: '/partners/lac-brazil-health.png'}
];

function PartnerLogo({partner}: {partner: (typeof lacPartners)[number]}) {
  return (
    <div className="flex h-28 w-48 shrink-0 items-center justify-center rounded-md border border-brand-green/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <Image
        src={assetPath(partner.src)}
        alt={partner.name}
        width={partner.wide ? 320 : 180}
        height={140}
        className="max-h-24 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function LacPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(242,201,76,0.16),transparent_28%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              AI4PEP Latin America &amp; the Caribbean (LAC)
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-cream/84">
              AI4PEP LAC projects are leveraging AI methods for vector-borne disease surveillance, medical screening tools and resilient public health systems.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-lg border border-brand-yellow/20 bg-white p-3 shadow-soft">
            <Image
              src={assetPath('/projects/lac-projects-map.png')}
              alt="AI4PEP LAC project map"
              width={863}
              height={475}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>

          <nav aria-label="AI4PEP LAC teams" className="mt-8 rounded-lg bg-white/12 p-3 backdrop-blur-sm">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {lacProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title={project.summary}
                  className={[
                    'flex min-h-20 items-center justify-center rounded-md px-4 text-center text-sm font-black uppercase text-brand-dark transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/70',
                    index % 4 === 0 ? 'bg-[#23C9D6]' : '',
                    index % 4 === 1 ? 'bg-[#2A9FD6] text-white' : '',
                    index % 4 === 2 ? 'bg-brand-green text-white' : '',
                    index % 4 === 3 ? 'bg-[#A7ECEC]' : ''
                  ].join(' ')}
                >
                  {project.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
              Regional Partners
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream">
              AI4PEP LAC Regional Partners
            </h2>
          </div>

          <div className="relative mt-12 overflow-hidden border-y border-brand-green/10 py-6 dark:border-white/10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-brand-dark" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-brand-dark" />
            <div className="flex w-max gap-5 animate-partner-marquee">
              {[...lacPartners, ...lacPartners, ...lacPartners].map((partner, index) => (
                <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
