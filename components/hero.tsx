'use client';

import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const carouselSlides = [
  { src: '/elegant-javanese-wedding-invitation.jpg', alt: 'Contoh Undangan Pernikahan Jawa Elegan' },
  { src: '/modern-japanese-cherry-blossom-invitation.jpg', alt: 'Contoh Undangan Pernikahan Jepang Modern' },
  { src: '/tropical-balinese-wedding-invitation.jpg', alt: 'Contoh Undangan Pernikahan Bali Tropis' },
];

// Base64 encoded subtle batik pattern SVG
const batikPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50V0h50v50z' fill='none'/%3E%3Cpath d='M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 40C16.7 40 10 33.3 10 25S16.7 10 25 10s15 6.7 15 15-6.7 15-15 15z' fill='%23d4af37'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23p)'/%3E%3C/svg%3E")`;

const Hero: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-4">
      {/* Batik Background Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: batikPattern, backgroundSize: '100px' }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Carousel at the top */}
        <div className="w-full max-w-xl mb-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {carouselSlides.map((slide, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="p-1 w-[280px]">
                    <Card className="border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 bg-zinc-900 overflow-hidden">
                      <CardContent className="relative aspect-[3/4] p-0">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Text Content Below */}
        <div className="text-center">
          <h1 className="mb-6 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 leading-tight tracking-tight">
            Rayakan Cinta, Lestarikan Budaya.
          </h1>
          <p className="mb-12 max-w-2xl mx-auto font-light text-base md:text-lg text-amber-100/70 leading-relaxed">
            Temukan undangan digital eksklusif yang dirancang dengan sentuhan
            tradisi dan seni modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" className="min-w-[180px] h-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 text-black font-semibold tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border-0 transition-all duration-300 hover:scale-105">
              <Link href="#themes">Lihat Tema</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[180px] h-12 bg-transparent border-2 border-amber-500/60 text-amber-100 hover:bg-amber-500/10 hover:border-amber-400 font-semibold tracking-wide transition-all duration-300 hover:scale-105">
              <Link href="#harga">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;