import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/providers/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamdan Al Mansoori | Dubai Luxury Real Estate Investment Advisor",
  description:
    "Hamdan Al Mansoori — a trusted Dubai real estate investment advisor. Building wealth and creating legacies through premium Dubai property investments, off-plan projects, and portfolio management.",
  keywords: [
    "Dubai real estate",
    "Dubai property investment",
    "Hamdan Al Mansoori",
    "off-plan projects Dubai",
    "luxury real estate Dubai",
    "Golden Visa Dubai",
    "Dubai investment advisor",
  ],
  authors: [{ name: "Hamdan Al Mansoori" }],
  openGraph: {
    title: "Hamdan Al Mansoori | Dubai Luxury Real Estate Investment Advisor",
    description:
      "Building wealth. Creating legacies. Premium Dubai real estate investment advisory.",
    siteName: "Hamdan Al Mansoori Real Estate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamdan Al Mansoori | Dubai Luxury Real Estate Investment Advisor",
    description:
      "Building wealth. Creating legacies. Premium Dubai real estate investment advisory.",
  },
  icons: {
    icon: "/almansoori/brand/logo-mobile.svg",
    shortcut: "/almansoori/brand/logo-mobile.svg",
    apple: "/almansoori/brand/logo-mobile.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
