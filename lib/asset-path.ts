const githubPagesBasePath = '/AI4PEP';

export function assetPath(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  return process.env.NODE_ENV === 'production'
    ? `${githubPagesBasePath}${path}`
    : path;
}
