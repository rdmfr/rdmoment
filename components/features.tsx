import { Heart, Palette, Users, Music, Gift, Share2 } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Kustomisasi Live",
    description: "Edit warna, font, dan layout secara real-time dengan editor visual yang intuitif.",
  },
  {
    icon: Heart,
    title: "Tema Budaya",
    description: "Pilih dari 50+ tema yang terinspirasi dari tradisi budaya di seluruh dunia.",
  },
  {
    icon: Users,
    title: "Buku Tamu Interaktif",
    description: "Tamu dapat meninggalkan ucapan dan pesan langsung di undangan Anda.",
  },
  {
    icon: Music,
    title: "Musik & Media",
    description: "Tambahkan lagu favorit, foto, dan video untuk personalisasi undangan.",
  },
  {
    icon: Gift,
    title: "Daftar Hadiah",
    description: "Integrasikan gift registry dan kelola RSVP dalam satu tempat.",
  },
  {
    icon: Share2,
    title: "Mudah Dibagikan",
    description: "Bagikan via link, QR code, atau media sosial dengan satu klik.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 sm:px-8 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-amber-100 mb-6 tracking-wide">
            Semua yang Anda Butuhkan
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-amber-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Fitur-fitur powerful yang dirancang untuk membuat undangan pernikahan Anda tak terlupakan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border-2 border-amber-900/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 hover:border-amber-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10"
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-500">
                    <Icon className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-amber-500/20 blur-2xl rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl text-amber-100 mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-amber-100/60 font-light leading-relaxed group-hover:text-amber-100/70 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-900/10 rounded-tr-2xl group-hover:border-amber-500/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-900/10 rounded-bl-2xl group-hover:border-amber-500/30 transition-colors duration-500" />
              </div>
            )
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}