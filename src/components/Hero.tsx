"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  Star,
  Award,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function DentistHome() {
  const stats = [
    { number: "10,000+", label: "Satisfied Patients" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "Quality Assurance" },
  ];

  const features = [
    { icon: Star, text: "5.0 Star Rating" },
    { icon: Clock, text: "Same-Day Appointments" },
    { icon: MapPin, text: "Prime Location" },
  ];

  const trustBadges = [
    { icon: Shield, text: "Certified Professional" },
    { icon: CheckCircle, text: "Sterilization Standards" },
  ];

  return (
    <div className="min-h-screen bg-bg-1 text-tx-1">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Subtle Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bg-2/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bg-2/10 rounded-full blur-3xl opacity-40" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-2/40 backdrop-blur-sm border border-border/40 rounded-full mx-auto lg:mx-0"
            >
              <Award className="w-4 h-4 text-ic" />
              <span className="text-sm font-semibold text-tx-1 tracking-wide">
                PREMIUM DENTAL CARE PROVIDER
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-tx-2 text-2xl sm:text-3xl md:text-4xl font-medium mb-2">
                  Welcome to
                </span>
                Dr. Malot
                <span className="block text-tx-1 mt-1">Dental Care</span>
              </h1>

              <div className="h-1 w-24 bg-tx-1 mx-auto lg:mx-0 rounded-full" />

              <p className="text-tx-2 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Experience exceptional dental care with advanced technology,
                compassionate service, and unwavering commitment to your oral
                health.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-bg-2/30 backdrop-blur-sm rounded-lg border border-border/30"
                >
                  <badge.icon className="w-4 h-4 text-ic" />
                  <span className="text-sm font-medium text-tx-2">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center lg:items-start gap-2 p-4 bg-bg-2/20 backdrop-blur-sm rounded-xl border border-border/20 hover:bg-bg-2/30 hover:border-border/40 transition-all duration-300"
                >
                  <feature.icon className="w-5 h-5 text-ic" />
                  <span className="text-sm font-semibold text-tx-1">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
            >
              <button className="group relative px-10 py-4 text-base font-semibold text-bg-1 bg-tx-1 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-tx-1/20 flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
                <motion.div
                  className="absolute inset-0 bg-tx-2"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Schedule Appointment
                </span> */}
              </button>

              <button className="group relative px-10 py-4 text-base font-semibold text-tx-1 border-2 border-tx-1/40 bg-bg-2/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:border-tx-1 hover:shadow-xl flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Contact Our Team</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Professional Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-bg-2/30 to-bg-2/10 rounded-[2rem] blur-2xl" />

              {/* Image Container */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-bg-2/40">
                  <img
                    src="/di.png"
                    alt="Dr. Malot - Professional Dental Care"
                    className="
                      w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[520px] 
                      object-cover aspect-[3/4]
                      transition-transform duration-700 hover:scale-105
                    "
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-1/20 to-transparent pointer-events-none" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-tx-1/30 rounded-tr-2xl" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-tx-1/30 rounded-bl-2xl" />
              </div>

              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="
                  absolute -bottom-8 -left-6 sm:-left-8
                  bg-card/98 backdrop-blur-md border-2 border-border/40
                  rounded-2xl p-5 sm:p-6 shadow-2xl
                  hover:scale-105 transition-transform duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div className="bg-bg-2/60 p-3 rounded-xl">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-ic" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold text-tx-1">
                      15+ Years
                    </p>
                    <p className="text-sm text-tx-2">Professional Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-bg-2/30 backdrop-blur-sm py-20 sm:py-24 border-y border-border/30">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-tx-1 mb-3">
              Our Track Record
            </h2>
            <div className="h-1 w-20 bg-tx-1 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center group"
              >
                <div className="relative py-8 px-6 rounded-2xl bg-bg-1/50 backdrop-blur-sm border border-border/30 hover:border-border/50 hover:bg-bg-1/70 transition-all duration-300">
                  <motion.h3
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-tx-1 mb-3"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-base sm:text-lg text-tx-2 font-medium tracking-wide">
                    {stat.label}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-16 bg-tx-1/50 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
