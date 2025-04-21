"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

// Importing icons from react-icons
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black dark:bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:grid lg:grid-cols-2 text-white">
        <div className="grid gap-4 text-left lg:pb-0 lg:grid-cols-3 w-full">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">About Us</Link>
              <Link href="/" className="py-1 hover:underline">Press</Link>
              <Link href="/" className="py-1 hover:underline">Projects</Link>
              <Link href="/" className="py-1 hover:underline">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Development</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">Documentation</Link>
              <Link href="/" className="py-1 hover:underline">Reference</Link>
              <Link href="/" className="py-1 hover:underline">Change Log</Link>
              <Link href="/" className="py-1 hover:underline">Status</Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              {/* Social Media Links with Icons */}
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/vinayak_interio22?igsh=MWFkdDd1aHh1dHJmNQ==" className="text-white hover:text-gray-400">
                  <FaInstagram size={24} />
                </Link>
                <Link href="https://www.facebook.com/vinayakinterio?mibextid=ZbWKwL" className="text-white hover:text-gray-400">
                  <FaFacebookF size={24} />
                </Link>
                <Link href="https://x.com/vinayak_interio?t=P9oZE1krgQLaCtOxaedZZw&s=09" className="text-white hover:text-gray-400">
                  <FaTwitter size={24} />
                </Link>
                <Link href="https://youtube.com/@vinayakinterio?si=QlHxCZhptvaaGPol" className="text-white hover:text-gray-400">
                  <FaYoutube size={24} />
                </Link>
                <Link href="https://pin.it/5jEbmmd24" className="text-white hover:text-gray-400">
                  <FaPinterest size={24} />
                </Link>
              </div>
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
            <Link className="p-4 hover:underline" href='/'>Privacy</Link>
            <Link className="p-4 hover:underline" href='/'>Terms</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
