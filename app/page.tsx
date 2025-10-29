import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Themes from '@/components/themes';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import CTA from '@/components/cta';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AnimateOnScroll from '@/components/util/AnimateOnScroll';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <Features />
      </AnimateOnScroll>
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <Themes />
      </AnimateOnScroll>
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <Pricing />
      </AnimateOnScroll>
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <CTA />
      </AnimateOnScroll>
      <AnimateOnScroll animationClassName="animate-slide-up-fade">
        <Contact />
      </AnimateOnScroll>
      <Footer />
    </main>
  );
}