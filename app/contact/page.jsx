"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const ContactPage = () => {
  const router = useRouter()
  const officeAddress = "Roy Chowdhury House, 43/H/19/56, Chaulpatty Rd, Kulia, Beleghata, Kolkata, West Bengal 700010"
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(officeAddress)}`

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Header Section */}
      <div className="relative w-full h-[60vh]">
        <Image src="/image/contact-bg.jpg" alt="Interior Design" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Your perfect space</h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-center">is just a contact away</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-2xl md:text-xl font-bold text-center mb-16"
        >
          Let's bring your dream space to life. Whether you're starting from scratch or looking to refresh your space,
          we're here to help.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Google Map */}
          <motion.div initial="offscreen" whileInView={"onscreen"} variants={desVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Find Us On Map</h3>
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Vinayak Interio Office"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-12">
            {/* Get in Touch */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  <p className="text-lg">+91 6289042957</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  <p className="text-lg">vinayakinterio1@gmail.com</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Studio Address</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-lg">B/43/H/19/73, A. S. N Sarani, Beleghata, Kolkata-700010, West Bengal, India</p>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <div className="space-y-2 text-lg">
                <div className="flex justify-between">
                  <span>Monday–Friday:</span>
                  <span>10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/message/A5C4GDLREM33G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/vinayak_interio22?igsh=MWFkdDd1aHh1dHJmNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-6 w-6" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/vinayakinterio?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://x.com/vinayak_interio?t=P9oZE1krgQLaCtOxaedZZw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span>Twitter</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default ContactPage
