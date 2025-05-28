import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: "Research Blog & Reflections",
  description: "Deep dives into quantum computing research, quantum error correction, and insights from academic life at NTU Singapore. Follow Dev Verma's journey in computational physics and quantum algorithms.",
  keywords: [
    "Quantum Computing Blog",
    "Physics Research",
    "NTU Singapore Research",
    "Quantum Error Correction",
    "Academic Blog",
    "Research Insights",
    "Quantum Algorithms",
    "Dev Verma Blog",
    "Singapore Physics"
  ],
  openGraph: {
    title: "Research Blog & Reflections | Dev Verma",
    description: "Deep dives into quantum computing research, quantum error correction, and insights from academic life at NTU Singapore.",
    type: "website",
    url: "https://devverma.com/blog",
    images: ["/images/about-pic.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Blog & Reflections | Dev Verma",
    description: "Deep dives into quantum computing research and insights from academic life at NTU Singapore.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
} 