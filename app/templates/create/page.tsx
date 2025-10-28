"use client"

import { useState } from "react"
import TemplateBuilder from "@/components/template-builder"
import TemplatePreview from "@/components/template-preview"

export default function CreateTemplatePage() {
  const [templateData, setTemplateData] = useState({
    name: "My Wedding Invitation",
    theme: "jawa-elegan",
    coupleNames: "Bride & Groom",
    eventDate: "2025-06-15",
    eventTime: "18:00",
    venue: "Grand Ballroom",
    venueAddress: "123 Wedding Street, City",
    primaryColor: "#D4AF37",
    secondaryColor: "#2C1810",
    accentColor: "#F5E6D3",
    fontStyle: "serif",
    includeGuestbook: true,
    includeRSVP: true,
    includeRegistry: false,
  })

  return (
    <main className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Builder Panel */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <TemplateBuilder templateData={templateData} setTemplateData={setTemplateData} />
        </div>

        {/* Preview Panel */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <TemplatePreview templateData={templateData} />
        </div>
      </div>
    </main>
  )
}
