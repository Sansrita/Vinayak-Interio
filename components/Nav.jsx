"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const links = [
  //{ path: "/", name: "home" },
  //{ path: "/about", name: "about" },
  //{ path: "/projects", name: "projects" },
  //{ path: "/gallery", name: "gallery" },
  //{ path: "/contact", name: "contact" },
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

  const reorderedLinks = ["home", "about", "projects", "gallery", "contact"].map((name) =>
    links.find((link) => link.name === name),
  )

  // Search form component to avoid duplication
   
  const SearchForm = ({ className }) => (
    <form onSubmit={handleSearch} className={className}>
      
      <input
        type="text"
        placeholder="Search..."
        className="border border-white bg-transparent text-white px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white">
        🔍
      </button>
    
    </form>
  )
    

  
}

export default Nav
