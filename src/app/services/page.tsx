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
  Star,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function FullServicePage() {
  const mainServices = [
    {
      icon: SmilePlus,
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with advanced cosmetic treatments designed to enhance aesthetics and confidence.",
      features: [
        "Digital Smile Design",
        "Laser Teeth Whitening",
        "Veneers & Lumineers",
      ],
      time: "30-90 mins",
      popular: true,
    },
    {
      icon: Stethoscope,
      title: "Dental Implants",
      desc: "Permanent, natural-looking replacements for missing teeth using advanced implant technology.",
      features: ["Titanium Implants", "Same Day Options", "Bone Grafting"],
      time: "60-120 mins",
      popular: true,
    },
    {
      icon: Syringe,
      title: "Painless Root Canal",
      desc: "Modern rotary tools allow fast, precise, and nearly painless root canal treatment.",
      features: ["Rotary Endodontics", "Digital Anesthesia", "3D Imaging"],
      time: "45-90 mins",
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Teeth Cleaning & Whitening",
      desc: "Professional cleaning to remove stains + safe clinic-grade whitening for a brighter smile.",
      features: ["Ultrasonic Cleaning", "Air Polishing", "LED Whitening"],
      time: "45-60 mins",
      popular: true,
    },
    {
      icon: ShieldCheck,
      title: "Preventive Dentistry",
      desc: "Routine checkups, fluoride, sealants, and preventive solutions for lifelong oral health.",
      features: [
        "Digital X-Rays",
        "Oral Cancer Screening",
        "Custom Mouthguards",
      ],
      time: "30-60 mins",
      popular: false,
    },
    {
      icon: HeartPulse,
      title: "Gum Disease Treatment",
      desc: "Advanced periodontal care for bleeding gums, infection control, and long-term gum health.",
      features: ["Laser Therapy", "Deep Scaling", "Periodontal Surgery"],
      time: "60-90 mins",
      popular: false,
    },
  ];

  const detailedSections = [
    {
      title: "Cosmetic Dentistry",
      icon: SmilePlus,
      image:
        " https://images.unsplash.com/photo-1684607633080-df59e6874367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29zbWV0aWMlMjBEZW50aXN0cnl8ZW58MHx8MHx8fDA%3D",
      points: [
        "Smile Makeovers - Complete smile transformation using digital planning",
        "Porcelain Veneers - Custom-crafted thin shells bonded to front teeth",
        "Composite Bonding - Tooth-colored resin to repair chips and gaps",
        "Teeth Whitening - Professional-grade bleaching for 8+ shades brighter",
        "Digital Smile Design - Preview your new smile with advanced 3D imaging",
        "Gum Contouring - Reshape gum line for balanced, symmetrical smile",
      ],
      description:
        "Our cosmetic dentistry services combine artistic excellence with cutting-edge technology to create stunning, natural-looking smiles...",
      stats: "95% Patient Satisfaction | 500+ Smiles Transformed",
    },
    {
      title: "Restorative Dentistry",
      icon: Landmark,
      image:
        "https://plus.unsplash.com/premium_photo-1702598544413-12567f383896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVzdG9yYXRpdmUlMjBEZW50aXN0cnl8ZW58MHx8MHx8fDA%3D",
      points: [
        "Dental Crowns - Full coverage restorations for severely damaged teeth",
        "Bridges - Fixed solutions to replace missing teeth",
        "Tooth-colored Fillings - Mercury-free composite",
        "Inlays & Onlays - Indirect restorations",
        "Dentures - Custom-crafted removable replacements",
        "Full Mouth Rehabilitation - Complete restoration of function & aesthetics",
      ],
      description:
        "Restore your teeth to their natural strength, function, and beauty...",
      stats: "10-Year Warranty Available | Same-Day Crowns",
    },
    {
      title: "Advanced Dentistry",
      icon: Scan,
      image:
        "https://plus.unsplash.com/premium_photo-1723795298280-da877324ebfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGVkaWF0cmljJTIwRGVudGlzdHJ5fGVufDB8fDB8fHww",
      points: [
        "Digital X-Rays - 90% less radiation",
        "Rotary Endodontics - Faster root canal treatment",
        "Laser Dentistry - Minimally invasive procedures",
        "3D Imaging & Scans - CBCT technology",
        "Intraoral Cameras - Real-time visualization",
        "Sleep Dentistry - Comfortable options for anxious patients",
      ],
      description:
        "Experience the future of dental care with our advanced technology suite...",
      stats: "Latest Technology | Reduced Treatment Time",
    },
    {
      title: "Preventive Care",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1758205307912-5896ff0c65ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      points: [
        "Comprehensive Oral Exams",
        "Scaling & Polishing",
        "Dental Sealants",
        "Fluoride Treatments",
        "Athletic Mouthguards",
        "Oral Hygiene Education",
      ],
      description: "Prevention is the foundation of lifelong dental health...",
      stats: "40% Fewer Cavities | Early Problem Detection",
    },
    {
      title: "Pediatric Dentistry",
      icon: HeartPulse,
      image:
        "https://plus.unsplash.com/premium_photo-1723795298280-da877324ebfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGVkaWF0cmljJTIwRGVudGlzdHJ5fGVufDB8fDB8fHww",
      points: [
        "Child-Friendly Checkups",
        "Fluoride Varnish",
        "Habit Counseling",
        "Protective Sealants",
        "Emergency Dental Care",
        "Growth & Development Monitoring",
      ],
      description:
        "We create positive dental experiences that set the stage for lifelong oral health...",
      stats: "Specialized Pediatric Training | Fun, Educational Visits",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Patients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Smile Makeover",
      text: "After years of hiding my smile, the cosmetic dentistry transformed my confidence. The digital preview showed exactly what to expect, and the results were even better!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      treatment: "Dental Implants",
      text: "The implant process was seamless and virtually painless. The team explained every step, and now I can eat anything without worry. Life-changing experience!",
      rating: 5,
    },
    {
      name: "The Rodriguez Family",
      treatment: "Family Dentistry",
      text: "From our toddler's first visit to grandma's dentures, this practice handles all our family's needs with exceptional care and professionalism.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-1 text-tx-1 overflow-x-hidden">
      {/* ENHANCED HERO SECTION */}
      <section className="px-6 md:px-16 py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-bg-2 rounded-full blur-[140px] opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-bg-2 rounded-full blur-[120px] opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-bg-2/50 px-4 py-2 rounded-full mb-6 border border-border">
            <Sparkles className="w-4 h-4 text-ic" />
            <span className="text-sm font-medium">
              Comprehensive Dental Care
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Exceptional <span className="text-tx-2">Dental Care</span> for Your
            Family
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-tx-2 leading-relaxed mb-10"
          >
            Experience gentle, modern, and personalized care with treatments
            designed to make your smile brighter, healthier, and more confident.
            Your journey to optimal oral health starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-tx-1 text-bg-1 hover:bg-tx-2 px-8 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Book Appointment Now
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-tx-1 text-tx-1 hover:bg-tx-1 hover:text-bg-1 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Call Us Today
              <Phone className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 bg-bg-2/30 backdrop-blur-sm border-y border-border/30 overflow-hidden">
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
                <div className="w-12 h-12 bg-bg-2 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-ic" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-tx-1">
                {stat.number}
              </div>
              <div className="text-tx-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENHANCED MAIN SERVICES */}
      <section className="px-6 md:px-16 py-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-tx-2">Comprehensive Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-tx-2 max-w-3xl mx-auto"
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
                  <div className="bg-tx-1 text-bg-1 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <Card className="bg-card border-2 border-border rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-bg-2 rounded-2xl flex items-center justify-center shadow-md">
                      <service.icon className="w-8 h-8 text-ic" />
                    </div>
                    <div className="text-sm bg-bg-2/50 px-3 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.time}
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-tx-2 leading-relaxed">{service.desc}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <BadgeCheck className="w-4 h-4 text-ic flex-shrink-0" />
                          <span className="text-tx-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-bg-2 text-tx-1 hover:bg-bg-2/80 border border-border mt-4 py-6 rounded-xl font-semibold transition-all duration-300 group">
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
      <section className="px-6 md:px-16 py-20 space-y-32 min-h-screen bg-bg-1 relative">
        {detailedSections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Image — swap sides based on index with enhanced hover effects */}
            <motion.div
              className={`${
                i % 2 === 1 ? "md:order-last" : ""
              } flex justify-center`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-4 left-4 flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-bg-1/70 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <section.icon className="w-6 h-6 text-bg-1" />
                  </div>
                  <div className="text-bg-1">
                    <div className="text-sm font-semibold">{section.title}</div>
                    <div className="text-xs opacity-80">{section.stats}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text — also swaps based on index with staggered animations */}
            <motion.div
              className={`${i % 2 === 1 ? "md:order-first" : ""} space-y-6`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  className="inline-flex items-center gap-2 bg-bg-2/50 px-4 py-2 rounded-full mb-4 shadow-md"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Award className="w-4 h-4 text-ic" />
                  <span className="text-sm font-semibold">{section.stats}</span>
                </motion.div>
              </div>

              <motion.p
                className="text-lg text-tx-2 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {section.description}
              </motion.p>

              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {section.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-3 items-start group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-6 h-6 bg-bg-2 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-ic/20 transition-all duration-200 shadow-sm">
                      <BadgeCheck className="w-3 h-3 text-ic" />
                    </div>
                    <span className="text-tx-1 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Button className="bg-tx-1 text-bg-1 hover:bg-tx-2 px-6 py-4 rounded-xl font-semibold mt-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Explore {section.title}
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 bg-bg-2/30 backdrop-blur-sm border-y border-border/30 overflow-hidden">
        {/* EXACT SAME GRID BACKGROUND AS CORE VALUES */}
        <div
          className="absolute inset-0 opacity-5 text-tx-1 pointer-events-none -z-10"
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
          <div className="inline-flex items-center gap-2 bg-bg-2/50 px-4 py-2 rounded-full mb-6 border border-border">
            <Sparkles className="w-4 h-4 text-ic" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>

          <p className="text-xl text-tx-2 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book your comprehensive dental consultation today and receive a
            complimentary teeth whitening kit with your first appointment. Your
            journey to a healthier, more confident smile starts with one click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-tx-1 text-bg-1 hover:bg-tx-2 px-8 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Book Your Appointment
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-tx-1 text-tx-1 hover:bg-tx-1 hover:text-bg-1 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: (555) 123-4567
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-tx-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-7PM | Sat: 9AM-4PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Dental Street, Care City</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Emergency Appointments Available</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="px-6 md:px-16 py-20 bg-bg-2/20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-tx-2">Patients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-tx-2 max-w-3xl mx-auto"
          >
            Don&lsquo;t just take our word for it - hear from our satisfied
            patients about their experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-tx-2 leading-relaxed flex-grow italic">
                    &#34;{testimonial.text}&quot;
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-tx-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-tx-2">
                      {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENHANCED CTA SECTION */}
    </div>
  );
}
