import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Arjun",
    location: "New Delhi, India",
    text: "RdMoment membuat undangan pernikahan kami sangat personal dan indah. Tamu-tamu kami sangat menyukai fitur buku tamu interaktif!",
    rating: 5,
  },
  {
    name: "Yuki & Takeshi",
    location: "Tokyo, Japan",
    text: "Tema Sakura sempurna menangkap warisan budaya kami. Opsi kustomisasi tidak terbatas dan sangat intuitif.",
    rating: 5,
  },
  {
    name: "Siti & Budi",
    location: "Bali, Indonesia",
    text: "Kami menggabungkan tema Jawa Elegan dengan foto dan musik kami sendiri. Terasa seperti cerminan sejati dari kisah cinta kami.",
    rating: 5,
  },
  {
    name: "Maria & Carlos",
    location: "Barcelona, Spain",
    text: "Kemudahan berbagi via QR code dan media sosial sangat memudahkan untuk tamu internasional kami.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 sm:px-8 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-amber-100 mb-6 tracking-wide">
            Kisah Cinta Mereka
          </h2>
          <p className="text-base md:text-lg text-amber-100/60 max-w-2xl mx-auto font-light leading-relaxed">
            Dengarkan dari pasangan yang merayakan cinta mereka bersama RdMoment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border-2 border-amber-900/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 hover:border-amber-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-amber-500" strokeWidth={1.5} />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-500 text-amber-500 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-amber-100/80 mb-8 leading-relaxed font-light text-base group-hover:text-amber-100/90 transition-colors duration-300">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="relative pt-6 border-t border-amber-900/20 group-hover:border-amber-500/30 transition-colors duration-500">
                <p className="font-semibold text-lg text-amber-100 mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-amber-100/50 font-light">
                  {testimonial.location}
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-900/10 rounded-tl-2xl group-hover:border-amber-500/30 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-900/10 rounded-br-2xl group-hover:border-amber-500/30 transition-colors duration-500" />

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/30" />
            <div className="w-2 h-2 rounded-full bg-amber-500/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}