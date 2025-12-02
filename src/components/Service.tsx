"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Implant Dentistry",
      desc: "Restore your smile’s function and appearance with durable, natural-looking dental implants tailored to your unique needs.",
      color: "bg-lavender",
      textColor: "text-black",
      points: [
        "• Single & multiple implants",
        "• Full mouth implant restorations",
        "• Implant-supported dentures",
      ],
    },
    {
      title: "Kids Dentistry",
      desc: "Creating positive dental experiences for children through gentle care, preventive treatments, and a fun, comforting environment.",
      color: "bg-mint",
      textColor: "text-black",
      points: [
        "• Preventive cleanings",
        "• Sealants & fluoride treatments",
        "• Pediatric exams & fillings",
      ],
    },
    {
      title: "Restorative Dentistry",
      desc: "Repair and enhance damaged teeth with advanced restorative treatments designed to improve function, comfort, and aesthetics.",
      color: "bg-cream",
      textColor: "text-black",
      points: [
        "• Crowns & bridges",
        "• Tooth-colored fillings",
        "• Dentures & partials",
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-dark rounded-[2.5rem] p-6 sm:p-12 lg:p-20 text-white overflow-hidden relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Elevating Oral Health with Personalized Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-end items-start lg:items-end"
          >
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              We believe in the power of a healthy, beautiful smile to enhance
              your overall well-being. Beyond addressing your immediate dental
              concerns.
            </p>
            <Link
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors font-medium"
              href={"/services"}
            >
              All services →
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className={`${service.color} ${service.textColor} min-h-[340px] group`}
            >
              {/* Top Arrow Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="opacity-80 text-sm sm:text-base leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Dynamic List Points */}
                <ul className="text-xs font-medium opacity-60 space-y-1 mt-6">
                  {service.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
