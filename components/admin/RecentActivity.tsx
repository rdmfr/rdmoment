'use client';

import { Card } from '@/components/ui/card';
import { recentActivity } from '@/lib/admin-data';

export default function RecentActivity() {
  return (
    <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30">
      <h3 className="text-lg font-semibold text-amber-100 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-500/5 transition-colors"
          >
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-amber-100 truncate">{activity.text}</p>
            </div>
            <span className="text-amber-100/40 text-xs">{activity.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
