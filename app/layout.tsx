import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RdMoment. - Premium Digital Wedding Invitations',
  description:
    'Celebrate your love story with culturally-inspired digital wedding invitations blending tradition and modern artistry.',
  keywords: [
    'wedding invitation',
    'digital invitation',
    'undangan pernikahan',
    'undangan digital',
    'wedding card',
  ],
  authors: [{ name: 'RdMoment' }],
  openGraph: {
    title: 'RdMoment. - Premium Digital Wedding Invitations',
    description:
      'Celebrate Love, Honor Culture. Discover bespoke digital invitations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`dark ${playfairDisplay.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <div className="relative min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
