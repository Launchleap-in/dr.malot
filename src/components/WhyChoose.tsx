"use client";
import { AnimatedCard } from "./ui/animated-card";
import {
  ShieldCheck,
  SmilePlus,
  HeartHandshake,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Advanced Safety",
      desc: "We maintain stringent sterilization protocols ensuring a secure environment.",
      color: "bg-mint", // Mint
    },
    {
      icon: SmilePlus,
      title: "Expertise",
      desc: "Over 15 years of specialized experience in delivering precise dental treatments.",
      color: "bg-lavender", // Lavender
    },
    {
      icon: HeartHandshake,
      title: "Patient Centric",
      desc: "We prioritize patient comfort and satisfaction, providing personalized care.",
      color: "bg-cream", // Cream
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] p-6 sm:p-12 lg:p-20 text-black overflow-hidden border border-border/50">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint rounded-full text-sm font-bold mb-8 text-black">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Your Smile,
              <br />
              Our Passion
            </h2>
            <p className="text-black/60 leading-relaxed mb-8">
              We deliver comprehensive dental care with a commitment to clinical
              excellence, patient safety, and professional service standards.
            </p>
            <Button
              variant={"default"}
              className="border border-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors mb-8 lg:mb-0"
            >
              <a href="/about">Learn More</a>
            </Button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.1}
                hoverEffect={true}
                className={`${item.color} h-full`}
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
