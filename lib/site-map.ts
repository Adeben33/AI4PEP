export type SitePage = {
  slug: string;
  title: string;
  section: string;
  summary: string;
  parent?: string;
  externalUrl?: string;
};

export type NavGroup = {
  title: string;
  href: string;
  items?: Array<{title: string; href: string}>;
};

const projectPages: SitePage[] = [
  {slug: 'projects/africa', title: 'Africa', section: 'Projects', parent: 'projects', summary: 'AI4PEP project teams advancing responsible AI and public health preparedness across Africa.'},
  {slug: 'projects/africa/cabo-verde', title: 'Cabo Verde', section: 'Africa', parent: 'projects/africa', summary: 'AI4PEP Cabo Verde contributes regional expertise in AI-enabled epidemic preparedness.', externalUrl: 'https://ai4pep.org/cabo-verde/'},
  {slug: 'projects/africa/cameroon', title: 'Cameroon', section: 'Africa', parent: 'projects/africa', summary: 'The Cameroon team develops digital health innovation for surveillance and preparedness.', externalUrl: 'https://www.ai4d.ai/innovations/digicare'},
  {slug: 'projects/africa/ethiopia', title: 'Ethiopia', section: 'Africa', parent: 'projects/africa', summary: 'The Ethiopia team builds locally grounded AI capacity for health decision-making.', externalUrl: 'https://haqila.org'},
  {slug: 'projects/africa/ghana-team-1', title: 'Ghana - Team 1', section: 'Africa', parent: 'projects/africa', summary: 'Ghana Team 1 works on AI-supported public health research and response systems.', externalUrl: 'https://rapid-vbp.org/'},
  {slug: 'projects/africa/ghana-team-2', title: 'Ghana - Team 2', section: 'Africa', parent: 'projects/africa', summary: 'Ghana Team 2 focuses on inclusive AI approaches for health equity and preparedness.', externalUrl: 'https://ai4inclusiveghana.org/'},
  {slug: 'projects/africa/nigeria', title: 'Nigeria', section: 'Africa', parent: 'projects/africa', summary: 'The Nigeria team connects AI, health data, and One Health preparedness.', externalUrl: 'https://aia4onehealth.org/'},
  {slug: 'projects/africa/senegal', title: 'Senegal', section: 'Africa', parent: 'projects/africa', summary: 'The Senegal team strengthens One Health platforms for data-informed action.', externalUrl: 'https://www.plateforme3sonehealth.sn/'},
  {slug: 'projects/africa/south-africa', title: 'South Africa', section: 'Africa', parent: 'projects/africa', summary: 'The South Africa team advances analytical capacity for outbreak and health risk management.', externalUrl: 'https://www.sacaqm.org/'},
  {slug: 'projects/asia', title: 'Asia', section: 'Projects', parent: 'projects', summary: 'AI4PEP teams in Asia build applied AI tools for epidemic preparedness and health resilience.'},
  {slug: 'projects/asia/indonesia', title: 'Indonesia', section: 'Asia', parent: 'projects/asia', summary: 'The Indonesia team develops AI4PEP research through tropical medicine and public health expertise.', externalUrl: 'https://centertropmed-ugm.org/project/ai4pep'},
  {slug: 'projects/asia/malaysia', title: 'Malaysia', section: 'Asia', parent: 'projects/asia', summary: 'The Malaysia team contributes AI innovation and regional collaboration for preparedness.', externalUrl: 'https://sunwayuniversity.edu.my/global-south-artificial-intelligence-pandemic-epidemic-preparedness-response-ai4pep/global-south'},
  {slug: 'projects/asia/philippines', title: 'Philippines', section: 'Asia', parent: 'projects/asia', summary: 'AI4PEP Philippines supports locally useful AI tools for public health response.', externalUrl: 'https://ai4pep.org/philippines/'},
  {slug: 'projects/asia/mongolia', title: 'Mongolia', section: 'Asia', parent: 'projects/asia', summary: 'The Mongolia team explores AI-supported health monitoring and preparedness.', externalUrl: 'http://aizoom.mn'},
  {slug: 'projects/lac', title: 'Latin America & the Caribbean', section: 'Projects', parent: 'projects', summary: 'AI4PEP teams across Latin America and the Caribbean connect AI research with regional health priorities.'},
  {slug: 'projects/lac/brazil', title: 'Brazil', section: 'LAC', parent: 'projects/lac', summary: 'The Brazil team works through Inteligente Hub on AI and health innovation.', externalUrl: 'https://inteligentehub.com.br/'},
  {slug: 'projects/lac/dominican-republic', title: 'Dominican Republic', section: 'LAC', parent: 'projects/lac', summary: 'AI4PEP Dominican Republic supports preparedness research for local and regional health needs.', externalUrl: 'https://ai4pep.org/dominican-republic/'},
  {slug: 'projects/lac/pan-caribbean', title: 'Pan-Caribbean', section: 'LAC', parent: 'projects/lac', summary: 'The Pan-Caribbean team brings multi-country collaboration to AI-enabled health preparedness.', externalUrl: 'https://ai4pep.org/pan-caribbean/'},
  {slug: 'projects/lac/peru', title: 'Peru', section: 'LAC', parent: 'projects/lac', summary: 'The Peru team connects innovation lab capacity with AI4PEP public health goals.', externalUrl: 'https://www.innovalab.info/en/ai4pep'},
  {slug: 'projects/mena', title: 'Middle East & North Africa', section: 'Projects', parent: 'projects', summary: 'AI4PEP teams in MENA strengthen data, modelling, and governance for preparedness.'},
  {slug: 'projects/mena/lebanon', title: 'Lebanon', section: 'MENA', parent: 'projects/mena', summary: 'AI4PEP Lebanon supports applied AI research for preparedness and response.', externalUrl: 'https://ai4pep.org/lebanon/'},
  {slug: 'projects/mena/morocco', title: 'Morocco', section: 'MENA', parent: 'projects/mena', summary: 'The Morocco team advances AI4TB work within the AI4PEP regional network.', externalUrl: 'https://sites.google.com/ump.ac.ma/ai4tb/home'},
  {slug: 'projects/mena/tunisia', title: 'Tunisia', section: 'MENA', parent: 'projects/mena', summary: 'The Tunisia team contributes INTERACT research for AI and health preparedness.', externalUrl: 'https://www.ai4d.ai/innovations/interact'},
  {slug: 'projects/mena/west-bank-palestine', title: 'West Bank / Palestine', section: 'MENA', parent: 'projects/mena', summary: 'The West Bank / Palestine team builds AI and data capacity for public health response.', externalUrl: 'https://www.ad.bcite.org/'}
];

export const sitePages: SitePage[] = [
  {slug: 'about-us', title: 'About AI4PEP', section: 'About Us', summary: 'AI4PEP is a Global South network connecting AI, public health, community leadership, and preparedness research.'},
  {slug: 'about-us/our-team', title: 'Secretariat / Our Team', section: 'About Us', parent: 'about-us', summary: 'Meet the Secretariat and internal team supporting AI4PEP coordination and delivery.'},
  {slug: 'about-us/our-hubs', title: 'Our Hubs', section: 'About Us', parent: 'about-us', summary: 'Explore the regional hubs and project teams that make up the AI4PEP network.'},
  {slug: 'about-us/our-strategy', title: 'Our Strategy', section: 'About Us', parent: 'about-us', summary: 'AI4PEP focuses on responsible AI, local capacity, useful data systems, and public health impact.'},
  {slug: 'about-us/our-partners', title: 'Our Partners', section: 'About Us', parent: 'about-us', summary: 'AI4PEP works with funders, universities, research groups, and community partners.'},
  {slug: 'about-us/our-research-impact', title: 'Our Research Impact', section: 'About Us', parent: 'about-us', summary: 'The network translates AI research into tools, evidence, and collaborations that support preparedness.'},
  {slug: 'about-us/steering-committee', title: 'Steering Committee', section: 'About Us', parent: 'about-us', summary: 'The steering committee supports strategic direction and coordination across AI4PEP.'},
  {slug: 'about-us/activities-committee', title: 'Activities Committee', section: 'About Us', parent: 'about-us', summary: 'The activities committee helps coordinate network learning, events, and shared initiatives.'},
  {slug: 'about-us/board-of-trustees', title: 'Board of Trustees', section: 'About Us', parent: 'about-us', summary: 'The board supports governance, accountability, and long-term stewardship.'},
  {slug: 'about-us/performance-dashboard', title: 'Performance Dashboard', section: 'About Us', parent: 'about-us', summary: 'Track network progress, outputs, and implementation signals across AI4PEP activities.'},
  {slug: 'projects', title: 'All Projects', section: 'Projects', summary: 'Browse AI4PEP projects by region and connect to each team website.'},
  ...projectPages,
  {slug: 'ai4mpox', title: 'About AI4Mpox', section: 'AI4Mpox', summary: 'AI4Mpox focuses AI4PEP expertise on mpox preparedness, response, and shared learning.'},
  {slug: 'ai4mpox/team', title: 'Meet the AI4Mpox Team', section: 'AI4Mpox', parent: 'ai4mpox', summary: 'Meet the collaborators contributing to AI4Mpox research and coordination.'},
  {slug: 'ai4mpox/resources', title: 'AI4Mpox Resources', section: 'AI4Mpox', parent: 'ai4mpox', summary: 'Find AI4Mpox resources, updates, and practical materials for the network.'},
  {slug: 'news', title: 'Recent News', section: 'News', summary: 'Follow updates from AI4PEP projects, partners, events, and network activities.'},
  {slug: 'news/media-coverage', title: 'Media Coverage', section: 'News', parent: 'news', summary: 'A collection of AI4PEP mentions, interviews, and external coverage.'},
  {slug: 'news/call-for-abstracts', title: 'Call for Abstracts', section: 'News', parent: 'news', summary: 'Current and past calls for abstracts connected to AI4PEP events and convenings.'},
  {slug: 'news/newsletter', title: 'AI4PEP Newsletter', section: 'News', parent: 'news', summary: 'Network stories, project highlights, and updates from across AI4PEP.'},
  {slug: 'news/bi-weekly-bulletin', title: 'Bi-weekly Bulletin', section: 'News', parent: 'news', summary: 'Short recurring updates from AI4PEP teams and activities.'},
  {slug: 'events', title: 'Events', section: 'Events', summary: 'Explore AI4PEP lectures, summits, colloquia, and global health gatherings.'},
  {slug: 'events/lecture-series', title: 'Lecture Series', section: 'Events', parent: 'events', summary: 'Talks and conversations focused on AI, public health, and preparedness.'},
  {slug: 'events/unga80-science-summit', title: 'AI4PEP at the UNGA80 Science Summit', section: 'Events', parent: 'events', summary: 'AI4PEP activities and participation around the UNGA80 Science Summit.'},
  {slug: 'events/unga79-science-summit', title: 'AI4PEP at the UNGA79 Science Summit', section: 'Events', parent: 'events', summary: 'Highlights from AI4PEP engagement at the UNGA79 Science Summit.'},
  {slug: 'events/hsr2024-nagasaki', title: 'AI4PEP at HSR2024 in Nagasaki, Japan', section: 'Events', parent: 'events', summary: 'AI4PEP participation in health systems research conversations in Nagasaki.'},
  {slug: 'events/colloquia', title: 'AI4PEP Colloquia', section: 'Events', parent: 'events', summary: 'Colloquia that bring the network together for learning, exchange, and collaboration.'},
  {slug: 'resources', title: 'Resources', section: 'Resources', summary: 'Find publications, policy materials, data portals, opportunities, and podcasts.'},
  {slug: 'resources/research', title: 'Research', section: 'Resources', parent: 'resources', summary: 'Research outputs and knowledge products from AI4PEP teams and collaborators.'},
  {slug: 'resources/research/publications', title: 'Publications', section: 'Research', parent: 'resources/research', summary: 'Research outputs, articles, and publications from AI4PEP collaborators.'},
  {slug: 'resources/research/policy-perspectives', title: 'Policy Perspectives', section: 'Research', parent: 'resources/research', summary: 'Policy-facing insights on responsible AI, governance, and health preparedness.'},
  {slug: 'resources/research/presentations', title: 'Presentations', section: 'Research', parent: 'resources/research', summary: 'Slides, talks, and presentation materials from AI4PEP activities.'},
  {slug: 'resources/data-portals', title: 'Data Portals', section: 'Resources', parent: 'resources', summary: 'Dashboards and portals that help AI4PEP teams explore data, risk, governance, and ecosystems.'},
  {slug: 'resources/data-portals/africa-in-data', title: 'Africa in Data', section: 'Data Portals', parent: 'resources/data-portals', summary: 'A data portal supporting regional analysis and public health insight.'},
  {slug: 'resources/data-portals/website-analytics', title: 'Website Analytics', section: 'Data Portals', parent: 'resources/data-portals', summary: 'Analytics resources that help understand engagement and digital reach.'},
  {slug: 'resources/data-portals/health-socio-economic-systems-analysis', title: 'Health Socio-Economic Systems Analysis', section: 'Data Portals', parent: 'resources/data-portals', summary: 'Tools and data for understanding health and socio-economic systems together.'},
  {slug: 'resources/data-portals/health-risk-dynamics-and-exposure', title: 'Health Risk Dynamics and Exposure', section: 'Data Portals', parent: 'resources/data-portals', summary: 'Resources for mapping risk, exposure, and public health dynamics.'},
  {slug: 'resources/data-portals/ai-governance-and-risk-mapping-dashboard', title: 'AI Governance and Risk Mapping Dashboard', section: 'Data Portals', parent: 'resources/data-portals', summary: 'A dashboard focused on governance, risk, and responsible AI implementation.'},
  {slug: 'resources/data-portals/ai-ecosystem-and-risk-mapping', title: 'AI Ecosystem and Risk Mapping', section: 'Data Portals', parent: 'resources/data-portals', summary: 'Mapping resources for AI ecosystems and risk landscapes.'},
  {slug: 'resources/grants-and-fellowship-opportunities', title: 'Grants and Fellowship Opportunities', section: 'Resources', parent: 'resources', summary: 'Opportunities for students, researchers, and partners in AI and global health.'},
  {slug: 'resources/podcast-series', title: 'Podcast Series', section: 'Resources', parent: 'resources', summary: 'Audio conversations about AI, health, equity, and preparedness.'},
  {slug: 'students', title: 'Students', section: 'Students', summary: 'Student-led and student-focused opportunities in the AI4PEP network.'},
  {slug: 'students/ai4pep-student-collective', title: 'AI4PEP Student Collective', section: 'Students', parent: 'students', summary: 'A space for students to connect, learn, and contribute to AI4PEP priorities.'},
  {slug: 'students/ai4ghi-challenge-2024', title: 'AI4GHI Challenge 2024', section: 'Students', parent: 'students', summary: 'A challenge focused on AI for Global Health Innovation.'},
  {slug: 'students/ai4ghi-challenge-2024/student-summit', title: 'AI4GHI Challenge 2024 - Student Summit', section: 'Students', parent: 'students/ai4ghi-challenge-2024', summary: 'A student summit connected to the AI4GHI innovation challenge.'},
  {slug: 'students/ai4ghi-challenge-2024/winners', title: 'AI4GHI 2024 Winners', section: 'Students', parent: 'students/ai4ghi-challenge-2024', summary: 'Winning teams and ideas from the AI4GHI 2024 challenge.'},
  {slug: 'students/ai4ghi-challenge-2024/finalists', title: 'AI4GHI Finalists', section: 'Students', parent: 'students/ai4ghi-challenge-2024', summary: 'Finalist teams and projects from the AI4GHI challenge.'},
  {slug: 'funding', title: 'Funding', section: 'Funding', summary: 'Learn about the funding support behind AI4PEP and its global health priorities.'},
  {slug: 'funding/fdco-funding-announcement', title: 'FCDO Funding Announcement', section: 'Funding', parent: 'funding', summary: 'A funding announcement connected to AI4PEP and AI for global health.'},
  {slug: 'funding/nature-of-funding', title: 'A Closer Look: Funding Driving AI4PEP Impact', section: 'Funding', parent: 'funding', summary: 'A closer look at how funding supports AI4PEP collaboration and impact.'},
  {slug: 'contact-us', title: 'Contact Us', section: 'Contact', summary: 'Reach the AI4PEP network for questions, collaboration, media, and general inquiries.'}
];

export const siteNavigation: NavGroup[] = [
  {title: 'Home', href: '/'},
  {
    title: 'About Us',
    href: '/about-us',
    items: sitePages.filter((page) => page.parent === 'about-us').map((page) => ({title: page.title, href: `/${page.slug}`}))
  },
  {
    title: 'Projects',
    href: '/projects',
    items: [
      {title: 'All Projects', href: '/projects'},
      {title: 'Africa', href: '/projects/africa'},
      {title: 'Asia', href: '/projects/asia'},
      {title: 'LAC', href: '/projects/lac'},
      {title: 'MENA', href: '/projects/mena'}
    ]
  },
  {title: 'AI4Mpox', href: '/ai4mpox', items: sitePages.filter((page) => page.parent === 'ai4mpox').map((page) => ({title: page.title, href: `/${page.slug}`}))},
  {title: 'News', href: '/news', items: sitePages.filter((page) => page.parent === 'news').map((page) => ({title: page.title, href: `/${page.slug}`}))},
  {title: 'Events', href: '/events', items: sitePages.filter((page) => page.parent === 'events').map((page) => ({title: page.title, href: `/${page.slug}`}))},
  {
    title: 'Resources',
    href: '/resources',
    items: [
      {title: 'Research', href: '/resources/research'},
      {title: 'Publications', href: '/resources/research/publications'},
      {title: 'Policy Perspectives', href: '/resources/research/policy-perspectives'},
      {title: 'Presentations', href: '/resources/research/presentations'},
      {title: 'Data Portals', href: '/resources/data-portals'},
      {title: 'Grants and Fellowship Opportunities', href: '/resources/grants-and-fellowship-opportunities'},
      {title: 'Podcast Series', href: '/resources/podcast-series'}
    ]
  },
  {title: 'Students', href: '/students', items: sitePages.filter((page) => page.parent === 'students').map((page) => ({title: page.title, href: `/${page.slug}`}))},
  {title: 'Funding', href: '/funding', items: sitePages.filter((page) => page.parent === 'funding').map((page) => ({title: page.title, href: `/${page.slug}`}))},
  {title: 'Contact Us', href: '/contact-us'}
];

export function getPageBySlug(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}

export function getChildPages(slug: string) {
  return sitePages.filter((page) => page.parent === slug);
}
