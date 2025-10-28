import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Ready to Create Your Invitation?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of couples celebrating their love with RdMoment. Start creating your perfect invitation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/invitations"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold text-lg"
          >
            Create Your Invitation
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all font-semibold text-lg"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
