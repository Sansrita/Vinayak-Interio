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
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        <a
          href="tel:+91 6289042957"
          className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-950 transition-colors"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/message/A5C4GDLREM33G1"
          className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="mailto:vinayakinterio1@gmail.com"
          className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-950 transition-colors"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>

    </div>
  )
}

export default Projectpage
