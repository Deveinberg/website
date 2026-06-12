"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  // Star position lives in a ref and is written straight to the SVG element
  // each frame — going through setState would re-render at 60fps.
  const starRef = useRef<ShootingStar | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      starRef.current = null;
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let rafId: number;

    const spawnStar = () => {
      // Pause spawning while the tab is hidden; visibilitychange resumes it
      if (document.hidden) return;

      starRef.current = {
        ...getRandomStartPoint(),
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(spawnStar, randomDelay);
    };

    const tick = () => {
      const star = starRef.current;
      const rect = rectRef.current;

      if (rect) {
        if (star) {
          star.x += star.speed * Math.cos((star.angle * Math.PI) / 180);
          star.y += star.speed * Math.sin((star.angle * Math.PI) / 180);
          star.distance += star.speed;
          star.scale = 1 + star.distance / 100;

          if (
            star.x < -20 ||
            star.x > window.innerWidth + 20 ||
            star.y < -20 ||
            star.y > window.innerHeight + 20
          ) {
            starRef.current = null;
            rect.setAttribute("visibility", "hidden");
          } else {
            const width = starWidth * star.scale;
            rect.setAttribute("x", String(star.x));
            rect.setAttribute("y", String(star.y));
            rect.setAttribute("width", String(width));
            rect.setAttribute(
              "transform",
              `rotate(${star.angle}, ${star.x + width / 2}, ${star.y + starHeight / 2})`
            );
            rect.setAttribute("visibility", "visible");
          }
        } else {
          rect.setAttribute("visibility", "hidden");
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const onVisibilityChange = () => {
      if (!document.hidden) {
        clearTimeout(timeoutId);
        spawnStar();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    spawnStar();
    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth, starHeight, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}
    >
      <rect
        ref={rectRef}
        visibility="hidden"
        height={starHeight}
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
