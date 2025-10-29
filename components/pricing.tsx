'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Silver',
    price: 'Rp 150.000',
    description: 'Paket dasar untuk memulai undangan digital Anda.',
    features: [
      'Desain dari semua template',
      'Hitung mundur acara',
      'Detail acara & pasangan',
      'Galeri foto (hingga 10 foto)',
      'Buku tamu digital',
    ],
    isPopular: false,
  },
  {
    name: 'Gold',
    price: 'Rp 250.000',
    description: 'Fitur lebih lengkap untuk pengalaman yang lebih kaya.',
    features: [
      'Semua fitur paket Silver',
      'Galeri foto (hingga 50 foto)',
      'Video background & musik',
      'Amplop digital (integrasi e-wallet)',
      'RSVP (Konfirmasi kehadiran tamu)',
    ],
    isPopular: true,
  },
  {
    name: 'Platinum',
    price: 'Rp 400.000',
    description: 'Solusi lengkap untuk pernikahan paling berkesan.',
    features: [
      'Semua fitur paket Gold',
      'Custom domain (.com, .wedding)',
      'Live streaming integration',
      'Tanpa watermark RdMoment',
      'Prioritas dukungan pelanggan',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-24 px-6 sm:px-8 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-amber-100 mb-6 tracking-wide">
            Pilih Paket Terbaik Anda
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-amber-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Solusi fleksibel yang dirancang untuk setiap kebutuhan di hari bahagia Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`bg-gradient-to-br from-zinc-900 to-black border-2 transition-all duration-300 ${tier.isPopular ? 'border-amber-500 shadow-2xl shadow-amber-500/20' : 'border-amber-900/30 hover:border-amber-500/40'}`}
            >
              <CardHeader className="p-8">
                {tier.isPopular && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Paling Populer</span>
                  </div>
                )}
                <CardTitle className="font-serif text-3xl text-amber-400 text-center">{tier.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-amber-100 text-center mt-4">{tier.price}</CardDescription>
                <p className="text-center text-amber-100/60 mt-2 h-10">{tier.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-amber-100/80 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8">
                <Button size="lg" className={`w-full h-12 font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${tier.isPopular ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25' : 'bg-transparent border-2 border-amber-500/60 text-amber-100 hover:bg-amber-500/10 hover:border-amber-400'}`}>
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
