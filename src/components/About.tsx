/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Sparkles,
  Award,
  Users,
  Clock,
  Target,
} from "lucide-react";

export default function AboutClinic() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: ShieldCheck,
      text: "15+ years of trusted professional experience",
    },
    {
      icon: Stethoscope,
      text: "Advanced digital dentistry equipment",
    },
    {
      icon: HeartPulse,
      text: "Painless, comfortable treatment methods",
    },
    {
      icon: Sparkles,
      text: "Highest hygiene & sterilization standards",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Care",
      desc: "Meticulous attention to every detail of your treatment",
    },
    {
      icon: HeartPulse,
      title: "Patient Comfort",
      desc: "Creating a relaxing, stress-free environment",
    },
    {
      icon: Users,
      title: "Personalized Service",
      desc: "Tailored solutions for your unique dental needs",
    },
    {
      icon: Clock,
      title: "Timely Treatment",
      desc: "Efficient care that respects your schedule",
    },
  ];

  const doctorQualifications = [
    "Specialist in painless dentistry techniques",
    "Personalized treatment planning for optimal results",
    "Certified in modern implantology and cosmetic procedures",
    "Warm, friendly & patient-focused care philosophy",
  ];

  return (
    <div className="min-h-screen bg-bg-1 text-tx-1">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.7s ease-out forwards;
        }
      `}</style>

      {/* ======= HERO ABOUT SECTION ======= */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28">
        {/* Elegant background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-bg-2/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-bg-2/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            {/* LEFT — TEXT */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-bg-2/40 backdrop-blur-sm px-5 py-2.5 rounded-full border border-border/30">
                <Award className="w-5 h-5 text-ic" />
                <span className="text-sm text-tx-1 font-semibold tracking-wide">
                  TRUSTED DENTAL EXCELLENCE
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  About <span className="text-tx-2">Dr. Malot</span>
                  <br />
                  <span className="text-tx-1">Dental Clinic</span>
                </h1>

                <div className="h-1 w-24 bg-tx-1 rounded-full" />
              </div>

              <p className="text-lg sm:text-xl text-tx-2 leading-relaxed max-w-2xl">
                Delivering compassionate, safe, and modern dental care with
                exceptional patient experience. Our clinic blends cutting-edge
                technology with precision to create a painless journey toward a
                healthier, brighter smile.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-bg-2/20 backdrop-blur-sm rounded-xl border border-border/20 hover:bg-bg-2/30 hover:border-border/40 transition-all duration-300 group opacity-0 animate-fadeInLeft"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <div className="p-2 bg-bg-2/40 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-ic" />
                    </div>
                    <span className="text-base sm:text-lg text-tx-2 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div
              className="relative opacity-0 animate-fadeInScale"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Elegant frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-bg-2/30 to-bg-2/10 rounded-3xl blur-2xl" />

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-bg-2/40">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern Dental Clinic Interior"
                    className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-1/30 to-transparent" />
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-tx-1/30 rounded-tr-2xl" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-tx-1/30 rounded-bl-2xl" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-card/98 backdrop-blur-md border-2 border-border/40 rounded-2xl p-5 shadow-2xl hover:scale-105 transition-transform duration-300 opacity-0 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-bg-2/60 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-ic" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-tx-1">Award Winner</p>
                    <p className="text-xs text-tx-2">Dental Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CORE VALUES SECTION ======= */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 bg-bg-2/30 backdrop-blur-sm border-y border-border/30">
        {/* decorative grid background (behind the cards) */}
        <div
          className="absolute inset-0 opacity-5 text-tx-1 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto ">
          <div
            data-animate
            id="values-title"
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tx-1 mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-tx-1 mx-auto rounded-full mb-4" />
            <p className="text-lg text-tx-2 max-w-2xl mx-auto">
              The principles that guide every aspect of our dental care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr items-stretch">
            {values.map((value, i) => (
              <div
                key={i}
                data-animate
                id={`value-${i}`}
                className="relative group"
              >
                <div className="h-full p-6 bg-bg-1/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-border/50 hover:bg-bg-1/70 transition-all duration-300 hover:scale-105">
                  <div className="mb-4 inline-flex p-3 bg-bg-2/40 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-ic" />
                  </div>
                  <h3 className="text-xl font-bold text-tx-1 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base text-tx-2 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= DOCTOR SECTION ======= */}
      <section className="relative px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-28 bg-bg-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* DOCTOR IMAGE */}
            <div
              data-animate
              id="doctor-img"
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-bg-2/30 to-bg-2/10 rounded-3xl blur-2xl" />

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-bg-2/40 group">
                  <img
                    src="/dr.png"
                    alt="Dr. Malot - Professional Dentist"
                    className="w-full h-[300px] sm:h-[300px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-1/30 to-transparent" />
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-tx-1/30 rounded-tl-2xl" />
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-tx-1/30 rounded-br-2xl" />
              </div>

              {/* Certification Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card/98 backdrop-blur-md border-2 border-border/40 rounded-2xl p-5 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-bg-2/60 p-3 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-ic" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-tx-1">Certified</p>
                    <p className="text-xs text-tx-2">Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DOCTOR TEXT */}
            <div
              data-animate
              id="doctor-text"
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Meet <span className="text-tx-2">Dr. Malot</span>
                </h2>
                <div className="h-1 w-20 bg-tx-1 rounded-full" />
              </div>

              <p className="text-lg sm:text-xl text-tx-2 leading-relaxed">
                A dedicated dental professional passionate about transforming
                smiles and enhancing oral health. With extensive expertise,
                gentle techniques, and unwavering commitment to patient comfort,
                Dr. Malot provides world-class treatments with a personalized,
                compassionate approach.
              </p>

              <div className="space-y-4 pt-4">
                {doctorQualifications.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-bg-2/20 backdrop-blur-sm rounded-xl border border-border/20 hover:bg-bg-2/30 hover:border-border/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-2 h-2 rounded-full bg-tx-1 mt-2 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-tx-2">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="group relative px-8 py-4 text-base font-semibold text-bg-1 bg-tx-1 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-tx-1/20 hover:scale-105">
                  <span className="relative z-10">Schedule Consultation</span>
                  <span className="absolute inset-0 bg-tx-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Schedule Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
