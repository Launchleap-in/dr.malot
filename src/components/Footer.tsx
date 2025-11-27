"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-2 text-tx-1 pt-20 pb-10 px-6 md:px-16 border-t border-border">
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        {/* BRAND INFO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Dr. Malot Dental Clinic
          </h2>
          <p className="text-tx-2 leading-relaxed">
            Providing painless, modern, and compassionate dental care with 15+
            years of expertise in creating confident smiles.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="#"
              className="p-2 rounded-full bg-bg-1 border border-border hover:-translate-y-1 transition shadow-sm"
            >
              <Facebook className="w-5 h-5 text-ic" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-bg-1 border border-border hover:-translate-y-1 transition shadow-sm"
            >
              <Instagram className="w-5 h-5 text-ic" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-bg-1 border border-border hover:-translate-y-1 transition shadow-sm"
            >
              <Youtube className="w-5 h-5 text-ic" />
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-tx-2">
            <li>
              <Link href="/" className="hover:text-tx-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-tx-1">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-tx-1">
                Services
              </Link>
            </li>
            <li>
              <Link href="/why-choose-us" className="hover:text-tx-1">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-tx-1">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3 text-tx-2">
            <li>Cosmetic Dentistry</li>
            <li>Teeth Cleaning</li>
            <li>Root Canal Treatment</li>
            <li>Dental Implants</li>
            <li>Gum Treatments</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

          <ul className="space-y-5 text-tx-2">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-ic mt-1" />
              <span>+91 77420 36693</span>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-ic mt-1" />
              <span>drmalotdentalclinic@gmail.com</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-ic mt-1" />
              <span>
                Malot Dental Clinic,
                <br />
                Udaipur, India
                {/* Ring Road, Near Central Mall, */}
                <br />
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-border pt-6 text-center text-tx-2 text-sm">
        © {new Date().getFullYear()} Dr. Malot Dental Clinic. All rights
        reserved.
      </div>
    </footer>
  );
}
