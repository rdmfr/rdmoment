'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from '@/lib/admin-data';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <aside className="w-64 bg-zinc-950 border-r border-amber-900/20 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-amber-900/20">
        <Link href="/">
          <Image src="/Logo.png" alt="RdMoment Logo" width={80} height={21} />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'text-amber-100/60 hover:bg-amber-500/5 hover:text-amber-400'
                }
              `}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-light text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}