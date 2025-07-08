"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import CatalogueSection from "@/components/CatalogueSection"
import Link from "next/link"
import { TbArrowUpRight } from "react-icons/tb"
import {
  DoorOpen,
  Navigation,
  PaintBucket,
  Layers,
  Droplets,
  Lightbulb,
  Sparkles,
  Home,
  Building2,
  Armchair,
  Church,
  Wrench,
  Hammer,
  Gem,
  Wind,
  Sofa,
  Trophy,
  ImageIcon,
} from "lucide-react"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"

const Projectpage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const additionalServices = [
    
    {
      icon: DoorOpen,
      title: "Elegant Entryway",
      description: "Stunning first impressions for your home",
    },
    {
      icon: Navigation,
      title: "Corridors",
      description: "Functional and beautiful hallway designs",
    },
    {
      icon: Layers,
      title: "Wall Panelling",
      description: "Premium wall treatments and textures",
    },
    {
      icon: Home,
      title: "Flooring",
      description: "Quality flooring solutions for every space",
    },
    {
      icon: PaintBucket,
      title: "Painting",
      description: "Professional painting and color consultation",
    },
    {
      icon: Droplets,
      title: "Damp Proofing",
      description: "Moisture protection and waterproofing",
    },
    {
      icon: Layers,
      title: "False Ceiling",
      description: "Decorative ceiling designs and installations",
    },
    {
      icon: Lightbulb,
      title: "Lights and Accessories",
      description: "Lighting design and decorative elements",
    },
    {
      icon: Building2,
      title: "Commercial Space",
      description: "Professional office and retail space design",
    },
    {
      icon: Armchair,
      title: "Sitting Area",
      description: "Comfortable and stylish seating arrangements",
    },
    {
      icon: Church,
      title: "Temple",
      description: "Sacred space design with traditional elements",
    },
    {
      icon: Wrench,
      title: "Sanitary Items",
      description: "Premium bathroom fixtures and fittings",
    },
    {
      icon: Hammer,
      title: "Metal Crafting",
      description: "Custom metalwork and decorative elements",
    },
    {
      icon: Gem,
      title: "Decorative Artifacts",
      description: "Unique art pieces and decorative items",
    },
    {
      icon: Wind,
      title: "Curtain & Blinds",
      description: "Window treatments and privacy solutions",
    },
    {
      icon: Sofa,
      title: "Sofa & Cushion",
      description: "Custom upholstery and comfort solutions",
    },
    {
      icon: Trophy,
      title: "Showpieces",
      description: "Display solutions and decorative showcases",
    },
    {
      icon: ImageIcon,
      title: "Wall Papers",
      description: "Premium wallpaper installation and design",
    },
  ]

  const containerVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
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

      <CatalogueSection />

      {/* Additionally We Do Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8 gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
              <Sparkles className="w-6 h-6 text-white/80" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Additionally We Do</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive interior solutions to transform every corner of your space
            </p>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-xl bg-white/10 w-fit group-hover:bg-white/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="offscreen" whileInView="onscreen" variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-400 text-lg">Ready to transform your space with our comprehensive services?</p>
          </motion.div>
        </div>
        <div className="py-12 flex justify-center">
        <Link href="https://wa.me/message/A5C4GDLREM33G1">
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
      </div>

      

      {/* Contact Buttons */}
      <Sidebar />
    </div>
  )
}

export default Projectpage
