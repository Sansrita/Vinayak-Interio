import Image from "next/image"
import Link from "next/link"
import Sidebar from "../Sidebar"

export default function GalleryHeader() {
  return (
    <div className="relative w-full">

      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/image/gal_hero.jpg"
          alt="Interior Design"
          width={1920}
          height={500}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Your Home. Our Designs</h2>
          <p className="text-2xl md:text-4xl text-white">Expertly Crafted Interiors by Professionals</p>
        </div>
      </div>

      {/* Contact Buttons */}
      <Sidebar />
    </div>
  )
}
