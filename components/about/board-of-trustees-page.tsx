import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const trustees = [
  {
    name: 'Prof. Jude Kong',
    role: 'Executive Director',
    image: '/steering-committee/jude-kong.png',
    summary: 'Board Chair and Executive Director of AI4PEP. He leads AI, data science, mathematical modelling, and public health decision-making work across the Global South network.'
  },
  {
    name: 'Prof. Gertrude Mianda',
    role: 'Gender Equity Inclusion & Decolonization Director',
    image: '/board-of-trustees/gertrude-mianda.png',
    summary: 'Sociologist, feminist, and Africanist scholar focused on gender equity, decolonial research, African diasporas, and women’s rights in and from the Global South.'
  },
  {
    name: 'Prof. Nathaniel Osgood',
    role: 'Digital Tools & Platform Co-Director',
    image: '/board-of-trustees/nathaniel-osgood.png',
    summary: 'Computer scientist and health modeller whose work connects simulation, machine learning, data science, and digital monitoring platforms for population health insight.'
  },
  {
    name: 'Prof. Alvine Boaye Belle',
    role: 'Digital Tools & Platform Co-Director',
    image: '/board-of-trustees/alvine-boaye-belle.png',
    summary: 'Software engineering and AI researcher focused on trustworthy intelligent software systems, system assurance, optimization, maintenance, and machine learning.'
  },
  {
    name: 'Barr. Jake Okechukwu Effoduh',
    role: 'AI Governance Director & Chief Counsel',
    image: '/board-of-trustees/jake-okechukwu-effoduh.png',
    summary: 'International lawyer and AI governance scholar working at the intersection of human rights, technology law, policy, and responsible AI in Africa.'
  },
  {
    name: 'Prof. Mary Goitom',
    role: 'Policy & Advocacy Co-Director',
    image: '/board-of-trustees/mary-goitom.png',
    summary: 'Social work and development studies scholar whose community-based research explores migration, diaspora, African knowledge systems, identity, citizenship, and resilience.'
  },
  {
    name: 'Prof. Jianhong Wu',
    role: 'Policy & Advocacy Co-Director',
    image: '/board-of-trustees/jianhong-wu.png',
    summary: 'Mathematical modelling and data analytics expert leading public health mathematics, infectious disease modelling, and international research collaborations.'
  },
  {
    name: 'Prof. Patricia E. (Ellie) Perkins',
    role: 'Community Engagement & Relationship Director',
    image: '/board-of-trustees/patricia-perkins.png',
    summary: 'Ecological economist focused on feminist ecological economics, climate justice, commons, participatory governance, and research networks across Africa and Latin America.'
  },
  {
    name: 'Prof. Ali Asgary',
    role: 'Strategic Working Committee',
    image: '/board-of-trustees/ali-asgary.png',
    summary: 'Disaster and emergency simulation expert with deep experience in risk assessment, agent-based modelling, AI, spatio-temporal analysis, and urban resilience.'
  },
  {
    name: 'Prof. Sylvia Bawa',
    role: 'Strategic Working Committee',
    image: '/board-of-trustees/sylvia-bawa.png',
    summary: 'Global sociologist studying gender, inequality, human rights, and transnational justice through collaborative research with academics, activists, and civil society actors.'
  },
  {
    name: 'Prof. Tarra Penney',
    role: 'Strategic Working Committee',
    image: '/board-of-trustees/tarra-penney.png',
    summary: 'Population health scientist focused on global disease prevention, food systems, policy evidence, systems thinking, and complex health challenges.'
  },
  {
    name: 'Prof. James Orbinski',
    role: 'Advisor',
    image: '/board-of-trustees/james-orbinski.png',
    summary: 'Global health and humanitarian emergencies scholar with leadership experience in disaster response, early warning systems, and climate-related health impacts.'
  }
];

const chair = trustees[0];
const boardMembers = trustees.slice(1);

export function BoardOfTrusteesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(242,201,76,0.2),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(45,106,63,0.55),transparent_34%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
            Governance
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            AI4PEP Board of Trustees
          </h1>
          <p className="mx-auto mt-8 max-w-6xl text-lg font-semibold leading-8 text-brand-cream/88">
            AI4PEP Board of Trustees guides the strategic direction of the program. It supports good governance and helps create an environment that reinforces and motivates inter-institutional, international, and regional collaborations to foster effective implementation of the objectives of the program. The AI4PEP Board of Trustees steers and guides the implementation of plans and delivery of the program. It is led by The Executive Director Prof. Jude Kong as the Board chair and comprises the following members.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <article className="overflow-hidden rounded-md border border-brand-green/15 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={assetPath(chair.image)}
                  alt={chair.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
                  Board Chair
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-brand-green dark:text-brand-cream">
                  {chair.name}
                </h2>
                <p className="mt-2 text-lg font-black text-brand-ink/58 dark:text-brand-cream/68">
                  {chair.role}
                </p>
                <p className="mt-5 text-base font-medium leading-7 text-brand-ink/72 dark:text-brand-cream/76">
                  {chair.summary}
                </p>
              </div>
            </article>

            <div className="rounded-md border border-brand-green/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red dark:text-brand-yellow">
                Trustees
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-green dark:text-brand-cream">
                Governance expertise across AI, health, equity, policy, and emergency response
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-brand-ink/70 dark:text-brand-cream/72">
                The board brings together specialists who help AI4PEP stay accountable, locally grounded, and focused on practical public health impact.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['AI & data systems', 'Gender equity', 'AI governance', 'Policy advocacy', 'Community engagement', 'Disaster response'].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-brand-green/10 bg-brand-cream/50 px-4 py-3 text-sm font-black text-brand-green dark:border-white/10 dark:bg-white/[0.06] dark:text-brand-cream"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((trustee) => (
              <article
                key={trustee.name}
                className="group overflow-hidden rounded-md border border-brand-green/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="relative aspect-[5/4] bg-white">
                  <Image
                    src={assetPath(trustee.image)}
                    alt={trustee.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="inline-flex rounded-full bg-brand-yellow/25 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-brand-green dark:bg-brand-yellow/20 dark:text-brand-yellow">
                    {trustee.role}
                  </p>
                  <h2 className="mt-4 text-2xl font-black leading-7 text-brand-green dark:text-brand-cream">
                    {trustee.name}
                  </h2>
                  <p className="mt-4 text-base font-medium leading-7 text-brand-ink/72 dark:text-brand-cream/76">
                    {trustee.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
