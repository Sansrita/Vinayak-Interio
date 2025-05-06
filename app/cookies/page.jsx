"use client"

import Link from "next/link"
import { ChevronDown, User } from "lucide-react"
import { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar"

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState("background")

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section)
    // Scroll to the section
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const backgroundSection = document.getElementById("background")
      const typesSection = document.getElementById("types-of-cookies")

      if (!backgroundSection || !typesSection) return

      const scrollPosition = window.scrollY + 100 // Adding offset for better detection

      if (scrollPosition >= typesSection.offsetTop) {
        setActiveSection("types-of-cookies")
      } else {
        setActiveSection("background")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
    

      {/* Secondary Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-6 py-4">
              <Link href="/about" className="text-sm font-medium">
                Who are we
              </Link>
              <Link href="/privacy" className="text-sm font-medium">
              Privacy Policies
              </Link>
              <Link href="/terms" className="text-sm font-medium">
              Terms and Conditions
              </Link>
            </nav>
            <div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              GET YOUR QUOTE IN 24hrs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="text-sm text-white-500 uppercase mb-4">COOKIE POLICY</div>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSectionClick("background")}
                  className={`flex items-start ${activeSection === "background" ? "text-yellow-500 font-medium" : "text-white-700 hover:text-yellow-500"}`}
                >
                  <span className="mr-2">{activeSection === "background" ? "•" : ""}</span>
                  <span>1. Background</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("types-of-cookies")}
                  className={`flex items-start ${activeSection === "types-of-cookies" ? "text-yellow-500 font-medium" : "text-white-700 hover:text-yellow-500"}`}
                >
                  <span className="mr-2">{activeSection === "types-of-cookies" ? "•" : ""}</span>
                  <span>2. Types of Cookies</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            <div className="border-l-4 border-yellow-500 pl-4 mb-12">
              <h1 className="text-4xl font-bold text-white-700">Cookie Policy</h1>
            </div>

            <section id="background" className="mb-12">
              <h2 className="text-3xl font-bold text-white-700 mb-6">1. Background</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    We use cookies on our website available at www.livspace.com ("Website") to distinguish you from
                    other users of the Website. Cookies help us improve the Website and provide you with a good
                    user-experience when you browse the Website.
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    A cookie is a small file of letters and numbers that we store on your browser or the hard drive of
                    your computer, if you agree or where it is necessary to make the Website available and accessible to
                    you. Cookies contain information that is transferred to your computer's hard drive and allow us to
                    recognise you and make your visit easier and more useful when you revisit the Website
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    In the tables below, you will see a description of each cookie that we use and how it functions. In
                    general, please read our privacy policy available at https://www.livspace.com/in/privacy to
                    understand our data collection and processing practices.
                  </p>
                </li>
              </ul>
            </section>

            <section id="types-of-cookies">
              <h2 className="text-3xl font-bold text-white-700 mb-6">2. Types of Cookies</h2>
              <div className="mb-4">
                <p className="font-medium">a. We use the following types of cookies:</p>
              </div>
              <ul className="space-y-6 mb-6">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    <span className="font-medium">Essential Cookies.</span> These cookies are sometimes called "strictly
                    necessary" cookies and are required for the operation of our Website.
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    <span className="font-medium">Analytical or Performance Cookies.</span> These allow us to recognise
                    and count the number of visitors and to see how visitors move around the Website. This helps us
                    improve the way our Website works (for example, by ensuring that users find what they are looking
                    for easily).
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    <span className="font-medium">Functionality Cookies.</span> These are used to recognise you when you
                    return to the Website. This enables us to personalise our content for you, greet you by name, and
                    remember your preferences (for example, your region).
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                    <span className="font-medium">Targeting cookies.</span> These cookies record your visit to the
                    Website, the pages you have visited, and the links you have followed.
                  </p>
                </li>
              </ul>
              <div className="mb-4">
                <p className="font-medium">
                  b. Additionally, please note that third parties may also use cookies on our Website, over which we
                  have no control. These named third parties may include, for example, advertising networks and
                  providers of external services like web traffic analysis services. These third party cookies are
                  likely to be performance cookies or targeting cookies.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">c. Management of Cookies: There are many ways through which you can manage your cookies. Some way in which you may manage cookies include:</p>
              </div>
              <ul className="space-y-6 mb-6">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                  refusing to consent to cookies on the Website;
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                  disabling the use of cookies through your browser settings; or
                  </p>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <p>
                  using cookie management tools to disable our cookies or third party cookies.
                  </p>
                </li>
                </ul>
                <p>You can block cookies by activating the setting on your browser that permits you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our Website.</p>
            </section>
          </div>
        </div>
      </main>

      {/* Sidebar Button */}
      <Sidebar />
    </div>
  )
}
