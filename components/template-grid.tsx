"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Jawa Elegan",
    category: "Indonesian",
    image: "/elegant-javanese-wedding-invitation.jpg",
    colors: ["#D4AF37", "#2C1810", "#F5E6D3"],
    description: "Traditional Javanese elegance with gold accents",
  },
  {
    id: 2,
    name: "Modern Sakura",
    category: "Japanese",
    image: "/modern-japanese-cherry-blossom-invitation.jpg",
    colors: ["#FFB7C5", "#2C3E50", "#FFF8F0"],
    description: "Contemporary Japanese design with cherry blossoms",
  },
  {
    id: 3,
    name: "Tropical Paradise",
    category: "Balinese",
    image: "/tropical-balinese-wedding-invitation.jpg",
    colors: ["#FF6B9D", "#1A5F7A", "#FFF9E6"],
    description: "Vibrant tropical flowers and island vibes",
  },
  {
    id: 4,
    name: "Royal Mughal",
    category: "Indian",
    image: "/royal-mughal-indian-wedding-invitation.jpg",
    colors: ["#D4AF37", "#8B0000", "#FFF8DC"],
    description: "Regal Indian design with intricate patterns",
  },
  {
    id: 5,
    name: "Minimalist Zen",
    category: "Modern",
    image: "/minimalist-zen-wedding-invitation.jpg",
    colors: ["#000000", "#FFFFFF", "#E8E8E8"],
    description: "Clean, modern aesthetic with zen principles",
  },
  {
    id: 6,
    name: "Sunset Romance",
    category: "Contemporary",
    image: "/sunset-romance-wedding-invitation.jpg",
    colors: ["#FF6B35", "#F7931E", "#FFF8E7"],
    description: "Warm sunset colors and romantic vibes",
  },
]

interface TemplateGridProps {
  searchQuery: string
  selectedCategory: string
}

export default function TemplateGrid({ searchQuery, selectedCategory }: TemplateGridProps) {
  const filtered = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((template) => (
        <Link key={template.id} href={`/templates/create?template=${template.id}`} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-muted border border-border hover:border-primary/50 transition-all">
            <img
              src={template.image || "/placeholder.svg"}
              alt={template.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {template.name}
              </h3>
              <p className="text-sm text-muted-foreground">{template.category}</p>
            </div>
            <p className="text-sm text-muted-foreground">{template.description}</p>
            <div className="flex gap-2">
              {template.colors.map((color, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: color }} />
              ))}
            </div>
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Use Template
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
