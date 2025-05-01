"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { ArrowLeft } from "lucide-react"
import { Phone, Mail } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const BedroomProjectPage = () => {
    const router = useRouter()

    const bedroomFeatures = [
        {
            title: "Custom Bed Frames",
            description: "Handcrafted bed frames tailored to your room dimensions and aesthetic preferences.",
            image: "/image/bed_pro.jpg",
        },
        {
            title: "Dreamy vibes, every night",
            description: "Step into a bedroom that blends elegance and comfort effortlessly.",
            image: "/image/bedroomcat.jpg",
        },
        {
            title: "Minimal, magical, and made for you",
            description: "A clean, uncluttered space that speaks volumes through subtle details. Every element is carefully chosen to reflect your style",
            image: "/image/gal1.jpg",
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Header Section */}
            <div className="relative w-full h-[60vh]">
                <Image
                    src="/image/bed_pro.jpg"
                    alt="Bedroom Interior Design"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Cozy Bedroom Setup</h1>
                    <h2 className="text-3xl md:text-5xl font-semibold text-center">Where Comfort Meets Style</h2>
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
                    BEDROOM DESIGN EXCELLENCE
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-8 leading-relaxed"
                    >
                        Your bedroom is more than just a place to sleep—it's your sanctuary, your retreat from the world. Our
                        bedroom designs focus on creating a harmonious balance between functionality and aesthetics, ensuring that
                        every element contributes to a space that promotes rest and rejuvenation.
                    </motion.p>

                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="text-lg mb-12 leading-relaxed"
                    >
                        A large portion of anyone’s life is spent in a bedroom, as the best place to relieve anxieties, worries, and hurries. Family feels secure and free in this room and thus it needs the best 
                        ambiance, facilities, and provisions. Bedroom furniture like cot, side tables, wardrobes and dressing table mostly occupies almost all the space in a normal bedroom. 
                        In order to maintain bedroom excellence, it is important to choose bedroom furniture in matches the style with your bedroom interior design. This is where you can use the expertise of top interior designers. 
                        They can make and provide the bedroom furniture in perfect size to fit the space. Come to <b>Vinayak Interio</b>  and explore the options for custom-made bedroom furniture to create the most comfortable bedroom. 
                        Below are just a few samples of our bedroom interior designing and furnishing works in Kolkata, West Bengal, India.
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
                        Our Bedroom Design Features
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {bedroomFeatures.map((feature, index) => (
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
                        Ready to Transform Your Bedroom?
                    </motion.h3>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="mb-8 max-w-2xl mx-auto"
                    >
                        Let's create a bedroom that perfectly reflects your style and meets your needs. Our team of expert designers
                        is ready to bring your vision to life.
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

export default BedroomProjectPage
