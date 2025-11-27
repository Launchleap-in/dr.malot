"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  User,
  Mail,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="relative bg-background text-foreground py-12 sm:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto bg-[#e3f2ed] rounded-[2.5rem] relative overflow-hidden px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 blur-[100px] opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#dbe0ff]/40 blur-[100px] opacity-60 pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full shadow-sm">
              <Calendar className="w-4 h-4 text-black" />
              <span className="text-sm font-bold tracking-wide text-black">
                BOOK YOUR APPOINTMENT
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-black">
                Schedule Your<br />
                <span className="text-black/60">Visit Today</span>
                </h2>
                <p className="text-black/70 text-lg leading-relaxed max-w-lg font-medium">
                Choose your preferred date and time, and our team will get in touch
                instantly to confirm your appointment.
                </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 pt-2">
              {[
                { icon: Clock, text: "Flexible Appointment Slots" },
                { icon: Phone, text: "Instant Confirmation Support" },
                { icon: User, text: "Experienced Dental Team" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 px-5 py-4 bg-white/50 border border-white/40 rounded-2xl hover:bg-white/80 transition-all duration-300 w-fit shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                     <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-black">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl border border-white/50"
          >
            <h3 className="text-2xl font-bold mb-8 text-black">Appointment Details</h3>

            <div className="grid grid-cols-1 gap-5">
              {/* Input Fields */}
              {[
                {
                  label: "Full Name",
                  icon: User,
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  label: "Email Address",
                  icon: Mail,
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  label: "Phone Number",
                  icon: Phone,
                  type: "tel",
                  placeholder: "Enter your phone number",
                },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs font-bold uppercase tracking-wider text-black/60 ml-1">{field.label}</label>
                  <div className="flex items-center gap-3 bg-[#f2f4f6] border border-transparent rounded-xl px-4 py-3.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black/5 transition-all duration-300">
                    <field.icon className="w-4 h-4 text-black/40" />
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-transparent w-full outline-none text-black text-sm font-medium placeholder:text-black/30"
                    />
                  </div>
                </motion.div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                {/* DATE PICKER */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-1.5"
                >
                    <label className="text-xs font-bold uppercase tracking-wider text-black/60 ml-1">Date</label>
                    <div className="flex items-center gap-2 bg-[#f2f4f6] border border-transparent rounded-xl px-4 py-3.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black/5 transition-all duration-300">
                    <input
                        type="date"
                        className="bg-transparent w-full outline-none text-black text-sm font-medium"
                    />
                    </div>
                </motion.div>

                {/* TIME PICKER */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-1.5"
                >
                    <label className="text-xs font-bold uppercase tracking-wider text-black/60 ml-1">Time</label>
                    <div className="flex items-center gap-2 bg-[#f2f4f6] border border-transparent rounded-xl px-4 py-3.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-black/5 transition-all duration-300">
                    <input
                        type="time"
                        className="bg-transparent w-full outline-none text-black text-sm font-medium"
                    />
                    </div>
                </motion.div>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-black/90 transition-all duration-300 flex items-center justify-center gap-3 mt-2"
              >
                <Calendar className="w-5 h-5" />
                Confirm Appointment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
