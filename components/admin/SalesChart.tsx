'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { salesData } from '@/lib/admin-data';

export default function SalesChart() {
  return (
    <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30">
      <h3 className="text-lg font-semibold text-amber-100 mb-6">Sales Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(217,166,71,0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="#d4af37"
            tick={{ fill: '#f5f1e8', opacity: 0.6 }}
            axisLine={{ stroke: 'rgba(217,166,71,0.2)' }}
          />
          <YAxis
            stroke="#d4af37"
            tick={{ fill: '#f5f1e8', opacity: 0.6 }}
            axisLine={{ stroke: 'rgba(217,166,71,0.2)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#18181b',
              border: '1px solid rgba(217,166,71,0.3)',
              borderRadius: '8px',
              color: '#f5f1e8',
            }}
            cursor={{ fill: 'rgba(217,166,71,0.1)' }}
          />
          <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4af37" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#d4af37" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
