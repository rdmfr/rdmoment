"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Filter } from "lucide-react"
import TemplateGrid from "@/components/template-grid"
import TemplateFilters from "@/components/template-filters"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <main className="min-h-screen bg-black text-amber-100">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-serif text-4xl font-normal text-amber-100">Galeri Template</h1>
              <p className="text-amber-100/60 mt-1 font-light">Pilih template atau buat dari awal.</p>
            </div>
            <Link
              href="/templates/create"
              className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition-colors font-semibold shadow-lg shadow-amber-500/20"
            >
              <Plus size={20} />
              Buat Baru
            </Link>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-100/50" size={20} />
            <input
              type="text"
              placeholder="Cari template..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border-2 border-amber-900/30 rounded-full text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TemplateFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <TemplateGrid searchQuery={searchQuery} selectedCategory={selectedCategory} />
      </div>
    </main>
  )
}
