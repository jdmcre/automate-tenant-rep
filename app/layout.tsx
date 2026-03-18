import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutomateTenantRep",
  description: "Tools built for tenant rep brokers. ",
  openGraph: {
    title: "AutomateTenantRep",
    description: "Tools built for tenant rep brokers. ",
    url: "https://automatetenantrep.com",
    siteName: "AutomateTenantRep",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AutomateTenantRep",
    description: "Tools built for tenant rep brokers. ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
