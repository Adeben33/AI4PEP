import Image from "next/image";

const menaProjects = [
  {
    name: "Lebanon",
    href: "https://ai4pep.org/lebanon/",
    summary:
      "AI4PEP Lebanon supports preparedness and response work through applied AI, health data, and regional surveillance collaboration.",
  },
  {
    name: "Morocco",
    href: "https://sites.google.com/ump.ac.ma/ai4tb/home",
    summary:
      "AI4PEP Morocco advances AI4TB research for tuberculosis monitoring, modelling, and public health decision support.",
  },
  {
    name: "Tunisia",
    href: "https://www.ai4d.ai/innovations/interact",
    summary:
      "AI4PEP Tunisia contributes INTERACT research focused on epidemiological modelling and health preparedness.",
  },
  {
    name: "West Bank / Palestine",
    href: "https://www.ad.bcite.org/",
    summary:
      "AI4PEP Jordan & West Bank (Palestine) is incorporating AI and Big Data analytics to develop a mobile cloud system for early warning and modelling of infectious diseases.",
  },
];

const menaPartners = [
  {
    name: "Helwan University",
    src: "/partners/mena-helwan.png",
  },
  {
    name: "Beirut Arab University",
    src: "/partners/mena-beirut-arab.png",
    wide: true,
  },
  {
    name: "The University of Jordan",
    src: "/partners/mena-jordan.png",
    wide: true,
  },
  {
    name: "Universite Mohammed V de Rabat",
    src: "/partners/mena-mohammed-v.png",
  },
  {
    name: "Ministere de la Sante Royaume du Maroc",
    src: "/partners/mena-morocco-health.png",
  },
  {
    name: "Institut Pasteur de Tunis",
    src: "/partners/mena-pasteur-tunis.png",
    wide: true,
  },
  {
    name: "Republic of Tunisia Ministry of Public Health",
    src: "/partners/mena-tunisia-health.png",
    wide: true,
  },
  {
    name: "Republic of Lebanon Ministry of Public Health",
    src: "/partners/mena-lebanon-health.png",
    wide: true,
  },
  {
    name: "Al-Quds University",
    src: "/partners/mena-al-quds.png",
    wide: true,
  },
  {
    name: "Palestine partner",
    src: "/partners/mena-palestine.png",
  },
];

function PartnerLogo({
  partner,
}: {
  partner: { name: string; src: string; wide?: boolean };
}) {
  return (
    <div className="flex h-28 w-48 shrink-0 items-center justify-center rounded-lg border border-brand-cream/70 bg-white p-5 shadow-sm">
      <Image
        src={partner.src}
        alt={partner.name}
        width={partner.wide ? 190 : 150}
        height={partner.wide ? 86 : 110}
        className="max-h-24 w-auto object-contain"
      />
    </div>
  );
}

export function MenaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-brand-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.13),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.18),transparent_38%),linear-gradient(135deg,#071f14_0%,#0d3f2b_54%,#082719_100%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              AI4PEP Middle East &amp; North Africa (MENA)
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-cream/86">
              AI4PEP MENA projects are applying AI for epidemiological models,
              waterborne pathogen monitoring, Tuberculosis research and pandemic
              surveillance.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-lg border border-brand-yellow/20 bg-white p-3 shadow-soft">
            <Image
              src="/projects/mena-projects-map.png"
              alt="AI4PEP MENA project map"
              width={1640}
              height={705}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>

          <nav
            aria-label="AI4PEP MENA teams"
            className="mt-8 rounded-lg bg-white/12 p-3 backdrop-blur-sm"
          >
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {menaProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title={project.summary}
                  className={[
                    "flex min-h-20 items-center justify-center rounded-md px-4 text-center text-sm font-black uppercase leading-tight text-brand-dark transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/70",
                    index === 0
                      ? "bg-[#A7ECEC]"
                      : index === 1
                        ? "bg-[#23C9D6]"
                        : index === 2
                          ? "bg-[#2A9FD6] text-white"
                          : "bg-brand-green text-white",
                  ].join(" ")}
                >
                  {project.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="bg-white py-20 text-brand-dark dark:bg-brand-dark dark:text-brand-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold">
            AI4PEP MENA Regional Partners
          </h2>
          <div className="relative mt-10 overflow-hidden">
            <div className="flex w-max gap-6 animate-partner-marquee">
              {[...menaPartners, ...menaPartners].map((partner, index) => (
                <PartnerLogo
                  key={`${partner.name}-${index}`}
                  partner={partner}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
