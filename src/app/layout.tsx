import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dev Verma - Graduate Scholar from NTU Singapore",
  description: "Personal website of Dev Verma - Graduate Scholar from Nanyang Technological University, Singapore. Quantum computing researcher and FLIQ 2025 winner.",
  keywords: ["Dev Verma", "Physics", "NTU Singapore", "Quantum Computing", "Research", "Graduate Scholar"],
  authors: [{ name: "Dev Verma" }],
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "any" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png?v=2" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
