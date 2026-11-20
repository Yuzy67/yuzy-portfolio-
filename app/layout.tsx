import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { projects, siteConfig } from "@/lib/data";
import "./globals.css";

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Yuzy — AI Product Builder & Content Creator",
    template: "%s — Yuzy",
  },
  description: siteConfig.description,
  keywords: [
    "Yuzy",
    "AI Product Builder",
    "Content Creator",
    "Locked In AI",
    "Doormed",
    "yuzy.creates",
    "AI agents",
    "MCP",
    "portfolio",
  ],
  authors: [{ name: "Yuzy", url: siteConfig.url }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Yuzy — AI Product Builder & Content Creator",
    description: siteConfig.description,
    siteName: "Yuzy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuzy — AI Product Builder & Content Creator",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "0Vu62IGBT0EW_RQVT4qhzjeuQrLyHqMhTpl760s3Eio",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Yuzy",
      alternateName: "Yuvraj Singh",
      jobTitle: "AI Product Builder",
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      image: `${siteConfig.url}/opengraph-image`,
      knowsAbout: [
        "AI product development",
        "AI agents",
        "MCP",
        "Next.js",
        "Python",
        "Product design",
      ],
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.instagram,
        siteConfig.social.linkedin,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: "Yuzy",
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#projects`,
      name: "Projects by Yuzy",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          url: project.links[0]?.href ?? siteConfig.url,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        <div aria-hidden="true" className="site-grain" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
