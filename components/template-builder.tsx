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

  const handlePaletteChange = (paletteName: string) => {
    const palette = colorPalettes.find(p => p.name === paletteName);
    if (palette) {
      setTemplateData({ 
        ...templateData, 
        primaryColor: palette.primary,
        secondaryColor: palette.secondary,
        accentColor: palette.accent,
      });
    }
  };

  return (
    <div className="w-full text-amber-100">
      <div className="mb-6">
        <h2 className="font-serif text-3xl font-normal text-amber-100">Atur Undangan Anda</h2>
        <p className="text-amber-100/60 mt-1 font-light">Ubah detail di bawah dan lihat pratinjau di sebelah kanan.</p>
      </div>

      <Tabs defaultValue="konten" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-900/80 border-2 border-amber-900/30 h-12 p-0">
          <TabsTrigger value="konten" className="text-amber-100/70 data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-400 data-[state=active]:shadow-inner data-[state=active]:shadow-black/20 h-full rounded-none">Konten</TabsTrigger>
          <TabsTrigger value="desain" className="text-amber-100/70 data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-400 data-[state=active]:shadow-inner data-[state=active]:shadow-black/20 h-full rounded-none">Desain</TabsTrigger>
          <TabsTrigger value="fitur" className="text-amber-100/70 data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-400 data-[state=active]:shadow-inner data-[state=active]:shadow-black/20 h-full rounded-none">Fitur</TabsTrigger>
        </TabsList>

        <div className="bg-zinc-900/50 border-x-2 border-b-2 border-amber-900/30 rounded-b-lg">
          <TabsContent value="konten" className="p-6">
            <Card className="bg-transparent border-none text-amber-100">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-amber-400 font-semibold">Informasi Dasar</CardTitle>
                <CardDescription className="text-amber-100/60 font-light">Masukkan nama pasangan dan detail acara.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-0">
                <div className="space-y-2">
                  <Label htmlFor="coupleNames" className="font-light">Nama Pasangan</Label>
                  <Input id="coupleNames" value={templateData.coupleNames} onChange={(e) => handleChange("coupleNames", e.target.value)} placeholder="Pengantin Pria & Wanita" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="font-light">Tanggal Acara</Label>
                    <Input id="eventDate" type="date" value={templateData.eventDate} onChange={(e) => handleChange("eventDate", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime" className="font-light">Waktu Acara</Label>
                    <Input id="eventTime" type="time" value={templateData.eventTime} onChange={(e) => handleChange("eventTime", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue" className="font-light">Nama Lokasi</Label>
                  <Input id="venue" value={templateData.venue} onChange={(e) => handleChange("venue", e.target.value)} placeholder="Grand Ballroom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venueAddress" className="font-light">Alamat Lokasi</Label>
                  <Textarea id="venueAddress" value={templateData.venueAddress} onChange={(e) => handleChange("venueAddress", e.target.value)} placeholder="Jl. Pernikahan No. 123, Jakarta" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="desain" className="p-6">
            <Card className="bg-transparent border-none text-amber-100">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-amber-400 font-semibold">Pengaturan Desain</CardTitle>
                <CardDescription className="text-amber-100/60 font-light">Kustomisasi warna dan tipografi undangan Anda.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                <div className="space-y-2">
                  <Label className="font-light">Palet Warna</Label>
                  <Select onValueChange={handlePaletteChange} defaultValue={colorPalettes[0].name}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {colorPalettes.map(p => <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor" className="font-light">Warna Primer</Label>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                      <Input type="color" id="primaryColor" value={templateData.primaryColor} onChange={(e) => handleChange("primaryColor", e.target.value)} className="w-10 h-8 p-0" />
                      <span className="font-mono text-sm">{templateData.primaryColor}</span>
                    </div>
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="secondaryColor" className="font-light">Warna Sekunder</Label>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                      <Input type="color" id="secondaryColor" value={templateData.secondaryColor} onChange={(e) => handleChange("secondaryColor", e.target.value)} className="w-10 h-8 p-0" />
                      <span className="font-mono text-sm">{templateData.secondaryColor}</span>
                    </div>
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="accentColor" className="font-light">Warna Aksen</Label>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                      <Input type="color" id="accentColor" value={templateData.accentColor} onChange={(e) => handleChange("accentColor", e.target.value)} className="w-10 h-8 p-0" />
                      <span className="font-mono text-sm">{templateData.accentColor}</span>
                    </div>
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label className="font-light">Gaya Huruf</Label>
                  <Select onValueChange={(value) => handleChange("fontStyle", value)} defaultValue={templateData.fontStyle}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serif">Serif</SelectItem>
                      <SelectItem value="sans">Sans Serif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fitur" className="p-6">
            <Card className="bg-transparent border-none text-amber-100">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-amber-400 font-semibold">Fitur Interaktif</CardTitle>
                <CardDescription className="text-amber-100/60 font-light">Aktifkan atau non-aktifkan fitur pada undangan.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                  <Label htmlFor="includeGuestbook" className="font-light">Buku Tamu Interaktif</Label>
                  <Switch id="includeGuestbook" checked={templateData.includeGuestbook} onCheckedChange={(c) => handleChange("includeGuestbook", c)} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                  <Label htmlFor="includeRSVP" className="font-light">Formulir RSVP</Label>
                  <Switch id="includeRSVP" checked={templateData.includeRSVP} onCheckedChange={(c) => handleChange("includeRSVP", c)} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border-2 border-amber-900/30">
                  <Label htmlFor="includeRegistry" className="font-light">Daftar Hadiah</Label>
                  <Switch id="includeRegistry" checked={templateData.includeRegistry} onCheckedChange={(c) => handleChange("includeRegistry", c)} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
