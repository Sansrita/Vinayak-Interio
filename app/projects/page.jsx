"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import CatalogueSection from "@/components/CatalogueSection"
import Link from "next/link"
import { TbArrowUpRight } from "react-icons/tb"
import { Phone, Mail } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const Projectpage = () => {
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Header Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/image/bed-contact.webp"
          alt="Interior Design"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Your Vision</h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-center">Our Custom Creation For Your Dream Home</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Contact The Best Home Interior Designers
        </motion.h2>
        <div className="px-8">
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            At the heart of every dream home is a unique vision — yours. We specialize in turning that vision into reality through thoughtful design and custom craftsmanship. From concept to completion, every detail is tailored to reflect your lifestyle, personality, and aspirations. Let us bring your dream to life, one custom touch at a time.
          </motion.p>
        </div>


      </div>
      <CatalogueSection />

      <div className="py-12 flex justify-center">
        <Link href="https://wa.me/message/A5C4GDLREM33G1">
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Contact Buttons */}
      <Sidebar />

    </div>
  )
}

export default Projectpage
