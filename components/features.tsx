import { Heart, Palette, Users, Music, Gift, Share2 } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Live Customization",
    description: "Edit colors, fonts, and layouts in real-time with our intuitive visual editor.",
  },
  {
    icon: Heart,
    title: "Cultural Themes",
    description: "Choose from 50+ culturally-inspired themes celebrating traditions worldwide.",
  },
  {
    icon: Users,
    title: "Interactive Guestbook",
    description: "Let guests leave wishes and messages directly on your invitation.",
  },
  {
    icon: Music,
    title: "Music & Media",
    description: "Add your favorite songs, photos, and videos to personalize your invitation.",
  },
  {
    icon: Gift,
    title: "Gift Registry",
    description: "Seamlessly integrate gift registries and manage RSVPs in one place.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share via link, QR code, or social media with one click.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Everything You Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your wedding invitation unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
