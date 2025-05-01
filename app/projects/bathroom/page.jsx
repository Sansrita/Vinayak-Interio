"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { ArrowLeft } from "lucide-react"
import { Phone, Mail } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const BathRoomProjectPage = () => {
    const router = useRouter()

    const bathroomFeatures = [
        {
            title: "Smart Storage & Space Optimization",
            description: "Even the smallest bathrooms can feel spacious with the right design. We incorporate smart storage solutions like floating vanities, recessed shelves, and built-in cabinets to keep the space organized without compromising style.",
            image: "/image/bathproject.jpg",
        },
        {
            title: "Luxurious Fixtures & Finishes",
            description: "From rainfall showers and sleek faucets to elegant tiling and custom mirrors, we use high-quality fixtures and finishes that elevate the overall feel of your bathroom. ",
            image: "/image/gal14.jpeg",
        },
        {
            title: "Soothing Lighting & Ambience",
            description: "Lighting can transform the mood of a bathroom. We use layered lighting — ambient, task, and accent — to create a serene, welcoming environment.",
            image: "/image/bathroomcat.jpg",
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Header Section */}
            <div className="relative w-full h-[60vh]">
                <Image
                    src="/image/bath_pro.webp"
                    alt="Kitchen Interior Design"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Customized Bathroom</h1>
                    <h2 className="text-3xl md:text-5xl font-semibold text-center">Designed for Relaxation and Style</h2>
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
                    CUSTOM-MADE BATHROOM
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-8 leading-relaxed"
                    >
                        The bathroom is more than just a functional space — it’s your personal sanctuary for relaxation and rejuvenation. 
                        Our bathroom designs focus on creating serene, spa-like environments that offer both comfort and sophistication. Whether it’s a sleek modern layout or a more classic, timeless style, we tailor each design to reflect your taste and meet your daily routine with ease.
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-12 leading-relaxed"
                    >
                        Whether you’re updating a compact ensuite or designing a luxurious master bath, our team brings expertise and creativity to every project. 
                        Explore just a few examples of our bathroom interior designing and furnishing works in Kolkata, West Bengal, India — 
                        and discover how we can transform your bathroom into a space you’ll love to begin and end your day in.
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
                        Our Bathroom Design Features
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {bathroomFeatures.map((feature, index) => (
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
                        Ready to Transform Your Bathroom?
                    </motion.h3>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="mb-8 max-w-2xl mx-auto"
                    >
                        Let’s create a bathroom that blends functionality with relaxation. Our team of expert designers is ready to transform your space into a serene 
                        retreat, customizing every detail to match your style and elevate your daily routines with comfort and elegance.
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

export default BathRoomProjectPage
