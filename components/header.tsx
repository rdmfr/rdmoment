"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Bell } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="RdMoment" className="w-36 h-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#themes" className="text-foreground hover:text-primary transition-colors">
            Themes
          </Link>
          <Link href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Stories
          </Link>
          <Link href="/invitations" className="px-5 py-2 rounded-full btn-gold font-medium shadow-md">
            Create Invitation
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center p-2 rounded-md text-muted-foreground hover:text-foreground">
            <Search size={18} />
          </button>
          <button className="hidden md:inline-flex items-center p-2 rounded-md text-muted-foreground hover:text-foreground">
            <Bell size={18} />
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#themes" className="text-foreground hover:text-primary transition-colors">
                Themes
              </Link>
              <Link href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Stories
              </Link>
              <Link
                href="/invitations"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium text-center"
              >
                Create Invitation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
