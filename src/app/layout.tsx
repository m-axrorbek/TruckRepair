import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usta Xonasi — Professional Truck Service Center",
  description: "Professional truck repair and maintenance center. Engine, transmission, diagnostics, electrical, suspension and brake system services. Oltiariq, Farg'ona, Uzbekistan.",
  keywords: ["truck repair", "yuk mashinasi ta'mirlash", "usta xonasi", "truck service", "diagnostics", "engine repair"],
  icons: {
    icon: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
  openGraph: {
    title: "Usta Xonasi — Professional Truck Service Center",
    description: "Professional truck repair and maintenance. 10+ years experience. 3000+ trucks serviced.",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0B0B0D] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
