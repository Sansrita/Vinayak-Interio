import { Description } from "@radix-ui/react-dialog";
import { title } from "process";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";
export default function CatalogueSection() {
    const items = [
      {
        id: "01",
        category: "BEDROOM SETUP",
        title: "Cozy Bedroom Setup",
        image: "/image/bedcat.jpg",
        description: "Family bedroom with a clean and comfortable design for your family.",
      },
      {
        id: "02",
        category: "KITCHEN SETUP",
        title: "Neat & Clean Kitchen Setup",
        image: "/image/kitcat.jpg",
        description: "Modern kitchen with a clean and functional design for your family.",
      },
      {
        id: "03",
        category: "DRAWING ROOM SETUP",
        title: "Family Drawing Room Setup",
        image: "/image/living.jpg",
        description: "Family drawing room with a clean and comfortable design for your family.",
      },
      {
        id: "04",
        category: "BATHROOM SETUP",
        title: "Clean Aesthetic Bathroom Setup",
        image: "/image/bathroomcat.jpg",
        description: "Stylish bathroom with a clean and aesthetic design for your family.",
      },
    ]
  
    return (
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
                  <a className="block text-xl font-semibold" href="#">
                    {item.title}
                  </a>
                  <p className="py-4 opacity-90">{item.description}</p>
                  <a className="inline-flex items-center font-medium hover:underline" href="#">
                    See Details <TbArrowNarrowRight className="ml-2" />
                  </a>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
      )
    }