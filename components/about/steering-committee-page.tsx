import Image from 'next/image';
import {assetPath} from '@/lib/asset-path';

const committeeMembers = [
  {
    name: 'Jude Kong',
    role: 'Executive Director, AI4PEP',
    image: '/steering-committee/jude-kong.png'
  },
  {
    name: 'Robson Parmezan Bonidia',
    country: 'Brazil',
    image: '/steering-committee/robson-parmezan-bonidia.png'
  },
  {
    name: 'Dickson Nsagha',
    country: 'Cameroon',
    image: '/steering-committee/dickson-nsagha.png'
  },
  {
    name: 'Manuel Colome',
    country: 'Dominican Republic',
    image: '/steering-committee/manuel-colome.png'
  },
  {
    name: 'Gelan Ayana',
    country: 'Ethiopia',
    image: '/steering-committee/gelan-ayana.png'
  },
  {
    name: 'Kingsley Badu',
    country: 'Ghana',
    image: '/steering-committee/kingsley-badu.png'
  },
  {
    name: 'Ashok Tamhankar',
    country: 'India',
    image: '/steering-committee/ashok-tamhankar.png'
  },
  {
    name: 'Anis Fuad',
    country: 'Indonesia',
    image: '/steering-committee/anis-fuad.png'
  },
  {
    name: 'Elie SOKHN',
    country: 'Lebanon',
    image: '/steering-committee/elie-sokhn.png'
  },
  {
    name: 'Abhi Veerakumarasivam',
    country: 'Malaysia',
    image: '/steering-committee/abhi-veerakumarasivam.png'
  },
  {
    name: 'Yahya Tayalati',
    country: 'Morocco',
    image: '/steering-committee/yahya-tayalati.png'
  },
  {
    name: 'Cesar Ugarte-Gil',
    country: 'Peru',
    image: '/steering-committee/cesar-ugarte-gil.png'
  },
  {
    name: 'Romulo de Castro',
    country: 'Philippines',
    image: '/steering-committee/romulo-de-castro.png'
  },
  {
    name: 'Vincent Duclos',
    country: 'Senegal',
    image: '/steering-committee/vincent-duclos.png'
  },
  {
    name: 'Bruce Mellado',
    country: 'South Africa',
    image: '/steering-committee/bruce-mellado.png'
  },
  {
    name: 'Sadri Znaidi',
    country: 'Tunisia',
    image: '/steering-committee/sadri-znaidi.png'
  },
  {
    name: 'Radwan Qasrawi',
    country: 'WEST BANK',
    image: '/steering-committee/radwan-qasrawi.png'
  }
];

export function SteeringCommitteePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(242,201,76,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(45,106,63,0.58),transparent_34%),linear-gradient(135deg,#132A20_0%,#174A34_58%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
            Governance
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            AI4PEP Steering Committee
          </h1>
          <p className="mx-auto mt-8 max-w-6xl text-lg font-semibold leading-8 text-brand-cream/88">
            With the world facing unprecedented health challenges, the AI4PEP Steering Committee brings together experts in AI, healthcare, epidemiology, and disaster management. Together, we are pioneering innovative AI solutions to strengthen early detection, rapid response, and effective containment strategies. The Steering Committee is made up of directors or principal investigators from each hub.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {committeeMembers.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-md border border-brand-green/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-soft dark:border-white/10"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={assetPath(member.image)}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition group-hover:scale-[1.03]"
                  />
                </div>
                <div className="min-h-32 p-6">
                  <h2 className="text-xl font-black leading-6 text-brand-green">
                    {member.name}
                  </h2>
                  <p className="mt-3 text-base font-black leading-6 text-brand-ink/55">
                    {member.role ?? member.country}
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
