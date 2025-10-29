import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { themes as templates } from '@/lib/data';

interface TemplateGridProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function TemplateGrid({
  searchQuery,
  selectedCategory,
}: TemplateGridProps) {
  const filtered = templates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((template) => (
        <Link
          key={template.id}
          href={`/templates/create?template=${template.id}`}
          className="group block cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg mb-4 h-72 bg-zinc-900 border-2 border-amber-900/30 group-hover:border-amber-500/50 transition-all duration-300">
            <Image
              src={template.image || '/placeholder.svg'}
              alt={template.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl text-amber-100 group-hover:text-amber-400 transition-colors">
              {template.name}
            </h3>
            <p className="text-sm text-amber-100/60">{template.description}</p>
            <div className="flex pt-2">
              <div className="flex items-center gap-2 text-amber-500 font-semibold group-hover:gap-3 transition-all">
                Gunakan Template Ini
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
