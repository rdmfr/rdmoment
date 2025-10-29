'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { themeData } from '@/lib/admin-data';

export default function ThemeChart() {
  return (
    <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30">
      <h3 className="text-lg font-semibold text-amber-100 mb-6">Popular Themes</h3>
      <div className="flex items-center gap-8">
        <ResponsiveContainer width="60%" height={280}>
          <PieChart>
            <Pie
              data={themeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {themeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid rgba(217,166,71,0.3)',
                borderRadius: '8px',
                color: '#f5f1e8',
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-3 flex-1">
          {themeData.map((theme, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-sm text-amber-100/80">{theme.name}</span>
              </div>
              <span className="text-sm text-amber-100/60">{theme.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
