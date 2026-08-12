import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Chrome from "./components/Chrome";
import Experience from "./components/Experience";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://trilolabs.com";
const logoUrl = `${siteUrl}/brand/trilolabs-logo.png`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trilolabs — SaaS & AI studio",
    template: "%s · Trilolabs",
  },
  description:
    "Trilolabs Technologies LLP builds SaaS products and AI/ML systems for founders and CTOs — from discovery to production. Write to info@trilolabs.com.",
  applicationName: "Trilolabs",
  authors: [{ name: "Trilolabs Technologies LLP", url: siteUrl }],
  creator: "Trilolabs Technologies LLP",
  publisher: "Trilolabs Technologies LLP",
  keywords: [
    "Trilolabs",
    "SaaS development",
    "AI systems",
    "machine learning",
    "product engineering",
    "technical consulting",
    "software studio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trilolabs",
    title: "Trilolabs — We build the product and land the model",
    description:
      "SaaS product building and AI/ML systems for founders and CTOs. One team for the application, the data path, and the handoff.",
    images: [
      {
        url: "/brand/trilolabs-logo.png",
        width: 1536,
        height: 1024,
        alt: "Trilolabs logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilolabs — We build the product and land the model",
    description:
      "SaaS product building and AI/ML systems for founders and CTOs. Contact info@trilolabs.com.",
    images: [
      {
        url: "/brand/trilolabs-logo.png",
        alt: "Trilolabs logo",
      },
    ],
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
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/trilolabs-logo.png", type: "image/png", sizes: "1536x1024" },
    ],
    shortcut: "/brand/favicon.svg",
    apple: [{ url: "/brand/trilolabs-logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/brand/mark.svg",
        color: "#0a0a0b",
      },
    ],
  },
  other: {
    "contact:email": "info@trilolabs.com",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trilolabs Technologies LLP",
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  email: "info@trilolabs.com",
  description:
    "SaaS product building and AI/ML systems for founders and CTOs.",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${space.variable} ${plexMono.variable}`}>
      <head>
        <link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand/trilolabs-logo.png" />
        <meta property="og:logo" content={logoUrl} />
        <meta name="logo" content={logoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <Experience />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
