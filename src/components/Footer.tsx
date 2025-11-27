"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-cream rounded-[2.5rem] px-6 py-12 sm:p-16 lg:p-20 text-black overflow-hidden relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: CTA */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Book<br />Online
            </h2>
            
            <div className="max-w-sm space-y-6 pt-4">
              <div className="space-y-1 border-b border-black/10 pb-2">
                 <label className="text-xs uppercase font-bold tracking-wider opacity-50">Name</label>
                 <input type="text" placeholder="Your name" className="w-full bg-transparent border-none outline-none text-lg font-medium placeholder:text-black/30" />
              </div>
              <div className="space-y-1 border-b border-black/10 pb-2">
                 <label className="text-xs uppercase font-bold tracking-wider opacity-50">Phone</label>
                 <input type="text" placeholder="Your phone number" className="w-full bg-transparent border-none outline-none text-lg font-medium placeholder:text-black/30" />
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-bold mt-4 hover:scale-105 transition-transform">
                Send Request
              </button>
            </div>
          </div>

          {/* Right: Links & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
             
             <div className="space-y-8">
                <h3 className="text-2xl font-bold">Contact</h3>
                <ul className="space-y-4 text-black/70 font-medium">
                   <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5" />
                      <span>+91 77420 36693</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-0.5" />
                      <span>drmalotdentalclinic@gmail.com</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span>Malot Dental Clinic, Udaipur, India</span>
                   </li>
                </ul>
             </div>

             <div className="space-y-8">
                <h3 className="text-2xl font-bold">Menu</h3>
                <ul className="space-y-4 text-black/70 font-medium">
                   <li><Link href="/" className="hover:text-black">Home</Link></li>
                   <li><Link href="/about" className="hover:text-black">About</Link></li>
                   <li><Link href="/services" className="hover:text-black">Services</Link></li>
                   <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
                </ul>

                <div className="flex gap-4 pt-4">
                   <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
                   <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
                   <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Youtube className="w-5 h-5"/></a>
                </div>
             </div>

          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium opacity-50">
           <p>© {new Date().getFullYear()} Dr. Malot. All rights reserved.</p>
           <div className="flex gap-6">
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
}
