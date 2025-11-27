"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "General Dentistry",
      desc: "Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.",
      color: "bg-lavender", // Lavender
      textColor: "text-black",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.",
      color: "bg-mint", // Mint
      textColor: "text-black",
    },
    {
      title: "Restorative Dentistry",
      desc: "Your comfort is our priority. From the moment you step into our office, our friendly staff is here to ensure a positive experience.",
      color: "bg-cream", // Cream/Yellow
      textColor: "text-black",
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
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors font-medium">
              All services →
            </button>
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

                {/* List points (decorative based on image) */}
                <ul className="text-xs font-medium opacity-60 space-y-1 mt-6">
                  <li>• Dentures and partials</li>
                  <li>• Crowns and bridges</li>
                  <li>• Dental implants</li>
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
