import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const researchThemes = [
  'Early Warning Systems',
  'Early Detection',
  'Early Response',
  'Mitigation and Control'
];

const decolonizingColumns = [
  [
    'We believe that for impactful research work in the Global South, it is important to build, establish, and develop a network and have each team uniquely assemble its strategy for meeting the program’s objectives and provide an opportunity for teams to learn from each other and an opportunity for knowledge transfer between the teams. By sharing their data, processes, and results, our teams draw out larger-scale comparisons, synergies, and conclusions about the overall goal. It is important to provide opportunities for them to ‘learn by doing’ and ‘in community’.',
    'Research that leads to meaningful change is new in most LMICs in the Global South given the history of colonialism and being “forced by circumstances” to rely on the formal colonial masters up to date for most of the innovations. Thus, to “decolonize” research, it is necessary to acknowledge the structural and perceived obstacles and barriers to leading research in the Global South, such as limited support networks, infrastructures, limited mentorship, and learning opportunities, and difficulties in having access to adequate funding and collecting data.'
  ],
  [
    'Learning from each other through weekly meetings, workshops, webinars, town hall meetings, etc., is very essential. We hold biweekly meetings and regular workshops. Our teams share ideas across contexts and specific situations regarding effective digital data generation, management, dissemination, and ways to address equity priorities for risk minimization by amplifying the voices and agency of marginalized and highly impacted communities. Our network is helping to facilitate capacity building and enhancing productivity.',
    'The transnational partnership’s added value for all partners in our network is grounded in our sharing across contexts and specific situations regarding effective digital data generation, management, dissemination, and ways to address equity priorities for risk minimization by amplifying the voices and agency of marginalized and highly impacted communities.'
  ]
];

const ethicsPrinciples = [
  'i) Protecting human autonomy',
  'ii) Promoting human well-being and safety and the public interest',
  'iii) Ensuring transparency, explainability, and intelligibility',
  'iv) Fostering responsibility and accountability',
  'v) Ensuring inclusiveness and equity and',
  'vi) Promoting AI that is responsive and sustainable.'
];

function ParagraphColumns({columns, textClassName}: {columns: string[][]; textClassName: string}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {columns.map((column, index) => (
        <div key={index} className="space-y-7">
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

export function StrategyPage() {
  return (
    <>
      <section className="bg-brand-green py-20 text-white dark:bg-[#183A2B]">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Our Strategy
          </h1>

          <h2 className="mt-20 text-3xl font-black">
            Our Theory of Change
          </h2>

          <div className="mt-9 overflow-hidden rounded-sm border border-white/40 bg-white shadow-soft">
            <Image
              src={assetPath('/strategy/theory-of-change.png')}
              alt="AI4PEP Theory of Change"
              width={1024}
              height={588}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mx-auto mt-10 max-w-5xl text-base font-black leading-7 text-white">
            GEID represents Equity, Diversity, Inclusion, &amp; Decolonization, ERIDs, represents Emerging and re-Emerging Infectious Diseases.
          </p>

          <div className="mt-24 text-left">
            <h2 className="text-center text-3xl font-black">
              Our Research Themes
            </h2>
            <p className="mx-auto mt-9 max-w-5xl text-lg font-medium leading-8 text-white/92">
              AI4PEP has 4 research themes: Early warning systems, Early detection, Early response, and mitigation and control of developing epidemics with AI being the entry point. One Health is the unifying approach that integrates and combines all these domains, that are usually siloed.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {researchThemes.map((theme) => (
                <div key={theme} className="bg-white px-5 py-3 text-center text-base font-black text-brand-green">
                  {theme}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-left">
            <h2 className="text-center text-3xl font-black">
              Decolonizing Research
            </h2>
            <div className="mt-10">
              <ParagraphColumns
                columns={decolonizingColumns}
                textClassName="text-lg font-medium leading-9 text-white/92"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black text-brand-green dark:text-brand-cream">
            Ethics and AI Governance
          </h2>

          <div className="mt-8 space-y-7 text-lg font-medium leading-8 text-brand-ink/76 dark:text-brand-cream/76">
            <p>
              Our research complies with the 2021 World Health Organization’s Ethics and Governance of Artificial Intelligence for Health. This is the global expert standard for ethical compliance on the use of AI in health. We follow the recommendations of the WHO regarding the six core guiding principles of ethics and governance of AI for health-related research, namely;
            </p>

            <div className="space-y-5">
              {ethicsPrinciples.map((principle) => (
                <p key={principle}>{principle}</p>
              ))}
            </div>

            <p>
              Moreover, this research is conducted with a consolidated and intersectional ethical framework that prioritizes the safeguarding of human dignity and security and the protection of data by both domestic and international standards. This research also complies with the legal and ethical rules of accountability, social and environmental responsibility, and quality assurance. Besides adopting an inclusive and equitable approach to this research engagement, we also align our pedagogical and administrative function in this work to a feminist and gender-inclusive approach, articulated within a consolidated ethical framework, to protect vulnerable groups and populations and ensure representation, inclusivity, and privacy by using cutting-edge and state-of-art privacy-preserving algorithms and technologies, while enabling data reusability and minimalization.
            </p>

            <p>
              Our adherence to high levels of ethical compliance is of paramount importance given that we work with large datasets and have to extensively cross-link/cross-reference them. Data privacy, security, and confidentiality will be ensured, by applying a combined, multi-step approach to implement adequate and robust protection which will include data anonymization/deidentification measures. We comply with ethical, legal, and sector-based rules for the use of AI in our work. We perform ethics reviews and human rights impact assessments to justify our commitment to this process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
