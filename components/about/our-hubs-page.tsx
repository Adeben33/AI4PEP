import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const mapTeams = [
  {name: 'Cabo Verde', href: 'https://ai4pep.org/cabo-verde/', left: 32.2, top: 38.2},
  {name: 'Cameroon', href: 'https://www.ai4d.ai/innovations/digicare', left: 48.9, top: 62.1},
  {name: 'Ethiopia', href: 'https://haqila.org', left: 62.8, top: 49.4},
  {name: 'Ghana - Team 1', href: 'https://rapid-vbp.org/', left: 43.0, top: 52.2},
  {name: 'Ghana - Team 2', href: 'https://ai4inclusiveghana.org/', left: 43.0, top: 54.5},
  {name: 'Nigeria', href: 'https://aia4onehealth.org/', left: 45.1, top: 59.1},
  {name: 'Senegal', href: 'https://www.plateforme3sonehealth.sn/', left: 34.2, top: 50.5},
  {name: 'South Africa', href: 'https://www.sacaqm.org/', left: 52.8, top: 76.8},
  {name: 'Indonesia', href: 'https://centertropmed-ugm.org/project/ai4pep', left: 78.5, top: 61.4},
  {name: 'Malaysia', href: 'https://sunwayuniversity.edu.my/global-south-artificial-intelligence-pandemic-epidemic-preparedness-response-ai4pep/global-south', left: 82.7, top: 46.0},
  {name: 'Philippines', href: 'https://ai4pep.org/philippines/', left: 91.3, top: 44.2},
  {name: 'Mongolia', href: 'http://aizoom.mn', left: 84.9, top: 15.0},
  {name: 'Brazil', href: 'https://inteligentehub.com.br/', left: 28.6, top: 68.5},
  {name: 'Dominican Republic', href: 'https://ai4pep.org/dominican-republic/', left: 20.5, top: 30.0},
  {name: 'Pan-Caribbean', href: 'https://ai4pep.org/pan-caribbean/', left: 6.0, top: 39.0},
  {name: 'Peru', href: 'https://www.innovalab.info/en/ai4pep', left: 10.6, top: 56.8},
  {name: 'Lebanon', href: 'https://ai4pep.org/lebanon/', left: 57.0, top: 22.8},
  {name: 'Morocco', href: 'https://sites.google.com/ump.ac.ma/ai4tb/home', left: 38.3, top: 23.6},
  {name: 'Tunisia', href: 'https://www.ai4d.ai/innovations/interact', left: 47.3, top: 23.0},
  {name: 'West Bank / Palestine', href: 'https://www.ad.bcite.org/', left: 61.0, top: 28.4}
];

const hubRegions = [
  {
    title: 'Asia',
    hubs: [
      'Sunway University, Malaysia',
      'University of San Agustin, Philippines',
      'Universitas Gadjah Mada, Indonesia'
    ]
  },
  {
    title: 'Africa',
    hubs: [
      'Jimma University, Ethiopia',
      'KNUST, Ghana',
      'Cheikh Anta Diop University, Senegal',
      'University of Witwatersrand, South Africa',
      'University of Buea, Cameroon'
    ]
  },
  {
    title: 'Latin America and the Caribbean (LAC)',
    hubs: [
      'Universidade de São Paulo, São Carlos, Brazil',
      'Universidad Autonoma de Santo Domingo, Dominican Republic',
      'Universidad Peruana Cayetano Heredia, Peru'
    ]
  },
  {
    title: 'Middle East and North Africa (MENA).',
    hubs: [
      'Pasteur Institute in Tunis, Tunisia',
      'Al-Quds University, West Bank',
      'Beirut Arab University, Lebanon',
      'University Mohammed V in Rabat, Morocco'
    ]
  }
];

const selectedColumns = [
  [
    'These projects were selected from a total of 221 proposals from 47 countries across the global south following a rigorous review process (142 from Africa, 40 from Asia, 26 from LAC, 12 from MENA). We used a three-stage process to select the most promising proposals: registration, notice of intent and final proposal. The registration stage was the first opportunity for applicants to describe their ideas. To ensure that the projects in the network are locally relevant to the communities, the applicants were required to co-create the projects with the community. To this end, the applicants were expected to have at least one knowledge user (either from industry, civil society or policy maker) as a co-applicant at the registration stage.',
    'Following this, we ran 3 different workshops to help the applicants and their community partners co-create the projects and establish meaningful relationship. After three months of working together, the applicants were invited to submit a notice of intent (NOI). Before they submitted the NOI, we ran three different workshops, on: community engagement research and indigenous knowledge; gender responsive research; and equity, diversity, inclusion and decolonization.'
  ],
  [
    'We worked together with the applicants and community partners to design the NOI (weekly regional meetings with zoom breakout rooms group meetings for a month). After a review by 2 set of independent reviewers, some of the teams were invited to submit a final proposal. At the beginning of this stage, we equally ran 3 workshops to help them prepare a full proposal. The purpose of the workshops was to bring researchers involved in developing the proposal together with other international researchers in order to refine the research question or challenge, how it could be tackled, and what intellectual resources are needed to make progress.',
    'We worked together with the applicants and community partners to write the full proposal. After a rigorous review by 3 set of independent reviewers, 16 proposals were selected. The entire process is described here: https://ai4pep.org/funding/.'
  ]
];

const workColumns = [
  [
    'The transnational partnership’s added value for all partners in our network is grounded in our sharing across contexts and specific situations regarding effective digital data generation, management, dissemination, and ways to address equity priorities for risk minimization by amplifying the voices and agency of marginalized and highly impacted communities centered on the most marginalized women as agents of change.',
    'We acknowledge that the history of colonialism and gendered oppression has enduring effects. It disproportionately impacts the health and quality of life of formerly colonized people and vulnerable groups, such as women, gender non-conforming people, people with disabilities, rural communities, and low-income households. Our theoretical framework centers around a Gender, Equity, Inclusion, and Decolonization lens (GEID).',
    'Research and experience have taught us that intersecting and compounded forms of injustices and inequities necessitate a feminist intersectional lens, decolonial methods, and the integration of diversity in research, and public policy processes.'
  ],
  [
    'For us, decolonization is not a metaphor, but a political endeavor towards crucial transformation to equitable health. As part of our decolonial framework, we plan with, learn from, and act with communities and build capacity in communities.',
    'We have embedded GEID priorities into our program’s goals, methods, governance, and implementation plan. Our program will focus on gender equity, diversity, inclusion, and decolonization, as well as intersectionality in all components since many of the root causes of current and ongoing systemic risks, originate from structural inequities, and a lack of diversity and inclusion in research, decision and policy-making processes.',
    'The transformation that this proposal focuses on cannot emerge without special and heightened attention to GEID entry points.'
  ]
];

function TextColumns({columns, textClassName}: {columns: string[][]; textClassName: string}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {columns.map((column, index) => (
        <div key={index} className="space-y-6">
          {column.map((paragraph) => (
            <p key={paragraph} className={textClassName}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export function InteractiveHubsMap() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-lg border border-brand-yellow/25 bg-white p-2 shadow-soft">
      <Image
        src={assetPath('/hubs/our-hubs-map.png')}
        alt="AI4PEP hubs map"
        width={1248}
        height={702}
        priority
        className="h-auto w-full rounded-md"
      />
      <div aria-label="AI4PEP team website links" className="absolute inset-2">
        {mapTeams.map((team) => (
          <a
            key={team.name}
            href={team.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${team.name} team website`}
            title={`Visit ${team.name} team website`}
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/70"
            style={{left: `${team.left}%`, top: `${team.top}%`}}
          >
            <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/20 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="relative block h-4 w-4 rounded-full border-2 border-white bg-brand-red shadow-[0_0_0_3px_rgba(242,201,76,0.55),0_6px_14px_rgba(19,42,32,0.32)] transition group-hover:scale-150 group-focus-visible:scale-150" />
            <span className="pointer-events-none absolute left-1/2 top-7 z-20 hidden min-w-36 -translate-x-1/2 rounded-md bg-brand-dark px-3 py-2 text-center text-xs font-black text-brand-cream shadow-lg group-hover:block group-focus-visible:block">
              {team.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function OurHubsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-16 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(242,201,76,0.16),transparent_28%),linear-gradient(135deg,#132A20_0%,#174A34_60%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-black tracking-tight text-white sm:text-5xl">
            Our Hubs
          </h1>
          <InteractiveHubsMap />
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-brand-dark">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {hubRegions.map((region) => (
            <div key={region.title}>
              <h2 className="text-lg font-black text-brand-green dark:text-brand-yellow">
                {region.title}
              </h2>
              <div className="mt-7 space-y-6">
                {region.hubs.map((hub) => (
                  <p key={hub} className="text-base font-semibold leading-7 text-brand-green dark:text-brand-cream/85">
                    {hub}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-green py-20 text-white dark:bg-[#183A2B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-tight text-white sm:text-5xl">
            How The Hubs Were Selected
          </h2>
          <div className="mt-14">
            <TextColumns
              columns={selectedColumns}
              textClassName="text-lg font-medium leading-9 text-white/92"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream sm:text-5xl">
            How we Work
          </h2>
          <div className="mt-14">
            <TextColumns
              columns={workColumns}
              textClassName="text-lg font-medium leading-9 text-brand-ink/82 dark:text-brand-cream/78"
            />
          </div>
        </div>
      </section>
    </>
  );
}
