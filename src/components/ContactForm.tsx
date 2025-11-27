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
    <section className="relative bg-bg-1 text-tx-1 py-28 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:45px_45px] opacity-[0.06]" />

      {/* Glow accents */}
      <div className="absolute -top-40 -left-28 w-[500px] h-[500px] bg-bg-2/20 blur-[150px] opacity-60 -z-10" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-bg-2/20 blur-[150px] opacity-50 -z-10" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-bg-2/40 backdrop-blur-sm border border-border/40 rounded-full">
            <Calendar className="w-4 h-4 text-ic" />
            <span className="text-sm font-semibold tracking-wide">
              BOOK YOUR APPOINTMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Schedule Your Visit <br />
            With Comfort & Trust
          </h2>

          {/* Accent Line (Solid — No Gradient) */}
          <div className="h-1 w-24 bg-tx-1 rounded-full" />

          <p className="text-tx-2 text-lg leading-relaxed max-w-lg">
            Choose your preferred date and time, and our team will get in touch
            instantly to confirm your appointment.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4 pt-2">
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
                className="flex items-center gap-4 px-5 py-3.5 bg-bg-2/20 border border-border/20 rounded-xl backdrop-blur-sm hover:border-border/50 transition-all duration-300 w-fit"
              >
                <item.icon className="w-5 h-5 text-ic" />
                <span className="text-sm font-medium">{item.text}</span>
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
          className="bg-bg-2/20 backdrop-blur-xl border border-border/40 rounded-3xl p-10 shadow-2xl hover:border-border/60 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-6">Appointment Form</h3>

          <div className="grid grid-cols-1 gap-6">
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
                className="space-y-2"
              >
                <label className="text-sm text-tx-2">{field.label}</label>
                <div className="flex items-center gap-3 bg-bg-1/30 border border-border/30 rounded-xl px-4 py-3 focus-within:border-tx-1 transition-all duration-300">
                  <field.icon className="w-4 h-4 text-ic" />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-transparent w-full outline-none text-tx-1 text-sm"
                  />
                </div>
              </motion.div>
            ))}

            {/* DATE PICKER */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label className="text-sm text-tx-2">Preferred Date</label>
              <div className="flex items-center gap-3 bg-bg-1/30 border border-border/30 rounded-xl px-4 py-3 focus-within:border-tx-1 transition-all duration-300">
                <Calendar className="w-4 h-4 text-ic" />
                <input
                  type="date"
                  className="bg-transparent w-full outline-none text-tx-1 text-sm"
                />
              </div>
            </motion.div>

            {/* TIME PICKER */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="text-sm text-tx-2">Preferred Time</label>
              <div className="flex items-center gap-3 bg-bg-1/30 border border-border/30 rounded-xl px-4 py-3 focus-within:border-tx-1 transition-all duration-300">
                <Clock className="w-4 h-4 text-ic" />
                <input
                  type="time"
                  className="bg-transparent w-full outline-none text-tx-1 text-sm"
                />
              </div>
            </motion.div>

            {/* MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <label className="text-sm text-tx-2">Message (Optional)</label>
              <div className="flex items-start gap-3 bg-bg-1/30 border border-border/30 rounded-xl px-4 py-3 focus-within:border-tx-1 transition-all duration-300">
                <MessageSquare className="w-4 h-4 text-ic mt-1" />
                <textarea
                  rows={3}
                  placeholder="Describe your concern"
                  className="bg-transparent w-full outline-none text-tx-1 text-sm resize-none"
                />
              </div>
            </motion.div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-tx-1 text-bg-1 rounded-xl font-semibold shadow-xl hover:bg-tx-2 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Confirm Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
