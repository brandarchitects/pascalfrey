import type { ClientLogo } from "@/components/blocks/LogoWall";
import type { Award } from "@/components/blocks/AwardsStrip";

/**
 * Static content data — pre-CMS placeholders.
 * Sprint 3 will replace this with TinaCMS-managed content.
 */

export const AWARDS: Award[] = [
  {
    name: "German Brand Award Gold",
    logo: "/logos/awards/german-brand-award.png",
    year: 2017,
  },
  {
    name: "Art Directors Club",
    logo: "/logos/awards/art-directors-club.png",
  },
  {
    name: "ADC Schweiz",
    logo: "/logos/awards/adc-schweiz.png",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Migros", src: "/logos/clients/migros.png" },
  { name: "SBB", src: "/logos/clients/sbb.png" },
  { name: "Swisscom", src: "/logos/clients/swisscom.png" },
  { name: "Geberit", src: "/logos/clients/geberit.png" },
  { name: "Raiffeisen", src: "/logos/clients/raiffeisen.png" },
  { name: "Helsana", src: "/logos/clients/helsana.png" },
  { name: "Sanitas", src: "/logos/clients/sanitas.png" },
  { name: "Deloitte", src: "/logos/clients/deloitte.png" },
  { name: "Microsoft", src: "/logos/clients/microsoft.png" },
  { name: "Pro Senectute", src: "/logos/clients/pro-senectute.png" },
  { name: "Manor", src: "/logos/clients/manor.png" },
  { name: "Oerlikon", src: "/logos/clients/oerlikon.png" },
  { name: "Swiss Life", src: "/logos/clients/swiss-life.png" },
  { name: "Jung von Matt", src: "/logos/clients/jvm.png" },
  { name: "Lungenliga", src: "/logos/clients/lungenliga.png" },
  { name: "SOCAR", src: "/logos/clients/socar.png" },
  { name: "Expert Suisse", src: "/logos/clients/xpsuisse.png" },
  { name: "Dolder Waldhaus", src: "/logos/clients/dolder-waldhaus.png" },
];

export interface Project {
  slug: string;
  cover: string;
  client: string;
  year: number | string;
  title: string;
  role: string;
  tags?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "swisscom-neo",
    cover: "/images/blog/placeholder-1.jpg",
    client: "Swisscom",
    year: "2024–25",
    title: "Swisscom NEO Brand Refresh",
    role: "Creative Director · Visual System & Brand Guide",
    tags: ["Markenarchitektur", "Designsystem"],
  },
  {
    slug: "brand-architects",
    cover: "/images/blog/placeholder-2.jpg",
    client: "Brand Architects",
    year: 2018,
    title: "Brand Architects Foundation",
    role: "Founder · Positioning",
    tags: ["Positionierung"],
  },
  {
    slug: "geberit-architecture",
    cover: "/images/blog/placeholder-1.jpg",
    client: "Geberit",
    year: 2019,
    title: "Geberit Markenarchitektur",
    role: "Lead Designer · Templating",
    tags: ["Markenarchitektur"],
  },
];

export interface Post {
  slug: string;
  date: string;
  readingTime: string;
  tag?: string;
  title: string;
  excerpt: string;
  cover?: string;
}

export const POSTS: Post[] = [
  {
    slug: "markenstrategie-fuer-tech-startups",
    date: "April 2026",
    readingTime: "8 min lesen",
    tag: "Markenstrategie",
    title: "Markenstrategie für Tech-Start-ups",
    excerpt:
      "Was sich ändert, wenn KI zum Co-Autor der Marke wird, und warum das nicht so neu ist, wie es scheint.",
    cover: "/images/blog/placeholder-1.jpg",
  },
  {
    slug: "ai-in-der-markenarbeit",
    date: "März 2026",
    readingTime: "6 min lesen",
    tag: "KI",
    title: "AI in der Markenarbeit — Werkzeug, nicht Ersatz",
    excerpt:
      "Wo KI in der Markenarbeit wirklich hilft — und wo sie das Strategische auf eine Weise verdünnt, die später teuer wird.",
    cover: "/images/blog/placeholder-2.jpg",
  },
  {
    slug: "good-design-good-business",
    date: "Februar 2026",
    readingTime: "5 min lesen",
    tag: "Haltung",
    title: "Good design is good business — was Dieter Rams heute bedeutet",
    excerpt:
      "Eine Notiz darüber, warum sich der vermeintlich abgegriffene Satz für Markenarbeit weiterhin lohnt.",
  },
];
