"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black dark:bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-6">

          {/* Company Links */}
          {/* Company Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-left"
          >
            <h2 className="text-xl font-semibold uppercase mb-2">Company</h2>
            <div className="flex flex-wrap justify-center gap-x-6">
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/projects" className="hover:underline">Our Projects</Link>
              <Link href="/gallery" className="hover:underline">Gallery</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </motion.div>

          {/* Connect + WhatsApp */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-left"
          >
            <h2 className="text-xl font-semibold uppercase mb-2">Connect</h2>
            <div className="flex flex-wrap justify-center gap-x-6">
            <Link href="https://www.instagram.com/vinayak_interio22" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.facebook.com/vinayakinterio" className="text-white hover:text-gray-400">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://x.com/vinayak_interio" className="text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://youtube.com/@vinayakinterio" className="text-white hover:text-gray-400">
              <FaYoutube size={20} />
            </Link>
            <Link href="https://pin.it/5jEbmmd24" className="text-white hover:text-gray-400">
              <FaPinterest size={20} />
            </Link>
            </div>
            {/* Social Icons */}
            

            {/* WhatsApp */}
            
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-left"
          >
            <h2 className="text-xl font-semibold uppercase mb-2">For any inquiry, DM us in</h2>
            <div className="flex flex-wrap justify-center gap-x-6">
            <Link href="https://wa.me/message/A5C4GDLREM33G1" className="text-white hover:text-gray-400">
              Whatsapp
            </Link>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Copyright */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="max-w-7xl mx-auto px-6 text-white text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2025 Vinayak Interio. All Rights Reserved</p>
          </div>
          <div>
            <Link className="p-4 hover:underline" href="/">Policies</Link>
            <Link className="p-4 hover:underline" href="/">Terms and Conditions</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
