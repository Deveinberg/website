import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Dev Verma - Graduate Scholar from NTU Singapore",
  description: "Personal website of Dev Verma - Graduate Scholar from Nanyang Technological University, Singapore. Quantum computing researcher and FLIQ 2025 winner.",
  keywords: ["Dev Verma", "Physics", "NTU Singapore", "Quantum Computing", "Research", "Graduate Scholar"],
  authors: [{ name: "Dev Verma" }],
  icons: {
    icon: "/images/site-icon-pic.png",
    shortcut: "/images/site-icon-pic.png",
    apple: "/images/site-icon-pic.png",
  },
  openGraph: {
    title: "Dev Verma - Graduate Scholar from NTU Singapore",
    description: "Personal website of Dev Verma - Graduate Scholar from Nanyang Technological University, Singapore. Quantum computing researcher and FLIQ 2025 winner.",
    url: "https://devverma.com",
    siteName: "Dev Verma",
    type: "website",
    images: ["/images/about-pic.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
