'use client';

import { motion, MotionConfig } from 'framer-motion';
import { BookOpen, Home as HomeIcon, UserCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Dock, DockIcon } from '@/components/ui/dock';
import { FeynmanBackground } from '@/components/ui/feynman-background';
import { CollapsibleLogo } from '@/components/ui/collapsible-logo';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function BlogPage() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-[#FBFBF9] text-slate-700 relative">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Occasionally glowing Feynman diagrams */}
      <FeynmanBackground />

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Dock className="bg-white/70 border-slate-900/10 backdrop-blur-md shadow-lg shadow-slate-900/5">
          <DockIcon className="bg-slate-900/5 hover:bg-slate-900/10 transition-colors">
            <Link href="/" aria-label="Home" title="Home" className="flex items-center justify-center w-full h-full">
              <HomeIcon className="w-6 h-6 text-slate-700" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-slate-900/5 hover:bg-slate-900/10 transition-colors">
            <Link href="/#about" aria-label="About" title="About" className="flex items-center justify-center w-full h-full">
              <UserCircle className="w-6 h-6 text-slate-700" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-blue-600 hover:bg-blue-500 transition-colors">
            <Link href="/blog" aria-label="Blog" title="Blog" className="flex items-center justify-center w-full h-full">
              <BookOpen className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className="bg-slate-900/5 hover:bg-slate-900/10 transition-colors">
            <Link href="/#contact" aria-label="Contact" title="Contact" className="flex items-center justify-center w-full h-full">
              <MessageCircle className="w-6 h-6 text-slate-700" />
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Research</span> & Reflections
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Longer-form writing from my corner of NTU Singapore: quantum computing,
              research life, and the occasional philosophical detour.
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
            className="bg-white/70 rounded-2xl p-10 tech-border shadow-sm"
          >
            <BookOpen className="w-12 h-12 text-blue-700 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">It all lives on Substack</h2>
            <a
              href="https://dverma.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors glow-effect mb-8"
            >
              Read on Substack →
            </a>

            <div className="border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Subscribe</p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                action="https://dverma.substack.com/subscribe"
                method="get"
                target="_blank"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white border border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:outline-none rounded-lg text-slate-900 placeholder-slate-400 transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 pt-8 pb-32 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          <p>&copy; 2026 Dev Verma. NQSS Scholar at NTU Singapore.</p>
        </div>
      </footer>
    </main>
    </MotionConfig>
  );
}