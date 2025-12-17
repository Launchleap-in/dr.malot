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
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=60",
      description:
        "Cosmetic dentistry enhances your smile using advanced techniques and artistic precision.",
      points: [
        "Smile Makeovers",
        "Porcelain Veneers",
        "Composite Bonding",
        "Laser Whitening",
        "Digital Smile Design",
      ],
      stats: "95% Smiles Improved | 500+ Cases",
    },
    {
      title: "Dental Implants",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f4950d2c5c?auto=format&fit=crop&w=1200&q=60",
      description:
        "Dental implants are permanent, durable, and natural-looking replacements for missing teeth.",
      points: [
        "Titanium Implants",
        "Same-Day Implants",
        "Bone Grafting",
        "3D Guided Surgery",
        "Implant Bridges",
      ],
      stats: "98% Success Rate | 20+ Years Longevity",
    },
    {
      title: "Painless Root Canal",
      image:
        "https://images.unsplash.com/photo-1629904853893-c2c8984d4aab?auto=format&fit=crop&w=1200&q=60",
      description:
        "Modern rotary technology and digital anesthesia make RCT smooth, accurate, and nearly painless.",
      points: [
        "Digital Anesthesia",
        "Rotary Endodontics",
        "Single-Sitting RCT",
        "Post & Core",
      ],
      stats: "90% Faster Recovery | Zero Pain",
    },
    {
      title: "Teeth Cleaning & Whitening",
      image:
        "https://images.unsplash.com/photo-1598257006462-9f1e8700f02c?auto=format&fit=crop&w=1200&q=60",
      description:
        "Clinic-grade teeth whitening combined with deep cleaning for instant brightness.",
      points: [
        "Air Polishing",
        "Ultrasonic Scaling",
        "LED Whitening",
        "Stain Removal",
      ],
      stats: "Up to 8 Shades Whiter | Instant Results",
    },
    {
      title: "Preventive Dentistry",
      image:
        "https://images.unsplash.com/photo-1629904987451-df190da5ead8?auto=format&fit=crop&w=1200&q=60",
      description:
        "Preventive dentistry focuses on avoiding dental problems before they develop.",
      points: [
        "Digital X-Rays",
        "Oral Cancer Screening",
        "Sealants",
        "Fluoride Protection",
      ],
      stats: "40% Fewer Cavities | Early Detection",
    },
    {
      title: "Gum Disease Treatment",
      image:
        "https://images.unsplash.com/photo-1629904854019-639a6f807682?auto=format&fit=crop&w=1200&q=60",
      description:
        "Restore gum health and stop bleeding or infection with advanced periodontal care.",
      points: [
        "Laser Gum Therapy",
        "Deep Cleaning",
        "Periodontal Surgery",
        "Pocket Reduction",
      ],
      stats: "Health Restored | Bleeding Gone",
    },

    // ⭐ NEW DETAILED SERVICES
    {
      title: "Orthodontics (Braces & Aligners)",
      image:
        "https://images.unsplash.com/photo-1606811971618-9e3e5a83ad13?auto=format&fit=crop&w=1200&q=60",
      description:
        "Straighten teeth and enhance bite alignment with braces or invisible clear aligners.",
      points: [
        "Metal Braces",
        "Ceramic Braces",
        "Clear Aligners",
        "Retainers",
        "Growth Guidance",
      ],
      stats: "Perfect Alignment | Customized Treatment",
    },
    {
      title: "Smile Makeover",
      image:
        "https://images.unsplash.com/photo-1552558636-9d50c72c7f59?auto=format&fit=crop&w=1200&q=60",
      description:
        "A full smile transformation with veneers, whitening, bonding, and advanced planning.",
      points: [
        "Digital Smile Design",
        "Veneers",
        "Whitening",
        "Gum Contouring",
      ],
      stats: "Premium Smile Design | Celebrity-Level Results",
    },
    {
      title: "Full Mouth Rehabilitation",
      image:
        "https://images.unsplash.com/photo-1629904854100-cdea5ed1fc5a?auto=format&fit=crop&w=1200&q=60",
      description:
        "A complete reconstruction of all teeth to restore chewing, bite, and aesthetics.",
      points: [
        "Implants",
        "Crowns & Bridges",
        "Bite Correction",
        "Jaw Alignment",
      ],
      stats: "Total Restoration | Multi-Stage Precision",
    },
    {
      title: "Pediatric Dentistry",
      image:
        "https://images.unsplash.com/photo-1606811971749-522d7c44c46f?auto=format&fit=crop&w=1200&q=60",
      description:
        "Gentle, friendly, and fun care that helps children feel comfortable.",
      points: [
        "Kids Checkups",
        "Cavity Prevention",
        "Sealants",
        "Fluoride Therapy",
      ],
      stats: "Kid-Friendly Clinic | Zero Anxiety",
    },
    {
      title: "Oral Surgery",
      image:
        "https://images.unsplash.com/photo-1629909615342-17c3ad8d1f84?auto=format&fit=crop&w=1200&q=60",
      description:
        "Safe and advanced surgical care for wisdom teeth, cysts, and oral conditions.",
      points: [
        "Wisdom Tooth Removal",
        "Biopsy",
        "Cyst Removal",
        "Minor Surgeries",
      ],
      stats: "Safe Procedures | Fast Recovery",
    },
    {
      title: "Emergency Dentistry",
      image:
        "https://images.unsplash.com/photo-1629904854019-639a6f807682?auto=format&fit=crop&w=1200&q=60",
      description:
        "Immediate care for dental swelling, pain, bleeding, and trauma.",
      points: [
        "Immediate Pain Relief",
        "Broken Tooth Fix",
        "Infection Control",
        "Swelling Management",
      ],
      stats: "24/7 Support | Fast Relief",
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
        <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl overflow-hidden relative">
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl"
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
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-80 object-cover"
          />

          {/* POINTS */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedService.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-6 h-6 bg-[#fbf7e3] rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-3 h-3 text-black" />
                </div>
                <p className="text-black/80 font-medium">{point}</p>
              </div>
            ))}
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

                  <div className="space-y-4 flex-grow">
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
                            <BadgeCheck className="w-3 h-3 text-black flex-shrink-0" />
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
