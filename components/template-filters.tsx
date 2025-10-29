import { categories } from "@/lib/data"

interface TemplateFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function TemplateFilters({ selectedCategory, onCategoryChange }: TemplateFiltersProps) {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-semibold text-amber-100/80 mb-4 tracking-wider">FILTER BERDASARKAN KATEGORI</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                : "bg-zinc-900 border-2 border-amber-900/30 text-amber-100/70 hover:border-amber-500/50 hover:text-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
