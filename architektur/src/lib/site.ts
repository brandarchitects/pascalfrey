/**
 * Site-wide constants — single source of truth for SEO, JSON-LD, etc.
 */
export const SITE = {
  name: "Pascal Frey",
  description:
    "Pascal Frey entwickelt seit über 20 Jahren Marken für Schweizer Unternehmen. Creative Director bei Swisscom, Gründer von Brand Architects.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://pascalfrey.ch",
  email: "pascal@pascalfrey.ch",
  defaultLocale: "de-CH",
  social: {
    linkedin: "https://www.linkedin.com/in/pascalfrey/",
    x: "https://x.com/pascalfrey",
    medium: "https://medium.com/@pascalfrey",
  },
} as const;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
