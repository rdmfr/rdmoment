"use client"

import { Card } from "@/components/ui/card"
import CustomizationPanel from "./customization-panel"

interface TemplatePreviewProps {
  templateData: any
}

export default function TemplatePreview({ templateData }: TemplatePreviewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  const fontClass = templateData.fontStyle === 'serif' ? 'font-serif' : 'font-sans'

  return (
    <div className="w-full">
      <div className="sticky top-28">
        <h3 className="font-serif text-2xl text-amber-100 mb-4">Pratinjau Langsung</h3>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                {/* Dynamic Preview Content */}
                <div
                  className={`w-full h-full flex flex-col text-center overflow-y-auto p-6 ${fontClass}`}
                  style={{ 
                    backgroundColor: templateData.accentColor,
                    color: templateData.secondaryColor,
                  }}
                >
                  <p className="text-xs tracking-widest uppercase" style={{ color: templateData.primaryColor }}>Anda Diundang</p>
                  <p className="mt-4 text-sm">Untuk merayakan pernikahan</p>
                  
                  <div className="my-6">
                    <h1 className="text-4xl leading-tight" style={{ color: templateData.primaryColor }}>
                      {templateData.coupleNames || "Pengantin Pria & Wanita"}
                    </h1>
                  </div>

                  <div className="w-full h-px my-4" style={{backgroundColor: templateData.primaryColor, opacity: 0.3}} />

                  <div className="space-y-2 text-sm">
                    <p className="font-semibold" style={{ color: templateData.primaryColor }}>{formatDate(templateData.eventDate)}</p>
                    <p>Pukul {templateData.eventTime || "18:00"} WIB</p>
                    <p className="pt-2 font-semibold">{templateData.venue || "Grand Ballroom"}</p>
                    <p className="text-xs px-4">{templateData.venueAddress || "Jl. Pernikahan No. 123, Jakarta"}</p>
                  </div>

                  {templateData.includeGuestbook && (
                    <div className="mt-auto pt-6">
                      <button className="w-full py-2 text-xs rounded-full" style={{ backgroundColor: templateData.primaryColor, color: templateData.accentColor }}>Buku Tamu</button>
                    </div>
                  )}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
