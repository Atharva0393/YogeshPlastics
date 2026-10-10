import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { MainWrapper } from "@/components/MainWrapper/MainWrapper";

import { SITE_CONFIG } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F8F9F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.companyName} | ${SITE_CONFIG.brandTagline}`,
    template: `${SITE_CONFIG.companyName} | %s`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "shade net",
    "protective netting",
    "green shade net",
    "agro netting",
    "shade cloth",
    "sunlight reduction net",
    "Yogesh Plastics",
  ],
  openGraph: {
    title: `${SITE_CONFIG.companyName} | ${SITE_CONFIG.brandTagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.companyName,
    images: [
      {
        url: "/images/shade-net-canopy.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.companyName} ${SITE_CONFIG.brandTagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
