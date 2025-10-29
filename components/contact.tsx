'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-amber-100 mb-6 tracking-wide">
            Hubungi Kami
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-amber-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 p-8 rounded-2xl">
            <h3 className="font-serif text-2xl text-amber-400 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-light text-amber-100/80">Nama Lengkap</Label>
                <Input id="name" placeholder="Nama Anda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-light text-amber-100/80">Alamat Email</Label>
                <Input id="email" type="email" placeholder="email@anda.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-light text-amber-100/80">Pesan Anda</Label>
                <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." rows={5} />
              </div>
              <Button size="lg" className="w-full h-12 font-semibold tracking-wide transition-all duration-300 hover:scale-105 bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25">
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 pt-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-100">Email</h4>
                <p className="text-amber-100/60">Sapa kami kapan saja.</p>
                <a href="mailto:halo@rdmoment.com" className="text-amber-400 hover:underline">halo@rdmoment.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-100">Telepon / WhatsApp</h4>
                <p className="text-amber-100/60">Tersedia di jam kerja (9-5 WIB).</p>
                <a href="tel:+6281234567890" className="text-amber-400 hover:underline">+62 812-3456-7890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-amber-100">Alamat</h4>
                <p className="text-amber-100/60">Jl. Jend. Sudirman No. 5, Jakarta Selatan, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
