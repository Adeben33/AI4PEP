import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPages =
  process.env.GITHUB_ACTIONS === 'true' &&
  repoName &&
  repoName !== `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isProjectPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}`,
      }
    : {}),
};

export default withNextIntl(nextConfig);
