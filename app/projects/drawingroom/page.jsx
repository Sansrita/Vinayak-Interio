"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { ArrowLeft } from "lucide-react"
import { Phone, Mail } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const LivingRoonProjectPage = () => {
    const router = useRouter()

    const livingroomFeatures = [
        {
            title: "Ambient Lighting",
            description: "Lighting plays a crucial role in setting the mood of a living room. We incorporate layered lighting — from ambient and task lighting to accent lighting — to create a warm, inviting atmosphere.",
            image: "/image/gal7.jpg",
        },
        {
            title: "Versatile Furniture Layouts",
            description: "A well-thought-out furniture layout can completely transform your living room. We focus on creating flexible, multi-functional arrangements that enhance the flow of the space. ",
            image: "/image/gal6.jpg",
        },
        {
            title: "Personalized Décor & Accent Pieces",
            description: "The little details make a big difference. We incorporate personalized décor elements like artwork, statement furniture pieces, and unique textures that reflect your style.",
            image: "/image/livingroom.jpg",
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Header Section */}
            <div className="relative w-full h-[60vh]">
                <Image
                    src="/image/draw_pro.jpg"
                    alt="Kitchen Interior Design"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Customized Living Room</h1>
                    <h2 className="text-3xl md:text-5xl font-semibold text-center">Your Modern Life Deserves</h2>
                </div>
            </div>

            {/* Back Button */}
            <div className="container mx-auto px-4 pt-8">
                <Button variant="ghost" className="flex items-center gap-2" onClick={() => router.back()}>
                    <ArrowLeft size={16} />
                    Back to Our Projects
                </Button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-12 px-4">
                <motion.h2
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    CUSTOM-MADE LIVING ROOM
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-8 leading-relaxed"
                    >
                        The living room is where life happens — where family and friends gather, where conversations flow, and where memories are made. 
                        Our living room designs are centered around creating spaces that are both inviting and functional, combining comfort with style. Whether you prefer a cozy retreat or an open, vibrant space for entertaining, we craft designs that reflect your personality and meet your lifestyle needs.
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-12 leading-relaxed"
                    >
                        A well-designed living room is more than just furniture; it’s a place where every piece is thoughtfully chosen to create a harmonious atmosphere. 
                        From layout and lighting to color schemes and furniture selection, we focus on every detail to ensure your living room is not only aesthetically pleasing but also practical for everyday use. Whether you're drawn to modern minimalism, classic elegance, or eclectic charm, we offer a variety of designs to suit your taste. 
                        Below are just a few examples of our living room interior designing and furnishing works in Kolkata, West Bengal, India.
                        </motion.p>
                </div>

                {/* Features Section */}
                <div className="py-16">
                    <motion.h3
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={titleVariants}
                        className="text-2xl md:text-4xl font-bold text-center mb-12"
                    >
                        Our Living Room Design Features
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {livingroomFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={desVariants}
                                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
                            >
                                <div className="h-64 relative">
                                    <Image
                                        src={feature.image || "/placeholder.svg?height=300&width=400"}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 mt-12 text-center">
                    <motion.h3
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={titleVariants}
                        className="text-2xl md:text-3xl font-bold mb-6"
                    >
                        Ready to Transform Your Living Room?
                    </motion.h3>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="mb-8 max-w-2xl mx-auto"
                    >
                        Let’s create a living room that perfectly combines comfort with style. Our team of expert designers is ready to transform your space, 
                        customizing every detail to reflect your taste and create a welcoming environment for relaxation and socializing.
                    </motion.p>
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90"
                        onClick={() => window.open("https://wa.me/message/A5C4GDLREM33G1", "_blank")}
                    >
                        Schedule a Consultation
                    </Button>
                </div>
            </div>

            {/* Contact Buttons */}
            <Sidebar />

        </div>
    )
}

export default LivingRoonProjectPage
