"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Sharma",
      role: "Software Engineer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&q=80&w=600",
      review:
        "My root canal was absolutely painless. The doctor explained everything clearly, and I felt completely comfortable throughout the treatment.",
    },
    {
      name: "Priya Patel",
      role: "Teacher",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&q=80&w=600",
      review:
        "Modern clinic, hygienic environment, and very friendly staff. The teeth whitening results were amazing!",
    },
    {
      name: "Amit Verma",
      role: "Business Owner",
      img: "https://images.unsplash.com/photo-1521198022873-af0f772bf653?auto=format&q=80&w=600",
      review:
        "Best dental experience I've had. The doctor is professional, gentle, and genuinely cares for patients.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 bg-bg-2/30 backdrop-blur-sm border-y border-border/30 overflow-hidden">
      {/* EXACT SAME GRID BACKGROUND AS CORE VALUES */}
      <div
        className="absolute inset-0 opacity-5 text-tx-1 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow accents
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-bg-2/20 blur-[140px] opacity-60 -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-bg-2/20 blur-[140px] opacity-50 -z-10" /> */}

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          What Our <span className="text-tx-2">Patients Say</span>
        </h2>
        <div className="h-1 w-20 bg-tx-1 mx-auto rounded-full mt-4" />
        <p className="text-tx-2 mt-4 text-lg max-w-2xl mx-auto">
          Real experiences from people who trusted us with their smile.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="
                bg-bg-2/20 
                backdrop-blur-md 
                border border-border/30 
                rounded-2xl 
                p-8 
                shadow-xl 
                hover:shadow-2xl 
                hover:bg-bg-2/30 
                hover:border-border/50 
                transition-all 
                duration-300
              "
            >
              {/* User section */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border border-border shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-tx-2">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4 text-ic">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ic text-ic" />
                ))}
              </div>

              {/* Review */}
              <p className="text-tx-2 leading-relaxed">{t.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
