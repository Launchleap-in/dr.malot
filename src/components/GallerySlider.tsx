"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "./constant/slider";

export default function GalleryPage() {
  const cases = [
    {
      title: "Teeth Whitening",
      before: "https://images.pexels.com/photos/6627461/pexels-photo-6627461.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after: "https://images.pexels.com/photos/6627460/pexels-photo-6627460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Smile Makeover",
      before: "https://images.pexels.com/photos/5669019/pexels-photo-5669019.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after: "https://images.pexels.com/photos/5669020/pexels-photo-5669020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Veneers",
      before: "https://images.pexels.com/photos/6627455/pexels-photo-6627455.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after: "https://images.pexels.com/photos/6627457/pexels-photo-6627457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-background">
       <div className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-20 overflow-hidden border border-border/50">
          <div className="text-center mb-16">
             <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">Transformations</h2>
             <p className="text-black/60">Real results from real patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {cases.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-3xl p-4 pb-6"
                >
                   <div className="rounded-2xl overflow-hidden border border-border shadow-sm mb-4 bg-white">
                      <BeforeAfterSlider before={item.before} after={item.after} />
                   </div>
                   <h3 className="text-center font-bold text-lg text-black">{item.title}</h3>
                </motion.div>
             ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              View All Cases
            </button>
          </div>
       </div>
    </section>
  );
}
