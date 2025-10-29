import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        {/* Decorative sparkles */}
        <div className="absolute top-20 right-20 opacity-20">
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-sm text-amber-100/80 font-light tracking-wide">
            Dipercaya oleh ribuan pasangan
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-amber-100 mb-6 tracking-wide leading-tight">
          Siap Membuat<br />Undangan Anda?
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-amber-100/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Bergabunglah dengan ribuan pasangan yang merayakan cinta mereka bersama RdMoment.<br className="hidden md:block" />
          Mulai buat undangan sempurna Anda hari ini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Primary Button */}
          <Link
            href="/invitations"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 text-black rounded-full font-semibold text-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
          >
            <span>Buat Undangan Anda</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="#themes"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-amber-500/60 hover:bg-amber-500/10 hover:border-amber-400 text-amber-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <span>Lihat Tema</span>
            <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Link>

        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-amber-100/40 text-sm font-light">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Rating 4.9/5</span>
          </div>
          <div className="w-px h-4 bg-amber-500/20" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>10,000+ Pasangan</span>
          </div>
          <div className="w-px h-4 bg-amber-500/20" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Setup dalam 5 menit</span>
          </div>
        </div>

      </div>

      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  )
}