'use client';

import { cn } from '@/lib/utils';

interface ColorSwatchProps {
  colors: string[];
  value: string;
  onChange: (color: string) => void;
}

export function ColorSwatch({ colors, value, onChange }: ColorSwatchProps) {
  return (
    <div className="grid grid-cols-8 gap-2">
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          className={cn(
            'w-8 h-8 rounded-full border-2 transition-all',
            value.toLowerCase() === color.toLowerCase()
              ? 'border-amber-400 ring-2 ring-amber-400'
              : 'border-transparent hover:border-amber-500/50'
          )}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}
