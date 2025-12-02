"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-8 bg-background">
      <div className="max-w-[1600px] mx-auto bg-cream rounded-[2.5rem] px-6 py-12 sm:p-16 lg:p-20 text-black overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT SECTION — IMAGE + LOCATION */}
          {/* LEFT SECTION — IMAGE + LOCATION */}
          <div className="space-y-8 flex flex-col items-start">
            {/* Image Container */}
            <div className="space-y-8 flex flex-col items-start">
              {/* Image Container */}
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-transform mx-auto">
                <a
                  href="https://www.google.com/maps?q=1st+Floor,+24-C+Sohan+Bhawan,+Opp.+Madhuvan+Head+Post+Office,+Chetak+Circle,+Udaipur+313001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Chetak-circle.png"
                    alt="Clinic Location Map"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — CONTACT + MENU */}
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
                  <span>
                    1st Floor, 24-C Sohan Bhawan, Opp. Madhuvan Head Post
                    Office, Chetak Circle, Udaipur 313001
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Menu</h3>
              <ul className="space-y-4 text-black/70 font-medium">
                <li>
                  <Link href="/" className="hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
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
