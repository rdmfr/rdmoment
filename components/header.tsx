
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

const navLinks = [
    { href: "#features", label: "Fitur" },
    { href: "#themes", label: "Tema" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-amber-900/20"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo - Stylish R + RdMoment */}
          <Link href="/" className="flex items-center gap-0 group" aria-label="RdMoment Home">
            <span className="text-4xl font-serif text-amber-500 tracking-tight group-hover:text-amber-400 transition-colors">
              R
            </span>
            <span className="text-xl font-light text-amber-100 tracking-wide group-hover:text-white transition-colors">
              RdMoment.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-light tracking-wide text-amber-100/80 transition-colors hover:text-amber-400 hover:scale-105 transform duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-100/80 hover:text-amber-400 transition-colors p-2 rounded-md hover:bg-amber-500/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-900/20 md:hidden" role="navigation" aria-label="Mobile navigation">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-light tracking-wide text-amber-100/80 transition-all hover:text-amber-400 hover:bg-amber-900/10 hover:pl-6 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}sOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-light tracking-wide text-amber-100/80 transition-all hover:text-amber-400 hover:bg-amber-900/10 hover:pl-6 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}