import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals | Industrial Water Treatment & Specialty Chemistry",
  description:
    "Explore PolyTreat's industrial water treatment, construction chemistry, and V-Klin facility-care product areas. Contact the team to discuss an application or request current product information.",
  keywords:
    "PolyTreat Chemicals, industrial water treatment, boiler water treatment, cooling water, construction chemicals, V-Klin cleaning products",
  openGraph: {
    title: "PolyTreat Chemicals | Industrial Water Treatment & Specialty Chemistry",
    description:
      "Explore PolyTreat's industrial water treatment, construction chemistry, and V-Klin facility-care product areas. Contact the team to discuss an application or request current product information.",
    siteName: "PolyTreat Chemicals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PolyTreat Chemicals | Industrial Water Treatment & Specialty Chemistry",
    description:
      "Explore PolyTreat's industrial water treatment, construction chemistry, and V-Klin facility-care product areas. Contact the team to discuss an application or request current product information.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="top" suppressHydrationWarning>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}


