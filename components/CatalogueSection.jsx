import { TbArrowNarrowRight } from "react-icons/tb"
import Image from "next/image"
import Link from "next/link"

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cozy Bedroom Setup",
      image: "/image/bedcat.jpg",
      description: "Family bedroom with a clean and comfortable design for your family.",
      link: "/projects/bedroom",
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen Setup",
      image: "/image/kitcat.jpg",
      description: "Modern kitchen with a clean and functional design for your family.",
      link: "/projects/kitchen",
    },
    {
      id: "03",
      category: "LIVING ROOM SETUP",
      title: "Family Living Room Setup",
      image: "/image/living.jpg",
      description: "Family living room with a clean and comfortable design for your family.",
      link: "/projects/drawingroom",
    },
    {
      id: "04",
      category: "BATHROOM SETUP",
      title: "Clean Aesthetic Bathroom Setup",
      image: "/image/bathroomcat.jpg",
      description: "Stylish bathroom with a clean and aesthetic design for your family.",
      link: "/projects",
    },
  ]

  return (
    <section className="px-4 py-12">
      <div className="flex items-center justify-center mb-10 gap-4">
        <div className="h-px w-16 bg-white"></div>
        <h2 className="text-3xl font-bold text-center text-white whitespace-nowrap">WHAT WE DO</h2>
        <div className="h-px w-16 bg-white"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 divide-gray-300 lg:divide-x">
        {items.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <div>
              <Image
                src={item.image || "/placeholder.svg"}
                width={380}
                height={300}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 text-white bg-black/30 backdrop-blur-md rounded-xl max-w-[90%]">
                <div className="flex justify-between pb-4 text-sm opacity-90">
                  <p>{item.category}</p>
                  <span>{item.id}</span>
                </div>
                <Link className="block text-xl font-semibold" href={item.link}>
                  {item.title}
                </Link>
                <p className="py-4 opacity-90">{item.description}</p>
                <Link className="inline-flex items-center font-medium hover:underline" href={item.link}>
                  See Details <TbArrowNarrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
