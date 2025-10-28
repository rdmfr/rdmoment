"use client"

import React from "react"

export default function CustomizationPanel() {
  return (
    <aside className="customization-panel">
      <h3 className="font-semibold text-lg mb-2">Customization Controls</h3>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2">Theme & Layout</div>
          <div className="bg-background/40 px-3 py-2 rounded-md">Theme: <strong className="ml-2">Classic Gold</strong></div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2">Accent Color</div>
          <div className="flex gap-2">
            <button className="w-7 h-7 rounded-sm" style={{background: 'var(--gold-5)'}} />
            <button className="w-7 h-7 rounded-sm" style={{background: 'var(--gold-4)'}} />
            <button className="w-7 h-7 rounded-sm" style={{background: 'var(--gold-3)'}} />
            <button className="w-7 h-7 rounded-sm" style={{background: 'var(--gold-2)'}} />
            <button className="w-7 h-7 rounded-sm" style={{background: 'var(--gold-1)'}} />
          </div>
        </div>

        <div>
          <label className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">Background Pattern</span>
            <input type="checkbox" defaultChecked />
          </label>
        </div>

        <div>
          <button className="w-full py-3 rounded-md btn-gold font-semibold">Save & Publish</button>
        </div>
      </div>
    </aside>
  )
}
