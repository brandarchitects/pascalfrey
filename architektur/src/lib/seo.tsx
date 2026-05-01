import { SITE, absoluteUrl } from "./site";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pascal Frey",
    url: SITE.url,
    image: absoluteUrl("/brand/wappen.png"),
    jobTitle: "Markenberater & Creative Director",
    worksFor: {
      "@type": "Organization",
      name: "Swisscom",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.social.linkedin, SITE.social.x, SITE.social.medium],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.defaultLocale,
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  cover?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.cover ? absoluteUrl(post.cover) : undefined,
    url: absoluteUrl(`/denken/${post.slug}`),
    author: {
      "@type": "Person",
      name: "Pascal Frey",
      url: SITE.url,
    },
    publisher: {
      "@type": "Person",
      name: "Pascal Frey",
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
