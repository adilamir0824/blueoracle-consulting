import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Oracle Consulting | Operations Management & Planning",
    template: "%s | Blue Oracle Consulting",
  },
  description:
    "Operations management consulting specializing in planning, scheduling, and AI-powered maintenance systems. Transform how your organization runs.",
  metadataBase: new URL("https://blueoracleconsulting.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Blue Oracle Consulting",
    description: "Operations management consulting for planning, scheduling, and smarter maintenance.",
    url: "https://blueoracleconsulting.com",
    siteName: "Blue Oracle Consulting",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
