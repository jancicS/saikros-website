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
  title: "AI Notre - AI integration, vision & automation",
  description:
    "AI Notre ships integration, computer vision, automation, and product UI—built for teams who need working systems, not slide decks.",
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
