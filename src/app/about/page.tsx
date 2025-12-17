"use client";

import AboutClinic from "@/src/components/About";
import MeetOurTeam from "@/src/components/team";
import { motion } from "framer-motion";
import { HeartHandshake, Landmark, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden min-h-screen relative">
      {/* ===== ABOUT HERO ===== */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto bg-[#e3f2ed] rounded-[2.5rem] px-6 py-16 md:py-24 relative overflow-hidden text-center">
          {/* Soft Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/40 blur-[100px] opacity-70 pointer-events-none"></div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-5xl md:text-7xl font-bold text-black mb-6"
          >
            About <span className="text-black/60">Our Clinic</span>
          </motion.h1>

          <p className="relative z-10 text-black/70 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Learn more about our story, philosophy, medical excellence, and the
            passion behind every smile we create.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-14 items-center relative max-w-[1600px] mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Our Story
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            <span className="font-semibold text-foreground">
              Dr. Rajnikant Malot Patron (Senior Doctor) MBBS, PGC, PGDD
              Physician and Diabetologist
            </span>{" "}
            Our father is our inspiration. His teachings & knowledge guided us
            to become what we are today.
            <br />
            <br />
            <span className="font-semibold">
              Our parental institute: – Dr. R K Malot is a renowned Physician &
              a Diabetologist.
            </span>{" "}
            He is serving the mankind since past 35 years.
            <br />
            <br />
            <span className="bg-yellow-100 px-1.5 py-0.5 rounded">
              Dr. Malot Diagnostic Clinic is one of the first center of its kind
              in the district of Banswara, Rajasthan
            </span>{" "}
            which is equipped with modern diagnostic facilities and an X-ray
            house. He specializes in treating the diabetic patients.
            <br />
            <br />
            <span className="font-medium text-foreground">
              Dr. Malot Diabetic center is an institute which is dedicated for
              treatment and management of complications related to Diabetes.
            </span>
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Today, we proudly serve thousands of families, helping them maintain
            confident, healthy smiles through honest guidance, modern equipment,
            and a gentle approach.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/dr.malot.jpg"
          className="rounded-[2rem] shadow-2xl w-full object-cover h-[800px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-[1600px] mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border/50 shadow-sm p-10 rounded-3xl space-y-4"
          >
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
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
            className="bg-[#dbe0ff] border border-transparent shadow-sm p-10 rounded-3xl space-y-4 text-black"
          >
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-black/70 leading-relaxed text-lg">
              To be the most trusted dental destination where modern technology
              meets compassion — creating beautiful smiles that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>
      <MeetOurTeam />

      {/* ===== CORE VALUES ===== */}
      <section className="px-6 md:px-16 py-24 max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Core <span className="text-muted-foreground">Values</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Safety First",
              desc: "Highest hygiene & sterilization standards.",
              color: "bg-[#e3f2ed]", // mint
            },
            {
              icon: Sparkles,
              title: "Modern Dentistry",
              desc: "Advanced tools for accurate & painless treatment.",
              color: "bg-[#fbf7e3]", // cream
            },
            {
              icon: HeartHandshake,
              title: "Compassionate Care",
              desc: "We treat patients with empathy, respect & patience.",
              color: "bg-[#dbe0ff]", // lavender
            },
            {
              icon: Landmark,
              title: "Experience",
              desc: "15+ years of trusted dental excellence.",
              color: "bg-white border border-border", // white
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={`h-full ${item.color} rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-16 h-16 mx-auto bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center shadow-sm">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-black/70 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT CLINIC COMPONENT ===== */}
      {/* <AboutClinic /> */}

      {/* ===== ENDING SECTION ===== */}
      <section className="text-center px-6 md:px-16 py-24 bg-black text-white mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          A Clinic That Truly Cares.
        </motion.h2>

        <p className="text-white/70 max-w-2xl mx-auto text-xl leading-relaxed mb-12">
          We believe dentistry is not just about teeth — it&lsquo;s about trust,
          comfort, and helping people live with confidence. You&apos;re not just
          a patient here; you&apos;re family.
        </p>
      </section>
    </div>
  );
}
