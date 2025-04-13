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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "sansritasaha@gmail.com",
          subject: "New Design Consultation Request",
          formData,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          projectLocation: "",
        })

        setTimeout(() => {
          closeModal()
          setSubmitSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
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
            <div className="timeline-text">Talk to our Interior Designer<br />& Get an Estimate</div>
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
            <div className="timeline-text">Detailed Drawing<br />and Approval</div>
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
            <div className="timeline-text">Production<br />Factories</div>
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
            <div className="timeline-text">Material Delivery<br />& Execution</div>
          </div>

          <div className="timeline-arrow">→</div>

          {/* Step 5 */}
          <div className="timeline-step">
            <div className="timeline-icon glow-on-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="timeline-text">On Time Project<br />Hand Over</div>
          </div>
        </div>

        <button className="consultant-button text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" onClick={openModal}>
          Talk to Our Design Consultant
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Talk to Our Design Consultant</h3>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>

            <div className="modal-body">
              {submitSuccess ? (
                <div className="success-message">
                  Thank you for your enquiry! We will get back to you as soon as possible.
                </div>
              ) : (
                <>
                  <p>Please fill out the enquiry below and we will get back to you as soon as possible</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    </div>
                    <div className="form-group phone-input">
                      <div className="country-code"><span>+91</span></div>
                      <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="projectLocation" value={formData.projectLocation} onChange={handleChange} placeholder="Project Location" required />
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
