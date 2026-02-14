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
      <section className="pt-32 pb-16 section-padding">
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

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 rounded-2xl p-12 tech-border"
          >
            <div className="mb-8">
              <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm currently working on some exciting research content and reflections 
                to share with you. Stay tuned for deep dives into quantum computing, 
                my research work, and my favorite ukulele songs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get notified when I publish new insights about quantum physics, research updates, 
              and reflections from my academic journey.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Clicking subscribe will open your email client with a pre-filled message to dev@devverma.com. 
              Just hit send to sign up!
            </p>
            <a 
              href="mailto:dev@devverma.com?subject=Newsletter Subscription&body=Hey, sign me up!"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Dev Verma. Graduate Scholar from NTU Singapore.</p>
        </div>
      </footer>
    </main>
  );
} 