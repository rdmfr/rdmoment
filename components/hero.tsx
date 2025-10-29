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
              relative w-[300px] h-[450px] sm:w-[340px] sm:h-[510px] md:w-[380px] md:h-[570px] lg:w-[420px] lg:h-[630px]
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
              
              <Image
                src="/elegant-javanese-wedding-invitation.jpg"
                alt="Contoh Undangan Pernikahan Jawa Elegan"
                fill
                className="object-cover"
                priority
              />
              
              {/* Edge highlight */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-500/20 pointer-events-none" />
            </div>

            {/* Light streak effect */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-400/10 to-transparent blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* JUDUL UTAMA */}
        <h1 className="mb-6 max-w-5xl text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-amber-100 leading-tight tracking-wide">
          Rayakan Cinta, Lestarikan Budaya.
        </h1>

        {/* SUB-JUDUL */}
        <p className="mb-12 max-w-3xl text-center font-light text-base md:text-lg lg:text-xl text-amber-100/60 tracking-wide leading-relaxed">
          Temukan undangan digital eksklusif yang dirancang dengan sentuhan tradisi dan seni modern.
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
            <Link href="#harga">Pesan Sekarang</Link>
          </Button>

        </div>
      </div>
    </section>
  )
}

export default Hero