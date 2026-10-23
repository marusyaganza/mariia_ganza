import type { Metadata, Viewport } from "next";
import { Inter, Courier_Prime, Fira_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_DESCRIPTION, SITE_URL } from "@/utils/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const firaMono = Fira_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

const TITLE =
  "Mariia Ganza - Digital Detective | Backend-leaning Fullstack Engineer";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Mariia Ganza - Digital Detective",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Backend-leaning Fullstack Engineer",
    "Fullstack Engineer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Redis",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "API Design",
    "Portfolio",
    "Digital Detective",
  ],
  authors: [{ name: "Mariia Ganza" }],
  creator: "Mariia Ganza",
  publisher: "Mariia Ganza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Mariia Ganza Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mariia Ganza - Digital Detective Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Meta-tag verification takes the bare token; the "google-site-verification="
    // prefix is only used for DNS TXT records
    google: "QguZiXQhmOKQgfiad4QICmhEx8FYsiwQl2KeNeSE8-Q",
  },
};

// Next.js adds width=device-width, initial-scale=1 automatically
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${courierPrime.variable} ${firaMono.variable}`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
