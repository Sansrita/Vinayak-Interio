"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "@/components/Sidebar"
import AboutProfessional from "@/components/AboutProfessional"
import { useState, useEffect } from "react"

const Page = () => {
  const imageUrl = "/image/whoweare.jpg"
  const router = useRouter()
  const officeAddress = "B/43/H/19/73, Ardehendu Sekhar Naskar Sarani, Beleghata, Kolkata-700010, West Bengal, India"
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(officeAddress)}`

  // Animation variants
  const titleVariants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  const desVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  // Carousel data
  const carouselData = [
    {
      id: 1,
      title: "India's Go-To for Budget-Friendly Design.",
      description: "Transforming your home with style and quality — without stretching your budget.",
    },
    {
      id: 2,
      title: "Shaping Exceptional Interiors with Expertise.",
      description:
        "We turn visions into reality through expert design, thoughtful detailing, and a commitment to excellence in every space we craft.",
    },
    {
      id: 3,
      title: "Where Mastery Shapes Every Space.",
      description:
        "Every detail is guided by skilled hands and a passion for perfection, bringing life to spaces with expert precision.",
    },
    {
      id: 4,
      title: "A Team That Transforms Vision into Reality.",
      description:
        "With expertise, creativity, and precision, our team brings your interior dreams to life—exactly as you imagined.",
    },
    {
      id: 5,
      title: "Punctual. Professional. Perfect.",
      description:
        "We combine timely delivery, expert professionalism, and flawless execution to bring your interiors to life.",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselData.length])

  // Animation variants for carousel
  const slideVariants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
    },
  }

  return (
    <div>
      {/* Banner Section with Carousel */}
      <div
        className="bg-center bg-cover bg-no-repeat min-h-[60vh] flex items-center justify-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Carousel Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl text-center"
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                {carouselData[currentSlide].title}
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {carouselData[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design.
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5 "
          >
            Our Interior design company is a company that provides interior design services for homes, offices,
            apartments and others. We provide the best interior design services for you. We have a team that is
            experienced in the field of interior.
          </motion.p>
        </div>
        <div className="items-center lg:flex gap-x-8 px-4 lg:px-20 xl:px-32 mb-12">
          {/* Left Image Section */}
          <div className="w-full pb-16 h-[500px] relative">
            <Image src="/image/about123.jpg" alt="img" fill className="object-cover rounded-xl" />
          </div>
          {/* Right Content Section */}
          <div>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Best Interior Design Company in Kolkata
            </motion.h2>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="space-y-4 text-white-700"
            >
              <p>
                Vinayak Interio started with commercial space and residential furnishing in 2017 at Kolkata, as its main
                office.
              </p>
              <p>
                Your space should tell your story. We craft interiors that mirror your personality, lifestyle, and taste
                — creating a home that feels authentically you in every detail.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <AboutProfessional />
      {/* Contact Buttons */}
      <Sidebar />
    </div>
  )
}

export default Page
