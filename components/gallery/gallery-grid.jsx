"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import ImageViewer from "./image-viewer"
import { motion } from "framer-motion"
import { desVariants } from "@/utils/animation"

const galleryImages = [
  {
    id: 1,
    src: "/image/gal1.jpg",
    alt: "Bedroom with modern design",
    category: " Bedroom ",
  },
  {
    id: 2,
    src: "/image/gal2.jpg",
    alt: "Modern, sculptural dining space blending organic elements with futuristic design",
    category: " Dinning Space ",
  },
  {
    id: 3,
    src: "/image/gal3.jpg",
    alt: "Bedroom with modern design",
    category: " Bedroom ",
  },
  {
    id: 4,
    src: "/image/gal4.jpg",
    alt: "Modern living room with sofa",
    category: " Living Room ",
  },
  {
    id: 5,
    src: "/image/gal5.jpg",
    alt: "A stylish sitting area with cozy, curved chairs and soft neutral tones",
    category: " Sitting Area ",
  },
  {
    id: 6,
    src: "/image/gal6.jpg",
    alt: "A contemporary living room featuring a sleek sofa, minimalist decor",
    category: " Living Room ",
  },
  {
    id: 7,
    src: "/image/gal7.jpg",
    alt: "Modern living space with plants",
    category: " Living Room ",
  },
  {
    id: 8,
    src: "/image/bathroomcat.jpg",
    alt: "A modern bathroom with clean lines, elegant fixtures, and a soothing, spa-like ambiance.",
    category: " Bathroom ",
  },
  {
    id: 9,
    src: "/image/gal9.jpg",
    alt: "A stylish sitting area with curved chairs and soft neutral tones",
    category: " Sitting Area ",
  },
  {
    id: 10,
    src: "/image/gal10.jpg",
    alt: "A minimal and focused office/study space with clean lines, ample lighting, and an organized setup for productivity.",
    category: " Office/ Study Space",
  },
  {
    id: 11,
    src: "/image/kitcat.jpg",
    alt: "A vibrant green kitchen with earthy tones, natural finishes, and a fresh, eco-inspired design.",
    category: " Kitchen ",
  },
  {
    id: 12,
    src: "/image/livingroom.jpg",
    alt: "An aesthetic living room with curated decor, soft neutrals, and a harmonious blend of textures for a calm, stylish vibe.",
    category: " Living Room ",
  },
  {
    id: 13,
    src: "/image/gal13.jpeg",
    alt: "A modern kitchen with sleek drawers, smart storage solutions, and a clean, functional layout.",
    category: " Kitchen ",
  },
  {
    id: 14,
    src: "/image/gal14.jpeg",
    alt: "A serene bathroom featuring a sleek bathtub, soft lighting, and modern finishes for a luxurious, spa-like retreat.",
    category: " Bathroom ",
  },
  {
    id: 15,
    src: "/image/gal16.jpeg",
    alt: "A cozy bedroom with an integrated study nook, blending comfort and functionality in a serene, well-lit setting.",
    category: " Bedroom ",
  },
  {
    id: 16,
    src: "/image/gal15.jpeg",
    alt: "A vibrant green kitchen with earthy tones, natural finishes, and a fresh, eco-inspired design.",
    category: " Kitchen ",
  },
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImage = (id) => {
    setSelectedImage(id)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={desVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="relative group overflow-hidden rounded-lg">
            <div className="aspect-square relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <button
                  onClick={() => openImage(image.id)}
                  className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="View full image"
                >
                  <Maximize2 className="h-5 w-5 text-gray-800" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium">{image.category}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {selectedImage !== null && (
        <ImageViewer
          images={galleryImages}
          currentIndex={galleryImages.findIndex((img) => img.id === selectedImage)}
          onClose={closeImage}
        />
      )}
    </>
  )
}
