/**
 * Get the base path for the site
 * In development: ''
 * In production (GitHub Pages): '/marketing-company-page'
 */
export function getBasePath(): string {
  return import.meta.env.BASE_URL || '/';
}

/**
 * Build a path with the base URL prefix
 * @param path - The path to prefix (e.g., '/es', '/en/about')
 * @returns The full path with base URL
 */
export function buildPath(path: string): string {
  const base = getBasePath();
  // Remove trailing slash from base and leading slash from path if present
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
