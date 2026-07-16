import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const africaProjects = [
  {
    name: 'Cabo Verde',
    slug: '/projects/africa/cabo-verde',
    href: 'https://ai4pep.org/cabo-verde/',
    summary: 'AI4PEP Cabo Verde contributes regional expertise in AI-enabled epidemic preparedness.'
  },
  {
    name: 'Cameroon',
    slug: '/projects/africa/cameroon',
    href: 'https://www.ai4d.ai/innovations/digicare',
    summary: 'AI4PEP Cameroon is using a digital One Health approach for infectious disease control to strengthen Cameroon’s health system.'
  },
  {
    name: 'Ethiopia',
    slug: '/projects/africa/ethiopia',
    href: 'https://haqila.org',
    summary: 'The Ethiopia team builds locally grounded AI capacity for health decision-making.'
  },
  {
    name: 'Ghana 1',
    slug: '/projects/africa/ghana-team-1',
    href: 'https://rapid-vbp.org/',
    summary: 'Ghana Team 1 works on AI-supported public health research and response systems.'
  },
  {
    name: 'Ghana 2',
    slug: '/projects/africa/ghana-team-2',
    href: 'https://ai4inclusiveghana.org/',
    summary: 'Ghana Team 2 focuses on inclusive AI approaches for health equity and preparedness.'
  },
  {
    name: 'Nigeria',
    slug: '/projects/africa/nigeria',
    href: 'https://aia4onehealth.org/',
    summary: 'The Nigeria team connects AI, health data, and One Health preparedness.'
  },
  {
    name: 'Senegal',
    slug: '/projects/africa/senegal',
    href: 'https://www.plateforme3sonehealth.sn/',
    summary: 'The Senegal team strengthens One Health platforms for data-informed action.'
  },
  {
    name: 'South Africa',
    slug: '/projects/africa/south-africa',
    href: 'https://www.sacaqm.org/',
    summary: 'The South Africa team advances analytical capacity for outbreak and health risk management.'
  }
];

const africaPartners = [
  {name: 'Jimma University', src: '/partners/africa-jimma.png'},
  {name: 'University of Buea', src: '/partners/africa-buea.png', wide: true},
  {name: 'Wits University', src: '/partners/africa-wits.png', wide: true},
  {name: 'Ministry of Health Ethiopia', src: '/partners/africa-ethiopia-health.png'},
  {name: 'Senegal Ministry of Health and Social Action', src: '/partners/africa-senegal-health.png', wide: true},
  {name: 'Ethiopian Public Health Institute', src: '/partners/africa-ethiopian-public-health.png'},
  {name: 'Cheikh Anta Diop University', src: '/partners/africa-cheikh-anta-diop.png'},
  {name: 'KNUST', src: '/partners/africa-knust.png', wide: true},
  {name: 'Gauteng Provincial Government', src: '/partners/africa-gauteng.png'},
  {name: 'MINEPIA', src: '/partners/africa-minepia.png'},
  {name: 'MINSANTE', src: '/partners/africa-minsante.png'},
  {name: 'Ministry of Forestry and Wildlife', src: '/partners/africa-forestry-wildlife.png'},
  {name: 'MINEPDED', src: '/partners/africa-minepded.png'},
  {name: 'National Institute for Occupational Health', src: '/partners/africa-occupational-health.png', wide: true},
  {name: 'REVOCAP', src: '/partners/africa-revocap.png', wide: true},
  {name: 'IBM South Africa', src: '/partners/africa-ibm-south-africa.png'},
  {name: 'IRSS', src: '/partners/africa-irss.png'}
];

function PartnerLogo({partner}: {partner: (typeof africaPartners)[number]}) {
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

export function AfricaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(242,201,76,0.16),transparent_28%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              AI4PEP Africa
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-cream/84">
              AI4PEP Africa projects are using AI and One Health approaches to strengthen health systems across African countries.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-lg border border-brand-yellow/20 bg-white p-3 shadow-soft">
            <Image
              src={assetPath('/projects/africa-projects-map.png')}
              alt="AI4PEP Africa project map"
              width={900}
              height={560}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>

          <nav aria-label="AI4PEP Africa teams" className="mt-8 rounded-lg bg-white/12 p-3 backdrop-blur-sm">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {africaProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    'flex min-h-16 items-center justify-center rounded-md px-3 text-center text-xs font-black uppercase text-brand-dark transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/70',
                    index % 4 === 0 ? 'bg-brand-cream' : '',
                    index % 4 === 1 ? 'bg-[#23C9D6]' : '',
                    index % 4 === 2 ? 'bg-[#2A9FD6]' : '',
                    index % 4 === 3 ? 'bg-brand-green text-white' : ''
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
              AI4PEP Africa Regional Partners
            </h2>
          </div>
          <div className="relative mt-12 overflow-hidden border-y border-brand-green/10 py-6 dark:border-white/10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-brand-dark" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-brand-dark" />
            <div className="flex w-max gap-5 animate-partner-marquee">
              {[...africaPartners, ...africaPartners].map((partner, index) => (
                <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
