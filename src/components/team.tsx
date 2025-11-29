"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MeetOurTeam() {
  // ====== EDIT DATA HERE ======
  const teamData = {
    heading: "Meet the Experts Behind Your Smile",
    description:
      "Our team combines years of expertise, advanced training, and a genuine passion for creating beautiful, healthy smiles for every patient.",
    buttonText: "Book Appointment →",
    bottomBadge: "Combined 25+ Years of Dental Excellence",

    doctors: [
      {
        name: "Dr. SARANSH MALOT",
        role: "Director",
        image: "/dr.saransh.jpg",
        icon: Award,
        bgColor: "bg-mint",
        credentials: [
          "Associate professor At DDCH, Udaipur",
          "BDS, MDS Prosthodontist and Implantologist",
          "Implant certification AIC Korea",
          "National speaker for Wan core implants",
          "Key opinion leader for Veritas",
        ],
        extraNote: null,
      },
      {
        name: "Dr. MITRATA VYAS MALOT",
        role: "Senior Dentist",
        image: "/didi.jpg",
        icon: Heart,
        bgColor: "bg-lavender",
        credentials: [
          "BDS, MDS Pediatric dentist",
          "Specialist in kids dental treatment",
        ],
        extraNote:
          "Dedicated to making every child's dental visit a positive and comfortable experience.",
      },
    ],
  };
  // ====== END DATA ======

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-dark rounded-[2.5rem] p-6 sm:p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {teamData.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-end items-start lg:items-end"
          >
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              {teamData.description}
            </p>
            <Link
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors font-medium"
              href={"/contact#ContactForm"}
            >
              {teamData.buttonText}
            </Link>
          </motion.div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teamData.doctors.map((doctor, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className={`${doctor.bgColor} text-black min-h-[700px] group`}
            >
              {/* Icon Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-300">
                <doctor.icon className="w-6 h-6 text-black" />
              </div>

              {/* Image */}
              <div className="mb-6 rounded-2xl overflow-hidden h-full sm:h-200 bg-black/5">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-black/60 font-semibold text-lg mb-4">
                    {doctor.role}
                  </p>
                </div>

                <ul className="text-sm text-black/70 space-y-2 leading-relaxed">
                  {doctor.credentials.map((credential, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0"></span>
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>

                {/* Extra Note (if exists) */}
                {doctor.extraNote && (
                  <div className="mt-8 pt-8 border-t border-black/10">
                    <p className="text-black/60 text-sm italic">
                      {doctor.extraNote}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-white">
            <Sparkles className="w-4 h-4" />
            {teamData.bottomBadge}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
