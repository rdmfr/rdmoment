// File: app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"; // <-- 1. IMPORT FONT SERIF
import { cn } from "@/lib/utils"; // Pastikan path ini benar

// 2. Konfigurasi font Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Ini akan menyambung ke CSS kita
  weight: ["700", "900"], // Ambil bobot tebal untuk judul
  display: "swap",
});

export const metadata: Metadata = {
  title: "RdMoment. - Undangan Digital Premium",
  description: "Celebrate Love, Honor Culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /* 3. TAMBAHKAN VARIABEL FONT DI SINI */
      className={cn(
        "dark", // Kita set 'dark' sebagai default di <html>
        GeistSans.variable,
        GeistMono.variable,
        playfair.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}