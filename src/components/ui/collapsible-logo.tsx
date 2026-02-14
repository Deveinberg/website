"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CollapsibleLogoProps {
  className?: string;
}

export const CollapsibleLogo: React.FC<CollapsibleLogoProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (approximately viewport height)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Collapse when scrolled past 70% of hero section OR on mobile/tablet
      const shouldCollapse = scrollY > heroHeight * 0.7 || window.innerWidth < 1024;
      setIsCollapsed(shouldCollapse);
    };

    const handleResize = () => {
      // Check if we should be collapsed based on screen size
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const shouldCollapse = scrollY > heroHeight * 0.7 || window.innerWidth < 1024;
      setIsCollapsed(shouldCollapse);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div 
      className={cn("fixed top-8 left-8 z-40", className)}
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          <Link href="/">
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              DV
            </motion.div>
          </Link>
        ) : (
          <Link href="/">
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xl font-bold gradient-text cursor-pointer"
            >
              dev.verma
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 