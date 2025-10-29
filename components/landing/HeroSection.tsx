// File: components/landing/HeroSection.tsx

import React from "react";
import { Button } from "@/components/ui/button"; // Impor Tombol shadcn/ui
import Link from "next/link";

/**
 * Komponen HeroSection untuk landing page RdMoment.
 * Menggunakan palet Black & Gold dari globals.css
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background text-center">
      {/* Container Utama: 
        - bg-background (Otomatis jadi #111827 dari globals.css)
      */}
      
      {/* [OPSIONAL] Pola Emas di Latar Belakang */}
      {/* Ganti '/images/gold-pattern.svg' dengan path ke aset Anda */}
      {/*
      <div
        className="absolute inset-0 z-0 bg-[url('/images/gold-pattern.svg')] 
                   bg-cover bg-center opacity-10"
      />
      */}

      <div className="z-10 flex flex-col items-center p-8">
        
        {/* Judul: 
          - font-serif (Jadi Playfair Display dari layout.tsx)
          - text-primary (Jadi Emas #D4AF37 dari globals.css)
        */}
        <h1 className="mb-4 max-w-4xl font-serif text-5xl font-bold text-primary md:text-7xl">
          Celebrate Love, Honor Culture.
        </h1>

        {/* Subteks: 
          - font-sans (Jadi Geist dari layout.tsx)
          - text-foreground (Jadi Putih Pucat #F3F4F6 dari globals.css)
        */}
        <p className="mb-8 max-w-2xl font-sans text-lg text-foreground/90 md:text-xl">
          Temukan undangan digital premium yang memadukan desain modern
          dengan kekayaan tradisi Indonesia.
        </p>

        {/* Tombol CTA: 
          - Menggunakan komponen <Button> dari shadcn/ui.
          - Otomatis berwarna Emas (karena --primary)
          - variant="outline" otomatis border Emas (karena --ring)
        */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/themes">Lihat Tema</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/order">Pesan Sekarang</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;