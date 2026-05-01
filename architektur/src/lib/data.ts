import type { ClientLogo } from "@/components/blocks/LogoWall";
import type { Award } from "@/components/blocks/AwardsStrip";

/**
 * Static reference data — not editable via CMS.
 * Posts and work cases live in content/ as MDX (see src/lib/content.ts).
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
