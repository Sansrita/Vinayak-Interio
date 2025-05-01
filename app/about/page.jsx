"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { Phone, Mail, MapPin } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const Page = () => {
  const imageUrl = "/image/whoweare.jpg"
  const router = useRouter()
  const officeAddress = "B/43/H/19/73, Ardehendu Sekhar Naskar Sarani, Beleghata, Kolkata-700010, West Bengal, India"
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(officeAddress)}`

  return (
    <div>
      {/* Smaller Header Section */}
      <div
        className="bg-center bg-cover bg-no-repeat min-h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">WHO ARE WE?</h2>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design.
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5 "
          >
            Our Interior design company is a company that provides interior design services for homes, offices,
            apartments and others. We provide the best interior design services for you. We have a team that is
            experienced in the field of interior.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8 px-4 lg:px-20 xl:px-32 mb-12">
          {/* Left Image Section */}
          <div className="w-full pb-16 h-[500px] relative">
            <Image src="/image/about123.jpg" alt="img" fill className="object-cover rounded-xl" />
          </div>

          {/* Right Content Section */}
          <div>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Best Interior Design Company in Kolkata
            </motion.h2>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="space-y-4 text-white-700"
            >
              <p>
                Vinayak Interio started with commercial space and residential furnishing in 2017 at Kolkata, as its main
                office.
              </p>
              <p>Your space should tell your story. We craft interiors that mirror your personality, lifestyle, and taste — creating a home that feels authentically you in every detail.
              </p>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Office Section with Google Map */}
      <div className="container mb-16">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Our Office
        </motion.h2>

        <div className="px-4 lg:px-20 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Vinayak Interio Office"
              ></iframe>
            </div>

            {/* Address Details */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className=" p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-lg">{officeAddress}</p>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-medium mb-3">Working Hours</h4>
                <p className="mb-2">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-8">
                <Button
                  onClick={() => router.push("/contact")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium"
                >
                  Get Directions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <Sidebar />
    </div>
  )
}

export default Page
