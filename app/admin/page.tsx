"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Users,
  Settings as SettingsIcon,
  Search,
  Bell,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

const salesData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 18000 },
  { month: "Apr", value: 22000 },
  { month: "May", value: 28000 },
  { month: "Jun", value: 32000 },
]

const themeData = [
  { name: "Jawa Elegan", value: 35, color: "#d4af37" },
  { name: "Modern Sakura", value: 25, color: "#c9a663" },
  { name: "Sunda Klasik", value: 20, color: "#b8964f" },
  { name: "Others", value: 20, color: "#8a7038" },
]

const recentActivity = [
  { id: 1, text: "Trdfs paliral", time: "○", icon: "⚙️" },
  { id: 2, text: "Aciver Ddlemas", time: "○", icon: "💰" },
  { id: 3, text: "Corel Themes", time: "○", icon: "📧" },
  { id: 4, text: "Tdireal alLsm", time: "○", icon: "🔒" },
  { id: 5, text: "Reeart Activity", time: "○", icon: "⚙️" },
]

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard")

  const menuItems = [
    { id: "loach", label: "Loach", icon: LayoutDashboard, badge: null },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
    { id: "orders", label: "Orders", icon: ShoppingBag, badge: null },
    { id: "templates", label: "Templates", icon: FileText, badge: null },
    { id: "invitations", label: "Invitations", icon: FileText, badge: null },
    { id: "users", label: "Users", icon: Users, badge: null },
    { id: "settings", label: "Settings", icon: SettingsIcon, badge: null },
  ]

  return (
    <div className="flex min-h-screen bg-zinc-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-amber-900/20 flex flex-col">
        
        {/* Logo */}
        <div className="p-6 border-b border-amber-900/20">
          <Link href="/" className="flex items-baseline gap-0">
            <span className="text-3xl font-serif text-amber-500">R</span>
            <span className="text-lg font-light text-amber-100">dMoment.</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeMenu === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                    : 'text-amber-100/60 hover:bg-amber-500/5 hover:text-amber-400'
                  }
                `}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-light text-sm">{item.label}</span>
              </button>
            )
          })}
        </nav>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
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

        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-auto">
          
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-amber-100 mb-2">Dashboard Overview</h1>
            <p className="text-amber-100/60 font-light">Welcome back to your admin panel</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Total Revenue */}
            <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-amber-100/60 text-sm mb-1">Total Revenue</p>
                  <h3 className="text-3xl font-semibold text-amber-400">$145,000</h3>
                </div>
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <DollarSign className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">+12.5%</span>
                <span className="text-amber-100/40">from last month</span>
              </div>
            </Card>

            {/* New Orders */}
            <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-amber-100/60 text-sm mb-1">New Orders</p>
                  <h3 className="text-3xl font-semibold text-amber-400">120</h3>
                  <p className="text-xs text-amber-100/40 mt-1">Active Themes</p>
                </div>
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                </div>
              </div>
            </Card>

            {/* Active Themes */}
            <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-amber-100/60 text-sm mb-1">Active Themes</p>
                  <h3 className="text-3xl font-semibold text-amber-400">45 8</h3>
                  <p className="text-xs text-amber-100/40 mt-1">Pending Invitations</p>
                </div>
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <FileText className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                </div>
              </div>
            </Card>

          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sales Chart - Larger */}
            <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30">
              <h3 className="text-lg font-semibold text-amber-100 mb-6">Sales Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(217,166,71,0.1)" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#d4af37"
                    tick={{ fill: "#f5f1e8", opacity: 0.6 }}
                    axisLine={{ stroke: "rgba(217,166,71,0.2)" }}
                  />
                  <YAxis 
                    stroke="#d4af37"
                    tick={{ fill: "#f5f1e8", opacity: 0.6 }}
                    axisLine={{ stroke: "rgba(217,166,71,0.2)" }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#18181b",
                      border: "1px solid rgba(217,166,71,0.3)",
                      borderRadius: "8px",
                      color: "#f5f1e8"
                    }}
                    cursor={{ fill: "rgba(217,166,71,0.1)" }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="url(#colorGradient)"
                    radius={[8, 8, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30">
              <h3 className="text-lg font-semibold text-amber-100 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-500/5 transition-colors">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-amber-100 truncate">{activity.text}</p>
                    </div>
                    <span className="text-amber-100/40 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Popular Themes Pie Chart */}
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
                        backgroundColor: "#18181b",
                        border: "1px solid rgba(217,166,71,0.3)",
                        borderRadius: "8px",
                        color: "#f5f1e8"
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Legend */}
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

          </div>

        </main>

      </div>

    </div>
  )
}