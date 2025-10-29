'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, ShoppingBag, FileText } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  change?: string;
  changeType?: 'increase' | 'decrease';
  description?: string;
}

export default function StatsCard({ title, value, icon: Icon, change, changeType, description }: StatsCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 hover:border-amber-500/40 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-amber-100/60 text-sm mb-1">{title}</p>
          <h3 className="text-3xl font-semibold text-amber-400">{value}</h3>
          {description && <p className="text-xs text-amber-100/40 mt-1">{description}</p>}
        </div>
        <div className="p-3 bg-amber-500/10 rounded-xl">
          <Icon className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
        </div>
      </div>
      {change && (
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className={`w-4 h-4 ${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`} />
          <span className={`${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`}>{change}</span>
          <span className="text-amber-100/40">from last month</span>
        </div>
      )}
    </Card>
  );
}
