"use client";
import { motion } from "framer-motion";
import { ArrowDown, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DentistHome() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-24 bg-background lg:h-screen flex items-center justify-center">
      {/* Main Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1600px] bg-mint rounded-[2.5rem] overflow-hidden relative shadow-sm lg:h-[90vh] flex flex-col lg:flex-row"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-between p-6 sm:p-12 lg:p-20 w-full lg:w-1/2">
          <div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 font-bold text-lg sm:text-xl tracking-wide uppercase mb-12 sm:mb-20"
            >
              <div className="w-3 h-3 bg-black rounded-full" />
              DENTO POINT
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 w-fit">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-black">
                  #1 Dental Clinic in Udaipur
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight text-black">
                Dental
                <br />
                Care
              </h1>

              <p className="text-black/70 text-base sm:text-lg max-w-md leading-relaxed pt-4">
                Experience world-class dental services with advanced technology
                and a gentle touch. Your smile is our priority.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/contact#ContactForm"
              className="
    bg-black text-white font-bold cursor-pointer
    rounded-full shadow-xl shadow-black/10
    transition-all duration-300 hover:scale-105
    flex items-center justify-center
    w-full sm:w-auto
    px-6 py-3 sm:px-8 sm:py-4
    text-sm sm:text-base md:text-lg
  "
            >
              Book appointment
            </Link>

            <div className="flex items-center gap-4 px-6 py-3 bg-white/40 rounded-full border border-white/40 w-full sm:w-auto justify-center sm:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-black">
                <span className="block font-bold">2k+</span>
                <span className="text-xs opacity-70">Happy Patients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <div className="relative w-full lg:w-1/2 h-full flex items-end justify-center lg:justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-full w-full flex items-end justify-center"
          >
            {/* Big Image */}
            <img
              src="/hero.png"
              alt="Happy Patient"
              className="h-full w-auto object-cover object-bottom lg:object-bottom-right drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-auto bottom-16 left-4 sm:top-[60%] sm:bottom-auto sm:right-16 sm:left-auto bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[180px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-mint rounded-full">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-black text-sm">Certified</span>
            </div>
            <p className="text-xs text-black/60">
              Top-tier medical standards & hygiene.
            </p>
          </motion.div>

          {/* Floating Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-4 right-4 sm:bottom-32 sm:left-16 sm:right-auto bg-black text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-[160px] sm:max-w-[200px] z-20"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1">25+</div>
            <div className="text-sm text-white/70">
              Years of Excellence in Dental Care
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex flex-col items-center gap-4 z-20 mix-blend-darken">
            {/* <span className="text-xs font-medium uppercase tracking-widest -rotate-90 origin-center translate-y-8">
              Scroll to explore
            </span> */}
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center mt-16 animate-bounce bg-white/20 backdrop-blur-sm">
              <ArrowDown className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
