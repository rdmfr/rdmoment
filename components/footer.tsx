import Link from "next/link"
import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 sm:px-8 lg:px-12 bg-zinc-950 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Column - Larger */}
          <div className="md:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-baseline gap-0 group mb-4">
              <span className="text-4xl font-serif text-amber-500 tracking-tight group-hover:text-amber-400 transition-colors">
                R
              </span>
              <span className="text-xl font-light text-amber-100 tracking-wide group-hover:text-white transition-colors">
                RdMoment.
              </span>
            </Link>

            <p className="text-amber-100/60 font-light leading-relaxed mb-6 max-w-sm">
              Merayakan kisah cinta di seluruh dunia dengan undangan digital yang elegan dan berbudaya.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link 
                href="#" 
                className="group p-2.5 rounded-lg border border-amber-900/30 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-amber-100/60 group-hover:text-amber-400 transition-colors" />
              </Link>
              <Link 
                href="#" 
                className="group p-2.5 rounded-lg border border-amber-900/30 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-amber-100/60 group-hover:text-amber-400 transition-colors" />
              </Link>
              <Link 
                href="#" 
                className="group p-2.5 rounded-lg border border-amber-900/30 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-amber-100/60 group-hover:text-amber-400 transition-colors" />
              </Link>
              <Link 
                href="#" 
                className="group p-2.5 rounded-lg border border-amber-900/30 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-amber-100/60 group-hover:text-amber-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-amber-100 mb-4 text-sm tracking-wider uppercase">
                Produk
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#themes" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Tema
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Harga
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Template
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-amber-100 mb-4 text-sm tracking-wider uppercase">
                Perusahaan
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Karir
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-amber-100 mb-4 text-sm tracking-wider uppercase">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-amber-100/60 hover:text-amber-400 transition-colors font-light">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-amber-100/50 font-light">
              © {currentYear} RdMoment. All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-amber-100/50 font-light">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>in Indonesia</span>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </footer>
  )
}