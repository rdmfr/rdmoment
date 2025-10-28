import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart size={16} className="text-primary-foreground" />
              </div>
              <span className="font-serif text-lg font-semibold">RdMoment.</span>
            </div>
            <p className="text-sm opacity-75">Celebrating love stories worldwide.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Themes
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 RdMoment. All rights reserved. Made with love.</p>
        </div>
      </div>
    </footer>
  )
}
