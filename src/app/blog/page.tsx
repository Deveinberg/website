'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Home as HomeIcon, Briefcase, UserCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Dock, DockIcon } from '@/components/ui/dock';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { CollapsibleLogo } from '@/components/ui/collapsible-logo';

const blogPosts = [
  {
    id: 1,
    title: "Quantum Gate Decomposition: My Final Year Project",
    excerpt: "Diving deep into benchmarking quantum gate decomposition frameworks under Professor Mile Gu's supervision at NTU.",
    date: "2025-01-15",
    readTime: "12 min read",
    tags: ["Quantum Gates", "Research", "NTU", "Benchmarking"],
    slug: "quantum-gate-decomposition-fyp",
    image: "/images/fyp-pic.png"
  },
  {
    id: 2,
    title: "Real-Time Vibration Analysis: URECA Insights",
    excerpt: "Exploring real-time measurement and analysis of vibrations during my URECA 2023-24 project with Professor Bent Weber.",
    date: "2024-12-10",
    readTime: "10 min read",
    tags: ["Signal Processing", "URECA", "Vibrations", "Real-time"],
    slug: "real-time-vibration-analysis-ureca",
    image: "/images/ulv-pic.png"
  },
  {
    id: 3,
    title: "Understanding Polydispersity in Glassy Systems",
    excerpt: "My research journey investigating the effects of polydispersity in glassy systems under Professor Massimo Pica Ciamarra.",
    date: "2024-11-25",
    readTime: "15 min read",
    tags: ["Statistical Physics", "Glass Physics", "Simulation", "Research"],
    slug: "polydispersity-glassy-systems",
    image: "/images/polydisp-pic.png"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Stars Background */}
      <StarsBackground />
      
      {/* Shooting Stars Background */}
      <ShootingStars 
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1500}
        maxDelay={4000}
        className="fixed inset-0 z-0"
        starWidth={6}
        starHeight={1}
      />
      
      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Dock className="bg-white/10 border-white/20 backdrop-blur-md">
          <DockIcon className="bg-white/20 hover:bg-white/30 transition-colors">
            <Link href="/" className="flex items-center justify-center w-full h-full">
              <HomeIcon className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-white/20 hover:bg-white/30 transition-colors">
            <Link href="/#work" className="flex items-center justify-center w-full h-full">
              <Briefcase className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-white/20 hover:bg-white/30 transition-colors">
            <Link href="/#about" className="flex items-center justify-center w-full h-full">
              <UserCircle className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-blue-500/60 hover:bg-blue-400/70 transition-colors">
            <Link href="/blog" className="flex items-center justify-center w-full h-full">
              <BookOpen className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-white/20 hover:bg-white/30 transition-colors">
            <Link href="/#contact" className="flex items-center justify-center w-full h-full">
              <MessageCircle className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
        </Dock>
      </div>
      
      {/* Collapsible Brand Logo */}
      <CollapsibleLogo />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Research</span> & Reflections
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Sharing insights from my journey as a graduate scholar from NTU Singapore. 
              From quantum computing breakthroughs to the everyday mysteries of research life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Substack Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 rounded-2xl p-10 tech-border"
          >
            <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Check it out on my Substack</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I write about quantum computing, research, and whatever else is on my mind.
            </p>
            <a
              href="https://dverma.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-base transition-colors glow-effect mb-8"
            >
              Read on Substack →
            </a>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Subscribe</p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                  window.open(`https://dverma.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
                }}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none rounded-lg text-white placeholder-gray-500 transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 Dev Verma. NQSS Scholar at NTU Singapore.</p>
        </div>
      </footer>
    </main>
  );
} 