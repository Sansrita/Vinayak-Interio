"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TbArrowUpRight } from "react-icons/tb"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const images = ["/image/hero1.jpg", "/image/gal4.jpg", "/image/gal13.jpeg", "/image/gal14.jpeg"]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  }

  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between font-cambria">
      {/* Left Section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8 pl-8 pr-32">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-5"
        >
          An Interior That Reflects You
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="pb-6 xl:pb-10 text-gray-500 hover:text-white hover:font-bold transition-colors duration-200"
        >
          Transform your home into a masterpiece of comfort and style with Vinayak Interio—where creativity meets
          craftsmanship, perfectly tailored to your budget.
        </motion.p>

        <motion.div initial="offscreen" whileInView={"onscreen"} variants={tagVariants}>
          <Link href="https://wa.me/message/A5C4GDLREM33G1">
            <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 relative hidden lg:block">
        <div className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                width={800}
                height={500}
                alt={`Interior design ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-xl"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-4 right-20 xl:right-32 lg:right-24 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
