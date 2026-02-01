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
  Hospital,
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
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      description:
        "Transform your smile with our comprehensive cosmetic dentistry solutions. We combine artistry with advanced dental technology to create natural-looking, beautiful smiles. Our cosmetic treatments address discoloration, misalignment, gaps, chips, and other aesthetic concerns. Each treatment plan is personalized to match your facial features, skin tone, and personal preferences. Using state-of-the-art digital smile design technology, we can preview your new smile before any procedure begins, ensuring you're completely satisfied with the planned results.",
      points: [
        "Digital Smile Design & Virtual Preview - See your new smile before treatment",
        "Premium Porcelain Veneers - Ultra-thin, natural-looking ceramic shells",
        "Composite Bonding - Quick fixes for chips, gaps, and minor imperfections",
        "Professional Laser Teeth Whitening - Safe brightening up to 8 shades",
        "Gum Contouring & Reshaping - Create balanced, symmetrical gum lines",
      ],
      stats: "95% Patient Satisfaction | 500+ Successful Smile Transformations",
    },
    {
      title: "Dental Implants",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      description:
        "Experience the gold standard in tooth replacement with dental implants. Our implants are made from medical-grade titanium that naturally fuses with your jawbone, providing a permanent, stable foundation for replacement teeth. Unlike dentures or bridges, implants preserve your jawbone density and prevent facial structure changes. They look, feel, and function exactly like natural teeth, allowing you to eat, speak, and smile with complete confidence. Our experienced implantologists use 3D imaging and computer-guided surgery for precise placement with minimal discomfort and faster healing.",
      points: [
        "Premium Titanium Implant Posts - Biocompatible, corrosion-resistant material",
        "3D CT Scan Planning - Precise positioning for optimal results",
        "Minimally Invasive Surgery - Advanced techniques for faster recovery",
        "Custom Ceramic Crowns - Hand-crafted to match your natural teeth perfectly",
        "Bone Grafting Solutions - Rebuild bone density when needed",
      ],
      stats:
        "98% Success Rate | 25+ Years Average Lifespan | 1000+ Implants Placed",
    },
    {
      title: "Painless Root Canal",
      image:
        "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vdCUyMGNhbmFsfGVufDB8fDB8fHww",
      description:
        "Save your natural tooth with our advanced, completely painless root canal therapy. Gone are the days of painful, lengthy procedures. We use state-of-the-art rotary endodontic systems that clean and shape root canals more efficiently than traditional methods. Digital anesthesia delivery systems ensure you feel no discomfort during treatment. Our microscope-assisted approach allows us to see inside the tooth canal system with precision, ensuring complete infection removal. Most treatments are completed in a single visit, and you can return to your normal activities immediately after.",
      points: [
        "Digital X-Ray Diagnosis - Pinpoint infection with 90% less radiation",
        "Advanced Rotary Instrumentation - Faster, more thorough cleaning",
        "Microscope-Enhanced Precision - See and treat even the tiniest canals",
        "Biocompatible Gutta-Percha Filling - Natural rubber sealing material",
        "Same-Day Ceramic Crown Option - Complete restoration in one visit",
      ],
      stats:
        "95% Tooth Salvation Rate | Pain-Free Experience | Single Visit Possible",
    },
    {
      title: "Teeth Cleaning & Whitening",
      image:
        "https://images.unsplash.com/photo-1581584731241-c134a1afe9a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVldGglMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Maintain optimal oral health and achieve a radiant smile with our professional cleaning and whitening services. Regular deep cleaning removes hardened plaque (tartar) that home brushing cannot eliminate, preventing gum disease and cavities. Our ultrasonic scaling technology makes the process comfortable and highly effective. Following cleaning, our advanced LED-activated whitening system can brighten your teeth up to 6-8 shades in just one hour. Unlike over-the-counter products, our professional treatments are safe for enamel and provide longer-lasting results without sensitivity.",
      points: [
        "Ultrasonic Scaling Technology - Gentle removal of tartar and plaque buildup",
        "Air Polishing System - Remove surface stains from coffee, tea, and tobacco",
        "Sub-gingival Deep Cleaning - Reach below gum line for thorough hygiene",
        "Fluoride Varnish Treatment - Strengthen enamel and prevent decay",
        "Clinical LED Teeth Whitening - Professional-grade brightening in 60 minutes",
      ],
      stats:
        "Fresh Breath Guaranteed | Whiter Smile in One Session | 6-Month Protection",
    },
    {
      title: "Preventive Dentistry",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      description:
        "Prevention is the cornerstone of excellent dental health. Our comprehensive preventive program focuses on early detection and intervention to avoid costly, painful dental problems in the future. Through regular check-ups, we monitor your oral health, screen for oral cancer, assess gum condition, and identify cavities before they become serious. We use low-radiation digital X-rays to see problems invisible to the naked eye. Our preventive treatments include dental sealants that protect molars from decay, fluoride applications that strengthen enamel, and personalized oral hygiene education to help you maintain your smile between visits.",
      points: [
        "Comprehensive Oral Health Examination - Complete assessment every 6 months",
        "Digital X-Rays with 90% Less Radiation - Safe, detailed imaging technology",
        "Oral Cancer Screening - Early detection saves lives",
        "Dental Sealants for Children & Adults - Shield vulnerable chewing surfaces",
        "Customized Home Care Plans - Personalized brushing and flossing guidance",
      ],
      stats:
        "Early Problem Detection | Reduce Treatment Costs by 60% | Lifelong Healthy Teeth",
    },
    {
      title: "Gum Disease Treatment",
      image:
        "https://images.unsplash.com/photo-1660732205525-eb180e4d29f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VtJTIwZGlzZWFzZXxlbnwwfHwwfHx8MA%3D%3D  ",
      description:
        "Combat periodontal disease with our advanced gum therapy treatments. Gum disease affects nearly 50% of adults and is the leading cause of tooth loss, yet it's completely preventable and treatable. We offer non-surgical treatments like scaling and root planing to remove bacteria below the gum line, as well as cutting-edge laser therapy that targets infection while promoting tissue regeneration. Our laser treatment is virtually painless, requires no scalpels or sutures, and has minimal recovery time. For advanced cases, we provide surgical options including gum grafts and pocket reduction procedures to restore your gum health and protect your teeth.",
      points: [
        "Deep Scaling & Root Planing - Remove bacteria from below gum line",
        "Laser Periodontal Therapy (LANAP) - Painless, minimally invasive treatment",
        "Pocket Reduction Surgery - Eliminate deep bacterial hiding spots",
        "Antibiotic Therapy - Target resistant infections effectively",
        "Ongoing Periodontal Maintenance - Prevent disease recurrence",
      ],
      stats:
        "Stop Gum Recession | Prevent Tooth Loss | Restore Pink, Healthy Gums",
    },
    {
      title: "Orthodontics (Braces & Aligners)",
      image:
        "https://images.unsplash.com/photo-1720685193964-4529228a33c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3J0aG9kb250aWNzfGVufDB8fDB8fHww",
      description:
        "Achieve perfectly aligned teeth and a confident smile with our comprehensive orthodontic solutions. Whether you prefer traditional metal braces, discreet ceramic braces, or virtually invisible clear aligners, we have the right option for you. Straight teeth aren't just about appearance—proper alignment improves bite function, reduces jaw pain, prevents premature tooth wear, and makes cleaning easier. We treat patients of all ages, from children getting early intervention to adults finally achieving the smile they've always wanted. Our digital treatment planning shows you the expected results before you begin, and regular progress monitoring ensures you stay on track.",
      points: [
        "Traditional Metal Braces - Proven, effective for complex cases",
        "Ceramic (Clear) Braces - Tooth-colored brackets for subtle appearance",
        "Invisalign Clear Aligners - Removable, nearly invisible option",
        "Custom Retainers - Maintain your beautiful new alignment",
        "Bite Correction & TMJ Relief - Address functional jaw problems",
      ],
      stats:
        "Perfect Alignment Achieved | Correct Overbite/Underbite | 12-24 Month Average Treatment",
    },
    {
      title: "Smile Makeover",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      description:
        "Experience a complete smile transformation with our comprehensive smile makeover service. This customized treatment combines multiple cosmetic procedures—veneers, crowns, whitening, bonding, and gum reshaping—to address all aspects of your smile aesthetics. We start with a detailed consultation to understand your goals and concerns. Using advanced 3D digital smile design technology, we create a virtual preview of your new smile, allowing you to see and approve the results before any treatment begins. Our artistic approach considers your facial proportions, skin tone, personality, and preferences to create a natural-looking smile that enhances your unique beauty.",
      points: [
        "Personalized Smile Consultation - Discuss your vision and concerns",
        "3D Digital Smile Simulation - Preview your transformation before treatment",
        "Multi-Procedure Coordination - Combine veneers, crowns, whitening seamlessly",
        "Color & Shape Customization - Match your natural features perfectly",
        "Gum Line Refinement - Frame your teeth beautifully",
      ],
      stats:
        "Life-Changing Confidence Boost | 95% Patient Satisfaction | Hollywood Smile Results",
    },
    {
      title: "Full Mouth Rehabilitation",
      image:
        "https://images.unsplash.com/photo-1655807946138-811bb2340d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVsbCUyME1vdXRoJTIwUmVoYWJpbGl0YXRpb258ZW58MHx8MHx8fDA%3D",
      description:
        "Restore complete oral function and aesthetics with full mouth rehabilitation. This comprehensive treatment is designed for patients with extensive dental damage from decay, trauma, worn teeth, or severe gum disease. We rebuild your entire bite using a combination of dental implants, crowns, bridges, and dentures, customized to your specific needs. The process begins with detailed diagnosis including 3D scans, bite analysis, and jaw relationship assessment. We develop a phased treatment plan that addresses both functional problems (chewing, speaking, jaw pain) and aesthetic concerns. The result is a fully functional, beautiful smile that dramatically improves your quality of life.",
      points: [
        "Comprehensive Diagnosis & Planning - 3D imaging and bite analysis",
        "Implant-Supported Full Arch Restoration - Permanent, stable teeth",
        "Custom Bridges & Crowns - Natural-looking, long-lasting restorations",
        "Bite Reconstruction - Restore proper jaw alignment and function",
        "TMJ Disorder Treatment - Eliminate jaw pain and clicking",
      ],
      stats:
        "Complete Oral Function Restored | Eat Anything Confidently | 10-20 Year Longevity",
    },
    {
      title: "Pediatric Dentistry",
      image:
        "https://plus.unsplash.com/premium_photo-1681966964991-c91687dc735f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlZGlhdHJpYyUyMGRlbnRpc3R8ZW58MHx8MHx8fDA%3D",
      description:
        "Give your child the gift of lifelong dental health with our specialized pediatric dentistry services. We create a warm, friendly, anxiety-free environment where children feel comfortable and safe. Our pediatric dentists are specially trained to handle the unique dental needs of growing smiles, from teething babies to teenagers. We focus on prevention through education, teaching children proper brushing and flossing techniques in fun, engaging ways. Early dental visits help children develop positive associations with dental care, preventing anxiety later in life. We provide gentle treatments for cavities, protective sealants, fluoride applications, and guidance on thumb-sucking and pacifier habits.",
      points: [
        "Child-Friendly Environment - Colorful, welcoming clinic design",
        "Gentle First Visit Experience - Build trust and comfort gradually",
        "Habit Counseling - Address thumb-sucking, bottle-feeding issues",
        "Cavity Prevention Program - Sealants and fluoride protection",
        "Painless Pediatric Treatments - Specialized gentle techniques",
      ],
      stats:
        "Anxiety-Free Visits | 99% Cavity Prevention Success | Happy, Healthy Smiles",
    },
    {
      title: "Oral Surgery",
      image:
        "https://plus.unsplash.com/premium_photo-1677174625096-b22c9bfdabd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Receive expert surgical care for complex dental conditions requiring extraction or oral procedures. Our oral surgeons are highly trained specialists who perform everything from routine wisdom tooth removal to complex jaw surgery. We use the latest surgical techniques including minimally invasive approaches that reduce discomfort and speed healing. Sedation options ensure you remain comfortable throughout your procedure. Wisdom tooth extraction is our most common surgery—impacted wisdom teeth can cause pain, infection, and damage to neighboring teeth if not removed. We also perform pre-prosthetic surgery to prepare your mouth for dentures or implants, remove cysts and tumors, and perform biopsies for diagnostic purposes.",
      points: [
        "Wisdom Tooth Extraction - Remove impacted or problematic third molars",
        "Complex Tooth Extractions - Handle difficult cases safely",
        "Dental Bone Grafting - Rebuild jaw bone for implant placement",
        "Soft Tissue Biopsy - Diagnose oral lesions and abnormalities",
        "Pre-Prosthetic Surgery - Reshape jaw for better denture fit",
      ],
      stats:
        "Minimally Invasive Techniques | Quick Recovery | Safe Sedation Options",
    },
    {
      title: "Emergency Dentistry",
      image:
        "https://images.unsplash.com/photo-1653508310729-7d6d2e2fd6c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEVtZXJnZW5jeSUyMERlbnRpc3RyeXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Get immediate relief from dental emergencies with our 24/7 emergency dental services. Dental emergencies can happen anytime—severe toothaches, knocked-out teeth, broken crowns, abscessed teeth, or facial trauma. Prompt treatment is crucial to save teeth, prevent infection, and relieve pain. Our emergency team is always on call to provide immediate care when you need it most. We prioritize emergency patients and often provide same-day appointments. Our goal is to stabilize your condition, eliminate pain, and prevent further damage, with follow-up treatment scheduled as needed. Don't suffer in pain—call us immediately for any dental emergency.",
      points: [
        "24/7 Emergency Hotline - Always available when you need help",
        "Same-Day Emergency Appointments - Fast access to care",
        "Severe Toothache Relief - Eliminate pain quickly and effectively",
        "Knocked-Out Tooth Re-implantation - Time-sensitive tooth saving",
        "Abscess & Infection Control - Prevent serious complications",
      ],
      stats: "24/7 Availability | Immediate Pain Relief | Save Your Tooth",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Patients", icon: Users },
    { number: "15+", label: "Years  Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: ShieldCheck },
    { number: "43+", label: "Total Camps", icon: Hospital },

    { number: "15+", label: "specialist doctors", icon: ShieldCheck },

    { number: "1500+", label: "dental implants", icon: SmilePlus },

    // { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const Modal = () =>
    openModal && selectedService ? (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 md:p-6 overflow-y-auto"
        onClick={() => setOpenModal(false)}
      >
        <div
          className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 my-4 sm:my-8 max-h-[95vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 hover:bg-white text-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-semibold transition-all hover:scale-110 shadow-lg z-10 backdrop-blur-sm"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-4 sm:pb-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black leading-tight pr-10 sm:pr-12">
              {selectedService.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {selectedService.description}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden relative">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Stats Badge */}
            {selectedService.stats && (
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg inline-flex items-center gap-2 sm:gap-2.5 max-w-full">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                    {selectedService.stats}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* POINTS SECTION */}
          <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 bg-gray-50/50">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-5 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-black rounded-full"></div>
              What We Offer
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
              {selectedService.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-50 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-white border-t border-gray-100">
            <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Need help? Contact us for consultation</span>
              </div>

              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto sm:ml-auto">
                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 sm:flex-none px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-xs sm:text-sm font-medium transition-all"
                >
                  Close
                </button>
                <a
                  href="/contact#ContactForm"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 bg-black text-white hover:bg-gray-900 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    (d) => d.title === service.title,
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
              <span>Mon-Sat: 9:30AM-8PM </span>
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
