'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('ID');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Fitur' },
    { href: '#themes', label: 'Tema' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-amber-900/20'
            : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-0 group"
            aria-label="RdMoment Home"
          >
            <Image src="/Logo.png" alt="RdMoment Logo" width={80} height={21} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light tracking-wide text-amber-100/80 transition-colors hover:text-amber-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="w-px h-6 bg-amber-200/20" />
            <div className="flex items-center gap-2">
              <Link
                href="/templates/create"
                className="text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 transition-colors px-5 py-2 rounded-full shadow-lg shadow-amber-500/20"
              >
                Buat Undangan
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-[1.2rem] w-[1.2rem] text-amber-100/80" />
                    <span className="sr-only">Pengaturan Pengguna</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-950 border-amber-900/30 text-amber-100">
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Globe className="mr-2 h-4 w-4" />
                      <span>Ganti Bahasa</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-zinc-950 border-amber-900/30 text-amber-100">
                        <DropdownMenuItem onClick={() => setLanguage('ID')}>
                          Bahasa Indonesia
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage('EN')}>
                          English
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-100/80 hover:text-amber-400 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-900/20 md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-light text-amber-100/80 hover:text-amber-400 hover:bg-amber-900/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-amber-200/10 flex flex-col gap-4">
              <Link
                href="/login"
                className="w-full block text-center text-sm font-light text-amber-100/80 transition-colors hover:text-amber-400 px-5 py-3 rounded-full hover:bg-amber-500/10"
              >
                Login
              </Link>
              <Link
                href="/templates/create"
                className="w-full block text-center text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 transition-colors px-5 py-3 rounded-full shadow-lg shadow-amber-500/20"
              >
                Buat Undangan
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}