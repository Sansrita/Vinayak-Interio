"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { ArrowLeft } from "lucide-react"
import { Phone, Mail } from "lucide-react"

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
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
                <a
                    href="tel:+91 6289042957"
                    className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-950 transition-colors"
                >
                    <Phone className="h-6 w-6" />
                </a>
                <a
                    href="https://wa.me/message/A5C4GDLREM33G1"
                    className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>
                <a
                    href="mailto:vinayakinterio1@gmail.com"
                    className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-950 transition-colors"
                >
                    <Mail className="h-6 w-6" />
                </a>
            </div>

        </div>
    )
}

export default LivingRoonProjectPage
