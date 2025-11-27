"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    { q: "Is treatment painful?", a: "Most procedures are nearly painless with modern anesthesia." },
    { q: "How often should I visit?", a: "Every 6 months is recommended for checkups." },
    { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans." },
    { q: "Can I book online?", a: "Yes, use the booking form in the footer!" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-[#e3f2ed] rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-black">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
           <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Common<br />Questions
              </h2>
              <p className="text-black/70 text-lg mb-8">
                Everything you need to know before your visit.
              </p>
           </div>

           <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm">
             <Accordion type="single" collapsible className="space-y-4">
               {faqs.map((item, i) => (
                 <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10 last:border-0 px-2">
                    <AccordionTrigger className="text-lg font-bold hover:no-underline hover:opacity-70 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-black/70 pb-4">
                      {item.a}
                    </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
        </div>
      </div>
    </section>
  );
}
