import {InteractiveHubsMap} from '@/components/about/our-hubs-page';

const themeSections = [
  {
    title: 'Theme 1',
    text: 'Under Theme 1, our researchers are employing AI-based techniques to classify spillover dynamics and assess the role of interventions, incorporating gender, equity, inclusion and decolonization, social determinants of health, and responsible AI.'
  },
  {
    title: 'Theme 2',
    text: 'Under Theme 2, our researchers are employing AI-based techniques for coordinated surveillance of early warning signals; to determine the characteristic structure of early warning signals; to evaluate early warning signals; to study the cost-benefit analysis of early warning systems; and to investigate the likelihood of disease establishment.'
  },
  {
    title: 'Theme 3',
    text: 'Under Theme 3, our researchers are employing AI-based techniques to evaluate successful non-pharmaceutical interventions (NPI), policy strategies in past outbreaks; improving AI-based models of human behaviour; investigating NPI effectiveness; and improving utilization of Digital Contact Tracing.'
  },
  {
    title: 'Theme 4',
    text: 'Under Theme 4, our researchers are deploying AI to inform vaccination roll-out strategies; designing AI-based models for antimicrobials and pathogen evolution; and employing AI to monitor progress towards control or eradication.'
  }
];

const chartSeries = [
  {label: 'Early detection', color: 'bg-[#3C65B0]', values: [0, 0, 25, 40]},
  {label: 'Early response', color: 'bg-[#E2843D]', values: [100, 100, 100, 60]},
  {label: 'Early warning systems', color: 'bg-[#A9A9A9]', values: [75, 100, 75, 100]},
  {label: 'Mitigation and control', color: 'bg-[#F4C74A]', values: [50, 33, 50, 60]}
];

const chartRegions = ['Asia', 'LAC', 'MENA', 'SSA'];

function ResearchThemesChart() {
  return (
    <div className="mt-9 rounded-lg border border-brand-green/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {chartSeries.map((series) => (
          <div key={series.label} className="flex items-center gap-2 text-xs font-bold text-brand-ink/68 dark:text-brand-cream/78">
            <span className={`h-3 w-3 rounded-sm ${series.color}`} />
            {series.label}
          </div>
        ))}
      </div>

      <div className="mt-6 grid h-56 grid-cols-4 items-end gap-5 border-b border-l border-brand-green/15 px-3 pb-2 dark:border-white/15">
        {chartRegions.map((region, regionIndex) => (
          <div key={region} className="flex h-full items-end justify-center gap-1.5">
            {chartSeries.map((series) => (
              <div
                key={`${region}-${series.label}`}
                className={`w-4 rounded-t-sm ${series.color}`}
                style={{height: `${series.values[regionIndex]}%`}}
                title={`${region}: ${series.label} ${series.values[regionIndex]}%`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-5 text-center text-xs font-black uppercase text-brand-ink/60 dark:text-brand-cream/70">
        {chartRegions.map((region) => (
          <span key={region}>{region}</span>
        ))}
      </div>
    </div>
  );
}

export function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-16 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(242,201,76,0.15),transparent_30%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Our Projects
            </h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-brand-cream/82">
              AI4PEP projects bring together Global South teams using responsible AI, One Health, and community knowledge to strengthen pandemic and epidemic preparedness.
            </p>
          </div>
          <InteractiveHubsMap />
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-tight text-brand-green dark:text-brand-cream">
            Conceptual Framework
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg font-medium leading-9 text-brand-ink/78 dark:text-brand-cream/78">
                The Foundation of our projects is a combination of SDG3 (&ldquo;Good Health and Well-being&rdquo;) and SDG5 (&ldquo;Gender Equality&rdquo;). They are built around four research themes: early detection, early warning systems, early response, and mitigation and control of developing epidemics with AI being the entry point. See figure below for the thematic distribution over different regions. These four areas will be supported by three pillars: i) timely and reliable data for public health decision-making, ii) resilient, strong, and fair health systems and iii) inclusion and equity for vulnerable groups. One Health is the unifying approach that integrates and combines all these domains (themes and objectives to achieve), that are usually siloed.
              </p>
              <ResearchThemesChart />
            </div>

            <div className="space-y-5">
              {themeSections.map((section) => (
                <article key={section.title} className="rounded-lg border border-brand-green/10 bg-brand-cream/50 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                  <h3 className="text-lg font-black text-brand-green dark:text-brand-yellow">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-8 text-brand-ink/76 dark:text-brand-cream/76">
                    {section.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-green py-20 text-white dark:bg-[#183A2B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-tight text-white">
            Community engagement
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <p className="text-lg font-medium leading-9 text-white/90">
              Community engagement is central to mitigating emerging and re-emerging infectious disease outbreaks. Engaging stakeholders in clinical public health research can help ensure that both the design and implementation of research take into account the needs and priorities of marginalized communities. We are working with affected communities to improve our understanding of community factors impacting clinical public health metrics and gain insight into approaches for community-relevant modeling. We are working to advance community control over the community-owned, community-level data by offering insight into disease levels in real-time.
            </p>
            <p className="text-lg font-medium leading-9 text-white/90">
              We are developing community-based response tools that will enable faster, more appropriate community-level responses to emerging risks. For many vulnerable community members, access to community-level information via the community improves trust as compared to non-community data and public health measures that are often detached and authoritarian.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-20 dark:bg-brand-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article>
            <h2 className="text-3xl font-black leading-tight text-brand-green dark:text-brand-cream">
              Engagement with Decision Makers through Our Strategic Working Group
            </h2>
            <div className="mt-7 space-y-6 text-lg font-medium leading-9 text-brand-ink/78 dark:text-brand-cream/76">
              <p>
                The added value of the body of new knowledge and innovations to be generated by the network research resides in its ability to inform effective policy options based on careful assessment, review of information, data, and input by stakeholders for validation.
              </p>
              <p>
                The Network has created Global South AI4PEP Working Group on AI and One Health for public health as the &lsquo;driving engine&rsquo; for Translating Research to Innovations, Strategies, and Evidence for policy options in the Global South.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-3xl font-black leading-tight text-brand-green dark:text-brand-cream">
              Embedding Gender, Equity , Inclusion and Decolonization (GEID)
            </h2>
            <p className="mt-7 text-lg font-medium leading-9 text-brand-ink/78 dark:text-brand-cream/76">
              We have embedded GEID priorities into our program&rsquo;s goals, methods, governance, and implementation plan. Our program focuses on gender equity, diversity, inclusion, and decolonization, as well as intersectionality in all components since many of the root causes of current and ongoing systemic risks, originate from structural inequities, and a lack of diversity and inclusion in research, decision and policy-making processes. The transformation that this proposal focuses on cannot emerge without special and heightened attention to GEID entry points.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
