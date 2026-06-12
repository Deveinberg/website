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
import { StarsBackground } from '@/components/ui/stars-background';
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
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Unified Background Gradient - spans entire page height */}
      <div className="absolute inset-0 w-full min-h-full z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-blue-900/20 via-cyan-900/10 to-black"></div>
      </div>
      
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Stars Background */}
      <StarsBackground />

      {/* Occasionally glowing Feynman diagrams */}
      <FeynmanBackground />

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Dock className="bg-white/10 border-white/20 backdrop-blur-md">
          <DockIcon className={`transition-colors ${activeSection === 'home' ? 'bg-blue-500/60 hover:bg-blue-400/70' : 'bg-white/20 hover:bg-white/30'}`}>
            <a href="#home" aria-label="Home" title="Home" className="flex items-center justify-center w-full h-full">
              <HomeIcon className="w-6 h-6 text-white" />
            </a>
          </DockIcon>
          <DockIcon className={`transition-colors ${activeSection === 'about' ? 'bg-blue-500/60 hover:bg-blue-400/70' : 'bg-white/20 hover:bg-white/30'}`}>
            <a href="#about" aria-label="About" title="About" className="flex items-center justify-center w-full h-full">
              <UserCircle className="w-6 h-6 text-white" />
            </a>
          </DockIcon>
          <DockIcon className="bg-white/20 hover:bg-white/30 transition-colors">
            <Link href="/blog" aria-label="Blog" title="Blog" className="flex items-center justify-center w-full h-full">
              <BookOpen className="w-6 h-6 text-white" />
            </Link>
          </DockIcon>
          <DockIcon className={`transition-colors ${activeSection === 'contact' ? 'bg-blue-500/60 hover:bg-blue-400/70' : 'bg-white/20 hover:bg-white/30'}`}>
            <a href="#contact" aria-label="Contact" title="Contact" className="flex items-center justify-center w-full h-full">
              <MessageCircle className="w-6 h-6 text-white" />
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
            className="text-lg md:text-2xl text-gray-300 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Who wouldn&apos;t want a career where overthinking is a job requirement?
            <span className="gradient-text"> NQSS Master&apos;s Scholar</span> pursuing an MSc by Research at Nanyang Technological University, currently
            deep in quantum information, with a soft spot for taking quantum gates apart.
          </motion.p>
          
                    <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10 md:mb-16"
          >
            <a
              href="https://github.com/TheSonOfKrypton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-[1.03] active:scale-[0.97] glow-effect"
            >
              View My Projects
          </a>
          <a
              href="mailto:dev@devverma.com"
              className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
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
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer group"
            >
              <span className="text-sm font-medium">See what the overthinking produced</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="group-hover:text-blue-400 transition-colors"
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
                    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-700">
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
              <div className="text-lg text-gray-300 space-y-6 text-center md:text-left md:order-1">
                <p>
                  Hi, I&apos;m Dev: a chill philosopher, aspiring polymath, and a physicist-in-the-making. When I&apos;m not pondering the mysteries of the 
                  universe, I&apos;m probably getting absolutely demolished in Catan by my best friend (despite my <em>undeniable</em> strategic genius).
                </p>
                <p>
                  I&apos;m currently pursuing my <strong>MSc by Research in Physics</strong> at <strong>Nanyang Technological University</strong> as Singapore&apos;s <strong>NQSS (National Quantum Scholarship Scheme) Scholar</strong>, with a particular 
                  fascination for <strong>quantum computing</strong>, <strong>gate decomposition</strong>, and <strong>whatever lies beyond the Standard Model</strong> (dark matter, I&apos;m looking at 
                  you). My ultimate goal? To do <strong>meaningful work in physics</strong>, whether that means helping build the next big thing in quantum tech or
                  unlocking some fundamental truths about the universe.
                </p>
                <p>
                  Beyond physics, I take inspiration from <strong>Leonardo da Vinci</strong>, striving to explore everything that catches my eye. You might find me 
                  unleashing sacrifices on the chessboard, losing myself in <strong>stoic philosophy</strong>, or storyboarding ideas for a film I&apos;ll <em>maybe</em> direct one day. 
                  I also occasionally write longer, structured pieces about my thoughts and projects on <Link href="/blog" className="text-blue-400 hover:text-blue-300 link-underline">my blog</Link>.
                </p>
                <p>
                  Richard Feynman once said, <em>&quot;I was born not knowing, and have had only a little time to change that here and there.&quot;</em> That pretty 
                  much sums up my approach to life: always learning, always exploring, and maybe, just maybe, changing my corner of the world for
                  the better while I&apos;m at it.
                </p>
              </div>
            </div>
            
            {/* Research journey timeline */}
            <div className="mt-20 max-w-2xl mx-auto text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                The <span className="gradient-text">Journey</span> So Far
              </h3>
              <ol className="relative border-l border-gray-800 ml-3 space-y-10">
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
                    detail: "NQSS Scholar in quantum information theory."
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
                    <div className="font-mono text-sm text-blue-400 mb-1">{step.year}</div>
                    <div className="font-semibold text-white">{step.title}</div>
                    <div className="text-gray-400 text-sm mt-1">{step.detail}</div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                { label: "University", value: "NTU", desc: "Singapore" },
                { label: "Scholarship", value: "NQSS", desc: "Singapore" },
                { label: "Degree", value: "MSc", desc: "by Research" },
                { label: "Projects", value: "10+", desc: "Research" },
                { label: "Awards", value: "FLIQ", desc: "Winner" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.desc}</div>
                </motion.div>
              ))}
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
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether it&apos;s about quantum physics, research collaborations, or just a fascinating 
              scientific discussion, I&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-center sm:text-left">
              <a
                href="mailto:dev@devverma.com"
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-[1.03] active:scale-[0.97] glow-effect text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                dev@devverma.com
        </a>
        <a
                href="https://linkedin.com/in/7devverma"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
        </a>
        <a
                href="https://github.com/TheSonOfKrypton"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=4Hz1kfsAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Google Scholar
              </a>
            </div>

            <div className="mt-2 border-t border-gray-800 pt-8 max-w-md mx-auto">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Or subscribe to my Substack</p>
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
      <footer className="relative z-10 border-t border-gray-800 pt-8 pb-32 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 Dev Verma. NQSS Scholar at NTU Singapore.</p>
        </div>
      </footer>
    </main>
    </MotionConfig>
  );
}
