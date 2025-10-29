import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "RdMoment. - Premium Digital Wedding Invitations",
  description:
    "Celebrate your love story with culturally-inspired digital wedding invitations blending tradition and modern artistry.",
  keywords: ["wedding invitation", "digital invitation", "undangan pernikahan", "undangan digital", "wedding card"],
  authors: [{ name: "RdMoment" }],
  openGraph: {
    title: "RdMoment. - Premium Digital Wedding Invitations",
    description: "Celebrate Love, Honor Culture. Discover bespoke digital invitations.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`dark ${playfairDisplay.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              color-scheme: dark;
            }
          `
        }} />
      </head>
      <body className="font-sans antialiased min-h-screen" style={{
        backgroundColor: '#000000',
        color: '#f5f1e8'
      }}> 
        <div className="relative min-h-screen">
          
          {/* Subtle Background Pattern */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Radial gradients for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,166,71,0.03),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,166,71,0.02),transparent_50%)]" />
            
            {/* Noise texture for premium feel */}
            <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
        
        <Analytics />
      </body>
    </html>
  )
}