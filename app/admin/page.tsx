'use client';

import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsCard from '@/components/admin/StatsCard';
import SalesChart from '@/components/admin/SalesChart';
import ThemeChart from '@/components/admin/ThemeChart';
import RecentActivity from '@/components/admin/RecentActivity';
import { DollarSign, ShoppingBag, FileText } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-amber-100 mb-2">
              Dashboard Overview
            </h1>
            <p className="text-amber-100/60 font-light">
              Welcome back to your admin panel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Revenue"
              value="$145,000"
              icon={DollarSign}
              change="+12.5%"
              changeType="increase"
            />
            <StatsCard
              title="New Orders"
              value="120"
              icon={ShoppingBag}
              description="Active Themes"
            />
            <StatsCard
              title="Active Themes"
              value="458"
              icon={FileText}
              description="Pending Invitations"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SalesChart />
            <RecentActivity />
            <ThemeChart />
          </div>
        </main>
      </div>
    </div>
  );
}