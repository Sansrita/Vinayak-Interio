"use client"

import { useState } from "react"
import "./AboutComponent.css"

const AboutComponent = () => {
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
    <div className="about-component">
      <div className="project-timeline">
        <h2 className="project-heading">
          PROJECT COMPLETION IN <span className="purple-text">45 WORKING DAYS*</span>
        </h2>

        <div className="timeline-container">
          {/* Step 1 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="8" r="2" />
                <circle cx="8" cy="12" r="2" />
                <circle cx="16" cy="12" r="2" />
                <path d="M12 15c-1.5 0-2.5 1-2.5 2" />
                <path d="M14.5 17c0-1-1-2-2.5-2" />
              </svg>
            </div>
            <div className="timeline-text">Project Consultation</div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 2 */}
          <div className="timeline-step initially-hidden">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                <path d="M12 17v.01" />
                <path d="M12 13.5V15" />
              </svg>
            </div>
            <div className="timeline-text">
              Site Inspection
              <br />
              (Chargable)
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 3 */}
          <div className="timeline-step initially-hidden">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M15 4v4" />
                <path d="M9 4v4" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
              </svg>
            </div>
            <div className="timeline-text">
              Detailed Interior Layout
              <br /> & 3D Design
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 4 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="timeline-text">
              Walk In Video
              <br /> (If Require){" "}
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 5 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M8 12l2 2 4-4" />
              </svg>
            </div>
            <div className="timeline-text">
              Design Approval <br /> & Project Confirmation
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 6 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 7 2 17 12 22 22 17 22 7" />
                <line x1="12" y1="12" x2="12" y2="22" />
              </svg>
            </div>
            <div className="timeline-text">
              Material Choice
              <br /> Delivery And Execution
            </div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 7 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="timeline-text">
              (On-Time Delievery)
              <br /> Your Dream Home Is Ready To Move
            </div>
          </div>
        </div>

        <button
          className="consultant-button text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          onClick={openModal}
        >
          Talk to Our Design Consultant
        </button>
      </div>

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

export default AboutComponent
