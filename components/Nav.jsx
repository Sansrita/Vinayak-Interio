// Nav.jsx
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/projects", name: "projects" },
  { path: "/gallery", name: "gallery" },
  { path: "/contact", name: "contact" },
]

const additionalPages = [
  { path: "/cookies", name: "cookies" },
  { path: "/terms", name: "terms and conditions" },
  { path: "/privacy", name: "privacy policies" },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles, mobileView = false }) => {
  const path = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase()

      const matchedLink = links.find((link) => link.name.toLowerCase() === query)
      const matchedAdditionalPage = additionalPages.find((page) => page.name.toLowerCase() === query)

      if (matchedLink) {
        router.push(matchedLink.path)
      } else if (matchedAdditionalPage) {
        router.push(matchedAdditionalPage.path)
      } else {
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
      }

      setSearchQuery("")
    }
  }

  const reorderedLinks = ["home", "about", "projects", "gallery", "contact"].map(name =>
    links.find(link => link.name === name)
  )

  return (
    <nav className={`${containerStyles} ${mobileView ? "gap-4" : "pr-10 flex items-center gap-4"}`}>
      
      {mobileView && (
        <form onSubmit={handleSearch} className="relative w-full px-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-white bg-transparent text-white w-full px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white">
            🔍
          </button>
        </form>
      )}

      <div className={`${mobileView ? "flex flex-col items-center w-full gap-3 mt-4" : "flex gap-6"}`}>
        {(mobileView ? reorderedLinks : links).map((link, index) => (
          <Link href={link.path} key={index} className={`uppercase relative ${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles} absolute left-0 right-0 h-[2px] bg-black bottom-0`}
              />
            )}
            {link.name}
          </Link>
        ))}
      </div>

      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border border-white bg-transparent text-white px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black">
          🔍
        </button>
      </form>
    </nav>
  )
}

export default Nav
