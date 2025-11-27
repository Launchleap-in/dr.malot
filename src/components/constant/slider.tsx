"use client";

import { useState, useRef } from "react";
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

  return (
    <div
      ref={containerRef}
      className="
        relative w-full h-64 sm:h-80 md:h-96 
        rounded-2xl overflow-hidden cursor-col-resize 
        border border-border bg-bg-2/10
      "
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* BEFORE Image */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AFTER Image (masked based on position) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-tx-1/70"
        style={{ left: `${position}%` }}
      />

      {/* Drag Handle */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        onDrag={(e) => updatePosition(e.clientX)}
        className="
          absolute top-1/2 -translate-y-1/2 
          w-8 h-8 rounded-full bg-bg-1 
          border border-border shadow-xl 
          flex items-center justify-center 
          text-tx-1 font-bold select-none
        "
        style={{ left: `${position}%` }}
      >
        ||
      </motion.div>
    </div>
  );
}
