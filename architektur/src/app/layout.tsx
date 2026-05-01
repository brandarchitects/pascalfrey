import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, personSchema, websiteSchema, ogImageUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Markenberater & Creative Director · Schweiz`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: SITE.url,
    title: `${SITE.name} · Markenberater & Creative Director · Schweiz`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: ogImageUrl({
          title: "Pascal Frey",
          eyebrow: "Markenberater · Creative Director",
          subtitle: "Marken, die bleiben.",
        }),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Markenberater & Creative Director`,
    description: SITE.description,
    images: [
      ogImageUrl({
        title: "Pascal Frey",
        eyebrow: "Markenberater · Creative Director",
        subtitle: "Marken, die bleiben.",
      }),
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-eggshell text-obsidian antialiased">
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
