"use client";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Star,
  HeartHandshake,
  Medal,
  Milestone,
  Flag,
  CheckCircle,
} from "lucide-react";

export default function OurJourney() {
  const steps = [
    {
      year: "2008",
      title: "Clinic Founded",
      desc: "We began with a mission to make dentistry painless, modern, and comforting for everyone.",
      icon: CalendarCheck,
    },
    {
      year: "2014",
      title: "Technology Upgrade",
      desc: "Added digital X-rays, rotary tools, and advanced sterilization equipment.",
      icon: Star,
    },
    {
      year: "2018",
      title: "10,000+ Smiles Restored",
      desc: "A trusted center with thousands of happy patients appreciating our gentle care.",
      icon: HeartHandshake,
    },
    {
      year: "2023",
      title: "Award for Excellence",
      desc: "Recognized for modern dentistry, precision, and unmatched patient comfort.",
      icon: Medal,
    },
  ];

  return (
    <div className="bg-bg-1 text-tx-1">
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Backdrop Glows */}
        <div className="absolute -top-40 -left-52 w-[600px] h-[600px] bg-bg-2/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-bg-2/10 rounded-full blur-3xl opacity-40" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-2/40 border border-border/40 backdrop-blur-sm rounded-full"
          >
            <Milestone className="w-4 h-4 text-ic" />
            <span className="text-sm font-semibold tracking-wide">
              OUR STORY OF EXCELLENCE
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6">
            A Journey of Dedication
          </h2>

          <div className="h-1 w-20 bg-tx-1 mx-auto rounded-full mt-6" />

          <p className="text-tx-2 mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From a humble beginning to a center of dental excellence, discover
            the milestones that define our commitment to your smile.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Timeline Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-border/20 via-border/40 to-border/20 md:-translate-x-1/2" />

          {/* Start Node */}
          <div className="relative mb-16 flex justify-start md:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-bg-2 border border-border rounded-full shadow-md flex items-center justify-center"
            >
              <Flag className="w-7 h-7 text-ic" />
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative md:grid md:grid-cols-2 md:gap-x-20 items-center mb-24"
                >
                  {/* Card */}
                  <div
                    className={`px-12 md:px-0 order-2 md:order-none ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`
                        bg-card/50 backdrop-blur-sm border border-border/30
                        rounded-2xl shadow-lg transition-all duration-300
                        hover:shadow-xl hover:border-border/60 hover:-translate-y-2
                        p-6 md:p-8
                        ${isLeft ? "md:text-right" : ""}
                      `}
                    >
                      <p className="text-tx-2 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                        {step.year}
                      </p>

                      <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                        {step.title}
                      </h3>

                      <p className="text-tx-2 mt-3 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-14 h-14 bg-bg-2/70 border border-border/50 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center"
                    >
                      <step.icon className="w-6 h-6 text-ic" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End Node */}
          <div className="relative mt-8 flex justify-start md:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-bg-2 to-bg-1 border border-border px-6 py-3 rounded-full shadow-xl flex items-center gap-3 font-semibold"
            >
              <CheckCircle className="w-5 h-5 text-green-400" />
              Today & Beyond
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
