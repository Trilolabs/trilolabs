import Script from "next/script";
import Chrome from "./components/Chrome";
import Experience from "./components/Experience";
import { COMPANY } from "./content";
import { SITE_URL } from "./site";
import "./globals.css";

const siteUrl = SITE_URL;
const logoUrl = `${siteUrl}/brand/logo.svg`;
const GA_MEASUREMENT_ID = "G-XXCWS4289R";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trilolabs — AI Automation Studio",
    template: "%s · Trilolabs",
  },
  description:
    "We sense where AI fits in your business, uncover the gaps costing you time, and build systems that work — without the guesswork.",
  applicationName: "Trilolabs",
  authors: [{ name: COMPANY.legalName, url: siteUrl }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  keywords: [
    "Trilolabs",
    "AI automation",
    "SaaS development",
    "product engineering",
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trilolabs",
    title: "Trilolabs — AI Automation Studio",
    description:
      "We sense where AI fits in your business and build systems that work — without the guesswork.",
    images: [
      {
        url: "/brand/og-share.png",
        width: 1200,
        height: 630,
        alt: "Trilolabs logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilolabs — AI Automation Studio",
    description:
      "AI automation and product systems for teams that need measurable results.",
    images: [{ url: "/brand/og-share.png", alt: "Trilolabs logo" }],
  },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#060606",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  legalName: COMPANY.legalName,
  url: siteUrl,
  logo: logoUrl,
  email: "info@trilolabs.com",
  description: "AI automation and SaaS product studio.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1-90/2/H PNO.93, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Experience />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
