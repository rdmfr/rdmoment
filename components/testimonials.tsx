import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Arjun",
    location: "New Delhi, India",
    text: "RdMoment made our wedding invitation so personal and beautiful. Our guests loved the interactive guestbook feature!",
    rating: 5,
  },
  {
    name: "Yuki & Takeshi",
    location: "Tokyo, Japan",
    text: "The Sakura theme perfectly captured our cultural heritage. The customization options were endless and so intuitive.",
    rating: 5,
  },
  {
    name: "Siti & Budi",
    location: "Bali, Indonesia",
    text: "We combined the Jawa Elegan theme with our own photos and music. It felt like a true reflection of our love story.",
    rating: 5,
  },
  {
    name: "Maria & Carlos",
    location: "Barcelona, Spain",
    text: "The ease of sharing via QR code and social media made it so convenient for our international guests.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Love Stories</h2>
          <p className="text-lg text-muted-foreground">Hear from couples who celebrated their love with RdMoment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-lg border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
