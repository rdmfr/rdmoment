"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { themes, categories } from "@/lib/data"

export default function Themes() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filtered = selectedCategory === "All" ? themes : themes.filter((t) => t.category === selectedCategory)

  return (
    <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-amber-100 mb-4 tracking-wide">Jelajahi Pilihan Tema Kami</h2>
          <p className="text-lg text-amber-100/60">Pilih dari desain yang terinspirasi budaya atau ciptakan gayamu sendiri</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black hover:bg-amber-400"
                  : "bg-zinc-900 border border-amber-900/30 text-amber-100/80 hover:border-amber-500/50 hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((theme) => (
            <Link
              key={theme.id}
              href={`/templates/create?theme=${theme.id}`}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-zinc-900 border border-amber-900/20 group-hover:border-amber-500/40 transition-colors duration-300">
                <Image
                  src={theme.image || "/placeholder.svg"}
                  alt={theme.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-lg text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">{theme.name}</h3>
              <p className="text-sm text-amber-100/60 mb-4">{theme.category}</p>
              <div className="flex gap-2 mb-4">
                {theme.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-amber-900/30"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}