"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

export default function ImageViewer({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex)
  const [zoom, setZoom] = useState(1)

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setZoom(1)
  }

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setZoom(1)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1))
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "+" || e.key === "=") handleZoomIn()
      if (e.key === "-") handleZoomOut()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-auto overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        >
          <Image
            src={images[index].src || "/placeholder.svg"}
            alt={images[index].alt}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p className="text-lg font-medium">{images[index].category}</p>
          <p className="text-sm opacity-80">{images[index].alt}</p>
          <p className="text-sm mt-2">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}
