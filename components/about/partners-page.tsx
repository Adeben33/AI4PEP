import Image from 'next/image';

type Logo = {
  name: string;
  src: string;
  wide?: boolean;
};

const funders: Logo[] = [
  {name: 'IDRC CRDI and Canada', src: '/partners/funders-idrc-canada.png', wide: true},
  {name: 'UK International Development', src: '/partners/funder-uk-international-development.png', wide: true}
];

const hosts: Logo[] = [
  {name: 'York University', src: '/partners/host-york.png', wide: true},
  {name: 'Dalla Lana School of Public Health, University of Toronto', src: '/partners/host-dalla-lana-utoronto.png', wide: true}
];

const generalPartners: Logo[] = [
  {name: 'CIFAL York', src: '/partners/general-cifal-york.png'},
  {name: 'Dahdaleh Institute for Global Health Research', src: '/partners/general-dahdaleh.png'},
  {name: 'Dalla Lana School of Public Health', src: '/partners/host-dalla-lana-utoronto.png'},
  {name: 'Y-EMERGE', src: '/partners/general-y-emerge.png', wide: true},
  {name: 'I-DAIR', src: '/partners/general-i-dair.png'},
  {name: 'The Global Health Network', src: '/partners/general-global-health-network.png'},
  {name: 'York University', src: '/partners/host-york.png'},
  {name: 'Armauer Hansen Research Institute', src: '/partners/general-ahri.png'}
];

const regionalPartners = [
  {
    region: 'Africa',
    logos: [
      {name: 'Jimma University', src: '/partners/africa-jimma.png'},
      {name: 'Ministry of Health Ethiopia', src: '/partners/africa-ethiopia-health.png'},
      {name: 'Ethiopian Public Health Institute', src: '/partners/africa-ethiopian-public-health.png'},
      {name: 'KNUST', src: '/partners/africa-knust.png', wide: true},
      {name: 'National Institute for Occupational Health', src: '/partners/africa-occupational-health.png', wide: true},
      {name: 'Cheikh Anta Diop University', src: '/partners/africa-cheikh-anta-diop.png'},
      {name: 'University of Buea', src: '/partners/africa-buea.png', wide: true},
      {name: 'Senegal Ministry of Health and Social Action', src: '/partners/africa-senegal-health.png', wide: true},
      {name: 'MINSANTE', src: '/partners/africa-minsante.png'},
      {name: 'Gauteng Provincial Government', src: '/partners/africa-gauteng.png'},
      {name: 'MINEPDED', src: '/partners/africa-minepded.png'},
      {name: 'IBM South Africa', src: '/partners/africa-ibm-south-africa.png'},
      {name: 'Wits University', src: '/partners/africa-wits.png', wide: true},
      {name: 'MINEPIA', src: '/partners/africa-minepia.png'},
      {name: 'Ministry of Forestry and Wildlife', src: '/partners/africa-forestry-wildlife.png'},
      {name: 'REVOCAP', src: '/partners/africa-revocap.png', wide: true},
      {name: 'IRSS', src: '/partners/africa-irss.png'}
    ]
  },
  {
    region: 'LAC',
    logos: [
      {name: 'Universidade de Sao Paulo', src: '/partners/lac-sao-paulo.png'},
      {name: 'Ministry of Health Brazil', src: '/partners/lac-brazil-health.png'},
      {name: 'Dominican Republic partner', src: '/partners/lac-dominican.png'},
      {name: 'Ministerio de Salud Publica', src: '/partners/lac-public-health.png'},
      {name: 'Universidad Peruana Cayetano Heredia', src: '/partners/lac-cayetano-heredia.png', wide: true}
    ]
  },
  {
    region: 'Asia',
    logos: [
      {name: 'National Center for Mental Health', src: '/partners/asia-indonesia-health.png'},
      {name: 'University of San Agustin', src: '/partners/asia-san-agustin.png'},
      {name: 'Department of Social Welfare and Development', src: '/partners/asia-dswd.png'},
      {name: 'NODRR', src: '/partners/asia-nodrr.png'},
      {name: 'National Commission on Indigenous Peoples', src: '/partners/asia-indigenous-peoples.png'},
      {name: 'Sunway University', src: '/partners/asia-sunway.png', wide: true},
      {name: 'World Association for Psychosocial Rehabilitation', src: '/partners/asia-wapr.png', wide: true}
    ]
  },
  {
    region: 'MENA',
    logos: [
      {name: 'Morocco Ministry of Health', src: '/partners/mena-morocco-health.png'},
      {name: 'MENA partner', src: '/partners/mena-anchor.png'},
      {name: 'Institut Pasteur de Tunis', src: '/partners/mena-pasteur-tunis.png', wide: true},
      {name: 'Palestine partner', src: '/partners/mena-palestine.png'},
      {name: 'Republic of Lebanon Ministry of Public Health', src: '/partners/mena-lebanon-health.png', wide: true},
      {name: 'Al-Quds University', src: '/partners/mena-al-quds.png', wide: true},
      {name: 'Helwan University', src: '/partners/mena-helwan.png'},
      {name: 'Beirut Arab University', src: '/partners/mena-beirut-arab.png', wide: true},
      {name: 'The University of Jordan', src: '/partners/mena-jordan.png', wide: true},
      {name: 'Universite Mohammed V de Rabat', src: '/partners/mena-mohammed-v.png'}
    ]
  }
];

function LogoTile({logo, featured = false}: {logo: Logo; featured?: boolean}) {
  return (
    <div
      className={[
        'group flex items-center justify-center rounded-md border border-brand-green/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-soft',
        featured ? 'min-h-52' : 'min-h-36',
        logo.wide ? 'md:col-span-2' : ''
      ].join(' ')}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.wide ? 430 : 230}
        height={featured ? 180 : 150}
        className={['w-auto max-w-full object-contain transition group-hover:scale-[1.03]', featured ? 'max-h-40' : 'max-h-28'].join(' ')}
      />
    </div>
  );
}

function LogoGrid({logos, featured = false}: {logos: Logo[]; featured?: boolean}) {
  return (
    <div className="grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {logos.map((logo) => (
        <LogoTile key={`${logo.name}-${logo.src}`} logo={logo} featured={featured} />
      ))}
    </div>
  );
}

function SectionHeader({eyebrow, title, description}: {eyebrow?: string; title: string; description?: string}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-green dark:text-brand-cream sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base font-semibold leading-8 text-brand-ink/68 dark:text-brand-cream/68">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PartnersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(242,201,76,0.20),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(45,106,63,0.62),transparent_34%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-[repeating-radial-gradient(ellipse_at_center,rgba(242,201,76,0.16)_0_1px,transparent_1px_18px)] opacity-50" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
              AI4PEP Network
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Our Funder, Host and Partners
            </h1>
            <p className="mt-8 max-w-4xl text-lg font-semibold leading-9 text-brand-cream/88">
              AI4PEP is funded by IDRC and UK International Development. The main secretariat is at Dalla Lana School of Public Health, University of Toronto, and York University, Canada. It is supported by the following partners
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['2', 'Funders'],
              ['2', 'Hosts'],
              ['8', 'General partners'],
              ['39+', 'Regional partners']
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-brand-yellow">{value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-brand-cream/78">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream/55 py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-lg border border-brand-green/10 bg-white/82 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <SectionHeader
                eyebrow="Funding"
                title="Our Funders"
                description="Institutions supporting the global AI for health initiative."
              />
              <div className="mt-8 grid gap-5">
                {funders.map((logo) => (
                  <LogoTile key={logo.name} logo={logo} featured />
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-brand-green/10 bg-white/82 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <SectionHeader
                eyebrow="Secretariat"
                title="Our Hosts"
                description="Academic homes supporting the coordination and delivery of AI4PEP."
              />
              <div className="mt-8 grid gap-5">
                {hosts.map((logo) => (
                  <LogoTile key={logo.name} logo={logo} featured />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#10241B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Collaborators"
            title="General Partners"
            description="Organizations contributing shared expertise, convening power, research infrastructure, and public health capacity across the network."
          />
          <div className="mt-10">
            <LogoGrid logos={generalPartners} />
          </div>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Across the Global South"
            title="Regional Partners"
            description="Regional collaborators anchor AI4PEP work in local institutions, ministries, universities, health agencies, and community-facing organizations."
          />

          <div className="mt-12 space-y-12">
            {regionalPartners.map((group) => (
              <section key={group.region} className="rounded-lg border border-brand-green/10 bg-white/82 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                <div className="flex flex-col gap-2 border-b border-brand-green/10 pb-5 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-3xl font-black text-brand-green dark:text-brand-yellow">
                    {group.region}
                  </h3>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-ink/50 dark:text-brand-cream/50">
                    {group.logos.length} partners
                  </p>
                </div>
                <div className="mt-7">
                  <LogoGrid logos={group.logos} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
