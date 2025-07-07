"use client"

import { motion } from "framer-motion"
import Badge from "./Badge"

const titleVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}

const CompanySection = () => {
  return (
    <main className="container mx-auto px-4 py-10 sm:py-12">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 leading-snug">
        WHY CHOOSE US?
      </h2>

      {/* Features */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-8"
      >
        <Badge 
        title="PERSONALIZED" 
        subtitle="Designs"
        tooltip="Tailored to reflect your unique style and preferences"
        highlight
        />
        <Badge 
        title="DETAILED" 
        subtitle="Quotation"
        tooltip="No hidden costs—clear breakdown of every expense"
        highlight />
        <Badge 
        title="TRANSPARENT" 
        subtitle="Pricing"
        tooltip="Upfront and honest pricing with complete clarity" 
        highlight
        />
        <Badge
          title="EXPERIENCED & SKILLED"
          subtitle="Workers"
          tooltip="Craftsmanship delivered by trained professionals"
          highlight
        />
        <Badge
          title="PERFECT"
          subtitle="Finishing"
          tooltip="Impeccable attention to detail in every corner"
          highlight
        />
        <Badge
          title="ON-TIME"
          subtitle="Handover"
          tooltip="We value your time—projects delivered as promised"
          highlight
        />
      </motion.div>
    </main>
  )
}

export default CompanySection
