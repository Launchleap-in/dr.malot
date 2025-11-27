"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";

export default function TestimonialsLight() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Smile Makeover",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "After years of hiding my smile, the cosmetic dentistry transformed my confidence. The digital preview showed exactly what to expect, and the results were even better!",
    },
    {
      name: "Michael Chen",
      role: "Dental Implants",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "The implant process was seamless and virtually painless. The team explained every step, and now I can eat anything without worry. Life-changing experience!",
    },
    {
      name: "The Rodriguez Family",
      role: "Family Dentistry",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      review:
        "From our toddler's first visit to grandma's dentures, this practice handles all our family's needs with exceptional care and professionalism.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-cream rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-black overflow-hidden">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl"
          >
            Patients gave
            <br />
            lots of love
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Testimonial */}
          <AnimatedCard
            variant="scale-in"
            className="md:col-span-8 bg-white text-black p-8 sm:p-10 min-h-[300px] border border-black/5 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                src={testimonials[0].img}
                alt={testimonials[0].name}
                className="w-14 h-14 rounded-full object-cover border border-black/10"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonials[0].name}</h4>
                <p className="text-sm text-black/60">{testimonials[0].role}</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              &quot;{testimonials[0].review}&quot;
            </p>
          </AnimatedCard>

          {/* Smaller Stacked Testimonials */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {testimonials.slice(1).map((t, i) => (
              <AnimatedCard
                key={i}
                variant="slide-in-right"
                delay={0.2 + i * 0.1}
                className="bg-white text-black grow border border-black/5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-black/10"
                  />
                  <div>
                    <h4 className="font-bold text-base">{t.name}</h4>
                    <p className="text-xs text-black/60">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-black/70 leading-relaxed line-clamp-4">
                  {t.review}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
