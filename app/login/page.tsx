'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black p-4">
      {/* Background elements from hero section for consistency */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 50V0h50v50z' fill='none'/%3E%3Cpath d='M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 40C16.7 40 10 33.3 10 25S16.7 10 25 10s15 6.7 15 15-6.7 15-15 15z' fill='%23d4af37'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23p)'/%3E%3C/svg%3E")`, backgroundSize: '100px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-900/30 shadow-2xl shadow-amber-500/10">
          <CardHeader className="text-center">
            <Link href="/" className="inline-block mx-auto mb-4">
              <Image src="/Logo.png" alt="RdMoment Logo" width={100} height={26} />
            </Link>
            <CardTitle className="font-serif text-3xl text-amber-100">Selamat Datang Kembali</CardTitle>
            <CardDescription className="text-amber-100/60">Masuk ke akun admin Anda untuk mengelola website.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-light text-amber-100/80">Email</Label>
              <Input id="email" type="email" placeholder="admin@rdmoment.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-light text-amber-100/80">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
                <Link href="#" className="text-xs text-amber-400 hover:underline">
                    Lupa Password?
                </Link>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 font-semibold tracking-wide transition-all duration-300 hover:scale-105 bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25">
              Login
            </Button>
             <div className="text-center mt-4">
                <Link href="/" className="text-xs text-amber-100/60 hover:text-amber-400 transition-colors">
                    Kembali ke Halaman Utama
                </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
