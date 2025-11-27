"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  ShieldCheck,
  SmilePlus,
  HeartHandshake,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useRef } from "react";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Advanced Safety & Hygiene",
      desc: "We maintain stringent sterilization protocols and adhere to international safety standards, ensuring a secure environment for every patient visit.",
      features: ["ISO Certified", "Sterilized Equipment", "Infection Control"],
      badge: "Safety First",
    },
    {
      icon: SmilePlus,
      title: "Experienced Dental Expertise",
      desc: "Over 15 years of specialized experience in delivering precise, evidence-based dental treatments with consistently excellent outcomes.",
      features: ["15+ Years", "Advanced Training", "Latest Technology"],
      badge: "Expert Care",
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centric Approach",
      desc: "We prioritize patient comfort and satisfaction, providing personalized care tailored to individual needs across all age groups.",
      features: ["All Ages Welcome", "Personalized Plans", "Comfort Focus"],
      badge: "Patient First",
    },
  ];

  return (
    <div>
      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative text-center mt-20 md:mt-28 px-4 sm:px-6 lg:px-16 py-16 sm:py-20 
             bg-bg-2/30 backdrop-blur-sm border-y border-border/30 overflow-hidden"
      >
        {/* GRID BACKGROUND (same as Core Values section) */}
        <div
          className="absolute inset-0 opacity-5 text-tx-1 pointer-events-none -z-10"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto relative z-10">
          <Separator className="w-24 bg-border" />

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-tx-1">
              Ready to Experience Professional Care?
            </h3>
            <p className="text-tx-2 text-base md:text-lg">
              Join our community of satisfied patients and discover the
              difference that quality dental care can make.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="bg-bg-2 text-tx-1 hover:bg-tx-2 hover:text-bg-1 border border-border"
            >
              Schedule Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border text-tx-2 hover:bg-bg-2 hover:text-tx-1"
            >
              View Our Services
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-tx-2 pt-4">
            <CheckCircle2 className="w-4 h-4 text-ic" />
            <span>Trusted by 10,000+ patients</span>
          </div>
        </div>
      </motion.div>

      <div
        ref={containerRef}
        className="relative min-h-screen bg-bg-1 text-tx-1 px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-32"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-bg-2 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bg-2 rounded-full blur-3xl opacity-20"
          />
        </div>

        {/* Header Section */}
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 md:mb-28"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-border bg-card"
              >
                <Award className="w-4 h-4 mr-2 text-ic" />
                Excellence in Dental Care
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Why <span className="text-tx-2">Choose Us</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-tx-2 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            >
              We deliver comprehensive dental care with a commitment to clinical
              excellence, patient safety, and professional service standards.
            </motion.p>

            {/* Decorative separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-24 mx-auto mt-8"
            >
              <Separator className="bg-border" />
            </motion.div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group h-full"
              >
                <Card className="relative h-full bg-card border-2 border-border hover:border-tx-2 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-2/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative space-y-6 pb-6">
                    {/* Badge */}
                    <div className="flex items-start justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-bg-2 text-tx-1 border-border"
                      >
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-flex"
                    >
                      <div className="w-16 h-16 bg-bg-2 rounded-2xl flex items-center justify-center border border-border shadow-sm group-hover:shadow-md group-hover:border-tx-2 transition-all duration-500">
                        <item.icon
                          className="w-8 h-8 text-ic"
                          strokeWidth={2}
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-tx-1 group-hover:text-tx-2 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    {/* Description */}
                    <p className="text-tx-2 leading-relaxed text-base">
                      {item.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      {item.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 + idx * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-ic flex-shrink-0" />
                          <span className="text-tx-2">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Separator */}
                    <Separator className="bg-border" />

                    {/* Learn more button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn text-tx-2 hover:text-tx-1 hover:bg-bg-2"
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
