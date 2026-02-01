/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";

export default function TestimonialsLight() {
  const testimonials = [
    {
      name: "Pallavi Singh",
      role: "Pediatric Dental Care",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "I visited Dr. Mitrata Malot's dental clinic for my son's check up. Your gentle approach, patience and ability to make the whole experience comfortable and even fun really stood out. We feel very lucky to have found you. I especially appreciated the way you communicated with my son. You are very humble and kind. The best dentist for the kids!",
    },
    {
      name: "Jagdish Salvi",
      role: "Dental Implants",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "One of the best dentist who tries to understand your problem and customise the treatment according to your need and budget. I had done implant treatment for my lower teeth and it was near painless procedure. Dr Malot is a good understanding and knowledgeable doctor and very helpful. Thanks for such comfortable environment and making dental procedures easy.",
    },
    {
      name: "Irfan Sheikh",
      role: "General Dentistry",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "Exceptional care and service! Professional staff, clean facility, and painless treatments. Outstanding experience from start to finish. The best dental care I've ever received. Trustworthy, skilled, and friendly team. This clinic sets the bar high for dental care!",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-background">
      <div className="max-w-[1600px] mx-auto bg-cream rounded-[2.5rem] p-6 sm:p-10 lg:p-14 text-black overflow-hidden">
        <div className="mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Patients gave
            <br />
            lots of love
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Large Featured Testimonial */}
          <AnimatedCard
            variant="scale-in"
            className="md:col-span-8 bg-white text-black p-6 sm:p-8 lg:p-10 min-h-[280px] border border-black/5 shadow-sm rounded-2xl"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <img
                src={testimonials[0].img}
                alt={testimonials[0].name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-black/10"
              />
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  {testimonials[0].name}
                </h4>
                <p className="text-xs sm:text-sm text-black/60">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              &quot;{testimonials[0].review}&quot;
            </p>
          </AnimatedCard>

          {/* Smaller Stacked Testimonials */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            {testimonials.slice(1).map((t, i) => (
              <AnimatedCard
                key={i}
                variant="slide-in-right"
                delay={0.2 + i * 0.1}
                className="bg-white text-black p-5 sm:p-6 border border-black/5 shadow-sm rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-black/10"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{t.name}</h4>
                    <p className="text-xs text-black/60">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-black/70 leading-relaxed line-clamp-4">
                  &quot;{t.review}&quot;
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
