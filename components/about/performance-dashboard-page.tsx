const dashboardUrl =
  'https://lookerstudio.google.com/embed/reporting/7dbdf0be-7340-428b-920e-e95798c26203/page/p_6lft01Ouvd';

export function PerformanceDashboardPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(242,201,76,0.18),transparent_30%),radial-gradient(circle_at_86%_14%,rgba(45,106,63,0.52),transparent_34%),linear-gradient(135deg,#132A20_0%,#174A34_62%,#0B1F18_100%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-yellow">
            Network Progress
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            AI4PEP Performance Dashboard
          </h1>
          <p className="mx-auto mt-8 max-w-6xl text-lg font-semibold leading-8 text-brand-cream/88">
            Stay up-to-date with AI4PEP's network activities across the Global South. The dashboard displays the timeline of network engagements and achievements across Africa, Asia, Latin America & the Caribbean, and the Middle East and North Africa.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream/45 py-12 dark:bg-brand-dark">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-md border border-brand-green/15 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.05]">
            <iframe
              title="AI4PEP Performance Dashboard"
              src={dashboardUrl}
              className="block h-[1450px] w-full border-0 bg-white"
              loading="lazy"
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </section>
    </>
  );
}
