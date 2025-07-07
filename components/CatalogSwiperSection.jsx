"use client";
import { TbArrowRight } from "react-icons/tb";
import { Button } from "./ui/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants } from "@/utils/animation";
import { titleVariants } from "@/utils/animation";

export default function CatalogSwiperSection() {

    const [isModalOpen, setIsModalOpen] = useState(false)
      const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        email: "",
        projectLocation: "",
      })
      const [isSubmitting, setIsSubmitting] = useState(false)
      const [submitSuccess, setSubmitSuccess] = useState(false)
    
      const openModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = "hidden"
      }
    
      const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = "auto"
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        try {
          // Format the message for WhatsApp
          const message = `*New Design Consultation Request*\n\n*Name:* ${formData.name}\n*Contact Number:* ${formData.contactNumber}\n*Email:* ${formData.email}\n*Project Location:* ${formData.projectLocation}`
    
          // Make sure the URL is properly formatted to include the message
          // If abc.whatsapp.com is a custom domain, ensure it has the proper protocol and query parameter format
          const whatsappURL = `https://wa.me/message/A5C4GDLREM33G1?text=${encodeURIComponent(message)}`
    
          // Open WhatsApp in a new tab
          window.open(whatsappURL, "_blank")
    
          // Show success message
          setSubmitSuccess(true)
    
          // Reset form
          setFormData({
            name: "",
            contactNumber: "",
            email: "",
            projectLocation: "",
          })
    
          // Close modal after delay
          setTimeout(() => {
            closeModal()
            setSubmitSuccess(false)
          }, 3000)
        } catch (error) {
          console.error("Error opening WhatsApp:", error)
        } finally {
          setIsSubmitting(false)
        }
      }

    return (
        <div className="py-5 lg:py-28 px-4 lg:px-8">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</motion.h1>
                    <motion.h2
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="pb-6 text-xl font-bold tracking-wider mt-5"> LUXURY DECOR TO CREATE COMFORT IN OUR HOME </motion.h2>
                </div>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}
                    className="grid grid-cols-2 gap-x-8"
                >
                    
                    <p className="text-gray-500 hover:text-white hover:font-bold transition-colors duration-200">
                        At Vinayak Interio, we believe your home should be a reflection of your soul — warm, inviting, and uniquely yours. Our curated collection of furniture and decor blends timeless design with everyday comfort, helping you transform every corner into a space that feels like home.
                    </p>

                    <p className="text-gray-500 hover:text-white hover:font-bold transition-colors duration-200">
                        With our passion for design and decor, we have created a collection of furniture and accessories that will help you to create a comfortable and stylish home. With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                    </p>

                </motion.div>

                <a href="/gallery">
                    <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"> View Gallery <TbArrowRight className="w-5 h-5 ml-2" /> </Button>
                </a>
            </div>

            {/* SWIPER SECTION */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image src="/image/swiper1.jpg" alt="Swiper 1" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper2.jpg" alt="Swiper 2" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper3.jpg" alt="Swiper 3" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper4.jpg" alt="Swiper 4" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper5.jpg" alt="Swiper 5" width={520} height={220} className="w-full" />
                </SwiperSlide>
            </Swiper>

            

        {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Talk to Our Design Consultant</h3>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              {submitSuccess ? (
                <div className="success-message">
                  Thank you for your enquiry! Redirecting you to WhatsApp to connect with our design consultant.
                </div>
              ) : (
                <>
                  <p>Please fill out the enquiry below and we will get back to you as soon as possible</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group phone-input">
                      <div className="country-code">
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="Project Location"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
        </div>

        
    )
}