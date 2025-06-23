"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  {
    path: "/gallery",
    name: "gallery",
    dropdown: [
      { path: "/gallery", name: "Real time execution" },
      { path: "/projects", name: "Project Concept" },
    ],
  },
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
  const [activeDropdown, setActiveDropdown] = useState(null)

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

  // Fixed: Only include links that actually exist and filter out undefined values
  const reorderedLinks = ["home", "about", "gallery", "contact"]
    .map((name) => links.find((link) => link.name === name))
    .filter(Boolean) // Remove any undefined values

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

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  return (
    <nav className={`${containerStyles} ${mobileView ? "gap-4" : "flex items-center justify-between"}`}>
      {/* Mobile View */}
      {mobileView ? (
        <>
          <SearchForm className="relative w-full px-4" />

          <div className="flex flex-col items-center w-full gap-3 mt-4">
            {reorderedLinks.map((link, index) => {
              // Additional safety check to ensure link exists
              if (!link) return null

              return (
                <div key={index} className="relative">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className={`uppercase relative ${linkStyles} flex items-center gap-1`}
                      >
                        {(link.path === path || link.dropdown.some((item) => item.path === path)) && (
                          <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" }}
                            layoutId="underline"
                            className={`${underlineStyles} absolute left-0 right-0 h-[2px] bg-black bottom-0`}
                          />
                        )}
                        {link.name}
                        <span
                          className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        >
                          ▼
                        </span>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[200px]"
                          >
                            {link.dropdown.map((item, dropIndex) => (
                              <Link
                                key={dropIndex}
                                href={item.path}
                                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.path} className={`uppercase relative ${linkStyles}`}>
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
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        /* Desktop View */
        <>
          <div className="flex gap-6">
            {links.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={link.path} className={`uppercase relative ${linkStyles} flex items-center gap-1`}>
                      {(link.path === path || link.dropdown.some((item) => item.path === path)) && (
                        <motion.span
                          initial={{ y: "-100%" }}
                          animate={{ y: 0 }}
                          transition={{ type: "tween" }}
                          layoutId="underline"
                          className={`${underlineStyles} absolute left-0 right-0 h-[2px] bg-black bottom-0`}
                        />
                      )}
                      {link.name}
                      <span
                        className={`transition-transform duration-200 text-xs ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[200px] z-50"
                        >
                          {link.dropdown.map((item, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={item.path}
                              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm whitespace-nowrap"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.path} className={`uppercase relative ${linkStyles}`}>
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
                )}
              </div>
            ))}
          </div>

          <SearchForm className="relative" />
        </>
      )}
    </nav>
  )
}

export default Nav
