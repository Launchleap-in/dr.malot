/* eslint-disable react-hooks/static-components */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import {
  SmilePlus,
  Syringe,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Scan,
  Landmark,
  BadgeCheck,
  Clock,
  Users,
  Award,
  Calendar,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import TestimonialsLight from "@/src/components/TestiLight";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { useState } from "react";

export default function FullServicePage() {
  const [openModal, setOpenModal] = useState(false);
  type DetailedSectionType = (typeof detailedSections)[number];

  const [selectedService, setSelectedService] =
    useState<DetailedSectionType | null>(null);
  const mainServices = [
    {
      icon: SmilePlus,
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with modern cosmetic dentistry.",
      features: ["Smile Design", "Whitening", "Veneers"],
      time: "30-90 mins",
      popular: true,
      color: "bg-[#e3f2ed]",
    },
    {
      icon: Stethoscope,
      title: "Dental Implants",
      desc: "Strong, permanent replacements for missing teeth.",
      features: ["Titanium Implants", "Same Day Surgery", "Bone Grafting"],
      time: "60-120 mins",
      popular: true,
      color: "bg-[#fbf7e3]",
    },
    {
      icon: Syringe,
      title: "Painless Root Canal",
      desc: "Modern rotary tools for fast and comfortable treatment.",
      features: ["Rotary Tools", "Digital Anesthesia", "3D Imaging"],
      time: "45-90 mins",
      popular: false,
      color: "bg-[#dbe0ff]",
    },
    {
      icon: Sparkles,
      title: "Teeth Cleaning & Whitening",
      desc: "Deep cleaning + clinical-grade whitening session.",
      features: ["Scaling", "Polishing", "LED Whitening"],
      time: "45-60 mins",
      popular: true,
      color: "bg-white border border-border",
    },
    {
      icon: ShieldCheck,
      title: "Preventive Dentistry",
      desc: "Early detection and preventive care for long-term health.",
      features: ["X-ray", "Sealants", "Fluoride"],
      time: "30-60 mins",
      popular: false,
      color: "bg-[#e3f2ed]",
    },
    {
      icon: HeartPulse,
      title: "Gum Disease Treatment",
      desc: "Advanced periodontal therapy for gum health.",
      features: ["Laser Therapy", "Deep Cleaning", "Gum Surgery"],
      time: "60-90 mins",
      popular: false,
      color: "bg-[#fbf7e3]",
    },

    // ⭐ NEW SERVICES BELOW
    {
      icon: Landmark,
      title: "Orthodontics (Braces & Aligners)",
      desc: "Straighten teeth with metal braces or invisible aligners.",
      features: ["Metal Braces", "Clear Aligners", "Retainers"],
      time: "Months-based",
      popular: true,
      color: "bg-[#e8f0ff]",
    },
    {
      icon: SmilePlus,
      title: "Smile Makeover",
      desc: "Complete design and transformation of your smile.",
      features: ["Design Preview", "Veneers", "Whitening"],
      time: "2–4 Visits",
      popular: true,
      color: "bg-[#fff0f0]",
    },
    {
      icon: Award,
      title: "Full Mouth Rehabilitation",
      desc: "Restore full function + aesthetics with advanced dentistry.",
      features: ["Implants", "Crowns", "Bridges"],
      time: "2–6 Months",
      popular: true,
      color: "bg-[#f3f9f1]",
    },
    {
      icon: HeartPulse,
      title: "Pediatric Dentistry",
      desc: "Gentle and fun dental care designed for kids.",
      features: ["Sealants", "Checkups", "Fluoride"],
      time: "20–40 mins",
      popular: true,
      color: "bg-[#fdf3e7]",
    },
    {
      icon: Scan,
      title: "Oral Surgery",
      desc: "Safe removal of wisdom teeth, cysts, and oral procedures.",
      features: ["Wisdom Tooth Removal", "Biopsy", "Minor Surgery"],
      time: "30–90 mins",
      popular: false,
      color: "bg-[#eef6ff]",
    },
    {
      icon: Clock,
      title: "Emergency Dentistry",
      desc: "Immediate relief for pain, swelling, and trauma.",
      features: ["Pain Relief", "Broken Tooth Fix", "Swelling Control"],
      time: "15–45 mins",
      popular: true,
      color: "bg-[#ffeee3]",
    },
  ];

  const detailedSections = [
    {
      title: "Cosmetic Dentistry",
      image:
        "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Enhance your smile's aesthetics with our advanced cosmetic treatments, designed to improve color, shape, and overall appearance.",
      points: [
        "Digital Smile Design & Consultation",
        "Porcelain Veneers for Flawless Looks",
        "Composite Bonding for Minor Corrections",
        "Laser Teeth Whitening for Brightness",
        "Gum Contouring & Reshaping",
      ],
      stats: "95% Smiles Improved | 500+ Cases",
    },
    {
      title: "Dental Implants",
      image:
        "https://images.pexels.com/photos/3845621/pexels-photo-3845621.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Restore missing teeth with durable, natural-looking implants that function and feel just like your own.",
      points: [
        "Titanium Post Placement (Surgical)",
        "Osseointegration Monitoring",
        "Custom Crown Fabrication",
        "Bone Grafting (if needed)",
        "Lifetime Durability & Comfort",
      ],
      stats: "98% Success Rate | 20+ Years Longevity",
    },
    {
      title: "Painless Root Canal",
      image:
        "https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Save your natural tooth with our advanced, painless root canal therapy using rotary instruments and digital imaging.",
      points: [
        "Digital Diagnosis & X-Ray Analysis",
        "Deep Infection Removal",
        "Rotary Cleaning for Precision",
        "Biocompatible Filling & Sealing",
        "Protective Crown Placement",
      ],
      stats: "90% Tooth Retention | Pain-Free Procedure",
    },
    {
      title: "Teeth Cleaning & Whitening",
      image:
        "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Maintain oral hygiene and brighten your smile with our professional cleaning and whitening services.",
      points: [
        "Plaque & Tartar Removal (Scaling)",
        "Ultrasonic Cleaning Technology",
        "Air Polishing for Stain Removal",
        "Fluoride Treatment for Protection",
        "Clinical LED Teeth Whitening",
      ],
      stats: "Fresh Breath | Whiter Smile",
    },
    {
      title: "Preventive Dentistry",
      image:
        "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Proactive care to maintain healthy teeth and gums, preventing future dental issues before they arise.",
      points: [
        "Comprehensive Oral Exams",
        "Digital X-Rays & Diagnostics",
        "Oral Cancer Screening",
        "Dental Sealants for Cavity Prevention",
        "Fluoride Application & Advice",
      ],
      stats: "Early Detection | Long-Term Health",
    },
    {
      title: "Gum Disease Treatment",
      image:
        "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Treat gum inflammation and periodontal disease to restore the foundation of your oral health.",
      points: [
        "Deep Cleaning (Scaling & Root Planing)",
        "Laser Gum Therapy",
        "Pocket Reduction Procedures",
        "Antibiotic Treatment",
        "Periodontal Maintenance Plans",
      ],
      stats: "Healthy Gums | Halt Bone Loss",
    },
    {
      title: "Orthodontics (Braces & Aligners)",
      image:
        "https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Achieve a perfectly aligned smile with our range of orthodontic solutions for children and adults.",
      points: [
        "Traditional Metal Braces",
        "Ceramic (Clear) Braces",
        "Invisalign / Clear Aligners",
        "Custom Retainers",
        "Jaw Alignment Correction",
      ],
      stats: "Perfect Alignment | Correct Bite",
    },
    {
      title: "Smile Makeover",
      image:
        "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "A comprehensive approach to transforming your smile, combining multiple cosmetic procedures for stunning results.",
      points: [
        "Personalized Consultation & Planning",
        "3D Smile Simulation",
        "Veneers & Crowns Integration",
        "Teeth Whitening & Brightening",
        "Gum Reshaping & Contouring",
      ],
      stats: "Life-Changing Results | Boosted Confidence",
    },
    {
      title: "Full Mouth Rehabilitation",
      image:
        "https://images.pexels.com/photos/3845621/pexels-photo-3845621.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Restore full function and aesthetics to your mouth with a customized plan for complex dental needs.",
      points: [
        "Comprehensive Treatment Planning",
        "Implant-Supported Dentures",
        "Full Arch Bridges & Crowns",
        "Bite Reconstruction",
        "TMJ & Jaw Therapy",
      ],
      stats: "Total Function | Aesthetic Restoration",
    },
    {
      title: "Pediatric Dentistry",
      image:
        "https://images.pexels.com/photos/6627902/pexels-photo-6627902.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Specialized, gentle dental care for children in a fun and safe environment.",
      points: [
        "First Dental Visit & Acclimatization",
        "Oral Habit Counseling (Thumb Sucking)",
        "Cavity Prevention & Sealants",
        "Fluoride Varnish Application",
        "Painless Fillings & Extractions",
      ],
      stats: "Child-Friendly | Anxiety-Free",
    },
    {
      title: "Oral Surgery",
      image:
        "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Expert surgical procedures for wisdom teeth, extractions, and other complex oral conditions.",
      points: [
        "Wisdom Tooth Extraction",
        "Impacted Tooth Exposure",
        "Dental Bone Grafts",
        "Soft Tissue Biopsy",
        "Pre-Prosthetic Surgery",
      ],
      stats: "Safe | Effective | Quick Recovery",
    },
    {
      title: "Emergency Dentistry",
      image:
        "https://images.pexels.com/photos/3845626/pexels-photo-3845626.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Immediate dental care for accidents, severe pain, or sudden dental issues.",
      points: [
        "Acute Toothache Relief",
        "Broken or Chipped Tooth Repair",
        "Knocked-Out Tooth Management",
        "Lost Filling or Crown Replacement",
        "Abscess & Infection Treatment",
      ],
      stats: "24/7 Availability | Immediate Relief",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Patients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: ShieldCheck },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const Modal = () =>
    openModal && selectedService ? (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors"
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="p-8 border-b border-border">
            <h2 className="text-3xl font-bold mb-3 text-black">
              {selectedService.title}
            </h2>
            <p className="text-black/60 font-medium">
              {selectedService.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-64 overflow-hidden relative">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-6 text-white font-bold drop-shadow-md">
              {selectedService.stats && (
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>{selectedService.stats}</span>
                </div>
              )}
            </div>
          </div>

          {/* POINTS */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50">
            {selectedService.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#fbf7e3] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                  <BadgeCheck className="w-3.5 h-3.5 text-black" />
                </div>
                <p className="text-black/80 font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border-t border-border flex justify-end">
            <Button
              onClick={() => setOpenModal(false)}
              className="bg-black text-white hover:bg-black/80 rounded-full px-6"
            >
              Close Details
            </Button>
          </div>
        </div>
      </div>
    ) : null;

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     treatment: "Smile Makeover",
  //     text: "After years of hiding my smile, the cosmetic dentistry transformed my confidence. The digital preview showed exactly what to expect, and the results were even better!",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Chen",
  //     treatment: "Dental Implants",
  //     text: "The implant process was seamless and virtually painless. The team explained every step, and now I can eat anything without worry. Life-changing experience!",
  //     rating: 5,
  //   },
  //   {
  //     name: "The Rodriguez Family",
  //     treatment: "Family Dentistry",
  //     text: "From our toddler's first visit to grandma's dentures, this practice handles all our family's needs with exceptional care and professionalism.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Chen",
  //     treatment: "Dental Implants",
  //     text: "The implant process was seamless and virtually painless. The team explained every step, and now I can eat anything without worry. Life-changing experience!",
  //     rating: 5,
  //   },
  //   {
  //     name: "The Rodriguez Family",
  //     treatment: "Family Dentistry",
  //     text: "From our toddler's first visit to grandma's dentures, this practice handles all our family's needs with exceptional care and professionalism.",
  //     rating: 5,
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Modal />
      {/* ENHANCED HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto bg-[#dbe0ff] rounded-[2.5rem] px-6 py-16 md:py-24 relative overflow-hidden text-center text-black">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/40 rounded-full blur-[140px] opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/40 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-sm font-bold">
                Comprehensive Dental Care
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Exceptional <span className="text-black/60">Dental Care</span> for
              Your Family
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto text-black/70 leading-relaxed mb-10 font-medium"
            >
              Experience gentle, modern, and personalized care with treatments
              designed to make your smile brighter, healthier, and more
              confident. Your journey to optimal oral health starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="bg-black text-white hover:bg-black/80 px-8 py-6 rounded-full text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105">
                Book Appointment Now
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black/10 text-black hover:bg-black hover:text-white px-8 py-6 rounded-full text-lg font-bold transition-all duration-300 bg-transparent"
              >
                Call Us Today
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 border-y border-border/30 overflow-hidden">
        {/* EXACT SAME GRID BACKGROUND AS CORE VALUES */}
        <div
          className="absolute inset-0 opacity-5 text-tx-1 pointer-events-none -z-10"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#e3f2ed] rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENHANCED MAIN SERVICES */}
      <section className="px-6 md:px-16 py-20 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our{" "}
            <span className="text-muted-foreground">
              Comprehensive Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From routine cleanings to advanced restorative procedures, we offer
            complete dental care for every stage of life.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                onClick={() => {
                  const match = detailedSections.find(
                    (d) => d.title === service.title
                  );
                  if (match) {
                    setSelectedService(match);
                    setOpenModal(true);
                  }
                }}
                className={`${service.color} cursor-pointer rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden border-0`}
              >
                <CardContent className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-sm bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-black/80 font-medium">
                      <Clock className="w-3 h-3" />
                      {service.time}
                    </div>
                  </div>

                  <div className="space-y-4 grow">
                    <h3 className="text-2xl font-bold text-black">
                      {service.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed font-medium">
                      {service.desc}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                            <BadgeCheck className="w-3 h-3 text-black shrink-0" />
                          </div>
                          <span className="text-black/80 font-semibold">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-black/80 border border-transparent mt-4 py-6 rounded-xl font-bold transition-all duration-300 group shadow-md">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENHANCED DETAILED SECTIONS */}

      {/* TESTIMONIALS SECTION */}
      <div>
        {" "}
        <TestimonialsLight />
      </div>

      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 border-t border-border/30 overflow-hidden bg-black text-white">
        {/* EXACT SAME GRID BACKGROUND AS CORE VALUES */}
        <div
          className="absolute inset-0 opacity-20 text-white pointer-events-none -z-10"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book your comprehensive dental consultation today and receive a
            complimentary teeth whitening kit with your first appointment. Your
            journey to a healthier, more confident smile starts with one click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105">
              Book Your Appointment
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full text-lg font-bold transition-all duration-300 bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: +91 77420 36693
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-7PM | Sat: 9AM-4PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Malot Dental Clinic, Udaipur, India</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Emergency Appointments Available</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
