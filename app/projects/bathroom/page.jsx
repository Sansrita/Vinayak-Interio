"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { desVariants, titleVariants } from "@/utils/animation"
import { ArrowLeft } from "lucide-react"
import { Phone, Mail } from "lucide-react"

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

export default BathRoomProjectPage
