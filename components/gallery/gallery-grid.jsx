"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import ImageViewer from "./image-viewer"


const galleryImages = [
  {
    id: 1,
    src: "/image/gal1.jpg",
    alt: "Modern living room with blue sofa",
    category: "Living Room",
  },
  {
    id: 2,
    src: "/image/gal2.jpg",
    alt: "Kitchen with wooden cabinets",
    category: "Kitchen",
  },
  {
    id: 3,
    src: "/image/gal3.jpg",
    alt: "Dining area with pendant lights",
    category: "Dining Room",
  },
  {
    id: 4,
    src: "/image/gal4.jpg",
    alt: "Modern kitchen with island",
    category: "Kitchen",
  },
  {
    id: 5,
    src: "/image/gal5.jpg",
    alt: "Cozy living room with orange sofa",
    category: "Living Room",
  },
  {
    id: 6,
    src: "/image/gal6.jpg",
    alt: "Bedroom with wooden accents",
    category: "Bedroom",
  },
  {
    id: 7,
    src: "/image/gal7.jpg",
    alt: "Modern living space with plants",
    category: "Living Room",
  },
  {
    id: 8,
    src: "/image/gal8.jpg",
    alt: "Kitchen with white countertops",
    category: "Kitchen",
  },
  {
    id: 9,
    src: "/image/gal9.jpg",
    alt: "Kitchen with white countertops",
    category: "Kitchen",
  },
  {
    id: 10,
    src: "/image/gal10.jpg",
    alt: "Kitchen with white countertops",
    category: "Kitchen",
  },
  {
    id: 11,
    src: "/image/kitcat.jpg",
    alt: "Kitchen with white countertops",
    category: "Kitchen",
  },
  {
    id: 12,
    src: "/image/livingroom.jpg",
    alt: "Kitchen with white countertops",
    category: "Kitchen",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>

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
