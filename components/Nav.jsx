"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/gallery", name: "gallery" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    if (searchQuery.trim()) {
      // Convert search query to lowercase for case-insensitive matching
      const query = searchQuery.trim().toLowerCase()

      // Check if the search query matches any navigation link name
      const matchedLink = links.find((link) => link.name.toLowerCase() === query)

      if (matchedLink) {
        // If there's a match, navigate directly to that page
        router.push(matchedLink.path)
      } else {
        // If no match, go to search results page
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
      }

      // Clear the search input after submission
      setSearchQuery("")
    }
  }

  return (
    <nav className={`${containerStyles} pr-10 flex items-center gap-4`}>
      <div className="flex gap-6">
        {links.map((link, index) => (
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

      {/* Search Bar */}
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
