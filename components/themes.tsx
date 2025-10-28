"use client"

import { useState } from "react"

const themes = [
  {
    id: 1,
    name: "Jawa Elegan",
    category: "Indonesian",
    image: "/elegant-javanese-wedding-invitation-with-batik-pat.jpg",
    colors: ["#D4AF37", "#2C1810", "#F5E6D3"],
  },
  {
    id: 2,
    name: "Modern Sakura",
    category: "Japanese",
    image: "/modern-japanese-cherry-blossom-wedding-invitation.jpg",
    colors: ["#FFB7C5", "#2C3E50", "#FFF8F0"],
  },
  {
    id: 3,
    name: "Tropical Paradise",
    category: "Balinese",
    image: "/tropical-balinese-wedding-invitation-with-flowers.jpg",
    colors: ["#FF6B9D", "#1A5F7A", "#FFF9E6"],
  },
  {
    id: 4,
    name: "Royal Mughal",
    category: "Indian",
    image: "/royal-mughal-indian-wedding-invitation-with-gold.jpg",
    colors: ["#D4AF37", "#8B0000", "#FFF8DC"],
  },
  {
    id: 5,
    name: "Minimalist Zen",
    category: "Modern",
    image: "/minimalist-zen-wedding-invitation-clean-design.jpg",
    colors: ["#000000", "#FFFFFF", "#E8E8E8"],
  },
  {
    id: 6,
    name: "Sunset Romance",
    category: "Contemporary",
    image: "/sunset-romance-wedding-invitation-warm-colors.jpg",
    colors: ["#FF6B35", "#F7931E", "#FFF8E7"],
  },
]

export default function Themes() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Indonesian", "Japanese", "Balinese", "Indian", "Modern", "Contemporary"]

  const filtered = selectedCategory === "All" ? themes : themes.filter((t) => t.category === selectedCategory)

  return (
    <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Explore Our Themes</h2>
          <p className="text-lg text-muted-foreground">Choose from culturally-inspired designs or create your own</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((theme) => (
            <div key={theme.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-muted">
                <img
                  src={theme.image || "/placeholder.svg"}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{theme.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{theme.category}</p>
              <div className="flex gap-2 mb-4">
                {theme.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Use This Theme
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
