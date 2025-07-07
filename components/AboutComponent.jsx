"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Users, FileText, Layout, Truck, CheckSquare, Package, Home, X } from "lucide-react"

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
    setSubmitSuccess(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const message = `*New Design Consultation Request*\n\n*Name:* ${formData.name}\n*Contact Number:* ${formData.contactNumber}\n*Email:* ${formData.email}\n*Project Location:* ${formData.projectLocation}`
      const whatsappURL = `https://wa.me/message/A5C4GDLREM33G1?text=${encodeURIComponent(message)}`
      window.open(whatsappURL, "_blank")
      setSubmitSuccess(true)
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        projectLocation: "",
      })
      setTimeout(() => {
        closeModal()
      }, 3000)
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const timelineSteps = [
    {
      icon: Users,
      title: "Project Consultation",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "The first step toward your dream space.",
        description:
          "Our consultation is designed to understand your needs, lifestyle, preferences, and vision. We discuss your space, budget, and style to create a design roadmap tailored just for you.",
        expectations: [
          "One-on-one discussion with our interior experts",
          "Understanding of your functional and aesthetic requirements",
          "Budget planning and space analysis",
          "Introduction to our design process and packages",
          "Clarifying doubts and setting clear expectations",
        ],
        footer: "This session sets the foundation for a smooth, customized, and transparent design journey.",
      },
    },
    {
      icon: FileText,
      title: "Site Inspection",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "A crucial step to ensure design precision and execution accuracy.",
        description:
          "Our expert team visits your site to take accurate measurements and understand the space's possibilities.",
        expectations: [
          "Take accurate measurements",
          "Assess structural and civil conditions",
          "Identify layout possibilities and constraints",
          "Understand natural lighting, ventilation, and utilities",
          "Capture photos and notes for design planning",
        ],
        footer: "This detailed inspection forms the backbone of a well-executed interior project.",
      },
    },
    {
      icon: Layout,
      title: "3D Design",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "Visualize your space before it’s built.",
        description:
          "We create high-quality 3D designs showcasing layout, colors, furniture, lighting, and textures.",
        expectations: [
          "Understand the final look and feel",
          "Make confident design choices",
          "Suggest changes before execution starts",
        ],
        footer: "Your dream space, clearly imagined—before a single nail is hit.",
      },
    },
    {
      icon: Truck,
      title: "VR Walkthrough Video",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "Step inside your future space—virtually.",
        description:
          "Our immersive VR video gives you a 360° walkthrough of your 3D interior design.",
        expectations: [
          "Enhances design clarity",
          "Makes decision-making easier",
          "Perfect for remote viewing and approvals",
        ],
        footer: "",
      },
    },
    {
      icon: CheckSquare,
      title: "Project Confirmation",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "Locking in your design. Moving into execution.",
        description:
          "Once you’re happy with the final design, we proceed with formal project confirmation.",
        expectations: [
          "Approval of final 3D designs & layout plans",
          "Selection of materials and finishes",
          "Signing of project agreement with scope, timelines & warranty terms",
          "Advance payment to initiate material procurement and execution",
        ],
        footer: "This milestone marks the transition from planning to making your dream interior a reality.",
      },
    },
    {
      icon: Package,
      title: "Execution",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "Where designs come to life—flawlessly.",
        description:
          "After design approval and confirmation, we begin on-site execution with precision and planning.",
        expectations: [
          "Material procurement & delivery",
          "Modular manufacturing (if applicable)",
          "Civil, electrical & carpentry work",
          "On-site assembly & installation",
          "Daily supervision & quality checks",
          "Client updates at every milestone",
        ],
        footer: "We ensure timely progress, minimal disruptions, and top-quality craftsmanship—until your space is ready.",
      },
    },
    {
      icon: Home,
      title: "On-Time Handover",
      hasTooltip: true,
      tooltipContent: {
        subtitle: "Your dream space, delivered as promised.",
        description: "",
        expectations: [
          "Handover as per the committed timeline",
          "Project execution starts after design & material approval",
          "All payment milestones met on or before due dates",
          "No changes made to the approved design/layout during execution",
          "Smooth coordination and site access as per schedule",
          "Materials are finalized without delays or last-minute swaps",
          "Client support in decision-making as per project flow",
        ],
        footer: "Note: On-time handover is subject to payments being made as per the agreed terms and timeline.",
      },
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-500">From Vision to Reality</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between overflow-x-visible overflow-y-visible pb-4 flex-wrap">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-shrink-0 relative">
                <div className="flex flex-col items-center text-center min-w-[140px] px-2">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-yellow-500/50 bg-transparent cursor-pointer">
                      <step.icon className="w-8 h-8" />
                    </div>
                    {step.hasTooltip && (
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none w-[320px]">
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl text-left">
                          <div className="text-yellow-500 font-semibold text-sm mb-2">
                            {step.tooltipContent?.subtitle}
                          </div>
                          <div className="text-gray-300 text-xs mb-3 leading-relaxed">
                            {step.tooltipContent?.description}
                          </div>
                          <div className="text-xs mb-3">
                            <div className="text-white font-medium mb-2">What to expect:</div>
                            {step.tooltipContent?.expectations.map((expectation, idx) => (
                              <div key={idx} className="flex items-start mb-1 text-gray-300">
                                <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
                                <span>{expectation}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-gray-400 text-xs italic">{step.tooltipContent?.footer}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-sm leading-tight max-w-[120px]">{step.title}</div>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="text-yellow-500 text-2xl mx-2 flex-shrink-0">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={openModal}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
          >
            Talk to Our Design Consultant
          </Button>
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white text-xl">Talk to Our Design Consultant</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 text-white hover:bg-gray-800"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="p-6 pt-0">
              {submitSuccess ? (
                <div className="text-center text-green-400 py-8">
                  <div className="text-lg font-semibold mb-2">Thank you for your enquiry!</div>
                  <div className="text-sm">Redirecting you to WhatsApp to connect with our design consultant.</div>
                </div>
              ) : (
                <>
                  <p className="text-gray-300 mb-6 text-sm">
                    Please fill out the enquiry below and we will get back to you as soon as possible
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <div className="flex">
                      <div className="flex items-center px-3 bg-gray-800 border border-gray-600 border-r-0 rounded-l-md">
                        <span className="text-white text-sm">+91</span>
                      </div>
                      <Input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 rounded-l-none"
                      />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="Project Location"
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default AboutComponent
