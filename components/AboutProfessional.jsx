"use client"

import { useState } from "react"
import { Info, Star, CalendarCheck, Timer, ShieldCheck, Package } from "lucide-react"

const aboutPoints = [
  {
    icon: Info,
    title: "18+ Years of Experience",
    hasTooltip: true,
    tooltipContent: {
      subtitle: "Designing Dreams Since 2007",
      description:
        "With over 18 years of experience, we’ve delivered thousands of residential and commercial projects, blending creativity with functionality.",
      expectations: [
        "Established in 2007",
        "End-to-end interior & exterior solutions",
        "From concept to completion",
        "Expertise in apartments, villas, offices",
        "Solid reputation for innovation & quality"
      ],
      footer:
        "We reflect your personality, lifestyle, and vision in every design we deliver."
    }
  },
  {
    icon: Star,
    title: "Premium Materials",
    hasTooltip: true,
    tooltipContent: {
      subtitle: "Built to Last, Designed to Impress",
      description:
        "We use only top-quality, branded materials to ensure durability, elegance, and performance.",
      expectations: [
        "Durable branded plywood & laminates",
        "Moisture/scratch-resistant epoxy surfaces",
        "Soft-close hardware & branded fittings",
        "Quartz, marble, granite, tile options",
        "Eco-friendly material options",
        "Luxurious & sustainable finishes"
      ],
      footer: "Because exceptional design deserves exceptional materials."
    }
  },
  {
    icon: CalendarCheck,
    title: "Vision 2007–2050",
    hasTooltip: true,
    tooltipContent: {
      subtitle: "Expansion • Innovation • Global Reach",
      description:
        "From client-centric design to global recognition—our journey reflects consistent growth.",
      expectations: [
        "2007–2024: Hundreds of successful projects",
        "2025–2035: Smart homes, metro expansion, R&D, training",
        "2035–2050: International projects, AI tools, branded modular furniture"
      ],
      footer: "We’re not just designing for today—we're building the future of interiors."
    }
  },
  {
    icon: Timer,
    title: "45-Day Completion",
    hasTooltip: true,
    tooltipContent: {
      subtitle: "Time-Bound. Quality-Assured.",
      description:
        "We are committed to completing your project within 45 working days while maintaining craftsmanship.",
      expectations: [
        "Subject to: design changes, structural issues, permits",
        "Timely updates throughout the process",
        "Custom material handling and order delays"
      ],
      footer:
        "Transparent communication ensures a stress-free, on-time experience."
    }
  },
  {
    icon: ShieldCheck,
    title: "10 Years Support*",
    hasTooltip: true,
    tooltipContent: {
      subtitle: "Long-Term Peace of Mind",
      description:
        "We offer up to 10 years of dedicated service support to keep your interiors flawless.",
      expectations: [
        "Free service visits for minor fixes",
        "Warranty support for hardware/fittings",
        "Material performance checks",
        "Guidance on upkeep",
        "Quick-response interior assistance"
      ],
      footer: "*T&C Apply. For covered components only."
    }
  },
  {
    icon: Package,
    title: "75+ Projects",
    hasTooltip: false
  }
]

const AboutProfessional = () => {
  return (
    <div className="bg-black text-white py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-500">Why Choose Vinayak Interio?</span>
        </h2>
      </div>

      {/* Points */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {aboutPoints.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative group w-36 sm:w-40"
          >
            <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-yellow-500/50 bg-transparent cursor-pointer">
              <step.icon className="w-8 h-8" />
            </div>
            <div className="text-sm leading-tight mb-2">{step.title}</div>

            {/* Tooltip */}
            {step.hasTooltip && (
              <div className="absolute z-30 hidden group-hover:block left-full top-1/2 transform -translate-y-1/2 ml-4 w-80 text-left bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl">
                <div className="text-yellow-500 font-semibold text-sm mb-2">
                  {step.tooltipContent.subtitle}
                </div>
                {step.tooltipContent.description && (
                  <div className="text-gray-300 text-xs mb-3 leading-relaxed">
                    {step.tooltipContent.description}
                  </div>
                )}
                {step.tooltipContent.expectations?.length > 0 && (
                  <div className="text-xs mb-3">
                    <div className="text-white font-medium mb-2">What to expect:</div>
                    {step.tooltipContent.expectations.map((exp, idx) => (
                      <div key={idx} className="flex items-start mb-1 text-gray-300">
                        <span className="text-green-400 mr-2">✅</span>
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                )}
                {step.tooltipContent.footer && (
                  <div className="text-gray-400 text-xs italic">
                    {step.tooltipContent.footer}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutProfessional
