"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    alt: "Modern Dental Clinic Reception",
    category: "Clinic",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    alt: "Dental Treatment Room",
    category: "Treatment",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1fa8c21494ab?q=80&w=1974&auto=format&fit=crop",
    alt: "Patient Consultation",
    category: "Patient Care",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    alt: "Dental Equipment",
    category: "Equipment",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    alt: "Smiling Patient",
    category: "Results",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    alt: "Dentist at Work",
    category: "Team",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop",
    alt: "Dental Tools",
    category: "Equipment",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop",
    alt: "Clean Waiting Area",
    category: "Clinic",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974&auto=format&fit=crop",
    alt: "Professional Dentist",
    category: "Team",
    size: "medium",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look inside our state-of-the-art clinic and see the smiles
            we&apos;ve transformed.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid - Modern Masonry Layout */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium text-sm">
                  {image.category}
                </p>
                <p className="text-white/90 text-xs">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
