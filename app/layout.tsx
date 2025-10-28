import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "RdMoment. - Premium Digital Wedding Invitations",
  description:
    "Celebrate your love story with culturally-inspired digital wedding invitations blending tradition and technology.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${playfairDisplay.variable} ${poppins.variable}`}>
      <body className={`font-sans antialiased`}> 
        <div className="min-h-screen flex flex-col">
          {/* subtle patterned backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_10%_10%,rgba(199,161,75,0.035),transparent),radial-gradient(circle_at_90%_90%,rgba(120,90,40,0.02),transparent)]" />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
