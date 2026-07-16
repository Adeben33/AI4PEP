import Image from 'next/image';

const asiaProjects = [
  {
    name: 'Indonesia',
    href: 'https://centertropmed-ugm.org/project/ai4pep',
    summary: 'AI4PEP Indonesia connects tropical medicine, public health, and AI research for epidemic preparedness.'
  },
  {
    name: 'Malaysia',
    href: 'https://sunwayuniversity.edu.my/global-south-artificial-intelligence-pandemic-epidemic-preparedness-response-ai4pep/global-south',
    summary: 'AI4PEP Malaysia advances accessible AI-supported health systems and regional collaboration.'
  },
  {
    name: 'Mongolia',
    href: 'http://aizoom.mn',
    summary: 'AI4PEP Mongolia is developing and implementing an AI-based platform for control and monitoring of zoonotic disease outbreaks.'
  },
  {
    name: 'Philippines',
    href: 'https://ai4pep.org/philippines/',
    summary: 'AI4PEP Philippines supports secure, community-aware AI tools for public health response.'
  }
];

const asiaPartners = [
  {name: 'Department of Social Welfare and Development', src: '/partners/asia-dswd.png'},
  {name: 'Kauswagan Occidental Drug Rehabilitation Foundation', src: '/partners/asia-nodrr.png'},
  {name: 'National Commission on Indigenous Peoples', src: '/partners/asia-indigenous-peoples.png'},
  {name: 'Sunway University', src: '/partners/asia-sunway.png', wide: true},
  {name: 'World Association for Psychosocial Rehabilitation', src: '/partners/asia-wapr.png', wide: true}
];

function PartnerLogo({partner}: {partner: (typeof asiaPartners)[number]}) {
  return (
    <div className="flex h-28 w-48 shrink-0 items-center justify-center rounded-md border border-brand-green/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <Image
        src={partner.src}
        alt={partner.name}
        width={partner.wide ? 320 : 180}
        height={140}
        className="max-h-24 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function AsiaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(242,201,76,0.16),transparent_30%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              AI4PEP Asia
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-cream/84">
              AI4PEP Asia projects are leveraging AI for accessible telehealth infrastructure, effective health emergency management systems, and secure blockchain-powered public health services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-lg border border-brand-yellow/20 bg-white p-3 shadow-soft">
            <Image
              src="/projects/asia-projects-map.png"
              alt="AI4PEP Asia project map"
              width={902}
              height={506}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>

          <nav aria-label="AI4PEP Asia teams" className="mt-8 rounded-lg bg-white/12 p-3 backdrop-blur-sm">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {asiaProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title={project.summary}
                  className={[
                    'flex min-h-20 items-center justify-center rounded-md px-4 text-center text-sm font-black uppercase text-brand-dark transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/70',
                    index % 4 === 0 ? 'bg-[#23C9D6]' : '',
                    index % 4 === 1 ? 'bg-brand-green text-white' : '',
                    index % 4 === 2 ? 'bg-[#A7ECEC]' : '',
                    index % 4 === 3 ? 'bg-[#2A9FD6] text-white' : ''
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
              AI4PEP Asia Regional Partners
            </h2>
          </div>

          <div className="relative mt-12 overflow-hidden border-y border-brand-green/10 py-6 dark:border-white/10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-brand-dark" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-brand-dark" />
            <div className="flex w-max gap-5 animate-partner-marquee">
              {[...asiaPartners, ...asiaPartners, ...asiaPartners].map((partner, index) => (
                <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
