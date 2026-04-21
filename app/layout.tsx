import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { FirebaseClientInit } from "@/components/FirebaseClientInit";
import "./globals.css";

const SITE_URL = "https://joseph-ai-website.web.app";
const SITE_TITLE = "AI Notre | AI integration, computer vision & automation";
const SITE_DESCRIPTION =
  "AI Notre ships integration, computer vision, automation, and product-grade UX for teams that need deployable systems, not another AI concept deck.";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "AI Notre",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI integration",
    "computer vision",
    "automation",
    "AI product design",
    "workflow automation",
    "AI systems",
    "web development",
    "UI UX design",
  ],
  authors: [{ name: "AI Notre" }],
  creator: "AI Notre",
  publisher: "AI Notre",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AI Notre",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AI Notre brand mark",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/android-chrome-512x512.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090b10",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <FirebaseClientInit />
        {children}
      </body>
    </html>
  );
}
