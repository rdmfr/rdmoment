"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

interface TemplateBuilderProps {
  templateData: any
  setTemplateData: (data: any) => void
}

export default function TemplateBuilder({ templateData, setTemplateData }: TemplateBuilderProps) {
  const handleChange = (field: string, value: any) => {
    setTemplateData({ ...templateData, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Customize Your Invitation</h2>
        <p className="text-muted-foreground">Edit the details and see the preview update in real-time</p>
      </div>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Enter the couple's names and event details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="coupleNames">Couple Names</Label>
            <Input
              id="coupleNames"
              value={templateData.coupleNames}
              onChange={(e) => handleChange("coupleNames", e.target.value)}
              placeholder="Bride & Groom"
              className="mt-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventDate">Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                value={templateData.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="eventTime">Event Time</Label>
              <Input
                id="eventTime"
                type="time"
                value={templateData.eventTime}
                onChange={(e) => handleChange("eventTime", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="venue">Venue Name</Label>
            <Input
              id="venue"
              value={templateData.venue}
              onChange={(e) => handleChange("venue", e.target.value)}
              placeholder="Grand Ballroom"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="venueAddress">Venue Address</Label>
            <Textarea
              id="venueAddress"
              value={templateData.venueAddress}
              onChange={(e) => handleChange("venueAddress", e.target.value)}
              placeholder="123 Wedding Street, City"
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Design Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Design Settings</CardTitle>
          <CardDescription>Customize colors and typography</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="primaryColor"
                  type="color"
                  value={templateData.primaryColor}
                  onChange={(e) => handleChange("primaryColor", e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer border border-border"
                />
                <span className="text-sm text-muted-foreground">{templateData.primaryColor}</span>
              </div>
            </div>
            <div>
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="secondaryColor"
                  type="color"
                  value={templateData.secondaryColor}
                  onChange={(e) => handleChange("secondaryColor", e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer border border-border"
                />
                <span className="text-sm text-muted-foreground">{templateData.secondaryColor}</span>
              </div>
            </div>
            <div>
              <Label htmlFor="accentColor">Accent Color</Label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="accentColor"
                  type="color"
                  value={templateData.accentColor}
                  onChange={(e) => handleChange("accentColor", e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer border border-border"
                />
                <span className="text-sm text-muted-foreground">{templateData.accentColor}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Enable or disable invitation features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="includeGuestbook">Interactive Guestbook</Label>
            <Switch
              id="includeGuestbook"
              checked={templateData.includeGuestbook}
              onCheckedChange={(checked) => handleChange("includeGuestbook", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="includeRSVP">RSVP Form</Label>
            <Switch
              id="includeRSVP"
              checked={templateData.includeRSVP}
              onCheckedChange={(checked) => handleChange("includeRSVP", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="includeRegistry">Gift Registry</Label>
            <Switch
              id="includeRegistry"
              checked={templateData.includeRegistry}
              onCheckedChange={(checked) => handleChange("includeRegistry", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          Save Template
        </button>
        <button className="flex-1 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
          Preview
        </button>
      </div>
    </div>
  )
}
