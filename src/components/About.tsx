/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatedCard } from "./ui/animated-card";
import { motion } from "framer-motion";
import { Sparkles, Users, Coffee } from "lucide-react";

export default function AboutClinic() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground max-w-3xl">
            With a Personal
            <br />
            Touch
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Card 1: Innovation (Dark) */}
          <AnimatedCard
            delay={0.1}
            className="col-span-1 bg-black text-white min-h-[320px] md:min-h-[360px] group"
          >
            <div>
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Innovation
                <br />
                technology
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              We combine advanced dental technology with precision care to
              deliver exceptional results. Our clinic is equipped with
              state-of-the-art digital imaging, painless treatment systems, and
              modern sterilization protocols. We are committed to using the
              latest technology for safer, smarter, and more effective dental
              care.
            </p>
          </AnimatedCard>

          {/* Card 2: Image Card */}
          <AnimatedCard
            delay={0.2}
            variant="scale-in"
            className="col-span-1 bg-muted p-0 sm:p-0 min-h-[320px] md:min-h-[360px]"
          >
            <img
              src="/team.jpg"
              alt="Dentist working"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </AnimatedCard>

          {/* Card 3: Comfort (Lavender) */}
          <AnimatedCard
            delay={0.3}
            className="col-span-1 bg-lavender text-black min-h-[320px] md:min-h-[360px] group"
          >
            <div>
              <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Comfortable
                <br />
                and coziness
              </h3>
            </div>
            <p className="text-black/70 text-sm leading-relaxed">
              At Dr. Malot Dental Clinic, your comfort comes first. Our warm,
              welcoming space is designed to help you feel relaxed from the
              moment you arrive. With gentle care, modern technology, and a
              compassionate team, we ensure every visit is calm and stress-free.
            </p>
          </AnimatedCard>

          {/* Card 4: Qualified Staff (White with Border) */}
          <AnimatedCard
            delay={0.4}
            className="col-span-1 bg-white border border-border text-black min-h-[320px] md:min-h-[360px] group"
          >
            <div>
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Qualified
                <br />
                staff
              </h3>
            </div>
            <p className="text-black/60 text-sm leading-relaxed">
              Our team of qualified and caring professionals is dedicated to
              providing the highest quality care and making every patient&apos;s
              visit stress-free as possible.
            </p>
          </AnimatedCard>

          {/* Card 5: Another Image */}
          <AnimatedCard
            delay={0.5}
            variant="scale-in"
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-muted p-0 sm:p-0 min-h-[300px]"
          >
            <img
              src="https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Happy Patient Portrait"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-black">
              One Service at a Time
            </div> */}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
