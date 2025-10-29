'use client'

import Link from 'next/link'
import { ArrowLeft, Eye, CheckCircle } from 'lucide-react'

export default function CreateHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-amber-900/20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side: Logo and Back link */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-0 group" aria-label="RdMoment Home">
              <span className="text-4xl font-serif text-amber-500 tracking-tight group-hover:text-amber-400 transition-colors">R</span>
              <span className="text-xl font-light text-amber-100 tracking-wide group-hover:text-white transition-colors">RdMoment.</span>
            </Link>
            <div className="w-px h-8 bg-amber-200/20 hidden md:block" />
            <Link href="/templates" className="hidden md:flex items-center gap-2 text-sm text-amber-100/80 hover:text-amber-400 transition-colors">
              <ArrowLeft size={16} />
              <span>Kembali ke Galeri</span>
            </Link>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-amber-100/80 border border-transparent hover:bg-amber-500/10 hover:border-amber-500/20 rounded-full transition-colors">
              <Eye size={16} />
              <span>Pratinjau</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 transition-colors rounded-full shadow-lg shadow-amber-500/20">
              <CheckCircle size={16} />
              <span>Simpan & Terbitkan</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
