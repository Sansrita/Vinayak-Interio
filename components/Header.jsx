"use client"
import { useEffect, useState } from "react"
import Logo from "./Logo"
//import ThemeToggler from './ThemeToggler';
import Nav from "./Nav"
import Mobilenavigation from "./Mobilenavigation"
import { usePathname } from "next/navigation"

const Header = () => {
  const [header, setHeader] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Header background change logic (existing)
      if (currentScrollY > 50) {
        setHeader(true)
      } else {
        setHeader(false)
      }

      // Header visibility logic (new)
      if (currentScrollY < 100) {
        // Always show header when near the top (hero section)
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Hide header when scrolling down and past hero section
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Show header when scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`${
        header ? "py-4 bg-tertiary shadow-lg dark:bg-accent" : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all duration-300 ease-in-out ${pathname === "/" && "bg-[#fff]"} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Logo />
          <div className="flex items-center gap-x-8 pl-12">
            {/* Nav Section*/}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {/* Theme Toggler
            <ThemeToggler />  */}
            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
