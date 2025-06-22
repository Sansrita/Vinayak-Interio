"use client"

import { useEffect, useRef } from "react"

const partners = [
  {
    name: "Asian Paints",
    logo: "https://seeklogo.com/images/A/asian-paints-logo-EAB2F07910-seeklogo.com.png",
    website: "https://www.asianpaints.com",
  },
  {
    name: "CenturyPly",
    logo: "https://images.seeklogo.com/logo-png/36/1/centuryply-logo-png_seeklogo-363952.png",
    website: "https://www.centuryply.com",
  },
  {
    name: "Greenply",
    logo: "https://images.seeklogo.com/logo-png/36/1/greenply-logo-png_seeklogo-366914.png",
    website: "https://www.greenply.com",
  },
  {
    name: "Advance Laminate",
    logo: "https://5.imimg.com/data5/SELLER/Default/2023/10/353006772/QZ/XY/CW/36187048/channels4-profile.jpg",
    website: "https://www.advancelaminate.com",
  },
  {
    name: "Ogaan Laminates",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgrdNEeXUDZFXrQ9sx4LTa2BWL7BdTdg2XA&s",
    website: "https://www.ogaanlaminates.com",
  },
  {
    name: "Virgolam Laminates",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmwfumEjdR8w272hB7RID1E38hg_a1FrW3w&s",
    website: "https://www.virgolam.com",
  },
  {
    name: "Jaquar",
    logo: "https://images.seeklogo.com/logo-png/29/1/jaguar-experience-bathing-logo-png_seeklogo-298158.png",
    website: "https://www.jaquar.com",
  },
  {
    name: "Saint-Gobain",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Saint-Gobain_logo.svg/2560px-Saint-Gobain_logo.svg.png",
    website: "https://www.saint-gobain.co.in",
  },
  {
    name: "KUKDO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotaLS8GhBmNcZFhMzd4C7BU1xGJDQAs1Fg&s",
    website: "https://www.kukdo.com",
  },
  {
    name: "Mescab",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0FJXD4Vk9d0OFp6r0WEJJpe7fC-LWXv6ug&s",
    website: "https://www.mescab.com",
  },
  {
    name: "RR Kabel",
    logo: "https://images.yourstory.com/cs/images/companies/RRKabel-1636986507946.png",
    website: "https://www.rrkabel.com",
  },
  {
    name: "Bosch India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRIJFjtvNOqZBART1CV_aF9cZdUHuv8wcwQ&s",
    website: "https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.webp",
  },
  {
    name: "Hettich India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_of_Hettich_%28company%29.svg",
    website: "https://www.hettich.com",
  },
  {
    name: "Ebco",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxufjXQA0vIf241vz6pKxKzwwTU45mbpjheg&s",
    website: "https://www.ebco.in",
  },
]

function Partners() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const speed = 1 // pixels per frame

    const animate = () => {
      scrollPosition += speed

      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="w-full py-16 bg-yellow-500">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">Our trusted partners</h2>
          <p className="text-lg text-white-600 mb-6">Winning collaborations that produce winning designs.</p>
          <p className="text-white-700 max-w-4xl mx-auto leading-relaxed">
            Vinayak Interio prides itself on fostering strategic partnerships with leading industry suppliers and
            manufacturers. These alliances enable us to source premium materials and cutting-edge solutions, ensuring
            the highest standards of quality and craftsmanship. Through these trusted collaborations, we consistently
            deliver meticulously executed interiors that exemplify innovation, durability, and refined aesthetics.
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden"
            style={{
              width: "calc(100% + 40px)",
              scrollBehavior: "auto",
            }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <a
                key={`first-${index}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <a
                key={`second-${index}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
