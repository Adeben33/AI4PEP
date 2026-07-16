import Image from 'next/image';

const activityMembers = [
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
    name: 'Onduo Moises',
    country: 'Cameroon',
    image: '/logo.png',
    contain: true
  },
  {
    name: 'Damian Herrera',
    country: 'Dominican Republic',
    image: '/activities-committee/damian-herrera.png'
  },
  {
    name: 'Kokeb Dese',
    country: 'Ethiopia',
    image: '/activities-committee/kokeb-dese.png'
  },
  {
    name: 'Edmund Yamba',
    country: 'Ghana',
    image: '/activities-committee/edmund-yamba.png'
  },
  {
    name: 'Kayzad Nilgiriwala',
    country: 'India',
    image: '/activities-committee/kayzad-nilgiriwala.png'
  },
  {
    name: 'Aldilas Achmad Nursetyo',
    country: 'Indonesia',
    image: '/activities-committee/aldilas-achmad-nursetyo.png'
  },
  {
    name: 'Melody Saikali',
    country: 'Lebanon',
    image: '/activities-committee/melody-saikali.png'
  },
  {
    name: 'Angela Lee',
    country: 'Malaysia',
    image: '/activities-committee/angela-lee.png'
  },
  {
    name: 'Mohammed-Amine Koulali',
    country: 'Morocco',
    image: '/activities-committee/mohammed-amine-koulali.png'
  },
  {
    name: 'Cesar Ugarte-Gil',
    country: 'Peru',
    image: '/steering-committee/cesar-ugarte-gil.png'
  },
  {
    name: 'Vena Pearl Bongolan',
    country: 'Philippines',
    image: '/activities-committee/vena-pearl-bongolan.png'
  },
  {
    name: 'Georgette Sow',
    country: 'Senegal',
    image: '/activities-committee/georgette-sow.png'
  },
  {
    name: 'Busisiwe Nkala-Dlamini',
    country: 'South Africa',
    image: '/activities-committee/busisiwe-nkala-dlamini.png'
  },
  {
    name: 'Hana Trigui',
    country: 'Tunisia',
    image: '/activities-committee/hana-trigui.png'
  },
  {
    name: 'Radwan Qasrawi',
    country: 'WEST BANK',
    image: '/steering-committee/radwan-qasrawi.png'
  }
];

export function ActivitiesCommitteePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(242,201,76,0.18),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(184,49,47,0.28),transparent_32%),linear-gradient(135deg,#132A20_0%,#174A34_62%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
            Governance
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            AI4PEP Activities Committee
          </h1>
          <p className="mx-auto mt-8 max-w-6xl text-lg font-semibold leading-8 text-brand-cream/88">
            In the spirit of addressing pressing global health issues, the AI4PEP Activity Committee unites AI, healthcare, epidemiology, and disaster management experts. Our mission is to lead the way in developing cutting-edge AI solutions that enhance early detection, swift response, and successful containment strategies.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-20 dark:bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activityMembers.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-md border border-brand-green/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={`${member.contain ? 'object-contain p-8' : 'object-cover'} transition group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="min-h-32 p-6">
                  <h2 className="text-xl font-black leading-6 text-brand-green dark:text-brand-cream">
                    {member.name}
                  </h2>
                  <p className="mt-3 text-base font-black leading-6 text-brand-ink/55 dark:text-brand-cream/65">
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
