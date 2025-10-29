// File: components/landing/TemplateCard.tsx

import React from 'react';
import Image from 'next/image'; // Gunakan Next Image untuk optimasi
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Impor komponen Card shadcn/ui
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Untuk tag tema

// Definisikan tipe Props untuk TemplateCard
export interface TemplateCardProps {
  id: string;
  name: string;
  previewImageUrl: string; // Path ke gambar preview
  themeTags: string[]; // Contoh: ["Batik", "Klasik", "Jawa"]
  demoUrl: string; // URL ke halaman demo
  orderUrl: string; // URL ke halaman pemesanan
}

/**
 * Komponen Card untuk menampilkan preview tema undangan.
 * Menggunakan styling Black & Gold dari Card shadcn/ui
 * dengan tambahan aksen Emas.
 */
const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  previewImageUrl,
  themeTags,
  demoUrl,
  orderUrl,
}) => {
  return (
    <Card className="flex h-full transform flex-col overflow-hidden border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Card:
        - border-border: Otomatis warna abu #374151
        - hover:border-primary/50: Border Emas transparan saat hover
        - hover:shadow-lg hover:shadow-primary/10: Efek shadow Emas saat hover
      */}
      <CardHeader className="p-0">
        {/* Gambar Preview */}
        <div className="relative aspect-[3/2] w-full">
          {' '}
          {/* Rasio gambar 3:2 */}
          <Image
            src={previewImageUrl}
            alt={`Preview ${name}`}
            fill // Otomatis mengisi div
            className="object-cover" // Memastikan gambar menutupi area
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi Next Image
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        {/* Judul Tema:
          - font-serif: Playfair Display
          - text-primary: Warna Emas
        */}
        <CardTitle className="mb-2 font-serif text-xl text-primary md:text-2xl">
          {name}
        </CardTitle>
        {/* Tag Tema */}
        <div className="mb-4 flex flex-wrap gap-2">
          {themeTags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {' '}
              {/* Badge abu-abu */}
              {tag}
            </Badge>
          ))}
        </div>
        {/* Deskripsi (jika ada) */}
        {/* <CardDescription>Deskripsi singkat tema...</CardDescription> */}
      </CardContent>
      <CardFooter className="flex gap-3 p-4 pt-0">
        {/* Tombol Aksi:
          - variant="outline": Tombol border Emas
          - default (kosong): Tombol Emas solid
        */}
        <Button asChild variant="outline" className="flex-1 font-medium">
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            Lihat Demo
          </Link>
        </Button>
        <Button asChild className="flex-1 font-semibold">
          <Link href={orderUrl}>Pesan</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
