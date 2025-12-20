import AppointmentSection from "@/src/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

function page() {
  return (
    <div className="bg-background min-h-screen">
      {/* CONTACT HERO */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto bg-[#fbf7e3] rounded-[2.5rem] px-6 py-16 md:py-24 relative overflow-hidden text-center text-black">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-[100px] opacity-70 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e3f2ed]/40 blur-[100px] opacity-60 pointer-events-none"></div>

          <h1 className="relative z-10 text-5xl md:text-7xl font-bold mb-6">
            Get in <span className="text-black/60">Touch</span>
          </h1>

          <p className="relative z-10 text-black/70 text-xl max-w-2xl mx-auto mb-12 font-medium">
            We are here to help you with any questions or to schedule your next
            visit. Reach out to us today.
          </p>

          {/* Contact Info Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                text: ["+91 98284 23669", "+91 77420 36693"],
              },
              {
                icon: Mail,
                title: "Email Us",
                text: "drmalotdentalclinic@gmail.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                text: "Dr Malot Dental Clinic, Udaipur, India",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-3xl flex flex-col items-center gap-3 shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div className="text-black/70 font-medium text-center w-full overflow-hidden">
                  {/* CALL */}
                  {item.title === "Call Us" && Array.isArray(item.text) && (
                    <div className="flex flex-col gap-1 w-full">
                      {item.text.map((value, index) => (
                        <a
                          key={index}
                          href={`tel:${value.replace(/\s+/g, "")}`}
                          className="block w-full break-all hover:text-black"
                        >
                          {value}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* EMAIL */}
                  {item.title === "Email Us" &&
                    typeof item.text === "string" && (
                      <a
                        href={`mailto:${item.text}`}
                        className="block w-full break-all hover:text-black"
                      >
                        {item.text}
                      </a>
                    )}

                  {/* VISIT */}
                  {item.title === "Visit Us" &&
                    typeof item.text === "string" && (
                      <a
                        href="https://www.google.com/maps?q=Dr+Malot+Dental+Clinic,+Udaipur,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full break-words hover:text-black"
                      >
                        {item.text}
                      </a>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}

export default page;
