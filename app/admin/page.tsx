"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Edit2, Trash2, Eye, Settings } from "lucide-react"

const dashboardData = [
  { month: "Jan", invitations: 120, guests: 2400, rsvp: 1800 },
  { month: "Feb", invitations: 150, guests: 2800, rsvp: 2100 },
  { month: "Mar", invitations: 180, guests: 3200, rsvp: 2600 },
  { month: "Apr", invitations: 220, guests: 3800, rsvp: 3100 },
  { month: "May", invitations: 280, guests: 4200, rsvp: 3600 },
  { month: "Jun", invitations: 320, guests: 4800, rsvp: 4200 },
]

const recentInvitations = [
  { id: 1, name: "Sarah & John", theme: "Jawa Elegan", status: "Active", guests: 150, rsvp: 120 },
  { id: 2, name: "Emma & Michael", theme: "Modern Sakura", status: "Active", guests: 200, rsvp: 165 },
  { id: 3, name: "Lisa & David", theme: "Tropical Bali", status: "Draft", guests: 180, rsvp: 0 },
  { id: 4, name: "Jessica & James", theme: "Jawa Elegan", status: "Active", guests: 120, rsvp: 98 },
  { id: 5, name: "Amanda & Chris", theme: "Modern Sakura", status: "Completed", guests: 160, rsvp: 160 },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-amber-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-amber-900">RdMoment Admin</h1>
              <p className="text-sm text-amber-700">Manage your wedding invitations</p>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Invitation
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-amber-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {["overview", "invitations", "templates", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent text-gray-600 hover:text-amber-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <Card className="border-amber-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Invitations</p>
                    <p className="text-3xl font-bold text-amber-900">1,270</p>
                  </div>
                  <div className="text-4xl text-amber-200">📧</div>
                </div>
              </Card>
              <Card className="border-amber-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Guests</p>
                    <p className="text-3xl font-bold text-amber-900">24,500</p>
                  </div>
                  <div className="text-4xl text-amber-200">👥</div>
                </div>
              </Card>
              <Card className="border-amber-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">RSVP Rate</p>
                    <p className="text-3xl font-bold text-amber-900">87%</p>
                  </div>
                  <div className="text-4xl text-amber-200">✓</div>
                </div>
              </Card>
              <Card className="border-amber-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Events</p>
                    <p className="text-3xl font-bold text-amber-900">42</p>
                  </div>
                  <div className="text-4xl text-amber-200">🎉</div>
                </div>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-amber-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-amber-900">Invitations & RSVPs</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fcd34d" />
                    <XAxis dataKey="month" stroke="#92400e" />
                    <YAxis stroke="#92400e" />
                    <Tooltip contentStyle={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d" }} />
                    <Legend />
                    <Bar dataKey="invitations" fill="#b45309" />
                    <Bar dataKey="rsvp" fill="#d97706" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="border-amber-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-amber-900">Guest Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dashboardData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fcd34d" />
                    <XAxis dataKey="month" stroke="#92400e" />
                    <YAxis stroke="#92400e" />
                    <Tooltip contentStyle={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d" }} />
                    <Legend />
                    <Line type="monotone" dataKey="guests" stroke="#b45309" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Recent Invitations */}
            <Card className="border-amber-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-amber-900">Recent Invitations</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Couple Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Theme</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Guests</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">RSVP</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvitations.map((invitation) => (
                      <tr key={invitation.id} className="border-b border-amber-100 hover:bg-amber-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{invitation.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{invitation.theme}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              invitation.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : invitation.status === "Draft"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {invitation.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{invitation.guests}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{invitation.rsvp}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex gap-2">
                            <button className="p-1 hover:bg-amber-100 rounded transition-colors">
                              <Eye className="h-4 w-4 text-amber-600" />
                            </button>
                            <button className="p-1 hover:bg-amber-100 rounded transition-colors">
                              <Edit2 className="h-4 w-4 text-amber-600" />
                            </button>
                            <button className="p-1 hover:bg-red-100 rounded transition-colors">
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "invitations" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-900">All Invitations</h2>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Create New
              </Button>
            </div>
            <Card className="border-amber-200 bg-white p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recentInvitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="border border-amber-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-semibold text-amber-900">{invitation.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{invitation.theme}</p>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-gray-600">{invitation.guests} guests</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          invitation.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : invitation.status === "Draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {invitation.status}
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-900">Template Management</h2>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Create Template
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Jawa Elegan", "Modern Sakura", "Tropical Bali", "Minimalist", "Vintage Gold", "Contemporary"].map(
                (template) => (
                  <Card
                    key={template}
                    className="border-amber-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <span className="text-amber-900 font-semibold">{template}</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-amber-900">{template}</h4>
                      <p className="text-sm text-gray-600 mt-1">Premium template</p>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Settings className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                ),
              )}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-900">Settings</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-amber-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      defaultValue="admin@rdmoment.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      defaultValue="RdMoment"
                    />
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Save Changes</Button>
                </div>
              </Card>

              <Card className="border-amber-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-amber-300" />
                    <span className="text-sm text-gray-700">Email notifications for new RSVPs</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-amber-300" />
                    <span className="text-sm text-gray-700">Weekly summary reports</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-amber-300" />
                    <span className="text-sm text-gray-700">Marketing emails</span>
                  </label>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
