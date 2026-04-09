import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { FirebaseClientInit } from "@/components/FirebaseClientInit";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saikros - US AI agency for integration, vision & automation",
  description:
    "Saikros is a US-based team shipping AI integration, computer vision, automation, and product UI - built for operators who need outcomes, not slides.",
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
