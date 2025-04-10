// app/admin/layout.tsx
import React from 'react'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Rumba Admin</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="block hover:text-pink-400">Dashboard</Link>
          <Link href="/admin/bookings" className="block hover:text-pink-400">Bookings</Link>
          <Link href="/admin/calendar" className="block hover:text-pink-400">Calendar</Link>
          <Link href="/admin/settings" className="block hover:text-pink-400">Settings</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <button className="text-sm text-gray-600 underline hover:text-pink-600">
            Log Out
          </button>
        </div>

        {children}
      </main>
    </div>
  )
}