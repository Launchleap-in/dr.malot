"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type AnimationVariant = "fade-up" | "scale-in" | "slide-in-right";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  variant?: AnimationVariant;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  hoverEffect = false,
  variant = "fade-up",
}: AnimatedCardProps) {
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
    },
    "scale-in": {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
    },
    "slide-in-right": {
      initial: { opacity: 0, x: 20 },
      whileInView: { opacity: 1, x: 0 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden",
        hoverEffect &&
          "group hover:scale-[1.02] transition-transform duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
