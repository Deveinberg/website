'use client';

import { motion, MotionConfig } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ChevronDown,
  BookOpen,
  Home as HomeIcon,
  UserCircle,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { Dock, DockIcon } from '@/components/ui/dock';
import { FeynmanBackground } from '@/components/ui/feynman-background';
import { CollapsibleLogo } from '@/components/ui/collapsible-logo';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-[#FBFBF9] text-slate-700 overflow-hidden relative">
      {/* Unified Background Gradient - spans entire page height */}
      <div className="absolute inset-0 w-full min-h-full z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-100/50 via-blue-100/35 via-cyan-100/25 to-transparent"></div>
      </div>

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Occasionally glowing Feynman diagrams */}
      <FeynmanBackground />

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Dock className="bg-white/70 border-slate-900/10 backdrop-blur-md shadow-lg shadow-slate-900/5">
          <DockIcon className={`transition-colors ${activeSection === 'home' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-900/5 hover:bg-slate-900/10'}`}>
            <a href="#home" aria-label="Home" title="Home" className="flex items-center justify-center w-full h-full">
              <HomeIcon className={`w-6 h-6 ${activeSection === 'home' ? 'text-white' : 'text-slate-700'}`} />
            </a>
          </DockIcon>
          <DockIcon className={`transition-colors ${activeSection === 'about' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-900/5 hover:bg-slate-900/10'}`}>
            <a href="#about" aria-label="About" title="About" className="flex items-center justify-center w-full h-full">
              <UserCircle className={`w-6 h-6 ${activeSection === 'about' ? 'text-white' : 'text-slate-700'}`} />
            </a>
          </DockIcon>
          <DockIcon className="bg-slate-900/5 hover:bg-slate-900/10 transition-colors">
            <Link href="/blog" aria-label="Blog" title="Blog" className="flex items-center justify-center w-full h-full">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </Link>
          </DockIcon>
          <DockIcon className={`transition-colors ${activeSection === 'contact' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-900/5 hover:bg-slate-900/10'}`}>
            <a href="#contact" aria-label="Contact" title="Contact" className="flex items-center justify-center w-full h-full">
              <MessageCircle className={`w-6 h-6 ${activeSection === 'contact' ? 'text-white' : 'text-slate-700'}`} />
            </a>
          </DockIcon>
        </Dock>
      </div>
      
      {/* Collapsible Brand Logo */}
      <CollapsibleLogo />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-32" itemScope itemType="https://schema.org/Person">
        <motion.div
          className="text-center z-10 max-w-4xl mx-auto px-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-12 leading-tight text-balance"
            itemProp="name"
          >
            Hi, I&apos;m <span className="gradient-text">Dev</span>, a{' '}
            <span itemProp="jobTitle">young physicist</span>{' '}
            based in <span itemProp="address" itemScope itemType="https://schema.org/Place"><span itemProp="name">Singapore</span></span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Who wouldn&apos;t want a career where overthinking is a job requirement?
            <span className="gradient-text"> NQSS Master&apos;s Scholar</span> pursuing an MSc by Research at Nanyang Technological University, currently
            working on foundational quantum information theory.
          </motion.p>
          
                    <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10 md:mb-16"
          >
            <a
              href="https://github.com/TheSonOfKrypton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.03] active:scale-[0.97] glow-effect"
            >
              View My Projects
          </a>
          <a
              href="mailto:dev@devverma.com"
              className="px-8 py-3 border border-slate-300 hover:border-slate-500 rounded-lg font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Get In Touch
            </a>
          </motion.div>
          
          {/* Scroll Down Arrow */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-600 transition-colors cursor-pointer group"
            >
              <span className="text-sm font-medium">See what the overthinking produced</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="group-hover:text-blue-700 transition-colors"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              More About <span className="gradient-text">Dev Verma</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* About Image - Mobile First */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center md:order-2"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4">
                    <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200">
                      <img 
                        src="/images/about-pic.jpeg" 
                        alt="Dev Verma - NQSS Scholar at NTU Singapore"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                </div>
              </motion.div>

              {/* About Text */}
              <div className="text-lg text-slate-600 space-y-6 text-center md:text-left md:order-1">
                <p>
                  Hi, I&apos;m Dev: a chill philosopher, aspiring polymath, and a physicist-in-the-making. When I&apos;m not pondering the mysteries of the 
                  universe, I&apos;m probably getting absolutely demolished in Catan by my best friend (despite my <em>undeniable</em> strategic genius).
                </p>
                <p>
                  I&apos;m currently pursuing my <strong>MSc by Research in Physics</strong> at Nanyang Technological University as Singapore&apos;s <strong>NQSS (National Quantum Scholarship Scheme) Scholar</strong>, working
                  in Mile Gu&apos;s group at the Nanyang Quantum Hub. My research home is foundational quantum information theory, with a wandering eye for relativity and whatever lies beyond the Standard Model (dark matter, I&apos;m looking at
                  you). My ultimate goal? To do meaningful work in physics, whether that means helping build the next big thing in quantum tech or
                  unlocking some fundamental truths about the universe.
                </p>
                <p>
                  Beyond physics, I take inspiration from Leonardo da Vinci, striving to explore everything that catches my eye. You might find me
                  unleashing sacrifices on the chessboard, losing myself in stoic philosophy, or storyboarding ideas for a film I&apos;ll <em>maybe</em> direct one day.
                  I also occasionally write longer, structured pieces about my thoughts and projects on <Link href="/blog" className="text-blue-700 hover:text-blue-600 link-underline">my blog</Link>.
                </p>
                <p>
                  Richard Feynman once said, <em>&quot;I was born not knowing, and have had only a little time to change that here and there.&quot;</em> That pretty 
                  much sums up my approach to life: always learning, always exploring, and maybe, just maybe, changing my corner of the world for
                  the better while I&apos;m at it.
                </p>
              </div>
            </div>
            
            {/* Research journey timeline */}
            <div className="mt-12 max-w-2xl mx-auto text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                The <span className="gradient-text">Journey</span> So Far
              </h3>
              <ol className="relative border-l border-slate-200 ml-3 space-y-10">
                {[
                  {
                    year: "2022–23",
                    title: "Polydispersity in Glassy Systems",
                    detail: "URECA research project under Professor Massimo Pica Ciamarra."
                  },
                  {
                    year: "2023–24",
                    title: "Real-Time Vibration Analysis",
                    detail: "URECA research project under Professor Bent Weber."
                  },
                  {
                    year: "2024–25",
                    title: "Benchmarking Quantum Gate Decomposition",
                    detail: "Final Year Project under Professor Mile Gu."
                  },
                  {
                    year: "2025",
                    title: "FLIQ 2025 Winner",
                    detail: "Quantum Algorithms Challenge and Overall Education Track. Won a trip to CERN."
                  },
                  {
                    year: "2026–now",
                    title: "MSc by Research at NTU",
                    detail: "NQSS Scholar in quantum information theory, working in Mile Gu's group at the Nanyang Quantum Hub."
                  }
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" aria-hidden="true" />
                    <div className="font-mono text-sm text-blue-700 mb-1">{step.year}</div>
                    <div className="font-semibold text-slate-900">{step.title}</div>
                    <div className="text-slate-500 text-sm mt-1">{step.detail}</div>
                  </motion.li>
                ))}
              </ol>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Have something to share?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Whether it&apos;s about quantum physics, research collaborations, or just a fascinating 
              scientific discussion, I&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-center sm:text-left">
              <a
                href="mailto:dev@devverma.com"
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-[1.03] active:scale-[0.97] glow-effect text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                dev@devverma.com
        </a>
        <a
                href="https://linkedin.com/in/7devverma"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-slate-300 hover:border-slate-500 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
        </a>
        <a
                href="https://github.com/TheSonOfKrypton"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-slate-300 hover:border-slate-500 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=4Hz1kfsAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-slate-300 hover:border-slate-500 rounded-lg transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Google Scholar
              </a>
            </div>

            <div className="mt-2 border-t border-slate-200 pt-8 max-w-md mx-auto">
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Or subscribe to my Substack</p>
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
