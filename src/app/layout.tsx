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
  metadataBase: new URL('https://devverma.com'),
  title: {
    default: "Dev Verma - Graduate Scholar from NTU Singapore | Quantum Computing Researcher",
    template: "%s | Dev Verma - Quantum Computing Researcher"
  },
  description: "Dev Verma is a Graduate Scholar from Nanyang Technological University (NTU) Singapore specializing in quantum computing, quantum error correction, and computational physics. FLIQ 2025 winner with expertise in quantum gate decomposition and surface codes.",
  keywords: [
    "Dev Verma", 
    "Physics", 
    "NTU Singapore", 
    "Nanyang Technological University",
    "Quantum Computing", 
    "Quantum Error Correction",
    "Surface Code",
    "Quantum Gates",
    "Research", 
    "Graduate Scholar",
    "FLIQ 2025",
    "CERN",
    "Quantum Algorithms",
    "Computational Physics",
    "NTUSE Scholar",
    "Singapore Physics",
    "Quantum Research"
  ],
  authors: [{ name: "Dev Verma", url: "https://devverma.com" }],
  creator: "Dev Verma",
  publisher: "Dev Verma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "Science & Technology",
  classification: "Academic Portfolio",
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
    title: "Dev Verma - Graduate Scholar from NTU Singapore | Quantum Computing Researcher",
    description: "Graduate Scholar from Nanyang Technological University specializing in quantum computing, quantum error correction, and computational physics. FLIQ 2025 winner with expertise in quantum gate decomposition.",
    url: "https://devverma.com",
    siteName: "Dev Verma - Quantum Computing Researcher",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/about-pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Dev Verma - Graduate Scholar from NTU Singapore",
        type: "image/jpeg"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Verma - Graduate Scholar from NTU Singapore | Quantum Computing Researcher",
    description: "Graduate Scholar from NTU Singapore specializing in quantum computing and quantum error correction. FLIQ 2025 winner.",
    images: ["/images/about-pic.jpeg"],
    creator: "@devverma", // Add your Twitter handle if you have one
  },
  alternates: {
    canonical: "https://devverma.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dev Verma",
    "url": "https://devverma.com",
    "image": "https://devverma.com/images/about-pic.jpeg",
    "description": "Graduate Scholar from Nanyang Technological University specializing in quantum computing, quantum error correction, and computational physics.",
    "jobTitle": "Quantum Computing Researcher",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Nanyang Technological University",
      "url": "https://www.ntu.edu.sg",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Singapore"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Nanyang Technological University",
      "url": "https://www.ntu.edu.sg"
    },
    "knowsAbout": [
      "Quantum Computing",
      "Quantum Error Correction",
      "Quantum Gate Decomposition",
      "Surface Codes",
      "Computational Physics",
      "Statistical Physics"
    ],
    "award": [
      {
        "@type": "Award",
        "name": "FLIQ 2025 Winner",
        "description": "Winner of ITU and Quantum Coalition's FLIQ 2025 Quantum Algorithms Challenge and Overall Education Track"
      },
      {
        "@type": "Award", 
        "name": "NTUSE Scholar",
        "description": "Scholar at Nanyang Technological University"
      }
    ],
    "sameAs": [
      "https://github.com/TheSonOfKrypton",
      "https://linkedin.com/in/7devverma"
    ],
    "email": "dev@devverma.com",
    "nationality": "Singapore"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/images/favicon.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
