"use client"

import { useState } from "react"
import TemplateBuilder from "@/components/template-builder"
import TemplatePreview from "@/components/template-preview"

export default function CreateTemplatePage() {
  const [templateData, setTemplateData] = useState({
    name: "My Wedding Invitation",
    theme: "jawa-elegan",
    coupleNames: "Pengantin Pria & Wanita",
    eventDate: "2025-10-26",
    eventTime: "18:00",
    venue: "Grand Ballroom",
    venueAddress: "Jl. Pernikahan No. 123, Jakarta",
    primaryColor: "#D4AF37",
    secondaryColor: "#2C1810",
    accentColor: "#F5E6D3",
    fontStyle: "serif",
    includeGuestbook: true,
    includeRSVP: true,
    includeRegistry: false,
  })

  return (
    <div className="min-h-screen bg-black">
      <CreateHeader />
      <main className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Builder Panel */}
          <div className="lg:sticky top-28">
            <TemplateBuilder templateData={templateData} setTemplateData={setTemplateData} />
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky top-28">
            <TemplatePreview templateData={templateData} />
          </div>
        </div>
      </main>
    </div>
  )
}
