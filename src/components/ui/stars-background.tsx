"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StarsBackgroundProps {
  className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({ className }) => {
  return (
    <div className={cn("fixed inset-0 overflow-hidden z-0", className)}>
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
      
      {/* Static twinkling stars */}
      <div className="stars absolute inset-0" />
      
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
          opacity: 0.6;
        }

        @keyframes twinkle {
          0% { opacity: 0.4; }
          25% { opacity: 0.7; }
          50% { opacity: 0.9; }
          75% { opacity: 0.6; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}; 