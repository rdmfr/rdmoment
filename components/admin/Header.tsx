'use client';

import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-zinc-900 border-b border-amber-900/20 flex items-center justify-between px-8">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-100/40" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-black/30 border border-amber-900/20 rounded-lg text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:border-amber-500/40 text-sm"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-amber-500/10 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-amber-100/60" strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
        </button>
      </div>
    </header>
  );
}
