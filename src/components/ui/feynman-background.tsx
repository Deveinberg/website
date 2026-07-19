"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Classic QED diagrams as line art: straight lines for fermions, wavy
// paths for photons, dots for vertices, arrowheads ([x, y, angle]) on
// the fermion lines. viewBox is 120x80 for all.
const DIAGRAMS: {
  paths: string[];
  vertices: [number, number][];
  arrows: [number, number, number][];
}[] = [
  {
    // t-channel scattering: two fermions exchange a photon
    paths: [
      "M10 5 L35 40 L10 75",
      "M110 5 L85 40 L110 75",
      "M35 40 Q40 32 45 40 Q50 48 55 40 Q60 32 65 40 Q70 48 75 40 Q80 32 85 40",
    ],
    vertices: [
      [35, 40],
      [85, 40],
    ],
    arrows: [
      [22.5, 22.5, 54.5],
      [22.5, 57.5, 125.5],
      [97.5, 22.5, 125.5],
      [97.5, 57.5, 54.5],
    ],
  },
  {
    // s-channel annihilation: pair in, photon, pair out
    paths: [
      "M5 10 L30 40 L5 70",
      "M115 10 L90 40 L115 70",
      "M30 40 Q35 32 40 40 Q45 48 50 40 Q55 32 60 40 Q65 48 70 40 Q75 32 80 40 Q85 48 90 40",
    ],
    vertices: [
      [30, 40],
      [90, 40],
    ],
    arrows: [
      [17.5, 25, 50.2],
      [17.5, 55, 129.8],
      [102.5, 25, 129.8],
      [102.5, 55, 50.2],
    ],
  },
  {
    // vacuum polarization: photon, fermion loop, photon
    paths: [
      "M5 40 Q10 33 15 40 Q20 47 25 40 Q30 33 35 40",
      "M35 40 A25 25 0 1 1 85 40 A25 25 0 1 1 35 40",
      "M85 40 Q90 33 95 40 Q100 47 105 40 Q110 33 115 40",
    ],
    vertices: [
      [35, 40],
      [85, 40],
    ],
    arrows: [
      [60, 15, 0],
      [60, 65, 180],
    ],
  },
  {
    // bremsstrahlung: fermion radiates a photon
    paths: [
      "M10 75 L60 45 L110 75",
      "M60 45 Q52 38 60 31 Q68 24 60 17 Q52 10 60 3",
    ],
    vertices: [[60, 45]],
    arrows: [
      [35, 60, -31],
      [85, 60, 31],
    ],
  },
];

interface Placement {
  diagram: number;
  style: React.CSSProperties;
  color: string;
  duration: number;
  delay: number;
  scale: number;
  rotate: number;
  hideOnMobile?: boolean;
}

const PLACEMENTS: Placement[] = [
  { diagram: 0, style: { left: "5%", top: "14%" }, color: "text-blue-700", duration: 11, delay: 0, scale: 1.15, rotate: -10 },
  { diagram: 1, style: { right: "6%", top: "20%" }, color: "text-purple-700", duration: 14, delay: 5, scale: 0.95, rotate: 8, hideOnMobile: true },
  { diagram: 2, style: { left: "9%", bottom: "24%" }, color: "text-cyan-700", duration: 16, delay: 9, scale: 1.0, rotate: 6, hideOnMobile: true },
  { diagram: 3, style: { right: "10%", bottom: "16%" }, color: "text-blue-700", duration: 12, delay: 3, scale: 1.2, rotate: -6 },
  { diagram: 3, style: { left: "44%", top: "5%" }, color: "text-purple-700", duration: 15, delay: 7, scale: 0.7, rotate: 14, hideOnMobile: true },
];

interface FeynmanBackgroundProps {
  className?: string;
}

export const FeynmanBackground: React.FC<FeynmanBackgroundProps> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn("fixed inset-0 overflow-hidden z-0 pointer-events-none", className)}
    >
      {PLACEMENTS.map((p, i) => {
        const d = DIAGRAMS[p.diagram];
        return (
          // Wrapper caps brightness on small screens (opacity multiplies
          // with the glow animation on the svg itself)
          <div
            key={i}
            className={cn("absolute opacity-60 md:opacity-100", p.hideOnMobile && "hidden md:block")}
            style={p.style}
          >
            <svg
              viewBox="0 0 120 80"
              width={120 * p.scale}
              height={80 * p.scale}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={cn("feynman-diagram", p.color)}
              style={
                {
                  transform: `rotate(${p.rotate}deg)`,
                  "--glow-duration": `${p.duration}s`,
                  "--glow-delay": `${p.delay}s`,
                } as React.CSSProperties
              }
            >
              {d.paths.map((path, j) => (
                <path key={j} d={path} />
              ))}
              {d.vertices.map(([cx, cy], j) => (
                <circle key={j} cx={cx} cy={cy} r="2.2" fill="currentColor" stroke="none" />
              ))}
              {d.arrows.map(([x, y, angle], j) => (
                <path
                  key={j}
                  d="M-3.5 -2.5 L3.5 0 L-3.5 2.5 Z"
                  fill="currentColor"
                  stroke="none"
                  transform={`translate(${x} ${y}) rotate(${angle})`}
                />
              ))}
            </svg>
          </div>
        );
      })}
    </div>
  );
};
