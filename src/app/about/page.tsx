"use client";

import AboutClinic from "@/src/components/About";
import { motion } from "framer-motion";
import { HeartHandshake, Landmark, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-bg-1 text-tx-1 overflow-hidden min-h-screen relative">
      {/* ===== ABOUT HERO ===== */}
      <section className="text-center py-20 relative px-6">
        {/* Soft Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-bg-2 blur-[120px] opacity-40"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About <span className="text-tx-2">Our Clinic</span>
        </motion.h1>

        <p className="text-tx-2 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Learn more about our story, philosophy, medical excellence, and the
          passion behind every smile we create.
        </p>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-14 items-center relative">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-tx-2 text-lg leading-relaxed">
            Dr. Malot Dental Clinic began with a mission: to provide
            exceptional, painless, and modern dental care that patients can
            trust. Over the years, our clinic has grown into a center of
            excellence known for precision, compassion, and advanced dental
            techniques.
          </p>

          <p className="text-tx-2 text-lg leading-relaxed">
            Today, we proudly serve thousands of families, helping them maintain
            confident, healthy smiles through honest guidance, modern equipment,
            and a gentle approach.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b66?auto=format&fit=crop&w=1100&q=85"
          className="rounded-3xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border shadow-md p-8 rounded-2xl space-y-4"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-tx-2 leading-relaxed">
              To deliver world-class dental care with honesty, compassion, and
              precision, ensuring every patient feels safe, valued, and
              confident.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border shadow-md p-8 rounded-2xl space-y-4"
          >
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-tx-2 leading-relaxed">
              To be the most trusted dental destination where modern technology
              meets compassion — creating beautiful smiles that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="px-6 md:px-16 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Core <span className="text-tx-2">Values</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: ShieldCheck,
              title: "Safety First",
              desc: "Highest hygiene & sterilization standards.",
            },
            {
              icon: Sparkles,
              title: "Modern Dentistry",
              desc: "Advanced tools for accurate & painless treatment.",
            },
            {
              icon: HeartHandshake,
              title: "Compassionate Care",
              desc: "We treat patients with empathy, respect & patience.",
            },
            {
              icon: Landmark,
              title: "Experience",
              desc: "15+ years of trusted dental excellence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border shadow-md rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition">
                <div className="w-20 h-20 mx-auto bg-bg-2 rounded-2xl flex items-center justify-center shadow-sm">
                  <item.icon className="w-10 h-10 text-ic" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-tx-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== YOUR EXISTING COMPONENT ===== */}
      <section className="px-6 md:px-16 py-16">
        <AboutClinic />
      </section>

      {/* ===== ENDING SECTION ===== */}
      <section className="text-center px-6 md:px-16 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          A Clinic That Truly Cares.
        </motion.h2>

        <p className="text-tx-2 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          We believe dentistry is not just about teeth — it&lsquo;s about trust,
          comfort, and helping people live with confidence. You&apos;re not just
          a patient here; you&apos;re family.
        </p>
      </section>
    </div>
  );
}
