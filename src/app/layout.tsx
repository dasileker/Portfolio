import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClientEffects } from "@/components/motion/ClientEffects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://zerradi.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amine Zerradi | Senior QA Automation Engineer & Quality Engineering",
  description:
    "Senior QA Automation Engineer and QA Lead with experience across QA strategy, Playwright, Selenium, API testing, CI/CD, performance engineering, and software development.",
  keywords: [
    "Amine Zerradi",
    "Senior QA Automation Engineer",
    "QA Lead",
    "Quality Engineering",
    "Playwright",
    "Selenium",
    "API Testing",
    "k6",
    "Performance Testing",
    "CI/CD",
    "Casablanca",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} · Senior QA Automation Engineer`,
    description: profile.capabilityLine,
    url: siteUrl,
    siteName: "Amine Zerradi · Quality Engineering",
    type: "profile",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Amine Zerradi — Senior QA Automation Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Senior QA Automation Engineer`,
    description: profile.capabilityLine,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ClientEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
