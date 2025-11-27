"use client";
import { AnimatedCard } from "./ui/animated-card";
import { CalendarCheck, Star, Medal, Flag } from "lucide-react";

export default function OurJourney() {
  const steps = [
    { year: "2008", title: "Clinic Founded", icon: CalendarCheck },
    { year: "2014", title: "Tech Upgrade", icon: Star },
    { year: "2018", title: "10k Smiles", icon: Flag },
    { year: "2023", title: "Top Award", icon: Medal },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-lavender rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-black overflow-hidden">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">A Journey of Excellence</h2>
          <p className="text-black/60 max-w-2xl mx-auto">From humble beginnings to a leader in dental care.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.1}
              className="bg-white/40 backdrop-blur-sm p-6 text-center hover:bg-white/60 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <step.icon className="w-5 h-5 text-black" />
              </div>
              <div className="text-3xl font-bold mb-1">{step.year}</div>
              <div className="font-medium text-black/70">{step.title}</div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
}
