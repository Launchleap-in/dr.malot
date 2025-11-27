"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

export default function BeforeAfterSlider({
  before,
  after,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    setPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(e.touches[0].clientX);
  };

  // Standardize: Before = Left (Base), After = Right (Revealed via Clip)
  // Or standard "Before/After" sliders usually show Before on left, After on right.
  // Actually, usually Before is the full image, and you drag to reveal After.
  // If slider is at 50%, left 50% is Before, right 50% is After.
  // Let's use Layer 1 = After (Full). Layer 2 = Before (Clipped).
  // Clip Path for Layer 2: inset(0 0 0 ${position}%) -> Clips the left part.
  // Wait, inset(top right bottom left).
  // If position is 50%, we want to show Left 50% of Before image.
  // clip-path: inset(0 50% 0 0) -> clips the right 50%. Left 50% remains.
  // So Layer 2 (Before) is visible on the Left.
  // Layer 1 (After) is visible on the Right (behind Layer 2's clipped area).

  return (
    <div
      ref={containerRef}
      className="
        relative w-full h-64 sm:h-80 md:h-96 
        rounded-2xl overflow-hidden cursor-col-resize 
        bg-gray-100 select-none
      "
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Layer 1: AFTER Image (Background, visible on the right) */}
      <div className="absolute inset-0 w-full h-full">
         <img
            src={after}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
         <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded font-bold z-10">
            AFTER
         </span>
      </div>

      {/* Layer 2: BEFORE Image (Foreground, visible on the left, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
            clipPath: `inset(0 ${100 - position}% 0 0)` 
        }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs rounded font-bold z-10">
            BEFORE
         </span>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20"
        style={{ left: `${position}%` }}
      />

      {/* Drag Handle */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2 
          w-8 h-8 rounded-full bg-white 
          shadow-xl 
          flex items-center justify-center 
          text-black font-bold z-30
          cursor-grab active:cursor-grabbing
        "
        style={{ left: `${position}%`, transform: `translate(-50%, -50%)` }}
        onMouseDown={(e) => e.preventDefault()} 
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 19l-5-7 5-7" />
            <path d="M16 5l5 7-5 7" />
        </svg>
      </div>
    </div>
  );
}
