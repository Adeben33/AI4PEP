import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const internalTeam = [
  {
    name: 'Prof. Jude Kong',
    role: 'Executive Director',
    image: '/team/portraits/jude-kong-clean.png',
    bio: 'Prof. Jude Kong is a professor in the Mathematics and Statistics Department at York University and founding director of the Africa-Canada Artificial Intelligence and Data Innovation Consortium. His work brings together artificial intelligence, data science, mathematical modelling, infectious disease modelling, and public health decision support.'
  },
  {
    name: 'Dr. Emmanuel Musa',
    role: 'Network Manager',
    image: '/team/portraits/emmanuel-musa-clean.png',
    bio: 'Dr. Emmanuel Musa is a medical doctor, clinical scientist, epidemiologist, and public health expert. He has held operational and leadership roles in outbreak response, emergency risk management, primary healthcare, and resilient health systems across multiple countries.'
  },
  {
    name: 'Sherif Shuaib',
    role: 'Chief Financial Officer',
    image: '/team/portraits/sherif-shuaib-clean.png',
    bio: 'Sherif Shuaib is a Ph.D. student at York University and serves as the Financial Officer for AI4PEP. His work connects mathematical modelling, population dynamics, infectious disease modelling, and administrative support for the network.'
  },
  {
    name: 'Mahakprit Kaur',
    role: 'Communication & Community Engagement Officer',
    image: '/team/portraits/mahakprit-kaur-clean.png',
    bio: 'Mahakprit Kaur supports communication and community engagement across AI4PEP. Her interests include health systems preparedness, community response, and the role of AI in advancing public health and care practices.'
  },
  {
    name: 'Medeatrice Fonyuy',
    role: 'Communications Coordinator',
    image: '/team/portraits/medeatrice-fonyuy-clean.png',
    bio: 'Medeatrice Fonyuy supports content creation, social media management, translation, knowledge sharing, and network communication. Her work focuses on clear storytelling, community building, and equitable access to digital information.'
  },
  {
    name: 'Taylor Cargill',
    role: 'Communications Coordinator',
    image: '/team/portraits/taylor-cargill-clean.png',
    bio: 'Taylor Cargill supports AI4PEP communications and impact storytelling. Her background connects biology, environmental studies, data science, conservation, community health, and Global South research collaboration.'
  },
  {
    name: 'Victor Abel',
    role: 'Web Master',
    image: '/team/portraits/victor-abel-clean.png',
    bio: 'Victor Abel is a digital technology professional with experience in web design, content strategy, digital skills training, search optimization, analytics, and community-centered communication for organizations.'
  },
  {
    name: 'Dr. Qing Han',
    role: 'Data Scientist',
    image: '/team/portraits/qing-han-clean.png',
    bio: 'Dr. Qing Han is a data scientist with expertise in applied mathematics and mathematical epidemiology. Her work supports modelling, analysis, and AI-enabled public health research.'
  },
  {
    name: 'Dr. Yang Xu',
    role: 'Data Scientist',
    image: '/team/portraits/yang-xu-clean.png',
    bio: 'Dr. Yang Xu is a data scientist with a cross-disciplinary background in machine learning, engineering, minerals processing, and data analysis. His work supports applied AI and integrated analytical systems.'
  },
  {
    name: 'Dr. Gelan Ayana',
    role: 'Data Scientist',
    image: '/team/portraits/gelan-ayana-clean.png',
    bio: 'Dr. Gelan Ayana works on AI for health, health informatics, community health, disease modelling, surveillance, digital health, data governance, policy, and health disparity research.'
  },
  {
    name: 'Dr. Abbas Yazdinejad',
    role: 'Data Scientist',
    image: '/team/portraits/abbas-yazdinejad-clean.png',
    bio: 'Dr. Abbas Yazdinejad works across artificial intelligence, machine learning, cybersecurity, privacy-preserving systems, Internet of Things, data security, and software-defined networks.'
  },
  {
    name: 'Dr. Zahra Movahedi Nia',
    role: 'Data Scientist',
    image: '/team/portraits/zahra-movahedi-nia-clean.png',
    bio: 'Dr. Zahra Movahedi Nia is a data scientist specializing in machine learning, data analytics, and natural language processing. Her work focuses on decision support, predictive tools, and healthcare access.'
  }
];

export function SecretariatPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(242,201,76,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(39,119,71,0.34),transparent_32%),linear-gradient(135deg,#132A20_0%,#174A34_54%,#0B1F18_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-[repeating-radial-gradient(ellipse_at_center,rgba(242,201,76,0.18)_0_1px,transparent_1px_18px)] opacity-40" />
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-brand-yellow" />
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Meet the Secretariat
          </h1>
          <p className="mx-auto mt-8 max-w-5xl text-lg font-medium leading-9 text-brand-cream/88">
            The AI4PEP Secretariat serves as the administrative platform for implementing AI4PEP objectives,
            informing the network vision, working closely with the Board of Trustees, and supporting the day-to-day
            running of the program. The Secretariat is located at York University and the Dalla Lana School of Public
            Health, University of Toronto.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black text-[#0B327C] dark:text-brand-cream">
            AI4PEP Internal Team
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {internalTeam.map((member) => (
              <article key={member.name}>
                <div className="overflow-hidden rounded-md bg-white shadow-[0_18px_50px_rgba(11,20,16,0.10)] dark:bg-white">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image
                      src={assetPath(member.image)}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#0B327C]">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <details className="group mt-4 rounded-md bg-white/90 p-5 shadow-[0_18px_50px_rgba(11,20,16,0.08)] open:shadow-[0_22px_60px_rgba(11,20,16,0.12)] dark:bg-white/[0.08]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xl font-black text-[#0B327C] dark:text-brand-yellow">
                    {member.role}
                    <span className="text-sm transition group-open:rotate-180">v</span>
                  </summary>
                  <p className="mt-6 text-base font-medium leading-7 text-brand-ink/78 dark:text-brand-cream/78">
                    <strong>{member.name}</strong> {member.bio.replace(member.name, '').trim()}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
