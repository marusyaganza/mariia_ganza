import type { Metadata } from "next";
import { Inter, Courier_Prime, Fira_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SentryErrorContext } from "@/utils/sentryErrorHandler";

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

export const metadata: Metadata = {
  title: {
    default: "Your Name - Digital Detective | Full-Stack Developer",
    template: "%s | Your Name - Digital Detective",
  },
  description:
    "Senior Full-Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Solving complex digital mysteries through clean code and innovative solutions. Available for new investigations.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Digital Detective",
    "Software Engineer",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourname.dev"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourname.dev", // Replace with your actual domain
    title: "Your Name - Digital Detective | Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Solving complex digital mysteries through clean code and innovative solutions.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You should create this image
        width: 1200,
        height: 630,
        alt: "Your Name - Digital Detective Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Digital Detective | Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Solving complex digital mysteries through clean code.",
    images: ["/og-image.jpg"], // Same image as Open Graph
    creator: "@yourusername", // Replace with your Twitter handle
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
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Prepare Sentry context for the root error boundary
  const rootSentryContext: SentryErrorContext = {
    sectionName: "Root",
    componentName: "RootLayout",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${courierPrime.variable} ${firaMono.variable} ${inter.className}`}
      >
        <ErrorBoundary sentryContext={rootSentryContext}>
          <StructuredData />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
