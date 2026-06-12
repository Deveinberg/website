"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarsBackgroundProps {
  className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({ className }) => {
  const { scrollY } = useScroll();
  // Slight counter-scroll drift gives the star field depth without being distracting
  const y = useTransform(scrollY, (v) => v * -0.06);

  return (
    <div className={cn("fixed inset-0 overflow-hidden z-0 pointer-events-none", className)}>
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_80%)]" />

      {/* Static twinkling stars, oversized so the parallax drift never reveals an edge */}
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[140%]">
        <div className="stars absolute inset-0" />
      </motion.div>

      <style jsx>{`
        .stars {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 50px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 250px 100px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 300px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 350px 80px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 400px 300px;
          animation: twinkle 8s ease-in-out infinite;
          opacity: 0.45;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          25% { opacity: 0.5; }
          50% { opacity: 0.65; }
          75% { opacity: 0.45; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};
