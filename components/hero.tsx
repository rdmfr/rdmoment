"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* Background Pattern - Subtle floral pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,166,71,0.1),transparent_50%)]" />
      </div>

      {/* Decorative sparkle bottom right */}
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
          <path
            d="M50 0 L52 48 L100 50 L52 52 L50 100 L48 52 L0 50 L48 48 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pt-32 pb-20 md:pt-40 md:pb-32 w-full max-w-7xl mx-auto">
        
        {/* KARTU UNDANGAN 3D dengan Glow Effect */}
        <div className="group mb-12 md:mb-16 perspective-[1000px]">
          <div 
            className="
              relative w-[300px] h-[450px] sm:w-[340px] sm:h-[510px] md:w-[380px] md:h-[570px]
              transform transition-all duration-700 ease-out
              hover:scale-105
              [transform:perspective(1200px)_rotateY(-8deg)_rotateX(5deg)]
              hover:[transform:perspective(1200px)_rotateY(-2deg)_rotateX(2deg)]
            "
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* Card container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
              
              {/* Placeholder - Ganti dengan gambar undangan asli */}
              <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center space-y-6">
                
                {/* Top decoration */}
                <div className="absolute top-0 left-0 right-0 h-24 flex items-start justify-between p-6">
                  <svg className="w-20 h-20 text-amber-500/40" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L55 30 L75 25 L60 40 L75 55 L55 50 L50 70 L45 50 L25 55 L40 40 L25 25 L45 30 Z" />
                  </svg>
                  <svg className="w-20 h-20 text-amber-500/40" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L55 30 L75 25 L60 40 L75 55 L55 50 L50 70 L45 50 L25 55 L40 40 L25 25 L45 30 Z" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="pt-12">
                  <svg className="w-12 h-12 text-amber-500/60 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L9.5 8.5L3 9l5 4.5L6.5 21L12 17.5L17.5 21L16 13.5L21 9l-6.5-.5L12 2z"/>
                  </svg>
                </div>
                
                <div className="space-y-2">
                  <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase">Wedding Invitation</p>
                </div>
                
                {/* Monogram */}
                <div className="w-28 h-28 rounded-full border-2 border-amber-500/40 flex items-center justify-center">
                  <span className="text-4xl font-serif text-amber-500">AG</span>
                </div>
                
                <h3 className="text-2xl font-serif text-amber-100 tracking-wider">JAWA ELEGAN</h3>
                
                {/* Dates */}
                <div className="flex items-center gap-6 text-xs text-amber-500/70 pt-2">
                  <div className="text-center">
                    <p className="font-light mb-1">Akad Nikah</p>
                    <p className="font-normal">20 • 10 • 24</p>
                  </div>
                  <div className="h-12 w-px bg-amber-500/30" />
                  <div className="text-center">
                    <p className="font-light mb-1">Resepsi</p>
                    <p className="font-normal">20 • 10 • 24</p>
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-between p-6">
                  <svg className="w-20 h-20 text-amber-500/40" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L55 30 L75 25 L60 40 L75 55 L55 50 L50 70 L45 50 L25 55 L40 40 L25 25 L45 30 Z" />
                  </svg>
                  <svg className="w-20 h-20 text-amber-500/40" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L55 30 L75 25 L60 40 L75 55 L55 50 L50 70 L45 50 L25 55 L40 40 L25 25 L45 30 Z" />
                  </svg>
                </div>
              </div>
              
              {/* Edge highlight */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-500/20 pointer-events-none" />
            </div>

            {/* Light streak effect */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-400/10 to-transparent blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* JUDUL UTAMA */}
        <h1 className="mb-6 max-w-5xl text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-amber-100 leading-tight tracking-wide">
          Celebrate Love, Honor Culture.
        </h1>

        {/* SUB-JUDUL */}
        <p className="mb-12 max-w-2xl text-center font-light text-base md:text-lg text-amber-100/60 tracking-wide leading-relaxed">
          Discover bespoke digital invitations crafted with tradition and modern artistry.
        </p>

        {/* TOMBOL CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          
          {/* Tombol Primary - Solid Gold */}
          <Button 
            asChild 
            size="lg" 
            className="
              min-w-[180px] h-12 
              bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 
              hover:from-amber-500 hover:via-amber-400 hover:to-amber-500
              text-black font-semibold tracking-wide
              shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40
              border-0
              transition-all duration-300
              hover:scale-105
            "
          >
            <Link href="#themes">Lihat Tema</Link>
          </Button>

          {/* Tombol Secondary - Outline Gold */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              min-w-[180px] h-12
              bg-transparent
              border-2 border-amber-500/60 
              text-amber-100 
              hover:bg-amber-500/10 hover:border-amber-400
              font-semibold tracking-wide
              transition-all duration-300
              hover:scale-105
            "
          >
            <Link href="#order">Pesan Sekarang</Link>
          </Button>

        </div>
      </div>
    </section>
  )
}

export default Hero