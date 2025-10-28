"use client"

import { Card } from "@/components/ui/card"
import CustomizationPanel from "./customization-panel"

interface TemplatePreviewProps {
  templateData: any
}

export default function TemplatePreview({ templateData }: TemplatePreviewProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
      <div>
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-bold text-foreground">Live Preview</h2>
          <p className="text-muted-foreground">See how your invitation looks</p>
        </div>
        <CustomizationPanel />
      </div>

      <div className="flex items-start justify-center">
        <div className="phone-mockup">
          <div className="phone-screen">
            {/* Small invitation rendering inside the phone */}
            <div
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
              style={{
                background: `linear-gradient(180deg, ${templateData.primaryColor} 0%, ${templateData.accentColor} 100%)`,
              }}
            >
              <div className="text-sm font-medium" style={{ color: templateData.secondaryColor }}>
                Together with their families
              </div>
              <h1 className="font-serif text-3xl font-bold" style={{ color: templateData.secondaryColor }}>
                {templateData.coupleNames}
              </h1>
              <div className="text-sm" style={{ color: templateData.secondaryColor }}>
                request the honor of your presence at their wedding
              </div>
              <div className="pt-4 space-y-1">
                <div className="font-semibold" style={{ color: templateData.secondaryColor }}>
                  {formatDate(templateData.eventDate)}
                </div>
                <div className="text-sm" style={{ color: templateData.secondaryColor }}>
                  {templateData.eventTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
