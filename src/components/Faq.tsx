"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Is dental treatment painful?",
      a: "With modern anesthesia and equipment, most procedures are nearly painless. Patients generally feel only mild discomfort.",
    },
    {
      q: "How often should I visit the dentist?",
      a: "A checkup every 6 months is ideal to maintain oral health and catch issues early.",
    },
    {
      q: "Do you provide emergency dental care?",
      a: "Yes, we offer same-day appointments for pain, bleeding, fractures, and urgent dental issues.",
    },
    {
      q: "Is teeth whitening safe?",
      a: "Professional whitening at a dental clinic is completely safe and far more effective than at-home kits.",
    },
    {
      q: "How long does a root canal take?",
      a: "Most root canal procedures take 30–45 minutes with modern rotary technology and are painless.",
    },
    {
      q: "Do you offer painless injections?",
      a: "Yes. We use ultra-fine needles, topical gel, and slow-pressure delivery for a painless experience.",
    },
    {
      q: "Are dental X-rays safe?",
      a: "Digital X-rays have very low radiation exposure and are considered safe for adults and children.",
    },
    {
      q: "Do you treat kids?",
      a: "Yes, we are child-friendly and offer comfortable treatments tailored for young patients.",
    },
    {
      q: "What payment options do you accept?",
      a: "We accept UPI, cards, net banking, EMI options, and all major digital payments.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can book online, call us directly, or schedule through our reception desk.",
    },
  ];

  return (
    <section className="relative px-6 md:px-16 py-28 bg-bg-1 text-tx-1 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-24 left-16 w-[420px] h-[420px] rounded-full bg-bg-2 blur-[150px] opacity-35"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-bg-2 blur-[130px] opacity-25"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 relative z-[2]"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Frequently Asked <span className="text-tx-2">Questions</span>
        </h2>

        <p className="text-tx-2 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know to feel prepared, comfortable and
          confident about your dental care.
        </p>
      </motion.div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto relative z-[2]">
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="
                border border-border rounded-2xl bg-card 
                shadow-md transition-all
                hover:shadow-lg
              "
            >
              <AccordionTrigger
                className="
                  px-6 py-5 text-left text-lg font-semibold text-tx-1 
                  hover:text-tx-2 flex items-center gap-3
                "
              >
                <HelpCircle className="w-5 h-5 text-ic" />
                {item.q}
              </AccordionTrigger>

              <AccordionContent
                className="
                  px-6 pb-6 pt-0 text-tx-2 
                  leading-relaxed text-base
                "
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
