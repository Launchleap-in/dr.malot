"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  SmilePlus,
  Syringe,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Stethoscope,
  ArrowRight,
  Award,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: SmilePlus,
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with veneers, whitening, and aesthetic enhancements.",
    },
    {
      icon: Stethoscope,
      title: "Dental Implants",
      desc: "Strong and natural-looking replacements for missing teeth.",
    },
    {
      icon: Syringe,
      title: "Painless Root Canal",
      desc: "Comfortable modern endodontic care with precision tools.",
    },
    {
      icon: ShieldCheck,
      title: "Preventive Care",
      desc: "Routine cleaning, oral exams, and early cavity detection.",
    },
    {
      icon: Sparkles,
      title: "Teeth Cleaning",
      desc: "Deep ultrasonic cleaning to remove stains, plaque & tartar.",
    },
    {
      icon: HeartPulse,
      title: "Gum Treatment",
      desc: "Advanced care for bleeding gums, infections & sensitivity.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-1 text-tx-1">
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Subtle Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-2/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-bg-2/10 rounded-full blur-3xl opacity-40" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-2/40 backdrop-blur-sm border border-border/40 rounded-full mx-auto"
          >
            <Award className="w-4 h-4 text-ic" />
            <span className="text-sm font-semibold text-tx-1 tracking-wide">
              OUR AREAS OF EXPERTISE
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6">
            Comprehensive Dental Services
          </h1>
          <div className="h-1 w-24 bg-tx-1 mx-auto rounded-full mt-6" />
          <p className="text-tx-2 mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            We provide a wide range of world-class dental services, from
            preventive care to complex restorative and cosmetic procedures, all
            under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className="
                  group h-full
                  bg-card/30 backdrop-blur-sm border border-border/20 
                  rounded-2xl shadow-sm hover:shadow-xl hover:border-border/40 hover:-translate-y-2
                  transition-all duration-300 overflow-hidden
                "
              >
                <CardContent className="p-8 space-y-5 text-center flex flex-col h-full">
                  <div className="flex-grow">
                    {/* ICON */}
                    <div className="w-20 h-20 mx-auto bg-bg-2/50 border border-border/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-bg-2 group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-10 h-10 text-ic" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-tx-1 pt-6">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-tx-2 leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* FOOTER */}
                  <div className="pt-5">
                    <span className="flex items-center justify-center gap-2 text-sm font-semibold text-tx-2 group-hover:text-tx-1 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 relative z-10"
        >
          <button className="group relative px-10 py-4 text-base font-semibold text-bg-1 bg-tx-1 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-tx-1/20 flex items-center justify-center gap-3">
            <span className="relative z-10 flex items-center gap-3">
              Contact Us Today
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-tx-2"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
