import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import ChatShowcase from "@/components/chat-showcase"
import Testimonials from "@/components/testimonials"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-gradient-to-r from-blue-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-stars-pattern bg-cover opacity-50">
      <HeroSection />
      <HowItWorks />
      <ChatShowcase />
      <Testimonials />
      <CtaSection />
      </div>
    </main>
  )
}


// <div className="relative h-screen w-full bg-gradient-to-r from-blue-900 via-black to-gray-900">
//   <div className="absolute inset-0 bg-stars-pattern bg-cover opacity-50"></div>
//   <h1 className="text-white text-4xl text-center mt-20">Hello, Beautiful Background!</h1>
// </div>
