"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "./constant/slider";

export default function GalleryPage() {
  const cases = [
    {
      title: "Teeth Whitening",
      before:
        "https://images.pexels.com/photos/6627461/pexels-photo-6627461.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/6627460/pexels-photo-6627460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Smile Makeover",
      before:
        "https://images.pexels.com/photos/5669019/pexels-photo-5669019.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/5669020/pexels-photo-5669020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Dental Veneers",
      before:
        "https://images.pexels.com/photos/6627455/pexels-photo-6627455.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/6627457/pexels-photo-6627457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Gap Closure",
      before:
        "https://images.pexels.com/photos/6627445/pexels-photo-6627445.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/6627446/pexels-photo-6627446.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Orthodontic Correction",
      before:
        "https://images.pexels.com/photos/6627447/pexels-photo-6627447.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/6627451/pexels-photo-6627451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Restorative Dentistry",
      before:
        "https://images.pexels.com/photos/6627441/pexels-photo-6627441.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after:
        "https://images.pexels.com/photos/6627442/pexels-photo-6627442.jpeg?auto=compress&cs=tinysrgb&w=1200",
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smile <span className="text-tx-2">Transformations</span>
        </h1>
        <p className="text-tx-2 text-lg max-w-2xl mx-auto">
          Explore real before and after results from our cosmetic and
          restorative dental treatments.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <BeforeAfterSlider before={item.before} after={item.after} />
            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
