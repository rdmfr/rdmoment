"use client"

interface TemplateFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = ["All", "Indonesian", "Japanese", "Balinese", "Indian", "Modern", "Contemporary"]

export default function TemplateFilters({ selectedCategory, onCategoryChange }: TemplateFiltersProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-foreground mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-foreground hover:border-primary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
