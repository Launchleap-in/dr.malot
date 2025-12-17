"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/dr.malot.jpg", alt: "Dr. Rajnikant Malot", size: "large" },

  {
    src: "/di.png",
    alt: "Dr. Mitrata ",
    size: "medium",
  },

  // {
  //   src: "/dr.saranshFull.jpg",
  //   alt: "Dr. Saransh Malot",
  //   size: "large",
  // },
  {
    src: "/dr.woking (1).jpeg",
    alt: "Dr. Saransh during dental procedure",
    size: "large",
  },

  // { src: "/team.jpg", alt: "Dental Team at Malot Clinic", size: "large" },

  {
    src: "/woking.jpeg",
    alt: "Dr.Mitrata during dental procedure",
    size: "large",
  },

  // {
  //   src: "/dr.saranshFull.jpg",
  //   alt: "Dr. Saransh Malot",
  //   size: "large",
  // },

  // {
  //   src: "/team/dr.nidhi1.jpg",
  //   alt: "Dr. Mitrata Vyas Malot",
  //   size: "small",
  // },

  // { src: "/team/t1.jpg", alt: "Malot Dental Clinic Team", size: "medium" },
  // {
  //   src: "/team/ts.jpg",
  //   alt: "Doctors and Staff at Malot Dental Clinic",
  //   size: "medium",
  // },

  // {
  //   src: "/Gallery/2.jpeg",
  //   alt: "Dr. Mitrata Vyas Malot performing treatment",
  //   size: "medium",
  // },

  {
    src: "/Gallery/3.jpeg",
    alt: "Dr.Malot Logo",
    size: "small",
  },
  {
    src: "/team/dr.saransh.jpg",
    alt: "Dr. Saransh",
    size: "small",
  },
  {
    src: "/dr.saransh.jpg",
    alt: "Dr. Saransh",
    size: "medium",
  },

  {
    src: "/Gallery/4.jpeg",
    alt: "Dr.Malot reception Area",
    size: "large",
  },
  {
    src: "/Gallery/1.jpeg",
    alt: "Dr. Saransh at clinic",
    size: "large",
  },
  {
    src: "/Gallery/5.jpeg",
    alt: "Dr.Malot Clinic",
    size: "medium",
  },
  {
    src: "/Gallery/6.jpeg",
    alt: "Clinic",
    size: "small",
  },

  {
    src: "/Gallery/7.jpeg",
    alt: "Dr.Malot dental Chair",
    size: "medium",
  },
  {
    src: "/Gallery/8.jpeg",
    alt: "Dr. Saransh Cablin",
    size: "large",
  },

  {
    src: "/Gallery/9.jpeg",
    alt: "Dr. Saransh  with dental equipment",
    size: "small",
  },

  {
    src: "/dr.nidhi.jpeg",
    alt: "Dr.  Mitrata during dental procedure",
    size: "small",
  },
  {
    src: "/dr.nidhi.jpg",
    alt: "Dr.Mitrata during dental procedure",
    size: "large",
  },
  {
    src: "/Gallery/10.jpeg",
    alt: "Clinic Chair",
    size: "medium",
  },
  {
    src: "/Gallery/11.jpeg",
    alt: "Dental Chair",
    size: "small",
  },
  {
    src: "/Gallery/12.jpeg",
    alt: "Serving Health Since 1980",
    size: "large",
  },
  {
    src: "/instuments/1.jpeg",
    alt: "Woodpecker Implanter",
    size: "large",
  },
  {
    src: "/instuments/2.jpeg",
    alt: "portable dental X-ray machine",
    size: "large",
  },
  {
    src: "/instuments/3.jpeg",
    alt: "Osstem 122 Taper Kit",
    size: "large",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
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
                {/* <p className="text-white font-medium text-sm">
                  {image.category}
                </p> */}
                <p className="text-white/90 text-xs">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
